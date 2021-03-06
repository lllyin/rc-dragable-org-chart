import React, { createElement, useState, useRef, useEffect, Fragment, forwardRef, useImperativeHandle } from 'react';

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

var _defs, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgArrowIcon(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    className: "arrow-icon_svg__icon",
    viewBox: "0 0 1609 1024",
    xmlns: "http://www.w3.org/2000/svg",
    width: 314.258,
    height: 200
  }, props), _defs || (_defs = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("style", null))), _path || (_path = /*#__PURE__*/createElement("path", {
    d: "M1441.938 643.95L907.995 110.007a146.286 146.286 0 00-206.848 0L167.205 643.95a146.286 146.286 0 00143.36 244.297L804.57 748.25l494.154 139.703a146.286 146.286 0 00143.36-244.297z",
    fill: "#C6C6C6"
  })));
}

function throttle(fn, delay) {
  var timer; // @ts-ignore

  var context = this;
  return function () {
    var args = Array.prototype.slice.call(arguments);

    if (timer) {
      return;
    }

    timer = setTimeout(function () {
      fn.apply(context, args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}
function injectStyle() {
  var animations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var styleEl = document.createElement('style');
  var r = Math.random().toString(36).substring(2);
  var result = genKeyframes(animations, "node-animation__".concat(r));
  if (!result) return null;
  var animationName = result.name,
      style = result.style;
  styleEl.id = "node-inject-style_".concat(r);
  styleEl.innerHTML = style;
  document.head.appendChild(styleEl);
  return {
    el: styleEl,
    styleId: styleEl.id,
    animationName: animationName
  };
}
function genKeyframes() {
  var animations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var name = arguments.length > 1 ? arguments[1] : undefined;
  if (animations.length === 0) return null;

  if (animations.length === 1) {
    animations.push(animations[0]);
  }

  var step = 100 / (animations.length - 1);
  var r = Math.random().toString(36).substring(2);
  var frames = animations.map(function (animation, index) {
    return "".concat(index * step, "% {\n      transform: ").concat(animation, "\n    }");
  }).join('\n');
  var keyName = name || "node-animation_".concat(r, " ");
  var style = "\n    @keyframes ".concat(keyName, " {\n      ").concat(frames, "\n    }\n  ");
  return {
    name: keyName,
    style: style
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

var css_248z = ".TreeNode-module_tree-node__2gHNt {\n  display: table-cell;\n  padding-top: 20px;\n  vertical-align: top;\n  transition: transform 860ms ease;\n}\n.TreeNode-module_tree-node__2gHNt.is-leaf  .TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 19px;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt:after {\n  left: 50%;\n  border-left: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt:not(:first-of-type):before,\n.TreeNode-module_tree-node__2gHNt:not(:last-of-type):after {\n  border-top: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt.is-leaf,\n.TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-right: 10px;\n  padding-right: var(--card-spacing);\n  padding-left: 10px;\n  padding-left: var(--card-spacing);\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq {\n  position: relative;\n  display: inline-block;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq .TreeNode-module_label-inner__nVX8y {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  display: table-cell;\n  padding-top: 20px;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 20px;\n  border-left: 1px solid #ddd;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  display: table;\n  clear: both;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss > .TreeNode-module_combine-tree-node__AXMnr .TreeNode-module_arrow-icon__1ljPg {\n  display: none;\n}\n.TreeNode-module_combine-nodes__93IVM {\n  padding: 0 0;\n}\n.TreeNode-module_tree-node__2gHNt,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  position: relative;\n  margin: 0;\n  list-style-type: none;\n}\n.TreeNode-module_tree-node__2gHNt:empty,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:empty {\n  display: none;\n}\n.TreeNode-module_tree-node__2gHNt.TreeNode-module_combine-tree-node__AXMnr::before,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss.TreeNode-module_combine-tree-node__AXMnr::before {\n  display: none;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before,\n.TreeNode-module_tree-node__2gHNt:after,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  transition: all 0.35s;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt {\n  display: table-cell;\n  float: none;\n  padding-top: 0;\n  padding-left: 20px;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:before,\n.horizontal .TreeNode-module_tree-node__2gHNt:after {\n  width: 19px;\n  height: 50%;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:after {\n  top: 50%;\n  left: 0;\n  border-left: 0;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:only-child:before {\n  top: 1px;\n  border-bottom: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:first-of-type):before,\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:last-of-type):after {\n  border-top: 0;\n  border-left: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt:not(:only-child):after {\n  border-top: 1px solid #ddd;\n}\n.horizontal .TreeNode-module_tree-node__2gHNt.is-leaf,\n.horizontal .TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-top: 10px;\n  padding-top: var(--card-spacing);\n  padding-bottom: 10px;\n  padding-bottom: var(--card-spacing);\n}\n.horizontal .TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq {\n  display: table-cell;\n  vertical-align: middle;\n}\n.horizontal .TreeNode-module_children__3g1ss {\n  display: table-cell;\n  padding-top: 0;\n  padding-left: 20px;\n}\n.horizontal .TreeNode-module_children__3g1ss:before {\n  top: 50%;\n  left: 0;\n  width: 20px;\n  height: 0;\n  border-top: 1px solid #ddd;\n  border-left: 0;\n}\n.horizontal .TreeNode-module_children__3g1ss:after {\n  display: none;\n}\n.horizontal .TreeNode-module_children__3g1ss > .TreeNode-module_tree-node__2gHNt {\n  display: block;\n}\n.horizontal > .TreeNode-module_tree-node__2gHNt:only-child::before {\n  border-bottom: 0;\n}\n.horizontal .TreeNode-module_epxand-btn__6p0ph {\n  top: 50%;\n  left: 100%;\n  margin-top: -11px;\n  margin-left: 9px;\n}\n.TreeNode-module_epxand-btn__6p0ph {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  z-index: 10;\n  width: 20px;\n  height: 20px;\n  margin-top: 9px;\n  margin-left: -11px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: all 0.35s ease;\n}\n.TreeNode-module_epxand-btn__6p0ph:hover {\n  background-color: #e7e8e9;\n  transform: scale(1.15);\n}\n.TreeNode-module_epxand-btn__6p0ph:before,\n.TreeNode-module_epxand-btn__6p0ph:after {\n  position: absolute;\n  content: '';\n}\n.TreeNode-module_epxand-btn__6p0ph:before {\n  top: 50%;\n  right: 4px;\n  left: 4px;\n  height: 0;\n  border-top: 1px solid #ccc;\n}\n.TreeNode-module_epxand-btn__6p0ph:after {\n  top: 4px;\n  bottom: 4px;\n  left: 50%;\n  width: 0;\n  border-left: 1px solid #ccc;\n}\n.TreeNode-module_epxand-btn__6p0ph.expanded:after {\n  border: none;\n}\n.TreeNode-module_arrow-icon__1ljPg {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 1;\n  width: 12px;\n  height: auto;\n  transform: translate(-50%, 0%);\n}\n";
var styles = {"tree-node":"TreeNode-module_tree-node__2gHNt","label":"TreeNode-module_label__dGNlq","label-inner":"TreeNode-module_label-inner__nVX8y","children":"TreeNode-module_children__3g1ss","combine-tree-node":"TreeNode-module_combine-tree-node__AXMnr","arrow-icon":"TreeNode-module_arrow-icon__1ljPg","combine-nodes":"TreeNode-module_combine-nodes__93IVM","epxand-btn":"TreeNode-module_epxand-btn__6p0ph"};
styleInject(css_248z);

var cls = classnames(styles);

var isLeaf = function isLeaf(data) {
  return !data.children || data.children.length === 0;
};

var renderDefaultContent = function renderDefaultContent(data) {
  return /*#__PURE__*/React.createElement("div", {
    className: cls('label-inner')
  }, data.label);
};

var renderDefaultExpandBtn = function renderDefaultExpandBtn(isExpand, data) {
  return /*#__PURE__*/React.createElement("span", {
    className: cls('epxand-btn', isExpand ? 'expanded' : '')
  });
};

function CombinedNodes(props) {
  var nodes = props.nodes,
      extraProps = props.extraProps,
      colNum = props.colNum;
  var _extraProps$renderCon = extraProps.renderContent,
      renderContent = _extraProps$renderCon === void 0 ? renderDefaultContent : _extraProps$renderCon,
      _extraProps$renderExp = extraProps.renderExpandButton,
      _onClick = extraProps.onClick,
      nodeKeys = extraProps.nodeKeys,
      nodeKey = extraProps.nodeKey;
  var expandKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.expand) || '_expand';
  var levelKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.level) || '_level';
  return /*#__PURE__*/React.createElement("div", {
    className: cls('tree-node combine-tree-node', "tree-node is-leaf ".concat( '' , " len-").concat(nodes.length)),
    key: "leafs-len-".concat(nodes.length),
    "data-colnum": colNum
  }, /*#__PURE__*/React.createElement("div", {
    className: cls('label'),
    onClick: function onClick() {
      return _onClick && _onClick(nodes);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: cls('combine-nodes', "combine-nodes len-".concat(nodes.length)),
    "data-colnum": colNum
  }, nodes.map(function (leaf) {
    var keyId = "leaf-".concat(leaf[nodeKey]);
    return /*#__PURE__*/React.createElement(Fragment, {
      key: keyId
    }, renderContent(leaf, leaf[levelKey], colNum));
  }))), /*#__PURE__*/React.createElement(SvgArrowIcon, {
    className: cls('arrow-icon')
  }));
}

function Node(props) {
  var data = props.data,
      extraProps = props.extraProps,
      colNum = props.colNum;
  var _extraProps$renderCon2 = extraProps.renderContent,
      renderContent = _extraProps$renderCon2 === void 0 ? renderDefaultContent : _extraProps$renderCon2,
      _extraProps$renderExp2 = extraProps.renderExpandButton,
      renderExpandButton = _extraProps$renderExp2 === void 0 ? renderDefaultExpandBtn : _extraProps$renderExp2,
      collapsable = extraProps.collapsable,
      onExpand = extraProps.onExpand,
      _onClick2 = extraProps.onClick,
      nodeKeys = extraProps.nodeKeys,
      nodeKey = extraProps.nodeKey,
      isHide = extraProps.isHide,
      isAnim = extraProps.isAnim,
      _extraProps$getNodeAn = extraProps.getNodeAnimations,
      getNodeAnimations = _extraProps$getNodeAn === void 0 ? function () {
    return [];
  } : _extraProps$getNodeAn,
      _extraProps$animation = extraProps.animationDuration,
      animationDuration = _extraProps$animation === void 0 ? 800 : _extraProps$animation,
      onAnimationEnd = extraProps.onAnimationEnd;
  var expandKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.expand) || '_expand';
  var levelKey = (nodeKeys === null || nodeKeys === void 0 ? void 0 : nodeKeys.level) || '_level';
  var isExpand = data[expandKey];
  var keyId = "node-".concat(data[nodeKey], "-").concat(JSON.stringify(data.transform || {}));
  var isHidden = isHide && isHide(data);
  var isShowAnim = isAnim && isAnim(data);
  var animations = isShowAnim ? getNodeAnimations(data) : [];

  var _useState = useState(isShowAnim ? {
    willChange: 'transform'
  } : {}),
      _useState2 = _slicedToArray(_useState, 2),
      anim = _useState2[0],
      setAnim = _useState2[1];

  var nodeRef = useRef(null);
  useEffect(function () {
    if (isShowAnim) {
      var result = injectStyle(animations);
      if (!result) return;
      var el = result.el,
          animationName = result.animationName;
      setAnim({
        // duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name
        animation: "".concat(animationDuration, "ms ease 0ms 1 normal forwards running ").concat(animationName)
      });
      setTimeout(function () {
        onAnimationEnd && onAnimationEnd(data, nodeRef.current);
      }, animationDuration + 50);
      return function () {
        var _el$parentNode;

        if (el) (_el$parentNode = el.parentNode) === null || _el$parentNode === void 0 ? void 0 : _el$parentNode.removeChild(el);
      };
    }
  }, [isShowAnim]);
  if (isHidden) return null;

  var handleExpand = function handleExpand(ev) {
    ev.stopPropagation();
    onExpand(ev, data);
  };

  return /*#__PURE__*/React.createElement("div", {
    key: keyId,
    className: cls('tree-node', "tree-node ".concat(isLeaf(data) ? 'is-leaf' : '', " ").concat(isExpand ? '' : 'collapsed')),
    "data-id": keyId,
    "data-colnum": colNum !== null && colNum !== void 0 ? colNum : '',
    style: anim,
    ref: nodeRef
  }, /*#__PURE__*/React.createElement("div", {
    className: cls('label'),
    onClick: function onClick() {
      return _onClick2 && _onClick2(data);
    }
  }, renderContent(data, data[levelKey], colNum), collapsable && data.children && data.children.length > 0 && /*#__PURE__*/React.createElement("div", {
    onClick: handleExpand
  }, renderExpandButton(isExpand, data))), isExpand && data.children && data.children.length > 0 && renderChildren(data.children, extraProps, colNum));
}

var renderChildren = function renderChildren(children, props, colNum) {
  var nodeKey = props.nodeKey,
      mergeNode = props.mergeNode,
      isHide = props.isHide;
  var combinedNodes = [];
  var index = 0;
  var isAllNull = true;
  var childEles = [/*#__PURE__*/React.createElement("div", {
    className: cls('children')
  }, children === null || children === void 0 ? void 0 : children.map(function (node) {
    var isCombine = mergeNode && mergeNode(node);
    var isHidden = isHide && isHide(node);
    var keyId = "child-".concat(node[nodeKey]);

    if (isHidden) {
      return null;
    }

    if (isCombine) {
      combinedNodes.push(node);
      return null;
    }

    isAllNull = false;

    if (combinedNodes.length > 0) {
      index += 1;
      var Compnent = /*#__PURE__*/React.createElement(Fragment, {
        key: "combine-".concat(keyId)
      }, /*#__PURE__*/React.createElement(CombinedNodes, {
        nodes: combinedNodes,
        extraProps: props,
        colNum: colNum
      }), /*#__PURE__*/React.createElement(Node, {
        key: keyId,
        data: node,
        extraProps: props,
        colNum: index
      }));
      combinedNodes = [];
      return Compnent;
    }

    index += 1;
    return /*#__PURE__*/React.createElement(Node, {
      key: keyId,
      data: node,
      extraProps: props,
      colNum: index
    });
  }), isAllNull ? null : /*#__PURE__*/React.createElement(SvgArrowIcon, {
    className: cls('arrow-icon')
  }))];

  if (combinedNodes.length === (children === null || children === void 0 ? void 0 : children.length)) {
    childEles = [/*#__PURE__*/React.createElement(CombinedNodes, {
      nodes: combinedNodes,
      extraProps: props,
      colNum: colNum
    })];
  } else if (combinedNodes.length > 0) {
    childEles.push( /*#__PURE__*/React.createElement(CombinedNodes, {
      nodes: combinedNodes,
      extraProps: props,
      colNum: colNum
    }));
  }

  return childEles;
};

function TreeNode(props) {
  var _props$nodeKey = props.nodeKey,
      nodeKey = _props$nodeKey === void 0 ? 'id' : _props$nodeKey,
      data = props.data;
  var keyId = "tree-".concat(data[nodeKey]);
  return /*#__PURE__*/React.createElement(Node, {
    data: data,
    extraProps: props,
    colNum: 0,
    key: keyId
  });
}

var _defs$1, _path$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function SvgZoomOutIcon(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    className: "zoom-out-icon_svg__icon",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    width: 200,
    height: 200
  }, props), _defs$1 || (_defs$1 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("style", null))), _path$1 || (_path$1 = /*#__PURE__*/createElement("path", {
    d: "M309.894 485.053h404.211q40.421 0 40.421 40.42 0 40.422-40.42 40.422H309.894q-40.421 0-40.421-40.421t40.42-40.421z",
    fill: "#666"
  })));
}

