'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop_types');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

function getTranslateValue(props, element) {
  var direction = props.direction;

  var rect = element.getBoundingClientRect();

  if (direction === 'left') {
    return 'translate3d(' + (rect.right + rect.width) + 'px, 0, 0)';
  } else if (direction === 'right') {
    return 'translate3d(' + (0 - (rect.left + rect.width)) + 'px, 0, 0)';
  } else if (direction === 'up') {
    return 'translate3d(0, ' + (rect.bottom + rect.height) + 'px, 0)';
  } else if (direction === 'down') {
    return 'translate3d(0, ' + (0 - (rect.top + rect.height)) + 'px, 0)';
  }

  return 'translate3d(0, 0, 0)';
}

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slide.__proto__ || Object.getPrototypeOf(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (element) {
      element.style.transform = getTranslateValue(_this.props, element);
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var transitions = _this.context.theme.transitions;

      element.style.transition = transitions.create('transform', _this.props.transitionDuration + 'ms');
      element.style.transform = 'translate3d(0, 0, 0)';
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExiting = function (element) {
      element.style.transform = getTranslateValue(_this.props, element);
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slide, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          offset = _props.offset,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          other = _objectWithoutProperties(_props, ['children', 'offset', 'onEnter', 'onEntering', 'onExiting', 'transitionDuration']);

      return _react2.default.createElement(
        _Transition2.default,
        _extends({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExiting: this.handleExiting,
          timeout: 500,
          transitionAppear: true
        }, other),
        children
      );
    }
  }]);

  return Slide;
}(_react.Component);

Slide.propTypes = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _propTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes.string,
  direction: _propTypes.oneOf(['left', 'right', 'up', 'down']),
  /**
   * Set to slide in by a fixed number of pixels or %.
   */
  offset: _propTypes.string,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes.func, // eslint-disable-line react/sort-prop-types
  transitionDuration: _propTypes.number
};
Slide.defaultProps = {
  direction: 'down',
  transitionDuration: 300
};
Slide.contextTypes = {
  theme: _propTypes.object.isRequired
};
exports.default = Slide;