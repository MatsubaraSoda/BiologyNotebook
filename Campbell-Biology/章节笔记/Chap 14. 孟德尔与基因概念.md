# 孟德尔与基因概念

## 构成孟德尔模型的四个相关概念

1. Alternative versions of genes account for variations in inherited characters.
2. For each character, an organism inherits two copies (that is, two alleles) of a gene, one from each parent.
3. If the two alleles at a locus differ, then one, the dominant allele, determines the organism's appearance; the other, the recessive allele, has no noticeable effect on the organism's appearance.
4. The two alleles for a heritable character segregate (separate from each other) during gamete formation and end up in different gametes.

----

1. 基因的不同变体（等位基因）决定了遗传性状的多样性。
2. 对于每一个遗传性状，生物体会从双亲处各遗传一个基因拷贝（即两个等位基因）。
3. 当同一基因座上的两个等位基因不同时，决定生物体表现型的是显性等位基因，而隐性等位基因对表现型没有明显影响。
4. 在配子形成过程中，控制同一遗传性状的两个等位基因会彼此分离，并分别进入不同的配子中。

## Punnett Square

庞特图

### Aa x Aa

3:1

![2026-08-20_12-11-45](./assets/2026-08-20_12-11-45.svg)

### AaBb x AaBb

9:3:3:1

![2026-08-20_12-19-11](./assets/2026-08-20_12-19-11.svg)

## 非孟德尔模型

```mermaid
graph LR
    Root["坎贝尔生物学第14章：<br>非标准孟德尔模型"] 
    
    %% 第一大类
    C1["一、 单基因扩展<br>(Single Gene)"]
    N1["不完全显性<br>(Incomplete Dominance)"]
    N2["共显性<br>(Codominance)"]
    N3["复等位基因<br>(Multiple Alleles)"]
    N4["多效性<br>(Pleiotropy)"]
    
    %% 第二大类
    C2["二、 多基因联动<br>(Multiple Genes)"]
    N5["上位效应<br>(Epistasis)"]
    N6["多基因遗传<br>(Polygenic Inheritance)"]
    
    %% 第三大类
    C3["三、 跨出纯基因层面<br>(Nature & Nurture)"]
    N7["多因素性状 / 环境影响<br>(Multifactorial Characters)"]
    
    %% 关系连线
    Root --> C1
    C1 --> N1
    C1 --> N2
    C1 --> N3
    C1 --> N4
    
    Root --> C2
    C2 --> N5
    C2 --> N6
    
    Root --> C3
    C3 --> N7
    
    %% 样式调整，增加层级视觉区分
    style Root fill:#f9f9f9,stroke:#333,stroke-width:2px
    style C1 fill:#d4e6f1,stroke:#2874a6,stroke-width:2px
    style C2 fill:#d5f5e3,stroke:#239b56,stroke-width:2px
    style C3 fill:#fcf3cf,stroke:#b7950b,stroke-width:2px
```



### 不完全显性

金鱼草的花色。

<img src="./assets/snapdragon_punnett.svg" alt="snapdragon_punnett" style="zoom:150%;" />

### 共显性 & 复等位基因

|        基因型        |      红细胞及表面碳水化合物      | 表现型 |
| :------------------: | :------------------------------: | :----: |
| $I^A I^A$ 或 $I^A i$ |  ![a_type](./assets/a_type.svg)  |   A    |
| $I^B I^B$ 或 $I^B i$ |  ![b_type](./assets/b_type.svg)  |   B    |
|      $I^A I^B$       | ![ab_type](./assets/ab_type.svg) |   AB   |
|        $i i$         |  ![o_type](./assets/o_type.svg)  |   O    |

### 多效性

镰刀型细胞贫血症。

![image-20260826181040957](./assets/image-20260826181040957.png)

### 上位性

拉布拉多毛色。

<img src="./assets/labrador_punnett_square.svg" alt="labrador_punnett_square" style="zoom:150%;" />

### 多基因遗传

人类肤色。

> 用于生成图片的 python 源码保存在 png 的 meta 之中。

**三基因座**

![skin_distribution](./assets/skin_distribution.png)

**二十六基因座**

![skin_distribution_26_loci](./assets/skin_distribution_26_loci.png)

### 多因素性状 / 环境影响

绣球花。

![image-20260826181158972](./assets/image-20260826181158972.png)
