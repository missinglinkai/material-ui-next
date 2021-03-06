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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Ripple = require('./Ripple');

var _Ripple2 = _interopRequireDefault(_Ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TouchRipple', function () {
  return {
    root: {
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 0
    }
  };
});

var TouchRipple = function (_Component) {
  _inherits(TouchRipple, _Component);

  function TouchRipple() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TouchRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      nextKey: 0,
      ripples: []
    }, _this.lastRipple = null, _this.ignoringMouseDown = false, _this.pulsate = function () {
      _this.start({}, { pulsate: true });
    }, _this.start = function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments[2];
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === undefined ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === undefined ? _this.props.center || options.pulsate : _options$center;


      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = false;
        return;
      }

      if (event.type === 'touchstart') {
        _this.ignoringMouseDown = true;
      }

      var ripples = _this.state.ripples;

      var elem = _reactDom2.default.findDOMNode(_this);
      var rect = elem ? elem.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };

      // Get the size of the ripple
      var rippleX = void 0;
      var rippleY = void 0;
      var rippleSize = void 0;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3);
      } else {
        var sizeX = Math.max(Math.abs((elem ? elem.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((elem ? elem.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      }

      // Add a ripple to the ripples array
      ripples = [].concat(_toConsumableArray(ripples), [_react2.default.createElement(_Ripple2.default, {
        ref: function ref(c) {
          _this.lastRipple = c;
        },
        key: _this.state.nextKey,
        center: center,
        event: event,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);

      _this.setState({
        nextKey: _this.state.nextKey + 1,
        ripples: ripples
      }, cb);
    }, _this.stop = function (event, cb) {
      var ripples = _this.state.ripples;

      if (ripples && ripples.length) {
        _this.setState({
          ripples: ripples.slice(1)
        }, cb);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TouchRipple, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // Pre-render the ripple styles
      this.context.styleManager.render(_Ripple.styleSheet);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context.theme, nextContext.theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          center = _props.center,
          className = _props.className,
          other = _objectWithoutProperties(_props, ['center', 'className']);

      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        _reactAddonsTransitionGroup2.default,
        _extends({
          component: 'span',
          transitionEnterTimeout: 550,
          transitionLeaveTimeout: 550,
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        this.state.ripples
      );
    }
  }]);

  return TouchRipple;
}(_react.Component);

TouchRipple.propTypes = {
  center: _react.PropTypes.bool,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};
TouchRipple.contextTypes = {
  theme: _react.PropTypes.object.isRequired,
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = TouchRipple;