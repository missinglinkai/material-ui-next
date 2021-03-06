'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DialogTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('DialogTitle', function () {
  var gutter = 24;
  return {
    root: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      flex: '0 0 auto'
    }
  };
});

function DialogTitle(props, context) {
  var children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ['children', 'className']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    'div',
    _extends({
      'data-mui-test': 'DialogTitle',
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    typeof children === 'string' ? _react2.default.createElement(
      _Text2.default,
      { type: 'title' },
      children
    ) : children
  );
}

DialogTitle.propTypes = {
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};

DialogTitle.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};