'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FormGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('FormGroup', function () {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row'
    }
  };
});

/**
 * FormGroup wraps controls such as Checkbox and Switch.  It provides compact row layout and FormLabel
 * awareness.  Upon focusing on one of the child controls, it will propagate `focused` to the label.
 */
function FormGroup(props, context) {
  var className = props.className,
      children = props.children,
      row = props.row,
      other = _objectWithoutProperties(props, ['className', 'children', 'row']);

  var classes = context.styleManager.render(styleSheet);
  var rootClassName = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.row, row), className);

  return _react2.default.createElement(
    'div',
    _extends({ className: rootClassName }, other),
    children
  );
}

FormGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Display group of elements in a compact row.
   */
  row: _react.PropTypes.bool
};

FormGroup.defaultProps = {
  row: false
};

FormGroup.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};