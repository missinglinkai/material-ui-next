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

var _createHelper = require('recompose/createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak
/* eslint-disable jsx-a11y/label-has-for */

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('SwitchLabel', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: 16 },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'not-allowed'
    }
  };
});

function withSwitchLabel(SwitchComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(SwitchLabel, _Component);

    function SwitchLabel() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SwitchLabel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitchLabel.__proto__ || Object.getPrototypeOf(SwitchLabel)).call.apply(_ref, [this].concat(args))), _this), _this.switch = undefined, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwitchLabel, [{
      key: 'focus',
      value: function focus() {
        if (this.switch && this.switch.focus) {
          this.switch.focus();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            label = _props.label,
            labelClassNameProp = _props.labelClassName,
            other = _objectWithoutProperties(_props, ['disabled', 'label', 'labelClassName']);

        var classes = this.context.styleManager.render(styleSheet);

        var labelClassName = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.hasLabel, label && label.length), labelClassNameProp);

        var switchElement = _react2.default.createElement(SwitchComponent, _extends({
          ref: function ref(c) {
            _this2.switch = c;
          },
          disabled: disabled
        }, other));

        if (!label) {
          return switchElement;
        }

        return _react2.default.createElement(
          'label',
          { className: labelClassName },
          switchElement,
          _react2.default.createElement(
            'span',
            { className: disabled ? classes.disabled : '' },
            label
          )
        );
      }
    }]);

    return SwitchLabel;
  }(_react.Component), _class.propTypes = {
    /**
     * If `true`, the control will be disabled.
     */
    disabled: _react.PropTypes.bool,
    /**
     * The text to be used in an enclosing label element.
     */
    label: _react.PropTypes.node,
    /**
     * The className to be used in an enclosing label element.
     */
    labelClassName: _react.PropTypes.string
  }, _class.contextTypes = {
    styleManager: _react.PropTypes.object.isRequired
  }, _temp2;
}

exports.default = (0, _createHelper2.default)(withSwitchLabel, 'withSwitchLabel', true, true);