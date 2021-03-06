'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TableCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('TableCell', function (theme) {
  return {
    root: {
      borderBottom: '1px solid ' + theme.palette.text.lightDivider,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left'
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' },
    head: {
      whiteSpace: 'pre'
    },
    padding: {
      padding: '0 56px 0 24px',
      '&:last-child': {
        paddingRight: 24
      }
    },
    compact: {
      paddingRight: 24
    },
    checkbox: {
      paddingLeft: 12,
      paddingRight: 0
    },
    footer: {}
  };
});

/**
 * A material table cell.
 *
 * When placed in a `TableHead`, this will automatically render a `th` element.
 *
 * ```jsx
 * <TableCell>Hello</TableCell>
 * ```
 */
function TableCell(props, context) {
  var _classNames;

  var classNameProp = props.className,
      children = props.children,
      compact = props.compact,
      checkbox = props.checkbox,
      numeric = props.numeric,
      padding = props.padding,
      other = _objectWithoutProperties(props, ['className', 'children', 'compact', 'checkbox', 'numeric', 'padding']);

  var table = context.table,
      styleManager = context.styleManager;

  var classes = styleManager.render(styleSheet);

  var Component = table && table.head ? 'th' : 'td';

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.numeric, numeric), _defineProperty(_classNames, classes.compact, compact), _defineProperty(_classNames, classes.checkbox, checkbox), _defineProperty(_classNames, classes.padding, padding), _defineProperty(_classNames, classes.head, table && table.head), _defineProperty(_classNames, classes.footer, table && table.footer), _classNames), classNameProp);

  return _react2.default.createElement(
    Component,
    _extends({ className: className }, other),
    children
  );
}

TableCell.propTypes = {
  /**
   * If `true`, the cell padding will be adjusted to better accomodate a checkbox.
   */
  checkbox: _react.PropTypes.bool,
  /**
   * The table cell contents.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If set to true, will use more compact cell padding to accomodate more content.
   */
  compact: _react.PropTypes.bool,
  /**
   * If set to true, will align content to the right hand side.
   */
  numeric: _react.PropTypes.bool,
  /**
   * If set to false, will disable left/right cell padding.
   */
  padding: _react.PropTypes.bool
};

TableCell.defaultProps = {
  checkbox: false,
  compact: false,
  numeric: false,
  padding: true
};

TableCell.contextTypes = {
  table: _react.PropTypes.object,
  styleManager: _react.PropTypes.object.isRequired
};