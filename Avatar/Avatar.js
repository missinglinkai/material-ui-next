'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _assign = require('object-assign');

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Avatar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } //  weak

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Avatar', function (theme) {
  var palette = theme.palette;

  return {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      fontSize: 20,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },
    defaultColor: {
      color: palette.background.default,
      backgroundColor: (0, _colorManipulator.emphasize)(palette.background.default, 0.26)
    },
    img: {
      maxWidth: '100%',
      width: '100%',
      height: 'auto'
    }
  };
});

function Avatar(props, context) {
  var alt = props.alt,
      classNameProp = props.className,
      childrenProp = props.children,
      childrenClassNameProp = props.childrenClassName,
      component = props.component,
      sizes = props.sizes,
      src = props.src,
      srcSet = props.srcSet,
      other = _objectWithoutProperties(props, ['alt', 'className', 'children', 'childrenClassName', 'component', 'sizes', 'src', 'srcSet']);

  var classes = context.styleManager.render(styleSheet);
  var className = (0, _classnames2.default)(classes.root, _defineProperty({}, classes.defaultColor, childrenProp && !src && !srcSet), classNameProp);
  var containerProps = _extends({
    className: className
  }, other);

  var children = null;

  if (childrenProp) {
    if (childrenClassNameProp && _react2.default.isValidElement(childrenProp)) {
      var childrenClassName = (0, _classnames2.default)(childrenClassNameProp, childrenProp.props.className);
      children = _react2.default.cloneElement(childrenProp, { className: childrenClassName });
    } else {
      children = childrenProp;
    }
  } else if (src || srcSet) {
    var imgProps = {
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    };
    children = _react2.default.createElement('img', imgProps);
  }

  return _react2.default.createElement(component, containerProps, children);
}

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: _react.PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar.
   * `src` and `alt` props will not be used and no `img` will
   * be rendered by default.
   *
   * This can be an element, or just a string.
   */
  children: _react.PropTypes.node,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip to style the Avatar icon.
   */
  childrenClassName: _react.PropTypes.string,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The component type of the root element.
   */
  component: _react.PropTypes.string,
  /**
   * sizes desc
   */
  sizes: _react.PropTypes.string,
  /**
   * src desc
   */
  src: _react.PropTypes.string,
  /**
   * srcSet desc
   */
  srcSet: _react.PropTypes.string
};

Avatar.defaultProps = {
  alt: '',
  component: 'div'
};

Avatar.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};