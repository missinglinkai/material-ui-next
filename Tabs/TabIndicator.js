'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TabIndicator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TabIndicator', function (theme) {
  return {
    root: {
      position: 'absolute',
      bottom: 0,
      height: 2,
      marginTop: -2,
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    rootAccent: {
      backgroundColor: theme.palette.accent[500]
    }
  };
});

function TabIndicator(props, context) {
  var classNameProp = props.className,
      indicatorColor = props.indicatorColor,
      styleProp = props.style;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.rootAccent, indicatorColor === 'accent'), classNameProp);

  var style = indicatorColor !== 'accent' ? _extends({}, styleProp, {
    backgroundColor: indicatorColor
  }) : styleProp;

  return _react2.default.createElement('div', { className: className, style: style });
}

TabIndicator.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  indicatorColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent']), _react.PropTypes.string]).isRequired,
  /**
   * The style of the root element.
   */
  style: _react.PropTypes.shape({
    left: _react.PropTypes.number,
    width: _react.PropTypes.number
  }).isRequired
};

TabIndicator.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};