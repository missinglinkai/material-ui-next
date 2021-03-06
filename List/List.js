'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('List', function () {
  return {
    root: {
      flex: '1 1 auto',
      overflow: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    padding: {
      paddingTop: 8,
      paddingBottom: 8
    },
    subheader: {
      paddingTop: 0
    }
  };
});

/**
 * A simple list component.
 */
function List(props, context) {
  var _classNames;

  var classNameProp = props.className,
      ComponentProp = props.component,
      padding = props.padding,
      children = props.children,
      subheader = props.subheader,
      rootRef = props.rootRef,
      other = _objectWithoutProperties(props, ['className', 'component', 'padding', 'children', 'subheader', 'rootRef']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.padding, padding), _defineProperty(_classNames, classes.subheader, subheader), _classNames), classNameProp);

  return _react2.default.createElement(
    ComponentProp,
    _extends({ ref: rootRef, className: className }, other),
    subheader,
    children
  );
}

List.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The element or component used for the root node.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  padding: _react.PropTypes.bool,
  /**
   * @ignore
   */
  rootRef: _react.PropTypes.func,
  subheader: _react.PropTypes.node
};

List.defaultProps = {
  component: 'div',
  padding: true
};

List.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};