'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function classnames(styles) {
  return function (className) {
    var commonClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var classList = className.split(/\s+/);
    return classList.map(function (name) {
      return styles[name];
    }).join(' ') + ' ' + commonClassName;
  };
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".TreeNode-module_tree-node__2gHNt {\n  display: table-cell;\n  padding-top: 20px;\n  vertical-align: top;\n}\n.TreeNode-module_tree-node__2gHNt.is-leaf  .TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 19px;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt:after {\n  left: 50%;\n  border-left: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt:not(:first-child):before,\n.TreeNode-module_tree-node__2gHNt:not(:last-child):after {\n  border-top: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt.is-leaf,\n.TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq {\n  position: relative;\n  display: inline-block;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq .TreeNode-module_label-inner__nVX8y {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  display: table;\n  padding-top: 20px;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 20px;\n  border-left: 1px solid #ddd;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  display: table;\n  clear: both;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  position: relative;\n  margin: 0;\n  list-style-type: none;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before,\n.TreeNode-module_tree-node__2gHNt:after,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  transition: all 0.35s;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt {\n  display: table-cell;\n  float: none;\n  padding-top: 0;\n  padding-left: 20px;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:before,\n.horizontal .TreeNode-module_tree-node__2gHNt:after {\n  width: 19px;\n  height: 50%;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:after {\n  top: 50%;\n  left: 0;\n  border-left: 0;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:only-child:before {\n  top: 1px;\n  border-bottom: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:first-child):before,\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:last-child):after {\n  border-top: 0;\n  border-left: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:only-child):after {\n  border-top: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt.is-leaf,\n.horizontal .TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq {\n  display: table-cell;\n  vertical-align: middle;\n}\n.horizontal .TreeNode-module_children__3g1ss {\n  display: table-cell;\n  padding-top: 0;\n  padding-left: 20px;\n}\n.horizontal .TreeNode-module_children__3g1ss:before {\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 0;\n  border-top: 1px solid #ddd;\n  border-left: 0;\n}\n.horizontal .TreeNode-module_children__3g1ss:after {\n  display: none;\n}\n.horizontal .TreeNode-module_children__3g1ss > .TreeNode-module_tree-node__2gHNt {\n  display: block;\n}\n.horizontal > .TreeNode-module_tree-node__2gHNt:only-child::before {\n  border-bottom: 0;\n}\n.horizontal .TreeNode-module_epxand-btn__6p0ph {\n  top: 50%;\n  left: 100%;\n  margin-top: -11px;\n  margin-left: 9px;\n}\n.TreeNode-module_epxand-btn__6p0ph {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  margin-top: 9px;\n  margin-left: -11px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: all 0.35s ease;\n}\n.TreeNode-module_epxand-btn__6p0ph:hover {\n  background-color: #e7e8e9;\n  transform: scale(1.15);\n}\n.TreeNode-module_epxand-btn__6p0ph:before,\n.TreeNode-module_epxand-btn__6p0ph:after {\n  position: absolute;\n  content: '';\n}\n.TreeNode-module_epxand-btn__6p0ph:before {\n  top: 50%;\n  right: 4px;\n  left: 4px;\n  height: 0;\n  border-top: 1px solid #ccc;\n}\n.TreeNode-module_epxand-btn__6p0ph:after {\n  top: 4px;\n  bottom: 4px;\n  left: 50%;\n  width: 0;\n  border-left: 1px solid #ccc;\n}\n.TreeNode-module_epxand-btn__6p0ph.expanded:after {\n  border: none;\n}\n";
var styles = {"tree-node":"TreeNode-module_tree-node__2gHNt","label":"TreeNode-module_label__dGNlq","label-inner":"TreeNode-module_label-inner__nVX8y","children":"TreeNode-module_children__3g1ss","epxand-btn":"TreeNode-module_epxand-btn__6p0ph"};
styleInject(css_248z);

var cls = classnames(styles);

var isLeaf = function isLeaf(data) {
  return !data.children || data.children.length === 0;
};

var renderDefaultContent = function renderDefaultContent(data) {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('label-inner')
  }, data.label);
};

