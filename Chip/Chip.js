'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Chip;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _cancel = require('../svg-icons/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Chip', function (theme) {
  var palette = theme.palette,
      shadows = theme.shadows,
      transitions = theme.transitions;

  var height = 32;
  var backgroundColor = (0, _colorManipulator.emphasize)(palette.background.default, 0.12);
  var deleteIconColor = (0, _colorManipulator.fade)(palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: 'inherit', // Override `button` default system font
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: transitions.create(),
      cursor: 'default', // label will inherit this from root, then `clickable` class overrides this for both
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 },
    clickable: {
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      },
      cursor: 'pointer'
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: 32,
      height: 32,
      fontSize: 16
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      color: deleteIconColor,
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      },
      cursor: 'pointer',
      margin: '0 4px 0 -8px'
    }
  };
});

/**
 * Chips represent complex entities in small blocks, such as a contact.
 *
 * ```jsx
 * <Chip avatar={<Avatar>} label="Label text" />
 * ```
 */
function Chip(props, context) {
  var avatarProp = props.avatar,
      classNameProp = props.className,
      deleteIconClassNameProp = props.deleteIconClassName,
      label = props.label,
      labelClassNameProp = props.labelClassName,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onRequestDelete = props.onRequestDelete,
      tabIndexProp = props.tabIndex,
      other = _objectWithoutProperties(props, ['avatar', 'className', 'deleteIconClassName', 'label', 'labelClassName', 'onClick', 'onKeyDown', 'onRequestDelete', 'tabIndex']);

  var chipRef = void 0;

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    onRequestDelete(event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = (0, _keycode2.default)(event);

    if (onClick && (key === 'space' || key === 'enter')) {
      event.preventDefault();
      onClick(event);
    } else if (onRequestDelete && key === 'backspace') {
      event.preventDefault();
      onRequestDelete(event);
    } else if (key === 'esc') {
      event.preventDefault();
      chipRef.blur();
    }
    onKeyDown(event);
  };

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.clickable, onClick), _defineProperty({}, classes.deletable, onRequestDelete), classNameProp);
  var labelClassName = (0, _classnames2.default)(classes.label, labelClassNameProp);

  var deleteIcon = null;
  if (onRequestDelete) {
    var deleteIconClassName = (0, _classnames2.default)(classes.deleteIcon, deleteIconClassNameProp);
    deleteIcon = _react2.default.createElement(_cancel2.default, { className: deleteIconClassName, onClick: handleDeleteIconClick });
  }

  var avatar = null;
  if (avatarProp && (0, _react.isValidElement)(avatarProp)) {
    var avatarClassName = (0, _classnames2.default)(classes.avatar, avatarProp.props.className);
    var avatarChildrenClassName = (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName);

    avatar = (0, _react.cloneElement)(avatarProp, {
      className: avatarClassName,
      childrenClassName: avatarChildrenClassName
    });
  }

  var tabIndex = onClick || onRequestDelete ? tabIndexProp : -1;

  return _react2.default.createElement(
    'button',
    _extends({
      className: className,
      onClick: onClick,
      tabIndex: tabIndex,
      onKeyDown: handleKeyDown,
      ref: function ref(c) {
        chipRef = c;
      }
    }, other),
    avatar,
    _react2.default.createElement(
      'span',
      { className: labelClassName },
      label
    ),
    deleteIcon
  );
}

Chip.propTypes = {
  /**
   * Avatar element.
   */
  avatar: _react.PropTypes.node,
  /**
   * CSS `className` of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS `className` of the delete icon element.
   */
  deleteIconClassName: _react.PropTypes.string,
  /**
   * The label text.
   */
  label: _react.PropTypes.string,
  /**
   * CSS `className` of the label.
   */
  labelClassName: _react.PropTypes.string,
  /**
   * @ignore
   * Callback function fired when the `Chip` element is clicked.
   * If set, the chip will by styled for hover focus and active states.
   * @param {object} event `onClick` event targeting the root element.
   */
  onClick: _react.PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: _react.PropTypes.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   * @param {object} event `onClick` event targeting the delete icon element.
   */
  onRequestDelete: _react.PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: _react.PropTypes.number
};

Chip.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};

Chip.defaultProps = {
  onKeyDown: function onKeyDown() {}
};