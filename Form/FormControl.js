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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('FormControl', function () {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    },
    row: {
      flexDirection: 'row'
    }
  };
});

/**
 * FormControl - provides context such as dirty/focused/error/required for form inputs
 */

var FormControl = function (_Component) {
  _inherits(FormControl, _Component);

  function FormControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dirty: false,
      focused: false
    }, _this.handleFocus = function () {
      if (!_this.state.focused) {
        _this.setState({ focused: true });
      }
    }, _this.handleBlur = function () {
      if (_this.state.focused) {
        _this.setState({ focused: false });
      }
    }, _this.handleDirty = function () {
      if (!_this.state.dirty) {
        _this.setState({ dirty: true });
      }
    }, _this.handleClean = function () {
      if (_this.state.dirty) {
        _this.setState({ dirty: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormControl, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          error = _props.error,
          required = _props.required;
      var _state = this.state,
          dirty = _state.dirty,
          focused = _state.focused;


      return {
        muiFormControl: {
          dirty: dirty,
          error: error,
          focused: focused,
          required: required,
          onDirty: this.handleDirty,
          onClean: this.handleClean
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          error = _props2.error,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'error']);

      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        'div',
        _extends({
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: (0, _classnames2.default)(classes.root, className)
        }, other),
        children
      );
    }
  }]);

  return FormControl;
}(_react.Component);

FormControl.propTypes = {
  /**
   * The contents of the `FormControl`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Whether the label should be displayed in an error state.
   */
  error: _react.PropTypes.bool,
  required: _react.PropTypes.bool
};
FormControl.defaultProps = {
  error: false,
  required: false
};
FormControl.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
FormControl.childContextTypes = {
  muiFormControl: _react.PropTypes.object.isRequired
};
exports.default = FormControl;