var renderDefaultExpandBtn = function renderDefaultExpandBtn(isExpand, data) {
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: cls('epxand-btn', isExpand ? 'expanded' : '')
  });
};

var renderCombineNodes = function renderCombineNodes(nodes, props) {
  var _props$renderContent = props.renderContent,
      renderContent = _props$renderContent === void 0 ? renderDefaultContent : _props$renderContent,
      _props$renderExpandBu = props.renderExpandButton,
      _onClick = props.onClick,
      nodeKeys = props.nodeKeys;
  var expandKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.expand) || '_expand';
  var levelKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.level) || '_level';
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('tree-node', "tree-node is-leaf'} ".concat( '' )),
    key: "leafs-len-".concat(nodes.length)
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('label'),
    onClick: function onClick() {
      return _onClick && _onClick(nodes);
    },
    onMouseDown: function onMouseDown(ev) {
      ev.stopPropagation();
    }
  }, nodes.map(function (leaf) {
    return renderContent(leaf, leaf[levelKey]);
  })));
};

var renderNode = function renderNode(data, props) {
  var _props$renderContent2 = props.renderContent,
      renderContent = _props$renderContent2 === void 0 ? renderDefaultContent : _props$renderContent2,
      _props$renderExpandBu2 = props.renderExpandButton,
      renderExpandButton = _props$renderExpandBu2 === void 0 ? renderDefaultExpandBtn : _props$renderExpandBu2,
      collapsable = props.collapsable,
      onExpand = props.onExpand,
      _onClick2 = props.onClick,
      nodeKeys = props.nodeKeys;
  var expandKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.expand) || '_expand';
  var levelKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.level) || '_level';
  var isExpand = data[expandKey];

  var handleExpand = function handleExpand(ev) {
    ev.stopPropagation();
    onExpand(ev, data);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('tree-node', "tree-node ".concat(isLeaf(data) ? 'is-leaf' : '', " ").concat(isExpand ? '' : 'collapsed')),
    key: data.id || data.key
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('label'),
    onClick: function onClick() {
      return _onClick2 && _onClick2(data);
    },
    onMouseDown: function onMouseDown(ev) {
      ev.stopPropagation();
    }
  }, renderContent(data, data[levelKey]), collapsable && data.children && data.children.length > 0 && /*#__PURE__*/React__default['default'].createElement("div", {
    onClick: handleExpand
  }, renderExpandButton(isExpand, data))), isExpand && data.children && data.children.length > 0 && renderChildren(data.children, props));
};

var renderChildren = function renderChildren(children, props) {
  var combinedNodes = [];
  var childEles = [/*#__PURE__*/React__default['default'].createElement("div", {
    className: cls('children')
  }, children === null || children === void 0 ? void 0 : children.map(function (node) {
    var _props$nodeKeys;

    var isCombine = node[((_props$nodeKeys = props.nodeKeys) === null || _props$nodeKeys === void 0 ? void 0 : _props$nodeKeys.combine) || ''];

    if (isCombine) {
      combinedNodes.push(node);
      return null;
    }

    if (combinedNodes.length > 0) {
      var Compnent = /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, renderCombineNodes(combinedNodes, props), renderNode(node, props));
      combinedNodes = [];
      return Compnent;
    }

    return renderNode(node, props);
  }))];

  if (combinedNodes.length > 0) {
    childEles.unshift(renderCombineNodes(combinedNodes, props));
  }

  return childEles;
};

function TreeNode(props) {
  return renderNode(props.data, props);
}

var css_248z$1 = ".index-module_drag-wrapper__2qxHS .index-module_drag-container__qXc8X {\n  cursor: default;\n}\n.__dumi-default-previewer-demo {\n  overflow: hidden;\n}\n";
var styles$1 = {"drag-wrapper":"index-module_drag-wrapper__2qxHS","drag-container":"index-module_drag-container__qXc8X"};
styleInject(css_248z$1);

