## 烃或烃的衍生物

| 有机物名称 |         分子式          | 官能团  |        表达式        |                 2D 骨架图                 |
| :---: | :------------------: | :--: | :---------------: | :------------------------------------: |
|  乙烷   |     $\ce{C2H6}$      |  -   |         -         | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CC/PNG](./assets/97b4ff26c5798d6fa8f2c96e04a7f4ea.png)  |
|  乙醇   |    $\ce{C2H5OH}$     |  羟基  |    $\ce{-OH}$     | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCO/PNG](./assets/6802e0726ada3fd544a138ad7d21177a.png) |
|  丙醛   |   $\ce{CH3CH2CHO}$   |  羰基  |    $\ce{>C=O}$    | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCC%3DO/PNG](./assets/ce400c43294c03f2c424ca9b1608c99f.png)  |
|  丙酮   |   $\ce{CH3COCH3}$    |  羰基  |    $\ce{>C=O}$    | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CC(%3DO)C/PNG](./assets/05a5caf80333aa556fc06a8cfb874ec9.png)  |
|  乙酸   |    $\ce{CH3COOH}$    |  羧基  |   $\ce{-COOH}$    | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CC(%3DO)O/PNG](./assets/21a1a54a5b6beeb6f485ef6bb11c32ca.png) |
|  乙胺   |   $\ce{CH3CH2NH2}$   |  氨基  |    $\ce{-NH2}$    | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCN/PNG](./assets/f0049b187abf92a0b355d3feebe4b093.png) |
|  乙硫醇  |   $\ce{CH3CH2SH}$    |  巯基  |    $\ce{-SH}$     | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCS/PNG](./assets/e0de11df530fd48dbe5e2d58403b11b5.png) |
| 磷酸乙酯  | $\ce{C2H5OPO3^{2-}}$ | 磷酸基团 | $\ce{-OPO3^{2-}}$ | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCOP(%3DO)(%5BO-%5D)%5BO-%5D/PNG](./assets/2768608108fd4a5c9815c5a673902efd.png) |
|  异丁烷  |     $\ce{C4H10}$     |  甲基  |    $\ce{-CH3}$    | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CC(C)C/PNG](./assets/80ffa58739a38b8911f3dbcb9bb3cc64.png) |

> 命名优先级为：羧 > 醛 > 酮 > 羟 > 巯 > 氨

## 异构体

### 结构异构体

|                 正丁烷                 |                 异丁烷                 |
| :------------------------------------: | :------------------------------------: |
|              $\ce{C4H10}$              |              $\ce{C4H10}$              |
| ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CCCC/PNG](./assets/024a6e8736ba76845b84aba72021fcfe.png) | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/CC(C)C/PNG](./assets/80ffa58739a38b8911f3dbcb9bb3cc64.png) |

### 顺反异构体

|               顺-2-丁烯                |               反-2-丁烯                |
| :------------------------------------: | :------------------------------------: |
|              $\ce{C4H8}$               |              $\ce{C4H8}$               |
| ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/cis-2-butene/PNG](./assets/2338fc4629ef22f3db216bbff622d313.png) | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/trans-2-butene/PNG](./assets/6bdcf9045ab07387be15aadcbc17d95a.png) |

> 注：必须存在**碳碳双键**

### 对映异构体 / **手性异构体**

|                L-丙氨酸                |                D-丙氨酸                |
| :------------------------------------: | :------------------------------------: |
|             $\ce{C3H7NO2}$             |             $\ce{C3H7NO2}$             |
| ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/C%5BC%40%40H%5D(N)C(%3DO)O/PNG](./assets/a8d657420179c9415656e39449b9948c.png) | ![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/C%5BC%40H%5D(N)C(%3DO)O/PNG](./assets/7ae5a508b8c35992c29d558f287c397e.png) |

## Diagram as Code

**PubChem - NIH**

笔记中图片写法：`![来源URL](./assets/{MD5(来源URL)}.png)`。`[]` 保留完整来源链接（溯源）；本地文件名取该 URL 的 MD5（小写十六进制），以避冲突、便于去重；不限 PubChem，其它 DasC 服务同理。

1. 通过 smiles 获取 2D 化学结构图：

```markdown
![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/{SMILES}/PNG](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/{SMILES}/PNG)
```

2. 通过化合物名称获取 2D 化学结构图：

```markdown
![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{名称}/PNG](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/{名称}/PNG)
```

3. 通过化合物 cid 获取 2D 化学结构图：

```markdown
![https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/PNG](https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/PNG)
```

4. 其它

```url
https://pubchem.ncbi.nlm.nih.gov/rest/pug/<domain>/<namespace>/<identifier>/<operation>/<output>
```

   
