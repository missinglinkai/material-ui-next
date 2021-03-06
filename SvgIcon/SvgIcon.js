'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SvgIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('SvgIcon', function (theme) {
  return {
    svgIcon: {
      display: 'inline-block',
      fill: 'currentColor',
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: theme.transitions.create('fill', '200ms')
    }
  };
});

function SvgIcon(props, context) {
  var children = props.children,
      classNameProp = props.className,
      viewBox = props.viewBox,
      other = _objectWithoutProperties(props, ['children', 'className', 'viewBox']);

  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(_defineProperty({}, classes.svgIcon, true), classNameProp);

  return _react2.default.createElement(
    'svg',
    _extends({
      className: className,
      viewBox: viewBox
    }, other),
    children
  );
}

SvgIcon.muiName = 'SvgIcon';

SvgIcon.propTypes = {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _react.PropTypes.string
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

SvgIcon.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};