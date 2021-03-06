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

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('BottomNavigationButton', function (theme) {
  return {
    root: {
      transition: theme.transitions.create('color', '250ms') + ', ' + theme.transitions.create('padding-top', '250ms'),
      paddingTop: 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      background: 'none',
      color: theme.palette.text.secondary,
      flex: '1'
    },
    selected: {
      paddingTop: 6,
      color: theme.palette.primary[500]
    },
    selectedIconOnly: {
      paddingTop: 16
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize - 2,
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s'
    },
    selectedLabel: {
      fontSize: theme.typography.fontSize
    },
    hiddenLabel: {
      opacity: 0,
      transitionDelay: '0s'
    },
    icon: {
      display: 'block',
      margin: 'auto'
    }
  };
});

var BottomNavigationButton = function (_Component) {
  _inherits(BottomNavigationButton, _Component);

  function BottomNavigationButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BottomNavigationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BottomNavigationButton.__proto__ || Object.getPrototypeOf(BottomNavigationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          index = _this$props.index,
          onClick = _this$props.onClick;


      onChange(event, index);

      if (onClick) {
        onClick(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BottomNavigationButton, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          label = _props.label,
          iconProp = _props.icon,
          selected = _props.selected,
          classNameProp = _props.className,
          showLabelProp = _props.showLabel,
          onChange = _props.onChange,
          index = _props.index,
          other = _objectWithoutProperties(_props, ['label', 'icon', 'selected', 'className', 'showLabel', 'onChange', 'index']);

      var classes = this.context.styleManager.render(styleSheet);

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.selected, selected), _defineProperty(_classNames, classes.selectedIconOnly, !showLabelProp && !selected), _classNames), classNameProp);

      var iconClassName = (0, _classnames2.default)(classes.icon, (0, _react.isValidElement)(iconProp) ? iconProp.props.className : null);

      var icon = (0, _react.isValidElement)(iconProp) ? (0, _react.cloneElement)(iconProp, { className: iconClassName }) : _react2.default.createElement(
        'span',
        { className: 'material-icons' },
        iconProp
      );

      var labelClassName = (0, _classnames2.default)(classes.label, (_classNames2 = {}, _defineProperty(_classNames2, classes.selectedLabel, selected), _defineProperty(_classNames2, classes.hiddenLabel, !showLabelProp && !selected), _classNames2));

      return _react2.default.createElement(
        _ButtonBase2.default,
        _extends({
          className: className,
          focusRipple: true
        }, other, {
          onClick: this.handleChange
        }),
        icon,
        _react2.default.createElement(
          'span',
          { className: labelClassName },
          label
        )
      );
    }
  }]);

  return BottomNavigationButton;
}(_react.Component);

BottomNavigationButton.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The icon element. If a string is passed, it will be used as a material icon font ligature.
   */
  icon: _react.PropTypes.node,
  /**
   * @ignore
   */
  index: _react.PropTypes.number,
  /**
   * The label element.
   */
  label: _react.PropTypes.node,
  /**
   * @ignore
   */
  onChange: _react.PropTypes.func,
  /**
   * @ignore
   */
  onClick: _react.PropTypes.func,
  /**
   * @ignore
   */
  selected: _react.PropTypes.bool,
  /**
   * If `true`, the BottomNavigationButton will show his label.
   */
  showLabel: _react.PropTypes.bool
};
BottomNavigationButton.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = BottomNavigationButton;