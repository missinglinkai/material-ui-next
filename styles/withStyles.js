'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = require('react');

var _createHelper = require('recompose/createHelper');

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withStyles = function withStyles(styleSheet) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var WithStyle = function WithStyle(ownerProps, context) {
      return factory(_extends({
        classes: context.styleManager.render(styleSheet)
      }, ownerProps));
    };

    WithStyle.contextTypes = {
      styleManager: _react.PropTypes.object.isRequired
    };

    return WithStyle;
  };
};

exports.default = (0, _createHelper2.default)(withStyles, 'withStyles');