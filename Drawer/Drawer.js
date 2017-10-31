'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Slide = require('../transitions/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  } else if (anchor === 'bottom') {
    return 'up';
  }

  return 'left';
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Drawer', function (theme) {
  return {
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      position: 'fixed',
      top: 0,
      zIndex: theme.zIndex.navDrawer,
      willChange: 'transform',
      '&:focus': {
        outline: 'none'
      },
      WebkitOverflowScrolling: 'touch' },
    docked: {
      flex: '0 0 auto',
      '& $paper': {
        borderRight: '1px solid ' + theme.palette.text.divider
      }
    },
    modal: {}
  };
});

/**
 * This is a drawer.
 */

var Drawer = function (_Component) {
  _inherits(Drawer, _Component);

  function Drawer() {
    _classCallCheck(this, Drawer);

    return _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
  }

  _createClass(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          className = _props.className,
          docked = _props.docked,
          open = _props.open,
          paperClassName = _props.paperClassName,
          zDepth = _props.zDepth,
          other = _objectWithoutProperties(_props, ['anchor', 'children', 'className', 'docked', 'open', 'paperClassName', 'zDepth']);

      var _context$styleManager = this.context.styleManager,
          dir = _context$styleManager.theme.dir,
          render = _context$styleManager.render;

      var classes = render(styleSheet);
      var rtl = dir === 'rtl';
      var anchor = anchorProp || (rtl ? 'right' : 'left');
      var slideDirection = getSlideDirection(anchor);

      var drawer = _react2.default.createElement(
        _Slide2.default,
        { 'in': open, direction: slideDirection, transitionAppear: true },
        _react2.default.createElement(
          _Paper2.default,
          {
            zDepth: docked ? 0 : zDepth,
            rounded: false,
            className: (0, _classnames2.default)(classes.paper, paperClassName)
          },
          children
        )
      );

      var containerProps = _extends({
        className: (0, _classnames2.default)(classes.modal, className)
      }, other);

      if (docked) {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.docked, className) },
          drawer
        );
      }

      return _react2.default.createElement(
        _Modal2.default,
        _extends({}, containerProps, { show: open }),
        drawer
      );
    }
  }]);

  return Drawer;
}(_react.Component);

Drawer.propTypes = {
  anchor: _react.PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * The contents of the `Drawer`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, the drawer will dock itself
   * and will no longer slide in with an overlay.
   */
  docked: _react.PropTypes.bool,
  open: _react.PropTypes.bool,
  /**
   * The CSS class name of the paper element.
   */
  paperClassName: _react.PropTypes.string,
  zDepth: _react.PropTypes.number
};
Drawer.defaultProps = {
  docked: false,
  open: false,
  zDepth: 16
};
Drawer.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Drawer;