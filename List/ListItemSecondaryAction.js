'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;
exports.default = ListItemSecondaryAction;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('ListItemSecondaryAction', function () {
  return {
    secondaryAction: {
      paddingRight: 8
    }
  };
}); //  weak

function ListItemSecondaryAction(props, context) {
  var children = props.children,
      classNameProp = props.className;

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.secondaryAction, classNameProp);

  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
}

ListItemSecondaryAction.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};

ListItemSecondaryAction.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};

ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';