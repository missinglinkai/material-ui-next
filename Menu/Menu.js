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

var _reactDom = require('react-dom');

var _jssThemeReactor = require('jss-theme-reactor');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _Popover = require('../internal/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _MenuList = require('./MenuList');

var _MenuList2 = _interopRequireDefault(_MenuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Menu', function () {
  return {
    popover: {
      maxHeight: 250
    }
  };
});

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.menuList = undefined, _this.handleEnter = function (element) {
      var list = (0, _reactDom.findDOMNode)(_this.menuList);

      if (_this.menuList && _this.menuList.selectedItem) {
        (0, _reactDom.findDOMNode)(_this.menuList.selectedItem).focus(); // eslint-disable-line react/no-find-dom-node
      } else if (list) {
        list.firstChild.focus();
      }

      if (list && element.clientHeight < list.clientHeight) {
        var size = (0, _scrollbarSize2.default)() + 'px';
        list.style.paddingRight = size;
        list.style.width = 'calc(100% + ' + size + ')';
      }

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleListKeyDown = function (event, key) {
      if (key === 'tab') {
        event.preventDefault();
        return _this.props.onRequestClose();
      }

      return false;
    }, _this.getContentAnchorEl = function () {
      if (!_this.menuList || !_this.menuList.selectedItem) {
        return (0, _reactDom.findDOMNode)(_this.menuList).firstChild;
      }

      return (0, _reactDom.findDOMNode)(_this.menuList.selectedItem);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchorEl = _props.anchorEl,
          children = _props.children,
          className = _props.className,
          open = _props.open,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestClose = _props.onRequestClose,
          transitionDuration = _props.transitionDuration,
          other = _objectWithoutProperties(_props, ['anchorEl', 'children', 'className', 'open', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'transitionDuration']);

      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        _Popover2.default,
        {
          anchorEl: anchorEl,
          getContentAnchorEl: this.getContentAnchorEl,
          className: classes.popover,
          open: open,
          enteredClassName: classes.entered,
          onEnter: this.handleEnter,
          onEntering: onEntering,
          onEntered: onEntered,
          onExiting: onExiting,
          onExit: onExit,
          onExited: onExited,
          onRequestClose: onRequestClose,
          transitionDuration: transitionDuration
        },
        _react2.default.createElement(
          _MenuList2.default,
          _extends({
            'data-mui-test': 'Menu',
            role: 'menu',
            ref: function ref(c) {
              _this2.menuList = c;
            },
            className: className,
            onKeyDown: this.handleListKeyDown
          }, other),
          children
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  /**
   * This is the DOM element that will be
   * used to set the position of the menu.
   */
  anchorEl: _react.PropTypes.object,
  /**
   * Menu contents, should be menu items.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Callback fired before the Menu is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the Menu is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback function fired when the menu is requested to be closed.
   *
   * @param {event} event The event that triggered the close request
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * If `true`, the menu is visible.
   */
  open: _react.PropTypes.bool,
  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Menu.defaultProps = {
  open: false,
  transitionDuration: 'auto'
};
Menu.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Menu;