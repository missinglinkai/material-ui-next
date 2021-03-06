'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createMuiTheme = createMuiTheme;

var _shadows = require('./shadows');

var _shadows2 = _interopRequireDefault(_shadows);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _palette = require('./palette');

var _palette2 = _interopRequireDefault(_palette);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _mixins = require('./mixins');

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

function createMuiTheme() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _config$palette = config.palette,
      palette = _config$palette === undefined ? (0, _palette2.default)() : _config$palette,
      _config$breakpoints = config.breakpoints,
      breakpoints = _config$breakpoints === undefined ? (0, _breakpoints2.default)() : _config$breakpoints,
      _config$mixins = config.mixins,
      mixins = _config$mixins === undefined ? (0, _mixins2.default)(breakpoints) : _config$mixins,
      _config$typography = config.typography,
      typography = _config$typography === undefined ? (0, _typography2.default)(palette) : _config$typography,
      more = _objectWithoutProperties(config, ['palette', 'breakpoints', 'mixins', 'typography']);

  var theme = _extends({
    dir: 'ltr',
    palette: palette,
    typography: typography,
    shadows: _shadows2.default,
    transitions: _transitions2.default,
    mixins: mixins,
    breakpoints: breakpoints,
    zIndex: _zIndex2.default
  }, more);

  return theme;
}

exports.default = createMuiTheme;