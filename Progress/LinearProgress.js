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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('LinearProgress', function (theme) {
  var palette = theme.palette;

  var transitionDuration = 4; // 400ms

  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5,
      backgroundColor: palette.primary[100]
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    bar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      backgroundColor: palette.primary[500]
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      background: 'radial-gradient(' + palette.primary[100] + ' 0%, ' + palette.primary[100] + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px',
      animation: 'buffer 3s infinite linear'
    },
    indeterminateBar1: {
      willChange: 'left, right',
      animation: 'indeterminate-1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      willChange: 'left, right',
      animation: 'indeterminate-2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'width',
      transition: 'width .' + transitionDuration + 's linear'
    },
    determinateBar2: {
      display: 'none'
    },
    bufferBar1: {
      transition: 'width .' + transitionDuration + 's linear',
      backgroundColor: palette.primary[100]
    },
    bufferBar2: {
      transition: 'width .' + transitionDuration + 's linear'
    },
    '@keyframes indeterminate-1': {
      '0%': {
        left: '-35%',
        right: '100%'
      },
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate-2': {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    },
    '@keyframes query': {
      '0%': {
        opacity: 1,
        transform: 'translateX(35%) scale(.3, 1)'
      },
      '100%': {
        opacity: 0,
        transform: 'translateX(-50%) scale(0, 1)'
      }
    }
  };
});

var LinearProgress = function (_Component) {
  _inherits(LinearProgress, _Component);

  function LinearProgress() {
    _classCallCheck(this, LinearProgress);

    return _possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).apply(this, arguments));
  }

  _createClass(LinearProgress, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames3, _classNames4;

      var _props = this.props,
          className = _props.className,
          mode = _props.mode,
          value = _props.value,
          valueBuffer = _props.valueBuffer,
          other = _objectWithoutProperties(_props, ['className', 'mode', 'value', 'valueBuffer']);

      var classes = this.context.styleManager.render(styleSheet);
      var rootClasses = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.rootBuffer, mode === 'buffer'), _defineProperty(_classNames, classes.rootQuery, mode === 'query'), _classNames), className);
      var dashedClasses = (0, _classnames2.default)(_defineProperty({}, classes.dashed, mode === 'buffer'));
      var bar1Classes = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, _defineProperty(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), _defineProperty(_classNames3, classes.determinateBar1, mode === 'determinate'), _defineProperty(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
      var bar2Classes = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, _defineProperty(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), _defineProperty(_classNames4, classes.determinateBar2, mode === 'determinate'), _defineProperty(_classNames4, classes.bufferBar2, mode === 'buffer'), _classNames4));
      var styles = { bar1: {}, bar2: {} };

      if (mode === 'determinate') {
        styles.bar1.width = value + '%';
      } else if (mode === 'buffer') {
        styles.bar1.width = valueBuffer + '%';
        styles.bar2.width = value + '%';
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: rootClasses }, other),
        _react2.default.createElement('div', { className: dashedClasses }),
        _react2.default.createElement('div', { className: bar1Classes, style: styles.bar1 }),
        _react2.default.createElement('div', { className: bar2Classes, style: styles.bar2 })
      );
    }
  }]);

  return LinearProgress;
}(_react.Component);

LinearProgress.propTypes = {
  className: _react.PropTypes.string,
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _react.PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * The value of progress, only works in determinate and buffer mode.
   */
  value: _react.PropTypes.number,
  /**
   * The value of buffer, only works in buffer mode.
   */
  valueBuffer: _react.PropTypes.number
};
LinearProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0
};
LinearProgress.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = LinearProgress;