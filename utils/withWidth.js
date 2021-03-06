'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWidthDown = exports.isWidthUp = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _createHelper = require('recompose/createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _breakpoints = require('../styles/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var isWidthUp = exports.isWidthUp = function isWidthUp(baseWidth, width) {
  return _breakpoints.keys.indexOf(baseWidth) <= _breakpoints.keys.indexOf(width);
};

var isWidthDown = exports.isWidthDown = function isWidthDown(baseWidth, width) {
  return _breakpoints.keys.indexOf(baseWidth) > _breakpoints.keys.indexOf(width);
};

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


  return function (BaseComponent) {
    var _class, _temp2;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    return _temp2 = _class = function (_Component) {
      _inherits(WithWidth, _Component);

      function WithWidth() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, WithWidth);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithWidth.__proto__ || Object.getPrototypeOf(WithWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: null
        }, _this.deferTimer = null, _this.handleResize = function () {
          clearTimeout(_this.deferTimer);
          _this.deferTimer = setTimeout(function () {
            _this.updateWidth(window.innerWidth);
          }, resizeInterval);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(WithWidth, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth(window.innerWidth);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.deferTimer);
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth(innerWidth) {
          var breakpoints = this.context.theme.breakpoints;
          var width = null;

          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |0      xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|-------|------>
           * width      |  xs   |  xs   |  sm   |  md   |  lg   |  xl
           */
          var index = 1;
          while (width === null && index < breakpoints.keys.length) {
            var currentWidth = breakpoints.keys[index];

            if (innerWidth < breakpoints.getWidth(currentWidth)) {
              width = breakpoints.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var width = this.state.width;

          /**
           * When rendering the component on the server,
           * we have no idea about the screen width.
           * In order to prevent blinks and help the reconciliation
           * we are not rendering the component.
           *
           * A better alternative would be to send client hints.
           * But the browser support of this API is low:
           * http://caniuse.com/#search=client%20hint
           */
          if (width === null) {
            return null;
          }

          return _react2.default.createElement(
            _reactEventListener2.default,
            { target: 'window', onResize: this.handleResize },
            factory(_extends({
              width: width
            }, this.props))
          );
        }
      }]);

      return WithWidth;
    }(_react.Component), _class.contextTypes = {
      theme: _react.PropTypes.object.isRequired
    }, _temp2;
  };
}

exports.default = (0, _createHelper2.default)(withWidth, 'withWidth');