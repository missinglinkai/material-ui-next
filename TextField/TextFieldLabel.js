'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TextFieldLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _transitions = require('../styles/transitions');

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TextFieldLabel', function (theme) {
  return {
    root: {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: 'translate(0, 18px) scale(1)',
      transformOrigin: 'top left'
    },
    shrink: {
      transform: 'translate(0, 0px) scale(0.75)'
    },
    animated: {
      transition: theme.transitions.create('transform', '200ms', null, _transitions.easing.easeOut)
    }
  };
});

function TextFieldLabel(props, context) {
  var _classNames;

  var animated = props.animated,
      children = props.children,
      classNameProp = props.className,
      shrink = props.shrink,
      other = _objectWithoutProperties(props, ['animated', 'children', 'className', 'shrink']);

  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.animated, animated), _defineProperty(_classNames, classes.shrink, shrink), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    _extends({ className: className }, other),
    children
  );
}

TextFieldLabel.propTypes = {
  animated: _react.PropTypes.bool,
  /**
   * The contents of the `TextFieldLabel`.
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
   * Whether the input of this label is focused.
   */
  focused: _react.PropTypes.bool,
  /**
   * Whether this label should indicate that the input is required.
   */
  required: _react.PropTypes.bool,
  shrink: _react.PropTypes.bool
};

TextFieldLabel.defaultProps = {
  animated: true
};

TextFieldLabel.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};

TextFieldLabel.muiName = 'TextFieldLabel';