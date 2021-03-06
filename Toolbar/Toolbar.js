'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Toolbar', function (theme) {
  return _defineProperty({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: 56
    },
    gutters: theme.mixins.gutters({})
  }, theme.breakpoints.up('sm'), {
    root: {
      height: 64
    }
  });
});

function Toolbar(props, context) {
  var children = props.children,
      classNameProp = props.className,
      gutters = props.gutters,
      other = _objectWithoutProperties(props, ['children', 'className', 'gutters']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.gutters, gutters), classNameProp);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    children
  );
}

Toolbar.propTypes = {
  /**
   * Can be a `ToolbarGroup` to render a group of related items.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, enables gutter padding.
   */
  gutters: _react.PropTypes.bool
};

Toolbar.defaultProps = {
  gutters: true
};

Toolbar.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};