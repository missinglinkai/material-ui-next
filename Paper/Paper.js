'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.default = Paper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Paper', function (theme) {
  var palette = theme.palette;

  var shadows = {};

  theme.shadows.forEach(function (shadow, index) {
    shadows['dp' + index] = {
      boxShadow: shadow
    };
  });

  return _extends({
    paper: {
      backgroundColor: palette.background.paper
    },
    rounded: {
      borderRadius: '2px'
    }
  }, shadows);
});

/**
 * A piece of material paper.
 *
 * ```js
 * import Paper from 'material-ui/Paper';
 *
 * const Component = () => <Paper zDepth={8}>Hello World</Paper>;
 * ```
 */
function Paper(props, context) {
  var classNameProp = props.className,
      rounded = props.rounded,
      zDepth = props.zDepth,
      other = _objectWithoutProperties(props, ['className', 'rounded', 'zDepth']);

  var classes = context.styleManager.render(styleSheet);

  var classNameZDepth = 'dp' + (zDepth >= 0 ? zDepth : 0);
  var className = (0, _classnames2.default)(classes.paper, classes[classNameZDepth], _defineProperty({}, classes.rounded, rounded), classNameProp);

  return _react2.default.createElement('div', _extends({ className: className }, other));
}

Paper.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Set to false to disable rounded corners.
   */
  rounded: _react.PropTypes.bool,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   */
  zDepth: _react.PropTypes.number
};

Paper.defaultProps = {
  rounded: true,
  zDepth: 2
};

Paper.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};