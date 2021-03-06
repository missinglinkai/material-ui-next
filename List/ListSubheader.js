'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListSubheader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('ListSubheader', function (theme) {
  var palette = theme.palette,
      typography = theme.typography;


  return {
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      paddingLeft: 16,
      color: palette.text.secondary,
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.fontSize
    },
    primary: {
      color: palette.primary[500]
    },
    inset: {
      paddingLeft: 72
    }
  };
});

function ListSubheader(props, context) {
  var _classNames;

  var classNameProp = props.className,
      primary = props.primary,
      inset = props.inset,
      children = props.children,
      other = _objectWithoutProperties(props, ['className', 'primary', 'inset', 'children']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.primary, primary), _defineProperty(_classNames, classes.inset, inset), _classNames), classNameProp);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    children
  );
}

ListSubheader.propTypes = {
  /**
   * The content of the ListSubheader.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, the ListSubheader will be indented.
   */
  inset: _react.PropTypes.bool,
  /**
   * If `true`, the ListSubheader will have the theme primary color.
   */
  primary: _react.PropTypes.bool
};

ListSubheader.defaultProps = {
  inset: false,
  primary: false
};

ListSubheader.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};