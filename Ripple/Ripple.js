'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Ripple', function () {
  return {
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute',
      borderRadius: '50%',
      background: 'currentColor'
    },
    visible: {
      opacity: 0.3,
      transform: 'scale(1, 1)',
      animation: 'ripple-enter 550ms ' + _transitions.easing.easeInOut
    },
    fast: {
      animationDuration: '200ms'
    },
    leaving: {
      opacity: 0,
      animation: 'ripple-exit 550ms ' + _transitions.easing.easeInOut
    },
    pulsating: {
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      animation: 'ripple-pulsate 1500ms ' + _transitions.easing.easeInOut + ' 200ms infinite',
      visible: {
        opacity: 0.2
      }
    },
    '@keyframes ripple-enter': {
      '0%': {
        transform: 'scale(0.00001, 0.00001)'
      },
      '100%': {
        transform: 'scale(1, 1)'
      }
    },
    '@keyframes ripple-exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes ripple-pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.9)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
});

var Ripple = function (_Component) {
  _inherits(Ripple, _Component);

  function Ripple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Ripple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      rippleVisible: false
    }, _this.ripple = null, _this.leaveTimer = undefined, _this.start = function (callback) {
      _this.setState({
        rippleVisible: true
      }, callback);
    }, _this.stop = function () {
      _this.setState({
        rippleLeaving: true
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Ripple, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.start(callback);
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      this.stop();
      this.leaveTimer = setTimeout(function () {
        callback();
      }, 550);
    }
  }, {
    key: 'getRippleStyles',
    value: function getRippleStyles() {
      var _props = this.props,
          rippleSize = _props.rippleSize,
          rippleX = _props.rippleX,
          rippleY = _props.rippleY;


      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };

      return rippleStyles;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          pulsate = _props2.pulsate;
      var _state = this.state,
          rippleVisible = _state.rippleVisible,
          rippleLeaving = _state.rippleLeaving;

      var classes = this.context.styleManager.render(styleSheet);

      var rippleClassName = (0, _classnames2.default)(classes.ripple, (_classNames = {}, _defineProperty(_classNames, classes.visible, rippleVisible), _defineProperty(_classNames, classes.fast, pulsate), _classNames), className);

      var containerClasses = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, classes.leaving, rippleLeaving), _defineProperty(_classNames2, classes.pulsating, pulsate), _classNames2));

      var rippleStyles = this.getRippleStyles();

      return _react2.default.createElement(
        'span',
        { className: containerClasses },
        _react2.default.createElement('span', { ref: function ref(c) {
            _this2.ripple = c;
          }, className: rippleClassName, style: rippleStyles })
      );
    }
  }]);

  return Ripple;
}(_react.Component);

Ripple.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  pulsate: _react.PropTypes.bool,
  rippleSize: _react.PropTypes.number,
  rippleX: _react.PropTypes.number,
  rippleY: _react.PropTypes.number
};
Ripple.defaultProps = {
  pulsate: false
};
Ripple.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Ripple;