var _defs$2, _path$2, _path2;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function SvgZoomInIcon(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    className: "zoom-in-icon_svg__icon",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    width: 200,
    height: 200
  }, props), _defs$2 || (_defs$2 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("style", null))), _path$2 || (_path$2 = /*#__PURE__*/createElement("path", {
    d: "M309.894 485.053h404.211q40.421 0 40.421 40.42 0 40.422-40.42 40.422H309.894q-40.421 0-40.421-40.421t40.42-40.421z",
    fill: "#666"
  })), _path2 || (_path2 = /*#__PURE__*/createElement("path", {
    d: "M552.421 323.368v404.21Q552.421 768 512 768t-40.421-40.421v-404.21q0-40.422 40.421-40.422t40.421 40.421z",
    fill: "#666"
  })));
}

var css_248z$1 = ".index-module_drag-wrapper__2qxHS {\n  position: relative;\n}\n.index-module_drag-wrapper__2qxHS .index-module_drag-container__qXc8X {\n  cursor: default;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc {\n  position: absolute;\n  right: 20px;\n  bottom: 16px;\n  z-index: 9999;\n  color: #666666;\n  font-size: 12px;\n  background-color: #fff;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_tool-item__1sV7A {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_scal-tool-item__3gpma {\n  cursor: pointer;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_scal-tool-item__3gpma .index-module_scale-icon__1zqpL {\n  line-height: 0;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_scal-tool-item__3gpma .index-module_scale-icon__1zqpL:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  transform-origin: 50% 50%;\n  transition: all 0.15s ease-out;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_scal-tool-item__3gpma .index-module_scale-icon__1zqpL > svg {\n  width: 20px;\n  height: 20px;\n}\n.index-module_drag-wrapper__2qxHS .index-module_toolbar__1Rpbc .index-module_scal-tool-item__3gpma .index-module_scale-num__GHOF7 {\n  width: 44px;\n  text-align: center;\n}\n.__dumi-default-previewer-demo {\n  overflow: hidden;\n}\n";
var styles$1 = {"drag-wrapper":"index-module_drag-wrapper__2qxHS","drag-container":"index-module_drag-container__qXc8X","toolbar":"index-module_toolbar__1Rpbc","tool-item":"index-module_tool-item__1sV7A","scal-tool-item":"index-module_scal-tool-item__3gpma","scale-icon":"index-module_scale-icon__1zqpL","scale-num":"index-module_scale-num__GHOF7"};
styleInject(css_248z$1);

