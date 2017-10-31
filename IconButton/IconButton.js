'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('IconButton', function (theme) {
  var palette = theme.palette,
      transitions = theme.transitions;


  return {
    iconButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: 24,
      width: 48,
      height: 48,
      padding: 0,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      color: palette.action.active,
      zIndex: 1,
      transition: transitions.create('background-color', '150ms')
    },
    disabled: {
      color: palette.action.disabled
    },
    accent: {
      color: palette.accent.A200
    },
    contrast: {
      color: palette.getContrastText(palette.primary[500])
    },
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      '& .material-icons': {
        width: '1em',
        height: '1em'
      }
    },
    keyboardFocused: {
      backgroundColor: palette.text.divider
    }
  };
});

/**
 * @see https://material.google.com/components/buttons.html
 *
 * ```js
 * import IconButton from 'material-ui/IconButton';
 *
 * const Component = () => <IconButton>delete</IconButton>;
 * ```
 */
function IconButton(props, context) {
  var _classNames;

  var accent = props.accent,
      buttonRef = props.buttonRef,
      children = props.children,
      className = props.className,
      contrast = props.contrast,
      disabled = props.disabled,
      other = _objectWithoutProperties(props, ['accent', 'buttonRef', 'children', 'className', 'contrast', 'disabled']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    _ButtonBase2.default,
    _extends({
      className: (0, _classnames2.default)(classes.iconButton, (_classNames = {}, _defineProperty(_classNames, classes.accent, accent), _defineProperty(_classNames, classes.contrast, contrast), _defineProperty(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      keyboardFocusedClassName: classes.keyboardFocused,
      disabled: disabled,
      ref: buttonRef
    }, other),
    _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)(classes.label) },
      typeof children === 'string' ? _react2.default.createElement(
        'span',
        { className: 'material-icons' },
        children
      ) : children
    )
  );
}

IconButton.propTypes = {
  /**
   * If true, will use the theme's accent color.
   */
  accent: _react.PropTypes.bool,
  /**
   * @ignore
   */
  buttonRef: _react.PropTypes.func,
  /**
   * The icon element. If a string is passed,
   * it will be used as a material icon font ligature.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, will use the theme's contrast color.
   */
  contrast: _react.PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * If false, the ripple effect will be disabled.
   */
  ripple: _react.PropTypes.bool
};

IconButton.defaultProps = {
  accent: false,
  contrast: false,
  disabled: false,
  ripple: true
};

IconButton.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};