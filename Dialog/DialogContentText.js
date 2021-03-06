'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.default = DialogContentText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('DialogContentText', function (theme) {
  return {
    root: _extends({}, theme.typography.subheading, {
      color: theme.palette.text.secondary,
      margin: 0
    })
  };
});

function DialogContentText(props, context) {
  var children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'className']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'p',
    _extends({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContentText.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};

DialogContentText.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};