var cls$1 = classnames(styles$1);
function DragableContainer(props) {
  var children = props.children,
      _props$pan = props.pan,
      pan = _props$pan === void 0 ? true : _props$pan,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? true : _props$zoom,
      _props$minZoom = props.minZoom,
      minZoom = _props$minZoom === void 0 ? 0.1 : _props$minZoom,
      _props$maxZoom = props.maxZoom,
      maxZoom = _props$maxZoom === void 0 ? 2 : _props$maxZoom,
      _props$zoomStep = props.zoomStep,
      zoomStep = _props$zoomStep === void 0 ? 0.1 : _props$zoomStep,
      _props$defaultTransfo = props.defaultTransform,
      defaultTransform = _props$defaultTransfo === void 0 ? {
    x: 0,
    y: 0
  } : _props$defaultTransfo,
      _props$center = props.center,
      center = _props$center === void 0 ? true : _props$center;
  var initTransform = {
    scale: 1,
    wheelDirection: 0,
    translateX: defaultTransform.x || 0,
    translateY: defaultTransform.y || 0,
    originX: '50%',
    originY: '50%'
  };
  var containerRef = React.useRef(null);
  var wrapperRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMove = _useState2[0],
      setIsMove = _useState2[1];

  var _useState3 = React.useState(initTransform),
      _useState4 = _slicedToArray(_useState3, 2),
      transform = _useState4[0],
      _setTransform = _useState4[1];

  var transfromRef = React.useRef(initTransform);
  var posRef = React.useRef({
    isMove: false,
    deltaX: 0,
    deltaY: 0
  });
  React.useEffect(function () {
    var _wrapperRef$current;

    // containerRef.current?.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
    (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.addEventListener('wheel', handleWheelMove); // calcOriginPoint();

    return function () {
      var _wrapperRef$current2;

      // containerRef.current?.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
      (_wrapperRef$current2 = wrapperRef.current) === null || _wrapperRef$current2 === void 0 ? void 0 : _wrapperRef$current2.removeEventListener('wheel', handleWheelMove);
    };
  }, []);
  React.useEffect(function () {
    if (!zoom) return;
    var wheelDirection = transform.wheelDirection;

    if (wheelDirection > 0) {
      onZoomOut();
    } else if (wheelDirection < 0) {
      onZoomIn();
    }
  }, [transform.wheelDirection, zoom]);
  React.useEffect(function () {
    setTimeout(function () {
      if (center && containerRef.current) {
        var treeDom = containerRef.current.querySelector('.org-tree');

        if (treeDom) {
          var _containerRef$current = containerRef.current.getBoundingClientRect(),
              containerW = _containerRef$current.width,
              containerH = _containerRef$current.height;

          var _treeDom$getBoundingC = treeDom.getBoundingClientRect(),
              width = _treeDom$getBoundingC.width,
              height = _treeDom$getBoundingC.height;

          setTransform({
            translateX: (containerW - width) / 2
          });
        }
      }
    }, 10);
  }, [center]);

  var setTransform = function setTransform(values) {
    _setTransform(function (state) {
      var newStaste = _objectSpread2(_objectSpread2({}, state), values);

      transfromRef.current = newStaste;
      return newStaste;
    });
  }; // 计算缩放原点

  var onZoomIn = function onZoomIn() {
    _setTransform(function (state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        scale: state.scale >= maxZoom ? maxZoom : state.scale + zoomStep
      });
    });
  };

  var onZoomOut = function onZoomOut() {
    _setTransform(function (state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        scale: state.scale <= minZoom ? minZoom : state.scale - zoomStep
      });
    });
  };

  var handleDown = function handleDown(ev) {
    ev.preventDefault();
    setIsMove(true);
    posRef.current.isMove = true;
    posRef.current.deltaX = ev.pageX - transfromRef.current.translateX;
    posRef.current.deltaY = ev.pageY - transfromRef.current.translateY;
  };

  var handleMove = function handleMove(ev) {
    if (!posRef.current.isMove || !pan) return;
    var x = ev.pageX - posRef.current.deltaX;
    var y = ev.pageY - posRef.current.deltaY;
    setTransform({
      translateX: x,
      translateY: y
    });
  };

  var handleUp = function handleUp(ev) {
    setIsMove(false);
    posRef.current.isMove = false;
  };

  var handleWheelMove = function handleWheelMove(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    var wheelDirection = ev.deltaY;
    setTransform({
      wheelDirection: wheelDirection
    });
  };

  var getUnitValue = function getUnitValue(value) {
    return typeof value === 'number' ? "".concat(value, "px") : value;
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls$1('drag-wrapper'),
    ref: wrapperRef
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls$1('drag-container'),
    ref: containerRef,
    style: {
      cursor: isMove ? 'move' : 'default',
      transform: "translate(".concat(getUnitValue(transform.translateX), ", ").concat(getUnitValue(transform.translateY), ") scale(").concat(transform.scale, ")"),
      transformOrigin: "".concat(getUnitValue(transform.originX), " ").concat(getUnitValue(transform.originY))
    },
    onMouseDown: handleDown
  }, children));
}

