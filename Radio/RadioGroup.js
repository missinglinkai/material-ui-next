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

var _FormGroup = require('../Form/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('RadioGroup', function () {
  return {
    root: {
      flex: '1 1 auto',
      margin: 0,
      padding: 0
    }
  };
});

var RadioGroup = function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.radios = undefined, _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.props.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = (0, _helpers.find)(focusRadios, function (n) {
        return n.props.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    }, _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classNameProp = _props.className,
          name = _props.name,
          selectedValue = _props.selectedValue,
          onChange = _props.onChange,
          other = _objectWithoutProperties(_props, ['children', 'className', 'name', 'selectedValue', 'onChange']);

      var classes = this.context.styleManager.render(styleSheet);

      this.radios = [];

      return _react2.default.createElement(
        _FormGroup2.default,
        _extends({
          className: (0, _classnames2.default)(classes.root, classNameProp),
          'data-mui-test': 'RadioGroup',
          role: 'radiogroup'
        }, other),
        _react.Children.map(children, function (child, index) {
          var selected = selectedValue === child.props.value;
          return (0, _react.cloneElement)(child, {
            key: index,
            name: name,
            ref: function ref(c) {
              _this2.radios.push(c);
            },
            checked: selected,
            onChange: _this2.handleRadioChange
          });
        })
      );
    }
  }]);

  return RadioGroup;
}(_react.Component);

RadioGroup.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  name: _react.PropTypes.string,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  selectedValue: _react.PropTypes.string
};
RadioGroup.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = RadioGroup;