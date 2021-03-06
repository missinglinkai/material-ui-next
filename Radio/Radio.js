'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelRadio = exports.styleSheet = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

var _radioButtonChecked = require('../svg-icons/radio-button-checked');

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

var _radioButtonUnchecked = require('../svg-icons/radio-button-unchecked');

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Radio', function (theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.accent[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
});

var Radio = (0, _SwitchBase.createSwitch)({
  styleSheet: styleSheet,
  inputType: 'radio',
  defaultIcon: _react2.default.createElement(_radioButtonUnchecked2.default, null),
  defaultCheckedIcon: _react2.default.createElement(_radioButtonChecked2.default, null)
});

Radio.displayName = 'Radio';

exports.default = Radio;


var LabelRadio = (0, _withSwitchLabel2.default)(Radio);

exports.LabelRadio = LabelRadio;