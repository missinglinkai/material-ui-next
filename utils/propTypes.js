'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _propTypes = require('prop-types');

var horizontal = _propTypes.oneOfType([_propTypes.oneOf(['left', 'center', 'right']), _propTypes.number]); //  weak

var vertical = _propTypes.oneOfType([_propTypes.oneOf(['top', 'center', 'bottom']), _propTypes.number]);

exports.default = {
  horizontal: horizontal,

  vertical: vertical,

  origin: _propTypes.shape({ horizontal: horizontal, vertical: vertical }),

  stringOrNumber: _propTypes.oneOfType([_propTypes.string, _propTypes.number])
};