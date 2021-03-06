'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('CardHeader', function () {
  return {
    cardHeader: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      flex: '0 0 auto',
      marginRight: 16
    },
    content: {
      flex: '1 1 auto'
    },
    contentSecondary: {
      lineHeight: 1
    }
  };
});

function CardHeader(props, context) {
  var avatar = props.avatar,
      classNameProp = props.className,
      subhead = props.subhead,
      title = props.title,
      other = _objectWithoutProperties(props, ['avatar', 'className', 'subhead', 'title']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.cardHeader, classNameProp);

  if (avatar) {
    return _react2.default.createElement(
      _CardContent2.default,
      _extends({ className: className }, other),
      _react2.default.createElement(
        'div',
        { className: classes.avatar },
        avatar
      ),
      _react2.default.createElement(
        'div',
        { className: classes.content },
        _react2.default.createElement(
          _Text2.default,
          { type: 'body2', gutterBottom: true },
          title
        ),
        _react2.default.createElement(
          _Text2.default,
          { type: 'body2', secondary: true, className: classes.contentSecondary },
          subhead
        )
      )
    );
  }

  return _react2.default.createElement(
    _CardContent2.default,
    _extends({ className: className }, other),
    _react2.default.createElement(
      _Text2.default,
      { type: 'headline' },
      title
    ),
    _react2.default.createElement(
      _Text2.default,
      { type: 'body1', secondary: true },
      subhead
    )
  );
}

CardHeader.propTypes = {
  avatar: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  subhead: _react.PropTypes.string,
  title: _react.PropTypes.string
};

CardHeader.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};