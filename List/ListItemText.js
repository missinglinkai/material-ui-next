'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListItemText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('ListItemText', function () {
  return {
    root: {
      flex: '1 1 auto',
      padding: '0 16px',
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: 56
      }
    }
  };
});

function ListItemText(props, context) {
  var classNameProp = props.className,
      primary = props.primary,
      secondary = props.secondary,
      inset = props.inset,
      other = _objectWithoutProperties(props, ['className', 'primary', 'secondary', 'inset']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.inset, inset), classNameProp);

  return _react2.default.createElement(
    'div',
    _extends({ className: className }, other),
    primary && (typeof primary === 'string' ? _react2.default.createElement(
      _Text2.default,
      { type: 'subheading' },
      primary
    ) : primary),
    secondary && (typeof secondary === 'string' ? _react2.default.createElement(
      _Text2.default,
      { secondary: true, type: 'body1' },
      secondary
    ) : secondary)
  );
}

ListItemText.propTypes = {
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the children will be indented by 72px. This is useful if there is no left avatar or left icon.
   */
  inset: _react.PropTypes.bool,
  primary: _react.PropTypes.node,
  secondary: _react.PropTypes.node
};

ListItemText.defaultProps = {
  primary: false,
  secondary: false,
  inset: false
};

ListItemText.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};