'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var horizontal = _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['left', 'center', 'right']), _react.PropTypes.number]); //  weak

var vertical = _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['top', 'center', 'bottom']), _react.PropTypes.number]);

exports.default = {
  horizontal: horizontal,

  vertical: vertical,

  origin: _react.PropTypes.shape({ horizontal: horizontal, vertical: vertical }),

  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};