---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 46ff36b6d0847234dfdf55f5d6e0b0cc_ecb1cb40c72511f197b3525400248c00
    ReservedCode1: CzpmFBqC8Q83Rd57H28V3iggBcX8HpHnB667pB81N56DM3ZoPKJJRHkcQy/0YFR1YF4w88ipYi4QJyMzx6Vdga6akOP/2KNshS0PB0jCAVi7dB8M/pvxwcMZmBjOO+6WmI8m+uMsJ+LTB670UriVM6JJMX7dzd3QYBrkZJemJzE9HbUZVuaGw3RlSRk=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 46ff36b6d0847234dfdf55f5d6e0b0cc_ecb1cb40c72511f197b3525400248c00
    ReservedCode2: CzpmFBqC8Q83Rd57H28V3iggBcX8HpHnB667pB81N56DM3ZoPKJJRHkcQy/0YFR1YF4w88ipYi4QJyMzx6Vdga6akOP/2KNshS0PB0jCAVi7dB8M/pvxwcMZmBjOO+6WmI8m+uMsJ+LTB670UriVM6JJMX7dzd3QYBrkZJemJzE9HbUZVuaGw3RlSRk=
---

# Yaosheng Technology (Hong Kong) Co., Ltd. - 官网

纯静态产品介绍网站（HTML / CSS / JS），无需后端，可直接部署到任意静态托管平台。

## 文件结构

```
ysteck-website/
├── index.html          # 首页（单页长滚动：Banner + 关于我们 + 产品品类 + 产品图册 + 品牌墙 + 联系方式）
├── css/
│   └── styles.css      # 样式（深蓝+白主色调、商务科技感、响应式）
├── js/
│   └── main.js         # 交互脚本（移动端导航、锚点平滑滚动）
└── README.md           # 本文件
```

## 本地预览

直接双击 `index.html` 用浏览器打开即可预览，或运行：

```
python -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 免费部署到公网（任选其一）

### 方式一：GitHub Pages（推荐）
1. 注册/登录 GitHub，新建仓库（如 `ysteck-website`）
2. 将本项目所有文件上传到仓库（`index.html` 必须在仓库根目录）
3. 仓库 `Settings` → `Pages` → `Source` 选择 `main` 分支 → 保存
4. 等待 1-2 分钟后访问 `https://<用户名>.github.io/ysteck-website/`

### 方式二：Cloudflare Pages
1. 注册/登录 Cloudflare → `Workers & Pages` → `Create application` → `Pages`
2. 选择 `Direct Upload`，将本项目文件直接拖入上传
3. 部署完成后获得 `https://<项目名>.pages.dev` 免费域名

### 方式三：Netlify Drop
1. 打开 `https://app.netlify.com/drop`
2. 将本项目文件夹拖入页面，即可获得免费公网地址

## 上线前需要补充的内容

- 联系方式区块（电话 / 邮箱 / 地址）：编辑 `index.html` 中 `#contact` 区块，替换「待补充」占位符
- 产品图片：将 `产品图册` 中的占位块替换为真实产品图
- 品牌 Logo：可将 `品牌墙` 的文字占位替换为授权 Logo 图片
*（内容由AI生成，仅供参考）*
