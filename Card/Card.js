'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Card', function () {
  return {
    card: {
      overflow: 'hidden'
    }
  };
});

function Card(props, context) {
  var classNameProp = props.className,
      raised = props.raised,
      other = _objectWithoutProperties(props, ['className', 'raised']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.card, classNameProp);

  return _react2.default.createElement(_Paper2.default, _extends({ className: className, zDepth: raised ? 8 : 2 }, other));
}

Card.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  raised: _react.PropTypes.bool
};

Card.defaultProps = {
  raised: false
};

Card.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};