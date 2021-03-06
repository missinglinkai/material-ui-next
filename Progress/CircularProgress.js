'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var THICKNESS = 3.6;
var PI = 3.1415; // Simple version of Math.PI for the css generated.

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('CircularProgress', function (theme) {
  return {
    root: {
      display: 'inline-block',
      color: theme.palette.primary[500]
    },
    svg: {
      // The main animation is loop 4 times (4 / 3 * 1300).
      animation: 'rotate-progress-circle 1733ms linear infinite'
    },
    circle: {
      strokeDasharray: '1, calc((100% - 3px) * 3.141)',
      strokeDashoffset: '0%',
      stroke: 'currentColor',
      strokeLinecap: 'square',
      transition: theme.transitions.create('all', '1.30s'),
      animation: 'scale-progress-circle 1300ms ' + _transitions.easing.easeInOut + ' infinite'
    },
    '@keyframes rotate-progress-circle': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes scale-progress-circle': {
      '8%': {
        strokeDasharray: '1, calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 0
      },
      '50%, 58%': {
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((25% - ' + THICKNESS + 'px) * -' + PI + ')'
      },
      '100%': {
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((99% - ' + THICKNESS + 'px) * -' + PI + ')'
      }
    }
  };
});

var CircularProgress = function (_Component) {
  _inherits(CircularProgress, _Component);

  function CircularProgress() {
    _classCallCheck(this, CircularProgress);

    return _possibleConstructorReturn(this, (CircularProgress.__proto__ || Object.getPrototypeOf(CircularProgress)).apply(this, arguments));
  }

  _createClass(CircularProgress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          mode = _props.mode,
          size = _props.size,
          other = _objectWithoutProperties(_props, ['className', 'mode', 'size']);

      var classes = this.context.styleManager.render(styleSheet);
      var radius = size / 2;

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)(classes.root, className),
          style: { width: size, height: size }
        }, other),
        _react2.default.createElement(
          'svg',
          { className: classes.svg, viewBox: '0 0 ' + size + ' ' + size },
          _react2.default.createElement('circle', {
            className: classes.circle,
            cx: radius,
            cy: radius,
            r: radius - THICKNESS / 2,
            fill: 'none',
            strokeWidth: THICKNESS,
            strokeMiterlimit: '20'
          })
        )
      );
    }
  }]);

  return CircularProgress;
}(_react.Component);

CircularProgress.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate']),
  /**
   * The size of the circle.
   */
  size: _react.PropTypes.number,
  /**
   * The value of progress, only works in determinate mode.
   */
  value: _react.PropTypes.number
};
CircularProgress.defaultProps = {
  mode: 'indeterminate',
  size: 40
};
CircularProgress.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = CircularProgress;