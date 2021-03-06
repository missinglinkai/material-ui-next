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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Button', function (theme) {
  var typography = theme.typography,
      palette = theme.palette,
      transitions = theme.transitions,
      shadows = theme.shadows;


  return {
    root: {
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      fontFamily: typography.fontFamily,
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 88,
      height: 36,
      padding: '0px 16px',
      borderRadius: 2,
      color: palette.text.primary,
      backgroundColor: 'transparent',
      transition: transitions.multi(['background-color', 'box-shadow'], '250ms'),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: palette.text.divider,
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    },
    compact: {
      padding: '0 8px',
      minWidth: 64
    },
    label: {
      width: '100%',
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    primary: {
      color: palette.primary[500]
    },
    accent: {
      color: palette.accent.A200
    },
    contrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    raised: {
      color: palette.getContrastText(palette.grey[300]),
      backgroundColor: palette.grey[300],
      boxShadow: shadows[2],
      '&$keyboardFocused': {
        boxShadow: shadows[6]
      },
      '&:active': {
        boxShadow: shadows[8]
      },
      '&$disabled': {
        boxShadow: shadows[0],
        backgroundColor: palette.text.divider
      },
      '&:hover': {
        backgroundColor: palette.grey.A100,
        '&$disabled': {
          backgroundColor: palette.text.divider
        }
      }
    },
    keyboardFocused: {},
    raisedPrimary: {
      color: palette.getContrastText(palette.primary[500]),
      backgroundColor: palette.primary[500],
      '&:hover': {
        backgroundColor: palette.primary[700]
      }
    },
    raisedAccent: {
      color: palette.getContrastText(palette.accent.A200),
      backgroundColor: palette.accent.A200,
      '&:hover': {
        backgroundColor: palette.accent.A400
      }
    },
    raisedContrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    disabled: {
      color: palette.action.disabled
    },
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: shadows[6],
      '&:active': {
        boxShadow: shadows[12]
      }
    }
  };
});

/**
 * Buttons communicate the action that will occur when the user
 * touches them.
 *
 * ```jsx
 * <Button>Hello World</Button>
 * ```
 */

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          accent = _props.accent,
          children = _props.children,
          classNameProp = _props.className,
          compact = _props.compact,
          contrast = _props.contrast,
          disabled = _props.disabled,
          fab = _props.fab,
          primary = _props.primary,
          raised = _props.raised,
          other = _objectWithoutProperties(_props, ['accent', 'children', 'className', 'compact', 'contrast', 'disabled', 'fab', 'primary', 'raised']);

      var classes = this.context.styleManager.render(styleSheet);
      var flat = !raised && !fab;
      var className = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.root, true), _defineProperty(_classNames, classes.raised, raised || fab), _defineProperty(_classNames, classes.fab, fab), _defineProperty(_classNames, classes.primary, flat && primary), _defineProperty(_classNames, classes.accent, flat && accent), _defineProperty(_classNames, classes.contrast, flat && contrast), _defineProperty(_classNames, classes.raisedPrimary, !flat && primary), _defineProperty(_classNames, classes.raisedAccent, !flat && accent), _defineProperty(_classNames, classes.raisedContrast, !flat && contrast), _defineProperty(_classNames, classes.compact, compact), _defineProperty(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      return _react2.default.createElement(
        _ButtonBase2.default,
        _extends({
          className: className,
          disabled: disabled,
          keyboardFocusedClassName: classes.keyboardFocused
        }, other),
        _react2.default.createElement(
          'span',
          { className: classes.label },
          children
        )
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  /**
   * If `true`, the button will use the theme's accent color.
   */
  accent: _react.PropTypes.bool,
  /**
   * The content of the button.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Uses a smaller minWidth, ideal for things like card actions.
   */
  compact: _react.PropTypes.bool,
  /**
   * The element or component used for the root node.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  /**
   * If true, will use the theme's contrast color.
   */
  contrast: _react.PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * If `true`, well use floating action button styling.
   */
  fab: _react.PropTypes.bool,
  /**
   * If `true`, the button will have a keyboard focus ripple.
   * Ripple must also be true.
   */
  focusRipple: _react.PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If set, an `a` element will be used as the root node.
   */
  href: _react.PropTypes.string,
  /**
   * If `true`, the button will use the theme's primary color.
   */
  primary: _react.PropTypes.bool,
  /**
   * If `true`, the button will use raised styling.
   */
  raised: _react.PropTypes.bool,
  /**
   * If `true`, the button will have a ripple.
   */
  ripple: _react.PropTypes.bool,
  /**
   * @ignore
   */
  type: _react.PropTypes.string
};
Button.defaultProps = {
  accent: false,
  component: 'button',
  compact: false,
  contrast: false,
  disabled: false,
  fab: false,
  focusRipple: true,
  primary: false,
  raised: false,
  ripple: true,
  type: 'button'
};
Button.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Button;