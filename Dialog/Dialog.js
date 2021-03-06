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

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Dialog', function (theme) {
  return {
    modal: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    dialog: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      width: '75%',
      maxHeight: '90vh',
      '&:focus': {
        outline: 'none'
      }
    },
    'dialogWidth-xs': {
      maxWidth: theme.breakpoints.getWidth('xs')
    },
    'dialogWidth-sm': {
      maxWidth: theme.breakpoints.getWidth('sm')
    },
    'dialogWidth-md': {
      maxWidth: theme.breakpoints.getWidth('md')
    }
  };
});

/**
 * Dialogs are overlayed modal paper based components with a backdrop.
 *
 * ```jsx
 * <Dialog>
 *   <DialogContent>...</DialogContent>
 *   <DialogActions>...</DialogActions>
 * </Dialog>
 * ```
 */

var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          hideOnBackdropClick = _props.hideOnBackdropClick,
          hideOnEscapeKeyUp = _props.hideOnEscapeKeyUp,
          maxWidth = _props.maxWidth,
          open = _props.open,
          onBackdropClick = _props.onBackdropClick,
          onEscapeKeyUp = _props.onEscapeKeyUp,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onEntered = _props.onEntered,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          onExited = _props.onExited,
          onRequestClose = _props.onRequestClose,
          paperClassName = _props.paperClassName,
          transition = _props.transition,
          transitionDuration = _props.transitionDuration,
          other = _objectWithoutProperties(_props, ['children', 'className', 'hideOnBackdropClick', 'hideOnEscapeKeyUp', 'maxWidth', 'open', 'onBackdropClick', 'onEscapeKeyUp', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'paperClassName', 'transition', 'transitionDuration']);

      var classes = this.context.styleManager.render(styleSheet);

      var transitionProps = {
        in: open,
        transitionAppear: true,
        transitionDuration: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      };

      var createTransitionFn = void 0;

      if (typeof transition === 'function') {
        createTransitionFn = _react2.default.createElement;
      } else {
        createTransitionFn = _react2.default.cloneElement;
      }

      return _react2.default.createElement(
        _Modal2.default,
        _extends({
          className: (0, _classnames2.default)(classes.modal, className),
          backdropTransitionDuration: transitionDuration,
          hideOnBackdropClick: hideOnBackdropClick,
          hideOnEscapeKeyUp: hideOnEscapeKeyUp,
          onBackdropClick: onBackdropClick,
          onEscapeKeyUp: onEscapeKeyUp,
          onRequestClose: onRequestClose,
          show: open
        }, other),
        createTransitionFn(transition, transitionProps, _react2.default.createElement(
          _Paper2.default,
          {
            'data-mui-test': 'Dialog',
            zDepth: 24,
            className: (0, _classnames2.default)(classes.dialog, classes['dialogWidth-' + maxWidth], paperClassName)
          },
          children
        ))
      );
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, clicking the backdrop will fire the `onRequestClose` callback.
   */
  hideOnBackdropClick: _react.PropTypes.bool,
  /**
   * If `true`, hitting escape will fire the `onRequestClose` callback.
   */
  hideOnEscapeKeyUp: _react.PropTypes.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: _react.PropTypes.oneOf(['xs', 'sm', 'md']),
  /**
   * Callback fires when the backdrop is clicked on.
   */
  onBackdropClick: _react.PropTypes.func,
  /**
   * Callback fired before the dialog is entering.
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fires when the escape key is pressed and the modal is in focus.
   */
  onEscapeKeyUp: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the dialog is exiting.
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired when the dialog requests to be closed.
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * Set to true to open the Dialog.
   */
  open: _react.PropTypes.bool,
  /**
   * The CSS class name of the paper inner element.
   */
  paperClassName: _react.PropTypes.string,
  /**
   * Transition component.
   */
  transition: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.element]),
  /**
   * Length of the transition in ms.
   */
  transitionDuration: _react.PropTypes.number
};
Dialog.defaultProps = {
  hideOnBackdropClick: true,
  hideOnEscapeKeyUp: true,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default,
  transitionDuration: 300
};
Dialog.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Dialog;