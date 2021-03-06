'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Divider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Divider', function (theme) {
  var palette = theme.palette;


  return {
    root: {
      height: 1,
      margin: '0 -1px 0 0',
      border: 'none'
    },
    default: {
      backgroundColor: palette.text.divider
    },
    inset: {
      marginLeft: 72
    },
    light: {
      backgroundColor: palette.text.lightDivider
    },
    absolute: {
      margin: 0,
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  };
});

function Divider(props, context) {
  var _classNames;

  var absolute = props.absolute,
      classNameProp = props.className,
      inset = props.inset,
      light = props.light,
      other = _objectWithoutProperties(props, ['absolute', 'className', 'inset', 'light']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.absolute, absolute), _defineProperty(_classNames, classes.inset, inset), _defineProperty(_classNames, light ? classes.light : classes.default, true), _classNames), classNameProp);

  return _react2.default.createElement('hr', _extends({ className: className }, other));
}

Divider.propTypes = {
  absolute: _react.PropTypes.bool,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _react.PropTypes.bool,
  light: _react.PropTypes.bool
};

Divider.defaultProps = {
  absolute: false,
  inset: false,
  light: false
};

Divider.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};