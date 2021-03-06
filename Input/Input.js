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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

function isDirty(obj) {
  return obj && obj.value && obj.value.length > 0;
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Input', function (theme) {
  return {
    wrapper: {
      display: 'flex',
      position: 'relative'
    },
    formControl: {
      marginTop: 10,
      marginBottom: 10
    },
    inkbar: {
      '&:after': {
        backgroundColor: theme.palette.accent.A200,
        left: 0,
        bottom: -1,
        // Doing the other way around crash on IE11 "''"" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        width: '100%',
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', '200ms', null, _transitions.easing.easeOut)
      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      }
    },
    focused: {},
    error: {
      '&:after': {
        backgroundColor: theme.palette.error[500],
        transform: 'scaleX(1)' }
    },
    input: {
      font: 'inherit',
      padding: '6px 0',
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      lineHeight: 1,
      appearance: 'textfield', // Improve type search style.
      color: theme.palette.text.primary,
      '&:focus': {
        outline: 0
      },
      '&::-webkit-search-decoration': { // Remove the padding when type=search.
        appearance: 'none'
      }
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed'
    },
    underline: {
      borderBottom: '1px solid ' + theme.palette.text.divider,
      '&$disabled': {
        borderBottomStyle: 'dotted'
      }
    }
  };
});

/**
 * Input
 */

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.input = null, _this.focus = function () {
      return _this.input.focus();
    }, _this.handleFocus = function (event) {
      _this.setState({ focused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ focused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleChange = function (event) {
      if (!_this.isControlled()) {
        _this.checkDirty(_this.input);
      }
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.isControlled()) {
        this.checkDirty(this.props);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.isControlled()) {
        this.checkDirty(this.input);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.isControlled()) {
        this.checkDirty(nextProps);
      }
    }

    // Holds the input reference

  }, {
    key: 'isControlled',
    value: function isControlled() {
      return typeof this.props.value === 'string';
    }
  }, {
    key: 'checkDirty',
    value: function checkDirty(obj) {
      var muiFormControl = this.context.muiFormControl;


      if (isDirty(obj)) {
        if (muiFormControl && muiFormControl.onDirty) {
          muiFormControl.onDirty();
        }
        if (this.props.onDirty) {
          this.props.onDirty();
        }
        return;
      }

      if (muiFormControl && muiFormControl.onClean) {
        muiFormControl.onClean();
      }
      if (this.props.onClean) {
        this.props.onClean();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _props = this.props,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          inputClassNameProp = _props.inputClassName,
          disabled = _props.disabled,
          errorProp = _props.error,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          underline = _props.underline,
          other = _objectWithoutProperties(_props, ['className', 'component', 'inputClassName', 'disabled', 'error', 'onBlur', 'onFocus', 'onChange', 'underline']);

      var _context = this.context,
          muiFormControl = _context.muiFormControl,
          styleManager = _context.styleManager;

      var classes = styleManager.render(styleSheet);

      var error = errorProp;

      if (typeof error === 'undefined' && muiFormControl) {
        error = muiFormControl.error;
      }

      var wrapperClassName = (0, _classnames2.default)(classes.wrapper, (_classNames = {}, _defineProperty(_classNames, classes.formControl, muiFormControl), _defineProperty(_classNames, classes.inkbar, underline), _defineProperty(_classNames, classes.focused, this.state.focused), _defineProperty(_classNames, classes.error, error), _classNames), classNameProp);

      var inputClassName = (0, _classnames2.default)(classes.input, (_classNames2 = {}, _defineProperty(_classNames2, classes.underline, underline), _defineProperty(_classNames2, classes.disabled, disabled), _classNames2), inputClassNameProp);

      var required = muiFormControl && muiFormControl.required === true;

      return _react2.default.createElement(
        'div',
        { className: wrapperClassName },
        _react2.default.createElement(ComponentProp, _extends({
          ref: function ref(c) {
            _this2.input = c;
          },
          className: inputClassName,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          disabled: disabled,
          'aria-required': required ? true : undefined
        }, other))
      );
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  /**
   * The CSS class name of the wrapper element.
   */
  className: _react.PropTypes.string,
  /**
   * The element or component used for the root node.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  disabled: _react.PropTypes.bool,
  error: _react.PropTypes.bool,
  /**
   * The CSS class name of the input element.
   */
  inputClassName: _react.PropTypes.string,
  /**
   * @ignore
   */
  onBlur: _react.PropTypes.func,
  /**
   * @ignore
   */
  onChange: _react.PropTypes.func,
  /**
   * @ignore
   */
  onClean: _react.PropTypes.func,
  /**
   * @ignore
   */
  onDirty: _react.PropTypes.func,
  /**
   * @ignore
   */
  onFocus: _react.PropTypes.func,
  /**
   * Input type.
   */
  type: _react.PropTypes.string,
  /**
   * If set to true, the input will have an underline.
   */
  underline: _react.PropTypes.bool,
  /**
   * The input value, required for a controlled component.
   */
  value: _react.PropTypes.string
};
Input.defaultProps = {
  component: 'input',
  type: 'text',
  underline: true
};
Input.contextTypes = {
  muiFormControl: _react.PropTypes.object,
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Input;