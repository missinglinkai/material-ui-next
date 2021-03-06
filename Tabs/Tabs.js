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

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _helpers = require('../utils/helpers');

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Tabs', function () {
  return {
    root: {
      position: 'relative', // For the TabIndicator.
      display: 'flex',
      justifyContent: 'flex-start'
    },
    centered: {
      justifyContent: 'center'
    }
  };
});

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indicatorStyle: {}
    }, _this.tabs = undefined, _this.handleResize = (0, _helpers.throttle)(function () {
      _this.updateIndicator(_this.props);
    }, 100), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateIndicator(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updateIndicator(nextProps);
    }
  }, {
    key: 'updateIndicator',
    value: function updateIndicator(props) {
      var tabsBox = this.tabs.getBoundingClientRect();
      var tabBox = this.tabs.children[props.index].getBoundingClientRect();

      this.setState({
        indicatorStyle: {
          left: tabBox.left - tabsBox.left,
          width: tabBox.width }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          centered = _props.centered,
          childrenProp = _props.children,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          index = _props.index,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          textColor = _props.textColor,
          other = _objectWithoutProperties(_props, ['centered', 'children', 'className', 'fullWidth', 'index', 'indicatorClassName', 'indicatorColor', 'onChange', 'textColor']);

      var classes = this.context.styleManager.render(styleSheet);
      var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.centered, centered), classNameProp);

      var children = _react.Children.map(childrenProp, function (tab, childIndex) {
        return (0, _react.cloneElement)(tab, {
          fullWidth: fullWidth,
          selected: childIndex === index,
          index: childIndex,
          onChange: onChange,
          textColor: textColor
        });
      });

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          'div',
          _extends({
            className: className,
            ref: function ref(c) {
              _this2.tabs = c;
            },
            role: 'tablist'
          }, other),
          children,
          _react2.default.createElement(_TabIndicator2.default, {
            style: this.state.indicatorStyle,
            className: indicatorClassName,
            indicatorColor: indicatorColor
          })
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: _react.PropTypes.bool,
  /**
   * The content of the `Tabs`.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views.
   */
  fullWidth: _react.PropTypes.bool,
  /**
   * The index of the currently selected `BottomNavigation`.
   */
  index: _react.PropTypes.number,
  /**
   * The CSS class name of the indicator element.
   */
  indicatorClassName: _react.PropTypes.string,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent']), _react.PropTypes.string]),
  /**
   * Function called when the index change.
   */
  onChange: _react.PropTypes.func,
  /**
   * Determines the color of the `Tab`.
   */
  textColor: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['accent', 'inherit']), _react.PropTypes.string])
};
Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'accent',
  textColor: 'inherit'
};
Tabs.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Tabs;