var cls$1 = classnames(styles$1);
function DragableContainer(props, ref) {
  var _props$wrapperClassNa = props.wrapperClassName,
      wrapperClassName = _props$wrapperClassNa === void 0 ? '' : _props$wrapperClassNa,
      children = props.children,
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
      _props$defaultScale = props.defaultScale,
      defaultScale = _props$defaultScale === void 0 ? 1 : _props$defaultScale,
      _props$defaultTransfo = props.defaultTransform,
      defaultTransform = _props$defaultTransfo === void 0 ? {
    x: 0,
    y: 0
  } : _props$defaultTransfo,
      _props$offset = props.offset,
      offset = _props$offset === void 0 ? {
    x: 0,
    y: 0
  } : _props$offset,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'center' : _props$placement,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? 'transform 0.25s ease-out' : _props$transition,
      _props$autoAdjust = props.autoAdjust,
      autoAdjust = _props$autoAdjust === void 0 ? true : _props$autoAdjust,
      _props$toolbar = props.toolbar,
      toolbar = _props$toolbar === void 0 ? ['zoom'] : _props$toolbar,
      _props$disableWheelZo = props.disableWheelZoom,
      disableWheelZoom = _props$disableWheelZo === void 0 ? false : _props$disableWheelZo;
  var defaultStyles = {
    scale: defaultScale,
    translateX: defaultTransform.x || 0,
    translateY: defaultTransform.y || 0,
    originX: '50%',
    originY: '50%'
  };
  var containerRef = useRef(null);
  var wrapperRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMove = _useState2[0],
      setIsMove = _useState2[1];

  var _useState3 = useState(defaultStyles),
      _useState4 = _slicedToArray(_useState3, 2),
      styles = _useState4[0],
      _setStyles = _useState4[1];

  var stylesRef = useRef(defaultStyles);
  var posRef = useRef({
    isMove: false,
    deltaX: 0,
    deltaY: 0
  });
  useEffect(function () {
    var _wrapperRef$current;

    // containerRef.current?.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.addEventListener('wheel', handleWheelMove);
    initfixVisible(); // calcOriginPoint();

    return function () {
      var _wrapperRef$current2;

      // containerRef.current?.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      (_wrapperRef$current2 = wrapperRef.current) === null || _wrapperRef$current2 === void 0 ? void 0 : _wrapperRef$current2.removeEventListener('wheel', handleWheelMove);
    };
  }, []);
  useEffect(function () {
    setTimeout(function () {
      if (placement) {
        setPlacement(placement, false, defaultScale);
      }
    }, 10);
  }, [placement]);
  useImperativeHandle(ref, function () {
    return {
      setPlacement: setPlacement
    };
  });

  var setPlacement = function setPlacement(placement) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaultScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    if (!wrapperRef.current) return;
    var treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;

    var _wrapperRef$current$g = wrapperRef.current.getBoundingClientRect(),
        wrapperW = _wrapperRef$current$g.width,
        wrapperH = _wrapperRef$current$g.height;

    var _treeDom$getBoundingC = treeDom.getBoundingClientRect(),
        width = _treeDom$getBoundingC.width,
        height = _treeDom$getBoundingC.height;

    var _transition = animation ? transition : void 0;

    var ratio = defaultScale / 1;
    var origin = {
      x: (ratio - 1) * wrapperW * 0.5,
      y: (ratio - 1) * wrapperH * 0.5
    }; // console.log('setPlacement:', placement, { wrapperW, wrapperH, width, height })

    switch (placement) {
      case 'center':
        {
          setStyles({
            translateX: (wrapperW - width) / 2 + origin.x,
            translateY: (wrapperH - height) / 2 + origin.y,
            transition: _transition,
            scale: defaultScale
          });
          break;
        }

      case 'topLeft':
        {
          setStyles({
            translateX: offset.x + origin.x,
            translateY: offset.y + origin.y,
            transition: _transition,
            scale: defaultScale
          });
          break;
        }

      case 'topCenter':
        {
          setStyles({
            translateX: (wrapperW - width) / 2 + offset.x + origin.x,
            translateY: offset.y + origin.y,
            transition: _transition,
            scale: defaultScale
          });
          break;
        }

      case 'leftCenter':
        {
          setStyles({
            translateX: 0 + origin.x,
            translateY: (wrapperH - height) / 2 + origin.y,
            transition: _transition,
            scale: defaultScale
          });
          break;
        }
    }

    animation && setTimeout(function () {
      setStyles({
        transition: void 0
      });
    }, 300);
  };

  var initfixVisible = function initfixVisible() {
    if (!wrapperRef.current) return;
    var treeDom = wrapperRef.current.querySelector('.org-tree');
    if (!treeDom) return;
    var options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: [0, 1]
    };
    var observer = new IntersectionObserver(function (entries, observer) {
      var res = entries[0];

      if (res.intersectionRatio > 0) ; else {
        // console.log('--?????????????????????:', posRef.current.isMove, res, treeDom)
        setTimeout(function () {
          if (!posRef.current.isMove && autoAdjust) {
            setPlacement(placement, true, defaultScale);
          }
        }, 200);
      }
    }, options);
    observer.observe(treeDom);
  };

  var setStyles = function setStyles(values) {
    _setStyles(function (state) {
      var newStaste = _objectSpread2(_objectSpread2({}, state), values);

      stylesRef.current = newStaste;
      return newStaste;
    });
  }; // ??????????????????


  var calcScaleOriginTransform = function calcScaleOriginTransform(opts) {
    if (!wrapperRef.current) return;
    var ratio = opts.ratio,
        ev = opts.ev;
    var _stylesRef$current = stylesRef.current,
        translateX = _stylesRef$current.translateX,
        translateY = _stylesRef$current.translateY;

    var _wrapperRef$current$g2 = wrapperRef.current.getBoundingClientRect(),
        wrapperW = _wrapperRef$current$g2.width,
        wrapperH = _wrapperRef$current$g2.height,
        left = _wrapperRef$current$g2.left,
        top = _wrapperRef$current$g2.top;

    var origin = {
      x: (ratio - 1) * wrapperW * 0.5,
      y: (ratio - 1) * wrapperH * 0.5
    };
    var posX = ev ? ev.clientX - left : wrapperW / 2;
    var posY = ev ? ev.clientY - top : wrapperH / 2; // console.log('calcScaleOriginTransform', ratio, origin, { posX, posY })
    // ???????????????

    var x = translateX - ((ratio - 1) * (posX - translateX) - origin.x);
    var y = translateY - ((ratio - 1) * (posY - translateY) - origin.y);
    return {
      translateX: Number(x.toFixed(3)),
      translateY: Number(y.toFixed(3))
    };
  };

  var onZoom = function onZoom() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var ev = arguments.length > 1 ? arguments[1] : undefined;
    var state = stylesRef.current;
    var _scale = state.scale;

    if (flag > 0) {
      // ??????
      _scale = _scale <= minZoom ? minZoom : _scale - zoomStep;
    } else if (flag < 0) {
      // ??????
      _scale = _scale >= maxZoom ? maxZoom : _scale + zoomStep;
    }

    _scale = parseFloat(_scale.toFixed(2));
    var trans = calcScaleOriginTransform({
      ratio: _scale / state.scale,
      ev: ev
    }); // console.log('_scale:', _scale);

    var newState = _objectSpread2(_objectSpread2(_objectSpread2({}, state), trans), {}, {
      scale: _scale
    });

    setStyles(newState);
  };

  var handleZoom = function handleZoom(ev) {
    var wheelDirection = ev.deltaY;
    onZoom(wheelDirection, ev);
  };

  var throttleOnZoom = throttle(handleZoom, 1);

  var handleMouseDown = function handleMouseDown(ev) {
    ev.preventDefault();
    setIsMove(true);
    posRef.current.isMove = true;
    posRef.current.deltaX = ev.clientX - stylesRef.current.translateX;
    posRef.current.deltaY = ev.clientY - stylesRef.current.translateY;
  };

  var handleMouseMove = function handleMouseMove(ev) {
    if (!posRef.current.isMove || !pan) return;
    var x = ev.clientX - posRef.current.deltaX;
    var y = ev.clientY - posRef.current.deltaY;
    setStyles({
      translateX: x,
      translateY: y
    });
  };

  var handleMouseUp = function handleMouseUp(ev) {
    setIsMove(false);
    posRef.current.isMove = false;
  };

  var handleWheelMove = function handleWheelMove(ev) {
    if (!zoom || disableWheelZoom) return;
    ev.preventDefault();
    ev.stopPropagation();
    throttleOnZoom(ev);
  };

  var getUnitValue = function getUnitValue(value) {
    return typeof value === 'number' ? "".concat(value, "px") : value;
  }; // console.log('render styles:', styles, props);


  return /*#__PURE__*/React.createElement("div", {
    className: cls$1('drag-wrapper', wrapperClassName),
    ref: wrapperRef,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/React.createElement("div", {
    className: cls$1('drag-container'),
    ref: containerRef,
    style: {
      cursor: isMove ? 'move' : 'default',
      transform: "translate(".concat(getUnitValue(styles.translateX), ", ").concat(getUnitValue(styles.translateY), ") scale(").concat(styles.scale, ")"),
      transformOrigin: "".concat(getUnitValue(styles.originX), " ").concat(getUnitValue(styles.originY)),
      transition: styles.transition
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    className: cls$1('toolbar')
  }, toolbar.includes('zoom') && /*#__PURE__*/React.createElement("div", {
    className: cls$1('tool-item scal-tool-item')
  }, /*#__PURE__*/React.createElement("div", {
    className: cls$1('scale-icon'),
    onClick: function onClick() {
      return onZoom(1);
    }
  }, /*#__PURE__*/React.createElement(SvgZoomOutIcon, null)), /*#__PURE__*/React.createElement("div", {
    className: cls$1('scale-num')
  }, styles.scale * 100 >> 0, "%"), /*#__PURE__*/React.createElement("div", {
    className: cls$1('scale-icon'),
    onClick: function onClick() {
      return onZoom(-1);
    }
  }, /*#__PURE__*/React.createElement(SvgZoomInIcon, null)))));
}
var DragableContainer$1 = /*#__PURE__*/forwardRef(DragableContainer);

var css_248z$2 = ".OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq {\n  display: table;\n  text-align: center;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:before,\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  display: table;\n  content: '';\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  clear: both;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node {\n  padding-top: 0;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node::after {\n  border: none;\n  pointer-events: none;\n}\n";
var styles$2 = {"org-tree-container":"OrgTree-module_org-tree-container__3iceM","org-tree":"OrgTree-module_org-tree__1kbUq"};
styleInject(css_248z$2);

var cls$2 = classnames(styles$2);
var isInit = false;
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
      wrapperClassName = props.wrapperClassName,
      defaultExpandLevels = props.defaultExpandLevels,
      placement = props.placement,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'vertical' : _props$layout,
      defaultScale = props.defaultScale,
      _props$nodeKeys = props.nodeKeys,
      nodeKeys = _props$nodeKeys === void 0 ? _objectSpread2(_objectSpread2({}, defaultNodeKeys), props.nodeKeys) : _props$nodeKeys,
      _props$nodeKey = props.nodeKey,
      nodeKey = _props$nodeKey === void 0 ? 'id' : _props$nodeKey,
      _props$expandAll = props.expandAll,
      expandAll = _props$expandAll === void 0 ? true : _props$expandAll,
      _props$autoAdjust = props.autoAdjust,
      autoAdjust = _props$autoAdjust === void 0 ? true : _props$autoAdjust,
      offset = props.offset,
      forward = props.forward,
      toolbar = props.toolbar,
      disableWheelZoom = props.disableWheelZoom,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 10 : _props$spacing;

  var _useState = useState(Date.now),
      _useState2 = _slicedToArray(_useState, 2),
      refresh = _useState2[0],
      setRefresh = _useState2[1];

  var dragContainerRef = useRef(null);
  var expandKey = nodeKeys.expand;
  var levelKey = nodeKeys.level;
  var parentKey = '_parent';
  var style = {
    '--card-spacing': "".concat(spacing, "px")
  };
  useEffect(function () {
    if (expandAll !== void 0) {
      toogleExpandAll(props.data, expandAll, defaultExpandLevels);
      setTimeout(function () {
        var _dragContainerRef$cur;

        isInit && ((_dragContainerRef$cur = dragContainerRef.current) === null || _dragContainerRef$cur === void 0 ? void 0 : _dragContainerRef$cur.setPlacement(placement, false, defaultScale));
        isInit = true;
      }, 10);
    }

    forward && forward({
      data: props.data,
      foreUpdate: foreUpdate
    });
  }, [props.data]);

  var foreUpdate = function foreUpdate(fn) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof fn === 'function') {
      fn(props.data);
      toogleExpandAll(props.data, expandAll, defaultExpandLevels);
      return;
    }

    var refreshKey = Date.now();
    props.data.refreshKey = refreshKey;

    if (force) {
      setRefresh(refreshKey);
    }
  };

  var handleExpand = function handleExpand(e, nodeData) {
    nodeData[expandKey] = !nodeData[expandKey];

    if (!nodeData[expandKey] && nodeData.children) {
      collapse(nodeData.children);
    }

    foreUpdate(void 0, true);
  };

  var collapse = function collapse() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (childNode) {
      childNode[expandKey] = false;
      childNode.children && collapse(childNode.children);
    });
  };

  function expandAllNode(nodeData, isExpand, defaultExpandLevels) {
    nodeData[levelKey] = nodeData[levelKey] || 1;
    nodeData[expandKey] = defaultExpandLevels ? defaultExpandLevels.includes(nodeData[levelKey]) : isExpand;

    if (nodeData.children) {
      nodeData.children.forEach(function (node) {
        node[levelKey] = nodeData[levelKey] + 1;
        node[parentKey] = nodeData;
        expandAllNode(node, isExpand);
      });
    }

    return nodeData;
  }

  var toogleExpandAll = function toogleExpandAll(nodeData, isExpand, defaultExpandLevels) {
    expandAllNode(nodeData, isExpand, defaultExpandLevels);
    foreUpdate(void 0, true);
  };

  return /*#__PURE__*/React.createElement(DragableContainer$1, {
    ref: dragContainerRef,
    pan: pan,
    zoom: zoom,
    minZoom: minZoom,
    maxZoom: maxZoom,
    zoomStep: zoomStep,
    defaultTransform: defaultTransform,
    placement: placement,
    wrapperClassName: wrapperClassName,
    offset: offset,
    autoAdjust: autoAdjust,
    defaultScale: defaultScale,
    toolbar: toolbar,
    disableWheelZoom: disableWheelZoom
  }, /*#__PURE__*/React.createElement("div", {
    className: cls$2('org-tree-container'),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: cls$2('org-tree', "".concat(layout, " org-tree"))
  }, /*#__PURE__*/React.createElement(TreeNode, _objectSpread2(_objectSpread2({
    key: refresh
  }, props), {}, {
    nodeKey: nodeKey,
    placement: placement,
    layout: layout,
    nodeKeys: nodeKeys,
    expandAll: expandAll,
    onExpand: handleExpand
  })))));
}

export default OrgTree;
