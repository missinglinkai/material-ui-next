'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TableRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TableRow', function (theme) {
  return {
    root: {
      height: 48,
      '&:focus': {
        outline: 'none',
        background: theme.palette.background.contentFrame
      }
    },
    head: {
      height: 64
    },
    footer: {
      height: 56
    },
    hover: {
      '&:hover': {
        background: theme.palette.background.contentFrame
      }
    },
    selected: {
      background: theme.palette.background.appBar
    }
  };
});

/**
 * A material table row.
 *
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc)
 *
 * ```jsx
 * <TableRow>
 *   <TableCell>....</TableCell>
 * </TableRow>
 * ```
 */
function TableRow(props, context) {
  var _classNames;

  var classNameProp = props.className,
      children = props.children,
      hover = props.hover,
      selected = props.selected,
      other = _objectWithoutProperties(props, ['className', 'children', 'hover', 'selected']);

  var table = context.table,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.head, table && table.head), _defineProperty(_classNames, classes.footer, table && table.footer), _defineProperty(_classNames, classes.hover, table && hover), _defineProperty(_classNames, classes.selected, table && selected), _classNames), classNameProp);

  return _react2.default.createElement(
    'tr',
    _extends({ className: className }, other),
    children
  );
}

TableRow.propTypes = {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, the table row will shade on hover.
   */
  hover: _react.PropTypes.bool,
  /**
   * If set to true, the table row will have the selected shading.
   */
  selected: _react.PropTypes.bool
};

TableRow.defaultProps = {
  hover: false,
  selected: false
};

TableRow.contextTypes = {
  table: _react.PropTypes.object,
  styleManager: _react.PropTypes.object.isRequired
};