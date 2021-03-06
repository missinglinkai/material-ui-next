'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('FormLabel', function (theme) {
  var focusColor = theme.palette.accent.A200;
  return {
    root: {
      color: theme.palette.text.secondary,
      lineHeight: 1
    },
    focused: {
      color: focusColor
    },
    error: {
      color: theme.palette.error[500]
    }
  };
});

function FormLabel(props, context) {
  var _classNames;

  var children = props.children,
      classNameProp = props.className,
      errorProp = props.error,
      focusedProp = props.focused,
      requiredProp = props.required,
      other = _objectWithoutProperties(props, ['children', 'className', 'error', 'focused', 'required']);

  var muiFormControl = context.muiFormControl,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var required = requiredProp;
  var focused = focusedProp;
  var error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }
    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }
    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.focused, focused), _defineProperty(_classNames, classes.error, error), _classNames), classNameProp);

  var asteriskClassName = (0, _classnames2.default)(_defineProperty({}, classes.error, error));

  return _react2.default.createElement(
    'label',
    _extends({ className: className }, other),
    children,
    required && _react2.default.createElement(
      'span',
      { className: asteriskClassName, 'data-mui-test': 'FormLabelAsterisk' },
      '\u2009*'
    )
  );
}

FormLabel.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  /**
   * Whether the input of this label is focused (used by `Group` components).
   */
  focused: _react.PropTypes.bool,
  /**
   * Whether this label should indicate that the input.
   * is required.
   */
  required: _react.PropTypes.bool
};

FormLabel.contextTypes = {
  muiFormControl: _react.PropTypes.object,
  styleManager: _react.PropTypes.object.isRequired
};