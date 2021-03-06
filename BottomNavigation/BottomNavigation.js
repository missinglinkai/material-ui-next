'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = BottomNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jssThemeReactor = require('jss-theme-reactor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('BottomNavigation', function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
});

function BottomNavigation(props, context) {
  var childrenProp = props.children,
      classNameProp = props.className,
      index = props.index,
      onChange = props.onChange,
      showLabel = props.showLabel,
      other = _objectWithoutProperties(props, ['children', 'className', 'index', 'onChange', 'showLabel']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react.Children.map(childrenProp, function (child, childIndex) {
    return (0, _react.cloneElement)(child, {
      selected: childIndex === index,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabel,
      index: childIndex,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    children
  );
}

BottomNavigation.propTypes = {
  /**
   * The content of the `BottomNavigation`.
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The index of the currently selected `BottomNavigation`.
   */
  index: _react.PropTypes.number,
  /**
   * Function called when the index change.
   */
  onChange: _react.PropTypes.func,
  /**
   * If `true`, all the selected `BottomNavigationButton` will show his label.
   * If false, only the selected `BottomNavigationButton` will show his label.
   */
  showLabel: _react.PropTypes.bool.isRequired
};

BottomNavigation.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};