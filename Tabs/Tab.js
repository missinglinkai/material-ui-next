'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Tab', function (theme) {
  var _extends2;

  return {
    root: _extends({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72
    }, _defineProperty(_extends2, theme.breakpoints.up('md'), {
      minWidth: 160
    }), _defineProperty(_extends2, 'background', 'none'), _defineProperty(_extends2, 'padding', 0), _defineProperty(_extends2, 'minHeight', 48), _extends2)),
    rootLabelIcon: {
      minHeight: 72
    },
    rootAccent: {
      color: theme.palette.text.secondary
    },
    rootAccentSelected: {
      color: theme.palette.accent[500]
    },
    rootInherit: {
      color: 'inherit',
      opacity: 0.7
    },
    rootInheritSelected: {
      opacity: 1
    },
    label: _defineProperty({
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      textTransform: 'uppercase',
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: 24,
      paddingRight: 24,
      fontSize: theme.typography.fontSize - 1
    })
  };
});

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
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

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          iconProp = _props.icon,
          index = _props.index,
          labelProp = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          styleProp = _props.style,
          textColor = _props.textColor,
          other = _objectWithoutProperties(_props, ['className', 'fullWidth', 'icon', 'index', 'label', 'onChange', 'selected', 'style', 'textColor']);

      var classes = this.context.styleManager.render(styleSheet);

      var icon = void 0;

      if (iconProp !== undefined) {
        icon = (0, _react.isValidElement)(iconProp) ? iconProp : _react2.default.createElement(
          'span',
          { className: 'material-icons' },
          iconProp
        );
      }

      var label = void 0;

      if (labelProp !== undefined) {
        label = _react2.default.createElement(
          'span',
          { className: classes.label },
          labelProp
        );
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.rootAccent, textColor === 'accent'), _defineProperty(_classNames, classes.rootAccentSelected, selected && textColor === 'accent'), _defineProperty(_classNames, classes.rootInherit, textColor === 'inherit'), _defineProperty(_classNames, classes.rootInheritSelected, selected && textColor === 'inherit'), _defineProperty(_classNames, classes.rootLabelIcon, icon && label), _classNames), classNameProp);

      var style = {};

      if (fullWidth) {
        style.width = '100%';
      }

      if (textColor !== 'accent' && textColor !== 'inherit') {
        style.color = textColor;
      }

      style = Object.keys(style).length > 0 ? _extends({}, style, styleProp) : styleProp;

      return _react2.default.createElement(
        _ButtonBase2.default,
        _extends({
          focusRipple: true,
          className: className,
          style: style,
          role: 'tab',
          'aria-selected': selected
        }, other, {
          onClick: this.handleChange
        }),
        icon,
        label
      );
    }
  }]);

  return Tab;
}(_react.Component);

Tab.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * @ignore
   */
  fullWidth: _react.PropTypes.bool,
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
   * @ignore
   */
  style: _react.PropTypes.object,
  /**
   * @ignore
   */
  textColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent', 'inherit']), _react.PropTypes.string])
};
Tab.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Tab;