var css_248z$2 = ".OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq {\n  display: table;\n  text-align: center;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:before,\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  display: table;\n  content: '';\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  clear: both;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node {\n  padding-top: 0;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node::after {\n  border: none;\n}\n";
var styles$2 = {"org-tree-container":"OrgTree-module_org-tree-container__3iceM","org-tree":"OrgTree-module_org-tree__1kbUq"};
styleInject(css_248z$2);

var cls$2 = classnames(styles$2);
var defaultNodeKeys = {
  label: 'label',
  expand: '_expand',
  level: '_level',
  combine: 'isStaff'
};

function OrgTree(props) {
  var pan = props.pan,
      zoom = props.zoom,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      zoomStep = props.zoomStep,
      defaultTransform = props.defaultTransform,
      _props$center = props.center,
      center = _props$center === void 0 ? true : _props$center,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'vertical' : _props$layout,
      _props$nodeKeys = props.nodeKeys,
      nodeKeys = _props$nodeKeys === void 0 ? _objectSpread2(_objectSpread2({}, defaultNodeKeys), props.nodeKeys) : _props$nodeKeys,
      _props$expandAll = props.expandAll,
      expandAll = _props$expandAll === void 0 ? true : _props$expandAll;

  var _useState = React.useState(Date.now),
      _useState2 = _slicedToArray(_useState, 2),
      refresh = _useState2[0],
      setRefresh = _useState2[1];

  var expandKey = nodeKeys.expand;
  var levelKey = nodeKeys.level;
  React.useEffect(function () {
    if (expandAll !== void 0) {
      toogleExpandAll(props.data, expandAll);
    }
  }, [props.data]);

  var foreUpdate = function foreUpdate() {
    setRefresh(Date.now);
  };

  var handleExpand = function handleExpand(e, nodeData) {
    nodeData[expandKey] = !nodeData[expandKey];

    if (!nodeData[expandKey] && nodeData.children) {
      collapse(nodeData.children);
    }

    foreUpdate();
  };

  var collapse = function collapse() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (childNode) {
      childNode[expandKey] = false;
      childNode.children && collapse(childNode.children);
    });
  };

  function expandAllNode(nodeData, isExpand) {
    nodeData[expandKey] = isExpand;
    nodeData[levelKey] = nodeData[levelKey] || 1;

    if (nodeData.children) {
      nodeData.children.forEach(function (node) {
        node[levelKey] = nodeData[levelKey] + 1;
        expandAllNode(node, isExpand);
      });
    }

    return nodeData;
  }

  var toogleExpandAll = function toogleExpandAll(nodeData, isExpand) {
    expandAllNode(nodeData, isExpand);
    foreUpdate();
  };

  return /*#__PURE__*/React__default['default'].createElement(DragableContainer, {
    pan: pan,
    zoom: zoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    zoomStep: zoomStep,
    defaultTransform: defaultTransform,
    center: center
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls$2('org-tree-container')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: cls$2('org-tree', "".concat(layout, " org-tree"))
  }, /*#__PURE__*/React__default['default'].createElement(TreeNode, _objectSpread2(_objectSpread2({
    key: refresh
  }, props), {}, {
    center: center,
    layout: layout,
    nodeKeys: nodeKeys,
    expandAll: expandAll,
    onExpand: handleExpand
  })))));
}

module.exports = OrgTree;
