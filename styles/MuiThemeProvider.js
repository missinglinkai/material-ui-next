'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUI_SHEET_ORDER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop_types');

var _jss = require('jss');

var _styleManager = require('jss-theme-reactor/styleManager');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak


var MUI_SHEET_ORDER = exports.MUI_SHEET_ORDER = ['Layout', 'Collapse', 'Fade', 'Slide', 'Backdrop', 'Modal', 'Ripple', 'TouchRipple', 'ButtonBase', 'FormLabel', 'FormGroup', 'Text', 'Paper', 'Divider', 'Popover', 'Button', 'IconButton', 'SvgIcon', 'SwitchBase', 'Switch', 'Checkbox', 'Radio', 'RadioGroup', 'SwitchLabel', 'Dialog', 'DialogActions', 'DialogContent', 'DialogContentText', 'DialogTitle', 'TabIndicator', 'Tab', 'Tabs', 'BottomNavigationButton', 'BottomNavigation', 'CircularProgress', 'LinearProgress', 'AppBar', 'Drawer', 'ListItem', 'ListItemText', 'ListItemSecondaryAction', 'ListSubheader', 'List', 'Menu', 'MenuItem', 'Avatar', 'CardContent', 'CardMedia', 'CardActions', 'CardHeader', 'Card', 'TextFieldLabel', 'TextFieldInput', 'TextField', 'Table', 'TableHead', 'TableRow', 'TableCell', 'TableBody', 'TableSortLabel', 'Toolbar'];

var MuiThemeProvider = function (_Component) {
  _inherits(MuiThemeProvider, _Component);

  function MuiThemeProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MuiThemeProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MuiThemeProvider.__proto__ || Object.getPrototypeOf(MuiThemeProvider)).call.apply(_ref, [this].concat(args))), _this), _this.theme = undefined, _this.styleManager = undefined, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MuiThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var theme = this.theme,
          styleManager = this.styleManager;

      return {
        theme: theme,
        styleManager: styleManager
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _MuiThemeProvider$cre = MuiThemeProvider.createDefaultContext(this.props),
          theme = _MuiThemeProvider$cre.theme,
          styleManager = _MuiThemeProvider$cre.styleManager;

      this.theme = theme;
      this.styleManager = styleManager;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.styleManager !== nextProps.styleManager) {
        var _MuiThemeProvider$cre2 = MuiThemeProvider.createDefaultContext(nextProps),
            theme = _MuiThemeProvider$cre2.theme,
            styleManager = _MuiThemeProvider$cre2.styleManager;

        this.theme = theme;
        this.styleManager = styleManager;
      } else if (this.theme && nextProps.theme && nextProps.theme !== this.theme) {
        this.theme = nextProps.theme;
        this.styleManager.updateTheme(this.theme);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }], [{
    key: 'createDefaultContext',
    value: function createDefaultContext() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var theme = props.theme || (0, _theme.createMuiTheme)();
      var styleManager = props.styleManager || (0, _styleManager.createStyleManager)({
        theme: theme,
        jss: (0, _jss.create)((0, _jssPresetDefault2.default)())
      });

      if (!styleManager.sheetOrder) {
        styleManager.setSheetOrder(MUI_SHEET_ORDER);
      }

      return { theme: theme, styleManager: styleManager };
    }
  }]);

  return MuiThemeProvider;
}(_react.Component);

MuiThemeProvider.propTypes = {
  children: _propTypes.node.isRequired,
  styleManager: _propTypes.object,
  theme: _propTypes.object
};
MuiThemeProvider.childContextTypes = {
  styleManager: _propTypes.object.isRequired,
  theme: _propTypes.object.isRequired
};
exports.default = MuiThemeProvider;