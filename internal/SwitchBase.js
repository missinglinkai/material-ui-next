'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createSwitch = createSwitch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _checkBoxOutlineBlank = require('../svg-icons/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('SwitchBase', function () {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'none'
    },
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0
    }
  };
});

function createSwitch() {
  var _class, _temp2;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultIcon = _ref.defaultIcon,
      defaultIcon = _ref$defaultIcon === undefined ? _react2.default.createElement(_checkBoxOutlineBlank2.default, { 'aria-hidden': 'true' }) : _ref$defaultIcon,
      _ref$defaultCheckedIc = _ref.defaultCheckedIcon,
      defaultCheckedIcon = _ref$defaultCheckedIc === undefined ? _react2.default.createElement(_checkBox2.default, { 'aria-hidden': 'true' }) : _ref$defaultCheckedIc,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === undefined ? 'checkbox' : _ref$inputType,
      switchStyleSheet = _ref.styleSheet;

  return _temp2 = _class = function (_Component) {
    _inherits(SwitchBase, _Component);

    function SwitchBase() {
      var _ref2;

      var _temp, _this, _ret;

      _classCallCheck(this, SwitchBase);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SwitchBase.__proto__ || Object.getPrototypeOf(SwitchBase)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {}, _this.input = undefined, _this.button = undefined, _this.isControlled = undefined, _this.focus = function () {
        return _this.input.focus();
      }, _this.handleInputChange = function (event) {
        var newChecked = void 0;

        if (_this.isControlled) {
          newChecked = !_this.props.checked;
        } else {
          newChecked = !_this.state.checked;
          if (_this.input && _this.input.checked !== newChecked) {
            _this.input.checked = newChecked;
          }
          _this.setState({ checked: !_this.state.checked });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, newChecked);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwitchBase, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var props = this.props;


        this.isControlled = props.checked !== undefined;

        if (!this.isControlled) {
          // not controlled, use internal state
          this.setState({ checked: props.defaultChecked !== undefined ? props.defaultChecked : false });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            checkedProp = _props.checked,
            classNameProp = _props.className,
            checkedClassName = _props.checkedClassName,
            checkedIcon = _props.checkedIcon,
            disabled = _props.disabled,
            disabledClassName = _props.disabledClassName,
            iconProp = _props.icon,
            name = _props.name,
            onChange = _props.onChange,
            ripple = _props.ripple,
            tabIndex = _props.tabIndex,
            value = _props.value,
            other = _objectWithoutProperties(_props, ['checked', 'className', 'checkedClassName', 'checkedIcon', 'disabled', 'disabledClassName', 'icon', 'name', 'onChange', 'ripple', 'tabIndex', 'value']);

        var checked = this.isControlled ? checkedProp : this.state.checked;
        var classes = this.context.styleManager.render(styleSheet);
        var switchClasses = switchStyleSheet ? this.context.styleManager.render(switchStyleSheet) : {};

        var className = (0, _classnames2.default)(classes.root, switchClasses.default, classNameProp, (_classNames = {}, _defineProperty(_classNames, (0, _classnames2.default)(switchClasses.checked, checkedClassName), checked), _defineProperty(_classNames, (0, _classnames2.default)(switchClasses.disabled, disabledClassName), disabled), _classNames));

        var icon = checked ? checkedIcon : iconProp;

        if (typeof icon === 'string') {
          icon = _react2.default.createElement(
            'span',
            { className: 'material-icons', 'aria-hidden': 'true' },
            icon
          );
        }

        return _react2.default.createElement(
          _IconButton2.default,
          _extends({
            'data-mui-test': 'SwitchBase',
            component: 'span',
            buttonRef: function buttonRef(c) {
              _this2.button = c;
            },
            className: className,
            disabled: disabled,
            ripple: ripple,
            tabIndex: null,
            role: undefined
          }, other),
          icon,
          _react2.default.createElement('input', {
            ref: function ref(c) {
              _this2.input = c;
            },
            type: inputType,
            name: name,
            checked: this.isControlled ? checkedProp : undefined,
            onChange: this.handleInputChange,
            className: classes.input,
            disabled: disabled,
            tabIndex: tabIndex,
            value: value
          })
        );
      }
    }]);

    return SwitchBase;
  }(_react.Component), _class.propTypes = {
    /**
     * SwitchBase is checked if true.
     */
    checked: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
    /**
     * The CSS class name of the root element when checked.
     */
    checkedClassName: _react.PropTypes.string,
    checkedIcon: _react.PropTypes.node,
    /**
     * The CSS class name of the root element.
     */
    className: _react.PropTypes.string,
    /**
     * @ignore
     */
    defaultChecked: _react.PropTypes.bool,
    /**
     * If `true`, the switch will be disabled.
     */
    disabled: _react.PropTypes.bool,
    /**
     * The CSS class name of the root element when disabled.
     */
    disabledClassName: _react.PropTypes.string,
    icon: _react.PropTypes.node,
    /*
     * @ignore
     */
    name: _react.PropTypes.string,
    /**
     * Callback function that is fired when the switch is changed.
     *
     * @param {object} event `change` event
     * @param {boolean} checked The `checked` value of the switch
     */
    onChange: _react.PropTypes.func,
    /**
     * If false, the ripple effect will be disabled.
     */
    ripple: _react.PropTypes.bool,
    /**
     * @ignore
     */
    tabIndex: _react.PropTypes.string,
    value: _react.PropTypes.string
  }, _class.defaultProps = {
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon
  }, _class.contextTypes = {
    styleManager: _react.PropTypes.object.isRequired
  }, _temp2;
}