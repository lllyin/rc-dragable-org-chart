---
title: rc-dragable-org-chart
hero:
  title: rc-dragable-org-chart
  desc: A simple organization tree component based on react
  actions:
    - text: Get Started →
      link: /guide
features:
  - title: Support
    desc: It‘s based on react framework.
  - title: Features
    desc: Includes horizontal, vertical, expand, expandAll and so on.
  - title: Production-Ready
    desc: Has been published on npm.
footer: MIT Licensed | Copyright © 2020-present<br />Powered by [artdong](https://github.com/artdong)
---

# rc-dragable-org-chart

### 📦 Installation

```
# use npm
npm i rc-dragable-org-chart

# use yarn
yarn add rc-dragable-org-chart
```

### 🔨 Usage

```js
import OrgTree from 'rc-dragable-org-chart';

const horizontal = false; // true：横向  false：纵向
const collapsable = true; // true：可折叠 false：不可折叠
const expandAll = true; // true: 全部展开 false：全部折叠

const data = {
    id: 0,
    label: 'XXX股份有限公司',
    children: [{
        id: 1,
        label: '技术部',
        children: [{
            id: 4,
            label: '后端工程师'
        }, {
            id: 5,
            label: '前端工程师'
        }, {
            id: 6,
            label: '运维工程师'
        }]
    }, {
        id: 2,
        label: '人事部'
    }, {
        id: 3,
        label: '销售部'
    }]
}

<OrgTree
    data={data}
    horizontal={horizontal}
    collapsable={collapsable}
    expandAll={expandAll}
>
```

See details：[Getting Started](/guide)

### Support

<p align='center'>
  <a href="https://www.buymeacoffee.com/artd" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/arial-violet.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
  </a>
</p>
