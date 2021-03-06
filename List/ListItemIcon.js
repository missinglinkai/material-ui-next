'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('ListItemIcon', function () {
  return {
    root: {
      width: 40
    }
  };
});

var ListItemIcon = function (_Component) {
  _inherits(ListItemIcon, _Component);

  function ListItemIcon() {
    _classCallCheck(this, ListItemIcon);

    return _possibleConstructorReturn(this, (ListItemIcon.__proto__ || Object.getPrototypeOf(ListItemIcon)).apply(this, arguments));
  }

  _createClass(ListItemIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classNameProp = _props.className,
          other = _objectWithoutProperties(_props, ['children', 'className']);

      var classes = this.context.styleManager.render(styleSheet);

      return (0, _react.cloneElement)(children, _extends({
        className: (0, _classnames2.default)(classes.root, classNameProp, children.props.className)
      }, other));
    }
  }]);

  return ListItemIcon;
}(_react.Component);

exports.default = ListItemIcon;


ListItemIcon.propTypes = {
  children: _react.PropTypes.element.isRequired,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string
};

ListItemIcon.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};