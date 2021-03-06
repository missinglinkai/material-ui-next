'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TableSortLabel;

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

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TableSortLabel', function (theme) {
  return {
    sortLabel: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      background: 'transparent',
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:focus': {
        color: theme.palette.text.primary
      }
    },
    active: {
      color: theme.palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },
    icon: {
      fontSize: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], '200ms'),
      userSelect: 'none'
    },
    desc: {
      transform: 'rotate(0deg)'
    },
    asc: {
      transform: 'rotate(180deg)'
    }
  };
});

/**
 * A button based label for placing inside `TableCell` for column sorting.
 */
function TableSortLabel(props, context) {
  var active = props.active,
      className = props.className,
      children = props.children,
      direction = props.direction,
      other = _objectWithoutProperties(props, ['active', 'className', 'children', 'direction']);

  var classes = context.styleManager.render(styleSheet);
  var sortLabelClasses = (0, _classnames2.default)(classes.sortLabel, _defineProperty({}, classes.active, active), className);

  var iconClasses = (0, _classnames2.default)(classes.icon, _defineProperty({}, classes[direction], !!direction), 'material-icons');

  return _react2.default.createElement(
    _ButtonBase2.default,
    _extends({
      className: sortLabelClasses,
      component: 'span',
      ripple: false
    }, other),
    children,
    _react2.default.createElement(
      'span',
      { className: iconClasses },
      'arrow_downward'
    )
  );
}

TableSortLabel.propTypes = {
  /**
   * If set to true, will have the active styling (should be true for the sorted column).
   */
  active: _react.PropTypes.bool,
  /**
   * Label contents, the arrow will be appended automatically and aligned using flexbox.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The current sort direction.
   */
  direction: _react.PropTypes.oneOf(['asc', 'desc'])
};

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
};

TableSortLabel.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};