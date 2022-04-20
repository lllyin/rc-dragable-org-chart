'use strict';

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
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
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];

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
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function classnames(styles) {
  return function (className) {
    var commonClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var classList = className.split(/\s+/);
    return (
      classList
        .map(function (name) {
          return styles[name];
        })
        .join(' ') +
      ' ' +
      commonClassName
    );
  };
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

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

var css_248z =
  ".TreeNode-module_tree-node__2gHNt {\n  display: table-cell;\n  padding-top: 20px;\n  padding-right: 10px;\n  padding-left: 10px;\n  vertical-align: top;\n}\n.TreeNode-module_tree-node__2gHNt.is-leaf  .TreeNode-module_tree-node__2gHNt.collapsed {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 19px;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt:after {\n  left: 50%;\n  border-left: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt:not(:first-child):before,\n.TreeNode-module_tree-node__2gHNt:not(:last-child):after {\n  border-top: 1px solid #ddd;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq {\n  position: relative;\n  display: inline-block;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_label__dGNlq .TreeNode-module_label-inner__nVX8y {\n  padding: 10px 15px;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  display: table;\n  padding-top: 20px;\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 0;\n  height: 20px;\n  border-left: 1px solid #ddd;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  display: table;\n  clear: both;\n  content: '';\n}\n.TreeNode-module_tree-node__2gHNt,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss {\n  position: relative;\n  margin: 0;\n  list-style-type: none;\n}\n.TreeNode-module_tree-node__2gHNt:before,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:before,\n.TreeNode-module_tree-node__2gHNt:after,\n.TreeNode-module_tree-node__2gHNt .TreeNode-module_children__3g1ss:after {\n  transition: all 0.35s;\n}\n";
var styles = {
  'tree-node': 'TreeNode-module_tree-node__2gHNt',
  label: 'TreeNode-module_label__dGNlq',
  'label-inner': 'TreeNode-module_label-inner__nVX8y',
  children: 'TreeNode-module_children__3g1ss',
};
styleInject(css_248z);

var cls = classnames(styles);

var renderDefaultContent = function renderDefaultContent(data) {
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: cls('label-inner'),
    },
    data.label,
  );
};

var renderNode = function renderNode(data, props) {
  var _props$renderContent = props.renderContent,
    renderContent = _props$renderContent === void 0 ? renderDefaultContent : _props$renderContent;
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: cls('tree-node', 'tree-node'),
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: cls('label'),
      },
      renderContent(data),
    ),
    data.children && data.children.length > 0 && renderChildren(data.children, props),
  );
};

var renderChildren = function renderChildren(children, props) {
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: cls('children'),
    },
    children &&
      (children === null || children === void 0
        ? void 0
        : children.map(function (data) {
            return renderNode(data, props);
          })),
  );
};

function TreeNode(props) {
  return renderNode(props.data, props);
}

var css_248z$1 =
  '.index-module_drag-wrapper__2qxHS .index-module_drag-container__qXc8X {\n  cursor: default;\n}\n.__dumi-default-previewer-demo {\n  overflow: hidden;\n}\n';
var styles$1 = {
  'drag-wrapper': 'index-module_drag-wrapper__2qxHS',
  'drag-container': 'index-module_drag-container__qXc8X',
};
styleInject(css_248z$1);

var cls$1 = classnames(styles$1);
var initTransform = {
  scale: 1,
  wheelDirection: 0,
  translateX: 0,
  translateY: 0,
  originX: '50%',
  originY: '50%',
};
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
    zoomStep = _props$zoomStep === void 0 ? 0.1 : _props$zoomStep;
  var containerRef = React.useRef(null);

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
    deltaY: 0,
  });
  React.useEffect(function () {
    var _containerRef$current;

    (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
      ? void 0
      : _containerRef$current.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp); // calcOriginPoint();

    return function () {
      var _containerRef$current2;

      (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0
        ? void 0
        : _containerRef$current2.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
  }, []);
  React.useEffect(
    function () {
      if (!zoom) return;
      var wheelDirection = transform.wheelDirection;

      if (wheelDirection > 0) {
        onZoomOut();
      } else if (wheelDirection < 0) {
        onZoomIn();
      }
    },
    [transform.wheelDirection, zoom],
  );

  var setTransform = function setTransform(values) {
    _setTransform(function (state) {
      var newStaste = _objectSpread2(_objectSpread2({}, state), values);

      transfromRef.current = newStaste;
      return newStaste;
    });
  }; // 计算缩放原点

  var onZoomIn = function onZoomIn() {
    _setTransform(function (state) {
      return _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          scale: state.scale >= maxZoom ? maxZoom : state.scale + zoomStep,
        },
      );
    });
  };

  var onZoomOut = function onZoomOut() {
    _setTransform(function (state) {
      return _objectSpread2(
        _objectSpread2({}, state),
        {},
        {
          scale: state.scale <= minZoom ? minZoom : state.scale - zoomStep,
        },
      );
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
      translateY: y,
    });
  };

  var handleUp = function handleUp(ev) {
    setIsMove(false);
    posRef.current.isMove = false;
  };

  var handleWheelMove = function handleWheelMove(ev) {
    ev.preventDefault();
    ev.persist();
    var wheelDirection = ev.deltaY;
    setTransform({
      wheelDirection: wheelDirection,
    });
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: cls$1('drag-wrapper'),
      onWheel: handleWheelMove,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: cls$1('drag-container'),
        ref: containerRef,
        style: {
          cursor: isMove ? 'move' : 'default',
          transform: 'translate('
            .concat(transform.translateX, 'px, ')
            .concat(transform.translateY, 'px) scale(')
            .concat(transform.scale, ')'),
          transformOrigin: ''.concat(transform.originX, 'px ').concat(transform.originY, 'px'),
        },
      },
      children,
    ),
  );
}

var css_248z$2 =
  ".OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq {\n  display: table;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:before,\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  display: table;\n  content: '';\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq:after {\n  clear: both;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node {\n  padding-top: 0;\n}\n.OrgTree-module_org-tree-container__3iceM .OrgTree-module_org-tree__1kbUq > .tree-node::after {\n  border: none;\n}\n";
var styles$2 = {
  'org-tree-container': 'OrgTree-module_org-tree-container__3iceM',
  'org-tree': 'OrgTree-module_org-tree__1kbUq',
};
styleInject(css_248z$2);

var cls$2 = classnames(styles$2);

function OrgTree(props) {
  var pan = props.pan,
    zoom = props.zoom,
    minZoom = props.minZoom,
    maxZoom = props.maxZoom,
    zoomStep = props.zoomStep,
    layout = props.layout;
  return /*#__PURE__*/ React__default['default'].createElement(
    DragableContainer,
    {
      pan: pan,
      zoom: zoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
      zoomStep: zoomStep,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: cls$2('org-tree-container'),
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: cls$2('org-tree', layout),
        },
        /*#__PURE__*/ React__default['default'].createElement(TreeNode, _objectSpread2({}, props)),
      ),
    ),
  );
}

module.exports = OrgTree;
