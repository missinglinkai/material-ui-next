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

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _propTypes = require('../utils/propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? n + 'px' : n;
  }).join(' ');
}

var styleSheet = exports.styleSheet = (0, _jssThemeReactor.createStyleSheet)('Popover', function () {
  return {
    popover: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      '&:focus': {
        outline: 'none'
      }
    }
  };
});

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.autoTransitionDuration = undefined, _this.handleEnter = function (element) {
      element.style.opacity = 0;
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      var positioning = _this.getPositioningStyle(element);

      element.style.top = positioning.top;
      element.style.left = positioning.left;
      element.style.transformOrigin = positioning.transformOrigin;

      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.context.styleManager.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', transitionDuration + 'ms'), transitions.create('transform', transitionDuration * 0.666 + 'ms')].join(',');
    }, _this.handleEntering = function (element) {
      element.style.opacity = 1;
      element.style.transform = Popover.getScale(1);

      if (_this.props.onEntering) {
        _this.props.onEntering();
      }
    }, _this.handleExit = function (element) {
      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.context.styleManager.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', transitionDuration + 'ms'), transitions.create('transform', transitionDuration * 0.666 + 'ms', '' + transitionDuration * 0.333)].join(',');

      element.style.opacity = 0;
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit();
      }
    }, _this.handleRequestTimeout = function () {
      if (_this.props.transitionDuration === 'auto') {
        return (_this.autoTransitionDuration || 0) + 20;
      }
      return _this.props.transitionDuration + 20;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popover, [{
    key: 'getPositioningStyle',
    value: function getPositioningStyle(element) {
      // Check if the parent has requested anchoring on an inner content node
      var contentAnchorOffset = this.getContentAnchorOffset(element);
      // Get the offset of of the anchoring element
      var anchorOffset = this.getAnchorOffset(contentAnchorOffset);

      var elemRect = {
        width: element.clientWidth,
        height: element.clientHeight
      };
      // Get the transform origin point on the element itself
      var transformOrigin = this.getTransformOrigin(elemRect, contentAnchorOffset);

      // Calculate element positioning
      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width;

      // Window thresholds taking required margin into account
      var marginThreshold = 16;
      var heightThreshold = window.innerHeight - marginThreshold;
      var widthThreshold = window.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;
        top -= _diff;
        transformOrigin.vertical += _diff;
      }

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;
        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;
        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: top + 'px',
        left: left + 'px',
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    }

    /**
     * Returns the top/left offset of the position
     * to attach to on the anchor element (or body if none is provided)
     */

  }, {
    key: 'getAnchorOffset',
    value: function getAnchorOffset(contentAnchorOffset) {
      var _props = this.props,
          anchorElProp = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin;


      var anchorEl = anchorElProp || document.body;
      var anchorRect = anchorEl.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }

    /**
     * Returns the vertical offset of inner
     * content to anchor the transform on if provided
     */

  }, {
    key: 'getContentAnchorOffset',
    value: function getContentAnchorOffset(element) {
      var contentAnchorOffset = 0;

      if (this.props.getContentAnchorEl) {
        var contentAnchorEl = this.props.getContentAnchorEl(element);
        if (contentAnchorEl && (0, _contains2.default)(element, contentAnchorEl)) {
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 || 0;
        }
      }

      return contentAnchorOffset;
    }

    /**
     * Return the base transform origin using the element
     * and taking the content anchor offset into account if in use
     */

  }, {
    key: 'getTransformOrigin',
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;

      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          modal = _props2.modal,
          onRequestClose = _props2.onRequestClose,
          open = _props2.open,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorEl = _props2.anchorEl,
          anchorOrigin = _props2.anchorOrigin,
          role = _props2.role,
          transformOrigin = _props2.transformOrigin,
          transitionDuration = _props2.transitionDuration,
          enteredClassName = _props2.enteredClassName,
          enteringClassName = _props2.enteringClassName,
          exitedClassName = _props2.exitedClassName,
          exitingClassName = _props2.exitingClassName,
          onEnter = _props2.onEnter,
          onEntering = _props2.onEntering,
          onEntered = _props2.onEntered,
          onExit = _props2.onExit,
          onExiting = _props2.onExiting,
          onExited = _props2.onExited,
          zDepth = _props2.zDepth,
          other = _objectWithoutProperties(_props2, ['children', 'className', 'modal', 'onRequestClose', 'open', 'getContentAnchorEl', 'anchorEl', 'anchorOrigin', 'role', 'transformOrigin', 'transitionDuration', 'enteredClassName', 'enteringClassName', 'exitedClassName', 'exitingClassName', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'zDepth']);

      var classes = this.context.styleManager.render(styleSheet);

      return _react2.default.createElement(
        _Modal2.default,
        {
          show: open,
          backdropVisible: false,
          onRequestClose: onRequestClose
        },
        _react2.default.createElement(
          _Transition2.default,
          {
            'in': open,
            enteredClassName: enteredClassName,
            enteringClassName: enteringClassName,
            exitedClassName: exitedClassName,
            exitingClassName: exitingClassName,
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onEntered: onEntered,
            onExit: this.handleExit,
            onExiting: onExiting,
            onExited: onExited,
            role: role,
            onRequestTimeout: this.handleRequestTimeout,
            transitionAppear: true
          },
          _react2.default.createElement(
            _Paper2.default,
            _extends({
              'data-mui-test': 'Popover',
              className: (0, _classnames2.default)(classes.popover, className),
              zDepth: zDepth
            }, other),
            children
          )
        )
      );
    }
  }], [{
    key: 'getScale',
    value: function getScale(value) {
      return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
    }
  }]);

  return Popover;
}(_react.Component);

Popover.propTypes = {
  /**
   * This is the DOM element that will be used
   * to set the position of the popover.
   */
  anchorEl: _react.PropTypes.object,
  /**
   * This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _propTypes2.default.origin,
  /**
   * The content of the component.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is entered
   */
  enteredClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is entering
   */
  enteringClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied when the component is exited
   */
  exitedClassName: _react.PropTypes.string,
  /**
   * CSS class or classes applied while the component is exiting
   */
  exitingClassName: _react.PropTypes.string,
  /**
   * @ignore
   */
  getContentAnchorEl: _react.PropTypes.func,
  /**
   * If `true`, the Popover will be rendered as a modal with
   * scroll locking, focus trapping and a clickaway layer beneath
   */
  modal: _react.PropTypes.bool,
  /**
   * Callback fired before the component is entering
   */
  onEnter: _react.PropTypes.func,
  /**
   * Callback fired when the component is entering
   */
  onEntering: _react.PropTypes.func,
  /**
   * Callback fired when the component has entered
   */
  onEntered: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting
   */
  onExit: _react.PropTypes.func,
  /**
   * Callback fired when the component is exiting
   */
  onExiting: _react.PropTypes.func,
  /**
   * Callback fired when the component has exited
   */
  onExited: _react.PropTypes.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback function fired when the popover is requested to be closed.
   *
   * @param {event} event The event that triggered the close request
   */
  onRequestClose: _react.PropTypes.func,
  /**
   * If `true`, the popover is visible.
   */
  open: _react.PropTypes.bool,
  role: _react.PropTypes.string,
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _propTypes2.default.origin,
  /**
   * Set to 'auto' to automatically calculate transition time based on height
   */
  transitionDuration: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  zDepth: _react.PropTypes.number
};
Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  modal: true,
  open: false,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  transitionDuration: 'auto',
  zDepth: 8
};
Popover.contextTypes = {
  styleManager: _react.PropTypes.object.isRequired
};
exports.default = Popover;