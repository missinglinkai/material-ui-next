'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelSwitch = exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SwitchBase = require('../internal/SwitchBase');

var _withSwitchLabel = require('../internal/withSwitchLabel');

var _withSwitchLabel2 = _interopRequireDefault(_withSwitchLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Switch', function (theme) {
  var palette = theme.palette;

  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative'
    },
    default: {
      color: palette.type === 'light' ? palette.grey[50] : palette.grey[400],
      transition: theme.transitions.create('transform', '150ms')
    },
    checked: {
      color: palette.accent[500],
      transform: 'translateX(14px)',
      '& + $bar': {
        backgroundColor: palette.accent[500],
        opacity: 0.5
      }
    },
    disabled: {
      color: palette.type === 'light' ? palette.grey[400] : palette.grey[800],
      '& + $bar': {
        backgroundColor: palette.type === 'light' ? '#000' : '#fff',
        opacity: palette.type === 'light' ? 0.12 : 0.1
      }
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -7,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.multi(['opacity', 'background-color'], '150ms'),
      backgroundColor: palette.type === 'light' ? '#000' : '#fff',
      opacity: palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    }
  };
});

var SwitchBase = (0, _SwitchBase.createSwitch)({ styleSheet: styleSheet });

function Switch(props, context) {
  var className = props.className,
      other = _objectWithoutProperties(props, ['className']);

  var classes = context.styleManager.render(styleSheet);
  var icon = _react2.default.createElement('div', { className: classes.icon });

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(classes.root, className) },
    _react2.default.createElement(SwitchBase, _extends({ icon: icon, checkedIcon: icon }, other)),
    _react2.default.createElement('div', { className: classes.bar })
  );
}

Switch.propTypes = {
  className: _react.PropTypes.string
};

Switch.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};

exports.default = Switch;


var LabelSwitch = (0, _withSwitchLabel2.default)(Switch);

exports.LabelSwitch = LabelSwitch;