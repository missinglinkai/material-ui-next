'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ListItem = require('../List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('MenuItem', function (theme) {
  var palette = theme.palette,
      typography = theme.typography,
      transitions = theme.transitions;

  return {
    root: _extends({}, typography.subheading, {
      height: 48,
      background: 'none',
      transition: transitions.create('background-color', '250ms'),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:focus': {
        background: palette.text.divider
      },
      '&:hover': {
        backgroundColor: palette.text.divider
      }
    }),
    selected: {
      backgroundColor: palette.text.divider
    }
  };
});

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNameProp = _props.className,
          selected = _props.selected,
          role = _props.role,
          other = _objectWithoutProperties(_props, ['className', 'selected', 'role']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.selected, selected), classNameProp);

      return _react2.default.createElement(_ListItem2.default, _extends({
        button: true,
        role: role,
        tabIndex: '-1',
        className: className,
        ripple: false
      }, other));
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  /**
   * Menu item contents.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * @ignore
   */
  role: _react.PropTypes.string,
  /**
   * Use to apply selected styling.
   */
  selected: _react.PropTypes.bool
};
MenuItem.defaultProps = {
  role: 'menuitem',
  selected: false
};
MenuItem.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = MenuItem;