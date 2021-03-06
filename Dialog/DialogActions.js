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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('DialogActions', function () {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: '8px 4px',
      flex: '0 0 auto'
    },
    action: {
      margin: '0 4px'
    },
    button: {
      minWidth: '64px'
    }
  };
});

var DialogActions = function (_Component) {
  _inherits(DialogActions, _Component);

  function DialogActions() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DialogActions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DialogActions.__proto__ || Object.getPrototypeOf(DialogActions)).call.apply(_ref, [this].concat(args))), _this), _this.classes = {}, _this.renderButton = function (button) {
      return _react2.default.createElement(
        'div',
        { className: _this.classes.action },
        _react2.default.cloneElement(button, { className: (0, _classnames2.default)(_this.classes.button, button.props.className) })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DialogActions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          other = _objectWithoutProperties(_props, ['children', 'className']);

      this.classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        _extends({ 'data-mui-test': 'DialogActions', className: (0, _classnames2.default)(this.classes.root, className) }, other),
        _react2.default.Children.map(children, this.renderButton)
      );
    }
  }]);

  return DialogActions;
}(_react.Component);

DialogActions.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};
DialogActions.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = DialogActions;