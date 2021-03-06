'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('ListItem', function (theme) {
  return {
    listItem: {
      display: 'flex',
      flex: '1 1 auto', // grow primary portion so that secondary is right-aligned
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none'
    },
    listItemContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    keyboardFocused: {
      background: theme.palette.text.divider
    },
    default: {
      paddingTop: 19,
      paddingBottom: 19
    },
    dense: {
      paddingTop: 8,
      paddingBottom: 8
    },
    disabled: {
      opacity: 0.5
    },
    divider: {
      borderBottom: '1px solid ' + theme.palette.text.lightDivider
    },
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    }
  };
});

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          button = _props.button,
          childrenProp = _props.children,
          classNameProp = _props.className,
          componentProp = _props.component,
          dense = _props.dense,
          disabled = _props.disabled,
          divider = _props.divider,
          gutters = _props.gutters,
          other = _objectWithoutProperties(_props, ['button', 'children', 'className', 'component', 'dense', 'disabled', 'divider', 'gutters']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.listItem, (_classNames = {}, _defineProperty(_classNames, classes.gutters, gutters), _defineProperty(_classNames, classes.divider, divider), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, dense ? classes.dense : classes.default, true), _classNames), classNameProp);

      var listItemProps = _extends({ className: className, disabled: disabled }, other);
      var component = componentProp;

      if (button) {
        component = _ButtonBase2.default;
        listItemProps.component = 'div';
        listItemProps.keyboardFocusedClassName = classes.keyboardFocused;
      }

      var children = _react2.default.Children.toArray(childrenProp);

      if (children.length && children[children.length - 1].type && children[children.length - 1].type.muiName === 'ListItemSecondaryAction') {
        var secondaryAction = children.pop();
        return _react2.default.createElement(
          'div',
          { className: classes.listItemContainer },
          _react2.default.createElement(component, listItemProps, children),
          secondaryAction
        );
      }

      return _react2.default.createElement(component, listItemProps, children);
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  button: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  dense: _react.PropTypes.bool,
  /**
   * @ignore
   */
  disabled: _react.PropTypes.bool,
  divider: _react.PropTypes.bool,
  gutters: _react.PropTypes.bool
};
ListItem.defaultProps = {
  button: false,
  component: 'div',
  dense: false,
  disabled: false,
  divider: false,
  gutters: true
};
ListItem.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = ListItem;