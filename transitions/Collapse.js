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

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var reflow = function reflow(elem) {
  return elem.offsetHeight;
};

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Collapse', function (theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto',
      transitionDuration: '0ms'
    }
  };
});

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.handleEnter = function (element) {
      element.style.height = '0px';
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var transitionDuration = _this.props.transitionDuration;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration === 'auto') {
        var getAutoHeightDuration = _this.context.styleManager.theme.transitions.getAutoHeightDuration;

        element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
      } else if (typeof transitionDuration === 'number') {
        element.style.transitionDuration = transitionDuration + 'ms';
      } else {
        element.style.transitionDuration = transitionDuration;
      }

      element.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleEntered = function (element) {
      element.style.transitionDuration = '0ms'; // safari fix
      element.style.height = 'auto';
      reflow(element);
      if (_this.props.onEntered) {
        _this.props.onEntered(element);
      }
    }, _this.handleExit = function (element) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      element.style.height = wrapperHeight + 'px';
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleExiting = function (element) {
      var transitionDuration = _this.props.transitionDuration;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration) {
        if (transitionDuration === 'auto') {
          var getAutoHeightDuration = _this.context.styleManager.theme.transitions.getAutoHeightDuration;

          element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
        } else if (typeof transitionDuration === 'number') {
          element.style.transitionDuration = transitionDuration + 'ms';
        } else {
          element.style.transitionDuration = transitionDuration;
        }
      }

      element.style.height = '0px';
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          containerClassName = _props.containerClassName,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          other = _objectWithoutProperties(_props, ['children', 'containerClassName', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'transitionDuration']);

      var classes = this.context.styleManager.render(styleSheet);
      var containerClasses = (0, _classnames2.default)(classes.container, containerClassName);

      return _react2.default.createElement(
        _Transition2.default,
        _extends({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          enteredClassName: classes.entered,
          onExiting: this.handleExiting,
          onExit: this.handleExit
        }, other),
        _react2.default.createElement(
          'div',
          { className: containerClasses },
          _react2.default.createElement(
            'div',
            { ref: function ref(c) {
                _this2.wrapper = c;
              } },
            children
          )
        )
      );
    }
  }]);

  return Collapse;
}(_react.Component);

Collapse.propTypes = {
  /**
   * The content node to be collapsed.
   */
  children: _react.PropTypes.node,
  /**
   * Class name passed to the wrapping container
   * required for holding+measuring the expanding content.
   */
  containerClassName: _react.PropTypes.string,
  /**
   * Set to true to transition in.
   */
  in: _react.PropTypes.bool,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
Collapse.defaultProps = {
  in: false,
  transitionDuration: 300
};
Collapse.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Collapse;