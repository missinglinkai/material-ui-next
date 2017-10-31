'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _assign = require('object-assign');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jssThemeReactor = require('jss-theme-reactor');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //  weak

/**
 * A layout component using the following libs as inspiration.
 *
 * For the implementation:
 * - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
 * - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
 * - https://github.com/roylee0704/react-flexbox-grid
 * - https://material.angularjs.org/latest/layout/introduction
 *
 * Follow this flexbox Guide to better understand the underlying model:
 * - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */


var GUTTERS = [0, 8, 16, 24, 40];
var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = _defineProperty({}, 'grid-' + breakpoint, {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });

  GRID_SIZES.forEach(function (size, index) {
    if (index === 0) {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4) + '%';

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/b0508a975d711d6b24c01f57dd5445c22699fac4/scss/mixins/_grid.scss#L69
    /* eslint-enable max-len */
    styles['grid-' + breakpoint + '-' + size] = {
      flexBasis: width,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    _assign(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};

  GUTTERS.forEach(function (gutter, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['gutter-' + breakpoint + '-' + gutter] = {
      margin: -gutter / 2,
      '& > $typeItem': {
        padding: gutter / 2
      }
    };
  });

  return styles;
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Layout', function (theme) {
  // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',

  return _extends({
    typeContainer: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    typeItem: {
      flex: '0 0 auto'
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'align-xs-center': {
      alignItems: 'center'
    },
    'align-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-xs-stretch': {
      alignItems: 'stretch'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (styles, key) {
    // Use side effect for performance.
    generateGrid(styles, theme, key);

    return styles;
  }, {}));
});

function Layout(props, context) {
  var _classNames;

  var children = props.children,
      className = props.className,
      ComponentProp = props.component,
      container = props.container,
      item = props.item,
      align = props.align,
      direction = props.direction,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      gutter = props.gutter,
      justify = props.justify,
      wrap = props.wrap,
      other = _objectWithoutProperties(props, ['children', 'className', 'component', 'container', 'item', 'align', 'direction', 'xs', 'sm', 'md', 'lg', 'xl', 'gutter', 'justify', 'wrap']);

  var classes = context.styleManager.render(styleSheet);

  return _react2.default.createElement(
    ComponentProp,
    _extends({
      className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.typeContainer, container), _defineProperty(_classNames, classes.typeItem, item), _defineProperty(_classNames, classes['gutter-xs-' + gutter], container && gutter !== 0), _defineProperty(_classNames, classes['direction-xs-' + direction], direction !== Layout.defaultProps.direction), _defineProperty(_classNames, classes['wrap-xs-' + wrap], wrap !== Layout.defaultProps.wrap), _defineProperty(_classNames, classes['align-xs-' + align], align !== Layout.defaultProps.align), _defineProperty(_classNames, classes['justify-xs-' + justify], justify !== Layout.defaultProps.justify), _defineProperty(_classNames, classes['grid-xs'], xs === true), _defineProperty(_classNames, classes['grid-xs-' + xs], xs && xs !== true), _defineProperty(_classNames, classes['grid-sm'], sm === true), _defineProperty(_classNames, classes['grid-sm-' + sm], sm && sm !== true), _defineProperty(_classNames, classes['grid-md'], md === true), _defineProperty(_classNames, classes['grid-md-' + md], md && md !== true), _defineProperty(_classNames, classes['grid-lg'], lg === true), _defineProperty(_classNames, classes['grid-lg-' + lg], lg && lg !== true), _defineProperty(_classNames, classes['grid-xl'], xl === true), _defineProperty(_classNames, classes['grid-xl-' + xl], xl && xl !== true), _classNames), className)
    }, other),
    children
  );
}

var gridPropType = _react.PropTypes.oneOf(GRID_SIZES);

Layout.propTypes = {
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The element or component used for the root node.
   */
  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  /**
   * It true, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _react.PropTypes.bool,
  /**
   * It true, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _react.PropTypes.bool,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: gridPropType,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: gridPropType, // eslint-disable-line react/sort-prop-types
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: gridPropType, // eslint-disable-line react/sort-prop-types
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: gridPropType, // eslint-disable-line react/sort-prop-types
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: gridPropType, // eslint-disable-line react/sort-prop-types
  /**
   * Defines the `align-items` style property.
   * It's applied for all the screen sizes.
   */
  align: _react.PropTypes.oneOf([// eslint-disable-line react/sort-prop-types
  'flex-start', 'center', 'flex-end', 'stretch']),
  /**
   * Defines the `flex-direction` style property.
   * It's applied for all the screen sizes.
   */
  direction: _react.PropTypes.oneOf([// eslint-disable-line react/sort-prop-types
  'row', 'row-reverse', 'column', 'column-reverse']),
  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  gutter: _react.PropTypes.oneOf(GUTTERS), // eslint-disable-line react/sort-prop-types
  /**
   * Defines the `justify-content` style property.
   * It's applied for all the screen sizes.
   */
  justify: _react.PropTypes.oneOf([// eslint-disable-line react/sort-prop-types
  'flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all the screen sizes.
   */
  wrap: _react.PropTypes.oneOf([// eslint-disable-line react/sort-prop-types
  'nowrap', 'wrap', 'wrap-reverse'])
};

Layout.defaultProps = {
  component: 'div',
  container: false,
  item: false,
  align: 'flex-start',
  direction: 'row',
  gutter: 16,
  justify: 'flex-start',
  wrap: 'wrap'
};

Layout.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};

exports.default = Layout;