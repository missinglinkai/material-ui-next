'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _Input = require('../Input');

var _FormControl = require('../Form/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

/**
 * TextField
 *
 * @see https://material.google.com/components/text-fields.html
 *
 * ```js
 * import TextField from 'material-ui/TextField';
 *
 * const Component = () => <TextField value="Hello World">;
 * ```
 */
var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.context.styleManager.theme, nextContext.styleManager.theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          className = _props.className,
          inputClassName = _props.inputClassName,
          label = _props.label,
          labelClassName = _props.labelClassName,
          required = _props.required,
          other = _objectWithoutProperties(_props, ['error', 'className', 'inputClassName', 'label', 'labelClassName', 'required']);

      return _react2.default.createElement(
        _FormControl2.default,
        {
          className: className,
          error: error,
          required: required
        },
        label && _react2.default.createElement(
          _Input.InputLabel,
          { className: labelClassName },
          label
        ),
        _react2.default.createElement(_Input.Input, _extends({ className: inputClassName }, other))
      );
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  /*
   * @ignore
   */
  id: _react.PropTypes.string,
  /**
   * The CSS class name of the input element.
   */
  inputClassName: _react.PropTypes.string,
  /**
   * The label text.
   */
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  /**
   * The CSS class name of the label element.
   */
  labelClassName: _react.PropTypes.string,
  /**
   * Whether the label should be displayed as required (asterisk).
   */
  required: _react.PropTypes.bool
};
TextField.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = TextField;