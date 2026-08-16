import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const siteRoot = join(dirname(fileURLToPath(import.meta.url)), "..")
const pluginDir = join(siteRoot, ".quartz", "plugins", "obsidian-flavored-markdown")
const srcPath = join(pluginDir, "src", "scripts", "mermaid.inline.ts")

const OLD_CDN = "https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.4.0/mermaid.esm.min.mjs"
const NEW_CDN = "https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.13.0/mermaid.esm.min.mjs"
const CURVE_LINE = '      flowchart: { curve: "basis" },'

if (!existsSync(srcPath)) {
  console.error(`patch-mermaid-version: missing ${srcPath}`)
  console.error("Run `npx quartz plugin install` first.")
  process.exit(1)
}

let source = readFileSync(srcPath, "utf8")
let changed = false

if (source.includes(OLD_CDN)) {
  source = source.replaceAll(OLD_CDN, NEW_CDN)
  changed = true
  console.log("patch-mermaid-version: CDN 11.4.0 -> 11.13.0")
} else if (source.includes(NEW_CDN)) {
  console.log("patch-mermaid-version: CDN already 11.13.0")
} else {
  console.error("patch-mermaid-version: mermaid CDN URL not found")
  process.exit(1)
}

if (!source.includes('curve: "basis"') && !source.includes("curve: 'basis'")) {
  if (!source.includes('securityLevel: "loose",')) {
    console.error('patch-mermaid-version: mermaid.initialize() block not found')
    process.exit(1)
  }
  source = source.replace(
    'securityLevel: "loose",',
    `securityLevel: "loose",\n${CURVE_LINE}`,
  )
  changed = true
  console.log("patch-mermaid-version: set flowchart.curve = basis")
} else {
  console.log("patch-mermaid-version: flowchart.curve already basis")
}

const oldLabelBg = 'edgeLabelBackground: computedStyleMap["--highlight"]'
const newLabelBg = 'edgeLabelBackground: computedStyleMap["--light"]'
if (source.includes(oldLabelBg)) {
  source = source.replaceAll(oldLabelBg, newLabelBg)
  changed = true
  console.log("patch-mermaid-version: edgeLabelBackground --highlight -> --light")
} else if (source.includes(newLabelBg)) {
  console.log("patch-mermaid-version: edgeLabelBackground already --light")
} else {
  console.error("patch-mermaid-version: edgeLabelBackground mapping not found")
  process.exit(1)
}

if (changed) {
  writeFileSync(srcPath, source)
}

console.log("patch-mermaid-version: installing plugin build dependencies")
const install = spawnSync("npm", ["install", "--ignore-scripts"], {
  cwd: pluginDir,
  stdio: "inherit",
  shell: true,
})
if (install.status !== 0) {
  process.exit(install.status ?? 1)
}

console.log("patch-mermaid-version: rebuilding obsidian-flavored-markdown")
const build = spawnSync("npm", ["run", "build"], {
  cwd: pluginDir,
  stdio: "inherit",
  shell: true,
})
if (build.status !== 0) {
  process.exit(build.status ?? 1)
}
console.log("patch-mermaid-version: done")
