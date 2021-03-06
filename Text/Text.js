'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Text;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Text', function (theme) {
  return {
    text: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    'align-center': {
      textAlign: 'center'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: 16
    },
    colorInherit: {
      color: 'inherit'
    },
    secondary: {
      color: theme.palette.text.secondary
    }
  };
});

function Text(props, context) {
  var _classNames;

  var align = props.align,
      classNameProp = props.className,
      colorInherit = props.colorInherit,
      componentProp = props.component,
      gutterBottom = props.gutterBottom,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      secondary = props.secondary,
      type = props.type,
      other = _objectWithoutProperties(props, ['align', 'className', 'colorInherit', 'component', 'gutterBottom', 'noWrap', 'paragraph', 'secondary', 'type']);

  var classes = context.styleManager.render(styleSheet);

  var className = (0, _classnames2.default)(classes.text, classes[type], (_classNames = {}, _defineProperty(_classNames, classes.colorInherit, colorInherit), _defineProperty(_classNames, classes.noWrap, noWrap), _defineProperty(_classNames, classes.secondary, secondary), _defineProperty(_classNames, classes.gutterBottom, gutterBottom), _defineProperty(_classNames, classes.paragraph, paragraph), _defineProperty(_classNames, classes['align-' + align], align === 'center'), _classNames), classNameProp);

  var Component = paragraph ? 'p' : componentProp;

  return _react2.default.createElement(Component, _extends({ className: className }, other));
}

Text.propTypes = {
  align: _react.PropTypes.oneOf(['center']),
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  colorInherit: _react.PropTypes.bool,
  component: _react.PropTypes.string,
  gutterBottom: _react.PropTypes.bool,
  noWrap: _react.PropTypes.bool,
  paragraph: _react.PropTypes.bool,
  secondary: _react.PropTypes.bool,
  type: _react.PropTypes.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
};

Text.defaultProps = {
  colorInherit: false,
  component: 'span',
  gutterBottom: false,
  noWrap: false,
  paragraph: false,
  secondary: false,
  type: 'body1'
};

Text.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};