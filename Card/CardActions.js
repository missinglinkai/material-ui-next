'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardActions;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('CardActions', function () {
  return {
    cardActions: {
      height: 52,
      display: 'flex',
      alignItems: 'center',
      padding: '2px 4px'
    },
    actionSpacing: {
      margin: '0 4px'
    }
  };
});

function CardActions(props, context) {
  var actionSpacing = props.actionSpacing,
      children = props.children,
      classNameProp = props.className,
      other = _objectWithoutProperties(props, ['actionSpacing', 'children', 'className']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardActions, classNameProp);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    actionSpacing ? (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.actionSpacing) : children
  );
}

CardActions.propTypes = {
  actionSpacing: _react.PropTypes.bool,
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};

CardActions.defaultProps = {
  actionSpacing: true
};

CardActions.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};