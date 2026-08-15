# 光合作用

## 光反应

```mermaid
graph TB
    subgraph "光反应 - Z机制"
        
        subgraph "光系统II (PSII)"
            H2O[2H₂O] -->|光解水| PSII_RC[P680反应中心]
            H2O -->|产生| O2[O₂ ↑]
            H2O -->|产生| H1[4H⁺ 类囊体腔]
            Light1[光子 hν] -->|激发| PSII_RC
            PSII_RC -->|失去电子| PSII_ox[P680⁺ 氧化态]
            PSII_ox -->|从水获得电子| PSII_RC
            PSII_RC -->|高能电子| PQ
        end
        
        subgraph "电子传递链"
            PQ[质体醌 PQ] -->|携带电子和H⁺| Cyt[细胞色素复合物]
            Cyt -->|泵入质子| H2[H⁺ 类囊体腔]
            Cyt -->|传递电子| PC[质体蓝素 PC]
        end
        
        subgraph "光系统I (PSI)"
            PC -->|电子传递| PSI_RC[P700反应中心]
            Light2[光子 hν] -->|再次激发| PSI_RC
            PSI_RC -->|高能电子| Fd[铁氧还蛋白 Fd]
            Fd -->|电子传递| FNR[NADP⁺还原酶]
            FNR -->|还原| NADP_to_NADPH
            NADP[NADP⁺] -->|接受电子| NADP_to_NADPH[NADPH生成]
            NADP_to_NADPH -->|在基质中| NADPH_out[NADPH → 卡尔文循环]
        end
        
        subgraph "ATP合成"
            H1 -.->|建立| Gradient[质子梯度]
            H2 -.->|建立| Gradient
            Gradient -->|高浓度| Lumen[类囊体腔 H⁺]
            Gradient -->|低浓度| Stroma[基质]
            Lumen -->|质子流动| ATPase[ATP合酶]
            ATPase -->|驱动旋转| ATP_synthesis[ADP + Pi → ATP]
            ATP_synthesis -->|在基质中| ATP_out[ATP → 卡尔文循环]
        end
        
    end
    
    style PSII_RC fill:#e1f5ff
    style PSI_RC fill:#e1f5ff
    style O2 fill:#ffebee
    style NADPH_out fill:#e8f5e9
    style ATP_out fill:#e8f5e9
    style Light1 fill:#fff9c4
    style Light2 fill:#fff9c4
    style Gradient fill:#f3e5f5
```

### 太阳光光谱分布

[太阳光光谱分布](../思考/太阳光光谱分布.md) — 叶绿素吸收光谱与地表太阳光能量分布。

## 卡尔文循环

**阶段一：碳固定**

```
RuBP (5C) + CO₂ → 2 × 3-PGA (3C)
```

**阶段二：还原**

步骤一：磷酸化
```
3-PGA + ATP → 1,3-BPG + ADP
```

步骤二：还原
```
1,3-BPG + NADPH + H⁺ → G3P + NADP⁺ + Pi
```

**阶段三：RuBP 再生**
```
5 G3P (15C) + 3 ATP → 3 RuBP (15C) + 3 ADP + 3 Pi
```

```mermaid
graph LR
    subgraph S1["阶段一：碳固定"]
        RuBP["3 RuBP<br/>[15C]"] -->|"+ 3 CO₂ [3C]<br/>RuBisCO"| PGA["6 × 3-PGA<br/>[18C]"]
    end
    
    subgraph S2["阶段二：还原"]
        PGA -->|"步骤1<br/>+ 6 ATP"| BPG["6 × 1,3-BPG<br/>[18C]"]
        BPG -->|"步骤2<br/>+ 6 NADPH"| G3P_pool["6 G3P<br/>[18C]"]
    end
    
    subgraph S3["阶段三：RuBP 再生"]
        G3P_regen["5 G3P<br/>[15C]"] -->|"+ 3 ATP<br/>重排 + 磷酸化"| RuBP_new["3 RuBP<br/>[15C]"]
    end
    
    G3P_pool --> G3P_out["1 G3P 输出<br/>[3C]<br/>→ 葡萄糖"]
    G3P_pool --> G3P_regen
    RuBP_new -.循环.-> RuBP
    
    style G3P_out fill:#fef3c7,stroke:#f59e0b,stroke-width:3px,color:#92400e
    style RuBP fill:#dbeafe,stroke:#3b82f6,stroke-width:3px,color:#1e40af
    style RuBP_new fill:#dbeafe,stroke:#3b82f6,stroke-width:3px,color:#1e40af
    style S1 fill:#f0f9ff,stroke:#0ea5e9,stroke-width:2px,color:#0c4a6e
    style S2 fill:#ecfeff,stroke:#06b6d4,stroke-width:2px,color:#164e63
    style S3 fill:#f0fdfa,stroke:#14b8a6,stroke-width:2px,color:#134e4a
```

### 分子结构平面图

[卡尔文循环分子结构示意图](../思考/卡尔文循环分子结构示意图.md) — 循环中各中间物的分子结构与命名。

