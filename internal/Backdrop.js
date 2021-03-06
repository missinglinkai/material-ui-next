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

var _colors = require('../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Backdrop', function (theme) {
  return {
    root: {
      zIndex: -1,
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: _colors.lightBlack,
      transition: theme.transitions.create('opacity'),
      willChange: 'opacity',
      opacity: 0
    },
    invisible: {
      backgroundColor: 'rgba(0, 0, 0, 0)'
    }
  };
});

var Backdrop = function (_Component) {
  _inherits(Backdrop, _Component);

  function Backdrop() {
    _classCallCheck(this, Backdrop);

    return _possibleConstructorReturn(this, (Backdrop.__proto__ || Object.getPrototypeOf(Backdrop)).apply(this, arguments));
  }

  _createClass(Backdrop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          visible = _props.visible,
          other = _objectWithoutProperties(_props, ['children', 'className', 'visible']);

      var classes = this.context.styleManager.render(styleSheet);
      var backdropClass = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.invisible, !visible), className);
      return _react2.default.createElement(
        'div',
        _extends({
          'data-mui-test': 'Backdrop',
          className: backdropClass,
          'aria-hidden': 'true'
        }, other),
        children
      );
    }
  }]);

  return Backdrop;
}(_react.Component);

Backdrop.propTypes = {
  /**
   * Can be used, for instance, to render a letter inside the avatar.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  visible: _react.PropTypes.bool
};
Backdrop.defaultProps = {
  visible: true
};
Backdrop.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Backdrop;