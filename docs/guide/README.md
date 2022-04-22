---
nav:
  order: 0
toc: menu
---

# Getting Started

### Installation

```
# use npm
npm i rc-dragable-org-chart

# use yarn
yarn add rc-dragable-org-chart
```

### Your First Example

<code src="../examples/basic.jsx">

See more examples：[more](/demo)

### API

| 参数(prop) | 说明(descripton) | 类型(type) | 默认值(default) |
| --- | --- | :-: | :-: |
| data | 树结构数据 | `Object` | {} |
| layout | 布局 | `Boolean` | `false` |
| pan | 图层是否允许拖动 | `Boolean` | `true` |
| zoom | 图层是否允许缩放 | `Boolean` | `true` |
| center | 是否居中 | `Boolean` | `true` |
| minZoom | 图层最小缩放比例 | `Number` | `0.1` |
| maxZoom | 图层最大缩放比例 | `Number` | `2` |
| zoomStep | 缩放幅度 | `Number` | `0.1` |
| defaultTransform | 默认位移 | `Object` | `{x: 0, y: 0}` |
| nodeKeys | node 字段映射 | `Object` | `{label: 'label', expand: '_expand' }` |
| collapsable | 是否可折叠 | `Boolean` | `false` |
| expandAll | 是否展开全部 | `Boolean` | `true` |
| onClick | 点击事件 | Function(e:Event, data) |
| renderContent | 自定义渲染节点 | Function(nodeData: Object) |
| renderExpandButton | 自定义展开按钮 | Function(isExpand: boolean, nodeData: Object) |
