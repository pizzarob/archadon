require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utils = __webpack_require__(3);

var _default = (0, _Utils.keyMirror)({
  LOG_IN: null,
  SET_ERROR: null,
  SET_USER_DATA: null,
  SIGN_UP: null,
  USER_AUTH_SUCCESS: null,
  APP_LOAD: null,
  LOG_OUT: null,
  CLEAR_AUTHENTICATION_DATA: null,
  LOADING: null,
  SET_REDIRECT_PATH: null,
  PRODUCT_LIST_LOADED: null,
  ADD_TO_CART: null,
  ON_CLEAR_FILTERS: null,
  PRODUCT_DATA_LOADED: null,
  REMOVE_FROM_CART: null,
  TOGGLE_FAVORITE: null,
  ON_FILTER_UPDATE: null,
  REPLACE_PRODUCT_LIST: null,
  PAGE_CHANGE: null,
  PURCHASE: null,
  LOAD_FAVORITES: null,
  FAVORITES_LOADED: null,
  SET_LOADING_PAGE: null,
  SET_ORDER_CONFIRMATION: null,
  REPLACE_CART: null,
  LOAD_MORE: null,
  LOAD_MORE_DONE: null,
  PRODUCT_DETAIL_LOADED: null,
  GET_PRODUCT_DETAILS: null,
  ON_NAV_OPEN: null,
  HOME_LOADED: null,
  ON_COLLECTION_SUCCESS: null,
  REQUEST_COLLECTION: null,
  NAV_STATE: null
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/actions/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(21);

var _entries2 = _interopRequireDefault(_entries);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(16);

var _keys2 = _interopRequireDefault(_keys);

exports.action = action;
exports.keyMirror = keyMirror;
exports.request = request;
exports.throttle = throttle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function action() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var error = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return {
    type: type, payload: payload, meta: meta, error: error
  };
}

function keyMirror(obj) {
  var out = {};
  (0, _keys2.default)(obj).forEach(function (key) {
    out[key] = key;
  });
  return out;
}

function request(method, url, data, headers, meta) {
  return new _promise2.default(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    if (headers) {
      (0, _entries2.default)(headers).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            header = _ref2[0],
            val = _ref2[1];

        xhr.setRequestHeader(header, val);
      });
    }

    xhr.addEventListener('load', function () {
      var response = xhr.response,
          status = xhr.status;

      var res = void 0;
      try {
        res = JSON.parse(response);
      } catch (e) {
        res = response;
      }
      if (status >= 200 && status < 400) {
        resolve({ response: res, status: status, meta: meta });
      } else {
        reject({ response: res, status: status });
      }
    });

    if (data) {
      xhr.send((0, _stringify2.default)(data));
    } else {
      xhr.send();
    }
  });
}

function throttle(callback, wait) {
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

  var timeout = null;
  var callbackArgs = null;

  var later = function later() {
    callback.apply(context, callbackArgs);
    timeout = null;
  };

  return function () {
    if (!timeout) {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      callbackArgs = args;
      timeout = setTimeout(later, wait);
    }
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(action, 'action', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');

  __REACT_HOT_LOADER__.register(keyMirror, 'keyMirror', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');

  __REACT_HOT_LOADER__.register(request, 'request', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');

  __REACT_HOT_LOADER__.register(throttle, 'throttle', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IMAGE_ORIGIN = exports.IMAGE_ORIGIN = process.env.NODE_ENV !== 'production' ? 'https://assets.dev.archadon.com' : 'https://assets.archadon.com';

var DEFAULT_ITEM = exports.DEFAULT_ITEM = {
  Images: [],
  Height: '',
  Width: '',
  Price: 0,
  Name: '',
  LongDescription: '',
  ShortDescription: '',
  SKU: ''
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IMAGE_ORIGIN, 'IMAGE_ORIGIN', '/Users/realseanp1/Projects/archadon/src/client/constants.js');

  __REACT_HOT_LOADER__.register(DEFAULT_ITEM, 'DEFAULT_ITEM', '/Users/realseanp1/Projects/archadon/src/client/constants.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(11);

var _FavoriteBtn = __webpack_require__(26);

var _FavoriteBtn2 = _interopRequireDefault(_FavoriteBtn);

var _ProductDetailLink = __webpack_require__(24);

var _ProductDetailLink2 = _interopRequireDefault(_ProductDetailLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductList(_ref) {
  var products = _ref.products;

  return _react2.default.createElement(
    'div',
    { className: 'product-list-wrap' },
    products.map(function (product) {
      return _react2.default.createElement(
        'div',
        { className: 'product-tile' },
        _react2.default.createElement(
          'div',
          { className: 'product-tile-inner' },
          _react2.default.createElement(
            _ProductDetailLink2.default,
            { product: product },
            _react2.default.createElement(
              'div',
              { className: 'product-tile-img' },
              _react2.default.createElement('img', { src: _Constants.IMAGE_ORIGIN + '/' + (product.Images && product.Images[0]) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'margin--top-3' },
              _react2.default.createElement(
                'p',
                { className: 'product-tile-title' },
                product.Name || 'Cool Rug'
              ),
              _react2.default.createElement(
                'p',
                { className: 'product-tile-title font-color--lighter' },
                product.ShortDescription
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'margin--top-2 flex-parent flex-justify-between' },
            _react2.default.createElement(
              'p',
              { className: 'product-tile-title font-color--light' },
              product.Price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            ),
            _react2.default.createElement(_FavoriteBtn2.default, { className: 'heart', id: product.ID })
          )
        )
      );
    })
  );
}

var _default = ProductList;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductList, 'ProductList', '/Users/realseanp1/Projects/archadon/src/client/components/ProductList.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ProductList.jsx');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Svg(_ref) {
  var variant = _ref.variant,
      color = _ref.color;

  return _react2.default.createElement(
    "svg",
    { width: "100%", height: "100%", style: { color: color || '#FFFFFF' } },
    _react2.default.createElement("use", { xlinkHref: "#" + variant })
  );
}

Svg.propTypes = {
  variant: _react2.default.PropTypes.string.isRequired,
  color: _react2.default.PropTypes.string
};

var _default = Svg;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Svg, "Svg", "/Users/realseanp1/Projects/archadon/src/client/components/ui/Svg.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/realseanp1/Projects/archadon/src/client/components/ui/Svg.jsx");
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_PRODUCT_DETAILS = _Actions2.default.GET_PRODUCT_DETAILS;


function ProductDetailLink(_ref) {
  var children = _ref.children,
      product = _ref.product,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'a',
    { href: '/product/' + product.Name + '/' + product._id, onClick: onClick(product._id) },
    children
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClick: function onClick(id) {
      return function (e) {
        e.preventDefault();
        dispatch((0, _Utils.action)(GET_PRODUCT_DETAILS, id));
      };
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ProductDetailLink);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductDetailLink, 'ProductDetailLink', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetailLink.jsx');

  __REACT_HOT_LOADER__.register(GET_PRODUCT_DETAILS, 'GET_PRODUCT_DETAILS', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetailLink.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetailLink.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetailLink.jsx');
}();

;

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _Svg = __webpack_require__(20);

var _Svg2 = _interopRequireDefault(_Svg);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOGGLE_FAVORITE = _Actions2.default.TOGGLE_FAVORITE;


function FavoriteBtn(_ref) {
  var favorites = _ref.favorites,
      toggleFavorite = _ref.toggleFavorite,
      id = _ref.id,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { style: { cursor: 'pointer' }, onClick: toggleFavorite(id), className: (0, _classnames2.default)('heart', className) },
    _react2.default.createElement(_Svg2.default, { color: '#bf9b30', variant: favorites.includes(id) ? 'icon-heart-filled' : 'icon-heart' })
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: function toggleFavorite(ID) {
      return function () {
        return dispatch((0, _Utils.action)(TOGGLE_FAVORITE, ID));
      };
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favorites: state.user.Favorites || []
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FavoriteBtn);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FavoriteBtn, 'FavoriteBtn', '/Users/realseanp1/Projects/archadon/src/client/components/ui/FavoriteBtn.jsx');

  __REACT_HOT_LOADER__.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/Users/realseanp1/Projects/archadon/src/client/components/ui/FavoriteBtn.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ui/FavoriteBtn.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ui/FavoriteBtn.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ui/FavoriteBtn.jsx');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeroHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      src = _ref.src;

  return _react2.default.createElement(
    "div",
    { className: "collection-header global-padding" },
    _react2.default.createElement(
      "div",
      { className: "collection-header-title" },
      _react2.default.createElement(
        "h1",
        { className: "align--center" },
        title
      ),
      subtitle && _react2.default.createElement(
        "h3",
        { className: "align--center" },
        subtitle
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "collection-header-img" },
      _react2.default.createElement("img", { src: src })
    )
  );
}

var _default = HeroHeader;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HeroHeader, "HeroHeader", "/Users/realseanp1/Projects/archadon/src/client/components/ui/HeroHeader.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/realseanp1/Projects/archadon/src/client/components/ui/HeroHeader.jsx");
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("algoliasearch");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navigation = __webpack_require__(55);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _Home = __webpack_require__(50);

var _Home2 = _interopRequireDefault(_Home);

var _Logout = __webpack_require__(54);

var _Logout2 = _interopRequireDefault(_Logout);

var _Account = __webpack_require__(44);

var _Account2 = _interopRequireDefault(_Account);

var _SignInForm = __webpack_require__(63);

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _Checkout = __webpack_require__(47);

var _Checkout2 = _interopRequireDefault(_Checkout);

var _ProductDetail = __webpack_require__(58);

var _ProductDetail2 = _interopRequireDefault(_ProductDetail);

var _Cart = __webpack_require__(46);

var _Cart2 = _interopRequireDefault(_Cart);

var _Shop = __webpack_require__(62);

var _Shop2 = _interopRequireDefault(_Shop);

var _OrderConfirmation = __webpack_require__(56);

var _OrderConfirmation2 = _interopRequireDefault(_OrderConfirmation);

var _reactRouter = __webpack_require__(23);

__webpack_require__(80);

var _spritesheet = __webpack_require__(82);

var _spritesheet2 = _interopRequireDefault(_spritesheet);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _Loader = __webpack_require__(52);

var _Loader2 = _interopRequireDefault(_Loader);

var _About = __webpack_require__(42);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(48);

var _Contact2 = _interopRequireDefault(_Contact);

var _Shipping = __webpack_require__(61);

var _Shipping2 = _interopRequireDefault(_Shipping);

var _AbstractCollection = __webpack_require__(43);

var _AbstractCollection2 = _interopRequireDefault(_AbstractCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_LOAD = _Actions2.default.APP_LOAD,
    NAV_STATE = _Actions2.default.NAV_STATE,
    PAGE_CHANGE = _Actions2.default.PAGE_CHANGE;


function Modal(_ref) {
  var children = _ref.children,
      open = _ref.open;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('modal', { open: open }) },
    _react2.default.createElement(
      'div',
      { className: 'modal-content' },
      _react2.default.createElement(
        'div',
        { className: 'modal-body global-padding' },
        children
      )
    )
  );
}

var ScrollToTop = function (_Component) {
  (0, _inherits3.default)(ScrollToTop, _Component);

  function ScrollToTop() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ScrollToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ScrollToTop.__proto__ || (0, _getPrototypeOf2.default)(ScrollToTop)).call.apply(_ref2, [this].concat(args))), _this), _this.history = {
      current: _this.props.location.pathname,
      prev: {
        path: '',
        scroll: 0
      }
    }, _this.y = 0, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ScrollToTop, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function () {
        _this2.y = window.scrollY;
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location.pathname === this.props.location.pathname) {
        return;
      }

      console.log(this.history);

      if (this.props.location.pathname !== this.history.prev.path) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, this.history.prev.scroll);
      }

      this.history.prev.path = this.history.current;
      this.history.prev.scroll = this.y;
      this.history.current = this.props.location.pathname;
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ScrollToTop;
}(_react.Component);

var ScrollToTopWithRouter = (0, _reactRouter.withRouter)(ScrollToTop);

var App = function (_Component2) {
  (0, _inherits3.default)(App, _Component2);

  function App() {
    var _ref3;

    var _temp2, _this3, _ret2;

    (0, _classCallCheck3.default)(this, App);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
      scrolled: false
    }, _this3.handleNavUpdate = function () {
      if (!_this3.props.ui.navFixed && window.pageYOffset > window.innerHeight / 2) {
        _this3.props.updateNav(true);
      } else if (_this3.props.ui.navFixed && window.pageYOffset < window.innerHeight / 2) {
        _this3.props.updateNav(false);
      }
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this3, _ret2);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loaded();
      window.addEventListener('scroll', this.handleNavUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ScrollToTopWithRouter,
        null,
        _react2.default.createElement(
          'div',
          { style: this.props.ui.navFixed ? { paddingTop: '150px' } : null, className: 'layout' },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'flex-grow-1 flex-justify-center flex-parent' },
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { path: '/shop', component: _Shop2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _About2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/(login|signup)', render: function render(_ref4) {
                  var location = _ref4.location;
                  return _react2.default.createElement(_SignInForm2.default, { path: location.pathname });
                } }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/abstract-handwoven-rug-collection', component: _AbstractCollection2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/account', component: _Account2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/logout', component: _Logout2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/cart', component: _Cart2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/contact', component: _Contact2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/shipping-and-returns', component: _Shipping2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/checkout', component: _Checkout2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/product/:name/:id', component: _ProductDetail2.default }),
              _react2.default.createElement(_reactRouterDom.Route, { path: '/order-confirmation', component: _OrderConfirmation2.default })
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _spritesheet2.default } })
          ),
          _react2.default.createElement(_Loader2.default, { location: this.props.location, done: this.props.pageChangeDone, loading: this.props.loading.full || this.props.ui.pageChange })
        )
      );
    }
  }]);
  return App;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loaded: function loaded() {
      dispatch((0, _Utils.action)(APP_LOAD));
    },
    pageChangeDone: function pageChangeDone() {
      dispatch((0, _Utils.action)(PAGE_CHANGE, false));
    },
    updateNav: function updateNav(fixed) {
      dispatch((0, _Utils.action)(NAV_STATE, fixed));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    ui: state.ui,
    loading: state.loading
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Modal, 'Modal', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(APP_LOAD, 'APP_LOAD', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(NAV_STATE, 'NAV_STATE', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(PAGE_CHANGE, 'PAGE_CHANGE', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(ScrollToTopWithRouter, 'ScrollToTopWithRouter', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeStore;

var _redux = __webpack_require__(31);

var _reducers = __webpack_require__(70);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose : _redux.compose;

if (process.NODE_ENV === 'production') {
  composeEnhancers = _redux.compose;
}

function makeStore(initialState) {
  try {
    for (var _len = arguments.length, middleware = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      middleware[_key - 1] = arguments[_key];
    }

    var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware)));

    if (false) {
      module.hot.accept('./reducers', function () {
        var nextRootReducer = require('./reducers').default; // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  } catch (e) {
    return e;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(makeStore, 'makeStore', '/Users/realseanp1/Projects/archadon/src/client/store.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/realseanp1/Projects/archadon/src/client/store.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(17);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _algoliasearch = __webpack_require__(28);

var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _algoliasearch2.default)("RED26AY4BZ", "a1f3d170f024c5992ff1ba28401a971f");
var indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
var indexName = indexPrefix + '_Products';
var defaultIndex = client.initIndex(indexName);

var getBatch = function getBatch(arr) {
  return new _promise2.default(function (resolve, reject) {
    defaultIndex.getObjects(arr, function (err, content) {
      if (err) {
        return reject(err);
      }
      return resolve(content);
    });
  });
};

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
    var products;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body.ids) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', res.status(200).send());

          case 2:
            if (!Array.isArray(req.body.ids)) {
              _context.next = 18;
              break;
            }

            products = void 0;
            _context.prev = 4;
            _context.next = 7;
            return getBatch(req.body.ids);

          case 7:
            products = _context.sent;

            products.results = products.results.filter(function (product) {
              return product && product.Qty > 0;
            });
            res.status(200).send(products);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](4);

            console.log(_context.t0);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 16:
            _context.next = 19;
            break;

          case 18:
            return _context.abrupt('return', res.status(400).send());

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 12]]);
  }));

  function getBatchRoute(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return getBatchRoute;
}();

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(client, 'client', '/Users/realseanp1/Projects/archadon/src/search/batchItems.js');

  __REACT_HOT_LOADER__.register(indexPrefix, 'indexPrefix', '/Users/realseanp1/Projects/archadon/src/search/batchItems.js');

  __REACT_HOT_LOADER__.register(indexName, 'indexName', '/Users/realseanp1/Projects/archadon/src/search/batchItems.js');

  __REACT_HOT_LOADER__.register(defaultIndex, 'defaultIndex', '/Users/realseanp1/Projects/archadon/src/search/batchItems.js');

  __REACT_HOT_LOADER__.register(getBatch, 'getBatch', '/Users/realseanp1/Projects/archadon/src/search/batchItems.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(17);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var searchRoute = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
    var params, index, filters, _loop, i, content;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {};
            index = void 0;

            if (!req.body.filters) {
              _context.next = 9;
              break;
            }

            if (Array.isArray(req.body.filters)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return', res.sendStatus(400));

          case 5:
            filters = [];

            _loop = function _loop(i) {
              var current = req.body.filters[i];
              var queries = current.queries,
                  currentType = current.type;

              var type = types[currentType];

              if (type === 'Raw') {
                filters.push.apply(filters, (0, _toConsumableArray3.default)(queries));
              } else if (type === 'Rank') {
                var _queries = (0, _slicedToArray3.default)(queries, 1),
                    rank = _queries[0];

                index = ranking[rank];
              } else {
                filters.push(queries.map(function (query) {
                  return type + ' ' + query;
                }).join(' AND '));
              }
            };

            for (i = 0; i < req.body.filters.length; i++) {
              _loop(i);
            }
            params.filters = 'Qty > 0 ' + (filters.length > 0 ? 'AND' : '') + ' ' + filters.join(' AND ');

          case 9:

            if (typeof req.query.page !== 'undefined') {
              params.page = req.query.page;
            }

            _context.prev = 10;
            _context.next = 13;
            return search(params, index);

          case 13:
            content = _context.sent;
            return _context.abrupt('return', res.json(content));

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](10);
            return _context.abrupt('return', res.status(400).send(_context.t0));

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[10, 17]]);
  }));

  return function searchRoute(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.search = search;

var _algoliasearch = __webpack_require__(28);

var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _algoliasearch2.default)("RED26AY4BZ", "a1f3d170f024c5992ff1ba28401a971f");
var indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
var indexName = indexPrefix + '_Products';
var defaultIndex = client.initIndex(indexName);
var ascIndex = client.initIndex(indexName + '_asc');
var descIndex = client.initIndex(indexName + '_desc');

var types = {
  p: 'Price',
  w: 'Width',
  h: 'Height',
  r: 'Rank',
  raw: 'Raw'
};

var ranking = {
  product_desc: descIndex,
  product_asc: ascIndex
};

function search() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultIndex;

  return new _promise2.default(function (resolve, reject) {
    index.search(params, function (err, content) {
      if (err) {
        return reject(err.message);
      }
      return resolve(content);
    });
  });
}

var _default = searchRoute;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(search, 'search', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(searchRoute, 'searchRoute', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(client, 'client', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(indexPrefix, 'indexPrefix', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(indexName, 'indexName', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(defaultIndex, 'defaultIndex', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(ascIndex, 'ascIndex', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(descIndex, 'descIndex', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(types, 'types', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(ranking, 'ranking', '/Users/realseanp1/Projects/archadon/src/search/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/search/index.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = html;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ga = process.env.NODE_ENV !== 'production' ? '' : '<script>\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\n  ga(\'create\', \'UA-102282562-1\', \'auto\');\n  ga(\'send\', \'pageview\');\n\n</script>';

function html(routerWithContext, props) {
    var filename = '/client.js';
    var src = process.env.NODE_ENV !== 'production' ? 'http://localhost:' + "3001" + filename : filename;
    return '\n        <html>\n            <head>\n                <meta charSet="utf-8" />\n                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n                <title>Hand-knotted, Artisan Rugs.</title>\n                <meta name="description" content="" />\n                <meta name="viewport" content="width=device-width, initial-scale=1" />\n                ' + (process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/styles.css" />' : '') + '\n                ' + ga + '\n            </head>\n            <body>\n                <div id="app">' + routerWithContext + '</div>\n                <script>\n                    window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(props) + ';\n                </script>\n                <script src="https://use.typekit.net/vgi7zyh.js"></script>\n                <script>try{Typekit.load({ async: true });}catch(e){}</script>\n                <script type="text/javascript" src="https://js.stripe.com/v2/"></script>\n                <script>\n                    Stripe.setPublishableKey(\'' + "pk_test_kF6maSYIhHAQbjGhaqwtBC9R" + '\');\n                </script>\n\n                <script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>\n                <script src="' + src + '" defer></script>\n            </body>\n        </html>\n    ';
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(html, 'html', '/Users/realseanp1/Projects/archadon/src/server/html.js');

    __REACT_HOT_LOADER__.register(ga, 'ga', '/Users/realseanp1/Projects/archadon/src/server/html.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeroHeader = __webpack_require__(27);

var _HeroHeader2 = _interopRequireDefault(_HeroHeader);

var _Constants = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function About() {
  return _react2.default.createElement(
    'div',
    { className: 'global-padding full-width' },
    _react2.default.createElement(_HeroHeader2.default, {
      title: 'One of a kind, hand-knotted, art that you walk on.',
      src: 'https://assets.dev.archadon.com/6x9.1_32929_3694.jpg'
    }),
    _react2.default.createElement(
      'section',
      { className: 'content-section' },
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement('img', { src: 'https://assets.archadon.com/6.1x9_S_2093_62.jpg' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'h3',
          null,
          'We take pride in our collection. Each of our rugs are hand-picked from the source. We promise to deliver only high-quality, hand-made, rugs. We want to give you something that you can take pride in. Since 1985 our supplier has traveled to the tribal area on the Afghan/Pakistan border and Tibet establishing lasting relationships with the very best rug weavers in those areas.'
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'content-section' },
      _react2.default.createElement(
        'div',
        { className: 'content padding-m--right-5' },
        _react2.default.createElement(
          'h1',
          null,
          'I was inspired by the integrity and simple grace of the Tibetan people.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'margin--top-3' },
          'We knew little of one another and yet, we saw many things in the same way. You will see this in the way we create rugs: attention to detail, dedication to craft. Only traditional methods and the finest hand spun Tibetan wool will do. Like the integrity that defines a culture, there is integrity in this rug. It is born of pure craftsmanship. There is a magical quality too. It\'s in the colors, the design. It is the look of today: exciting, stirring, vital. The union of two worlds: a modern face with a soul that reaches far back in time. The only difference between this rug and other works of art is that you walk on it, you live with it, it becomes part of you. Inspiration that lasts a lifetime.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement('img', { src: _Constants.IMAGE_ORIGIN + '/tibet-rugs.jpg', alt: 'Handwoven, oriental rugs' })
      )
    )
  );
}

var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/realseanp1/Projects/archadon/src/client/components/About.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/About.jsx');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _Utils = __webpack_require__(3);

var _ProductList = __webpack_require__(19);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _HeroHeader = __webpack_require__(27);

var _HeroHeader2 = _interopRequireDefault(_HeroHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_COLLECTION = _Actions2.default.REQUEST_COLLECTION;


var data = [{
  name: 'Large',
  ids: ['6x9_32394_29429', '6x9.1_32497_29459', '6x9.1_32929_3694', '6x9.1_321101_29427', '6x9.2_28800_26892', '6x9.2_32397_29426', '8x10.1_30321_27818', '6x9.2_32397_29426', '5.11x9_26602_24868', '5.11x9_33120_29736', '5.11x9.1_26990_25231', '5.11x9.2_27224_25241', '5x7_30659_2055', '5x7.1_31885_2854', '6.1x8.10_20041_19472', '6.1x8.10_20630_19657', '6.1x8.10_32602_29494', '6.1x8.11_32021_29374', '6.1x9_20657_19784', '6.1x9_29191_27299', '6.1x9_31318_29055-2', '6.1x9_32962_3823', '6x8.10_26316_24521', '6x8.11_31282_28930', '6x8.11_32194_29491', '6x9_26601_24867', '6x9_27217_25414', '6x9_31315_29036', '6x9_31747_29177', '6x9_32018_29362']
}, {
  name: 'Medium',
  ids: ['4.1x6_32926_29603', '4.1x6_32984_29667', '4x6_30869_2090', '4x6_31742_2790', '4x6_32172_29284', '4x6_32407_3350', '4x6_32419_29399', '4x6_32653_3368']
}, {
  name: 'Small',
  ids: ['2.11x4.9_32428_3187', '3.1x5.1_29980_27944', '3.1x5.2_29981_27946', '3.11x6.1_32418_29413', '3.11x6', '3x4.11_32429_3188']
}];

var AbstractCollection = function (_React$Component) {
  (0, _inherits3.default)(AbstractCollection, _React$Component);

  function AbstractCollection() {
    (0, _classCallCheck3.default)(this, AbstractCollection);
    return (0, _possibleConstructorReturn3.default)(this, (AbstractCollection.__proto__ || (0, _getPrototypeOf2.default)(AbstractCollection)).apply(this, arguments));
  }

  (0, _createClass3.default)(AbstractCollection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCollection(data);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'global-padding' },
        _react2.default.createElement(_HeroHeader2.default, {
          title: 'The Abstract Collection',
          subtitle: _react2.default.createElement(
            'span',
            null,
            'These hand-knotted rugs are made with the finest Tibetan wool. ',
            _react2.default.createElement(
              'span',
              { className: 'desktop-break' },
              'They have the look of modern day abstract art that will bring any room to life.'
            )
          ),
          src: 'https://assets.archadon.com/6x9.2_32397_29426_v2.jpg'
        }),
        data.map(function () {
          var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return _react2.default.createElement(
            'section',
            { key: obj.name },
            _react2.default.createElement(
              'h2',
              { className: 'title' },
              obj.name
            ),
            _this2.props.collections && _react2.default.createElement(_ProductList2.default, { hideBtn: true, hideFav: true, products: _this2.props.collections[obj.name] })
          );
        })
      );
    }
  }]);
  return AbstractCollection;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCollection: function getCollection(arr) {
      dispatch((0, _Utils.action)(REQUEST_COLLECTION, arr));
    }
  };
};

var mapStateTopProps = function mapStateTopProps(state) {
  return {
    collections: state.collections
  };
};

var _default = (0, _reactRedux.connect)(mapStateTopProps, mapDispatchToProps)(AbstractCollection);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_COLLECTION, 'REQUEST_COLLECTION', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');

  __REACT_HOT_LOADER__.register(data, 'data', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');

  __REACT_HOT_LOADER__.register(AbstractCollection, 'AbstractCollection', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');

  __REACT_HOT_LOADER__.register(mapStateTopProps, 'mapStateTopProps', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/AbstractCollection.jsx');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterDom = __webpack_require__(4);

var _AccountLayout = __webpack_require__(45);

var _AccountLayout2 = _interopRequireDefault(_AccountLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_REDIRECT_PATH = _Actions2.default.SET_REDIRECT_PATH;

var Account = function (_React$Component) {
  (0, _inherits3.default)(Account, _React$Component);

  function Account() {
    (0, _classCallCheck3.default)(this, Account);
    return (0, _possibleConstructorReturn3.default)(this, (Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).apply(this, arguments));
  }

  (0, _createClass3.default)(Account, [{
    key: 'redirect',
    value: function redirect() {
      this.props.setRedirectPath(this.props.location.pathname);
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1' },
        !user && this.redirect(),
        user && _react2.default.createElement(_AccountLayout2.default, null)
      );
    }
  }]);
  return Account;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setRedirectPath: function setRedirectPath(path) {
      dispatch((0, _Utils.action)(SET_REDIRECT_PATH, path));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.ID && state.user.authToken
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Account);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_REDIRECT_PATH, 'SET_REDIRECT_PATH', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(Account, 'Account', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Orders = __webpack_require__(57);

var _Orders2 = _interopRequireDefault(_Orders);

var _Favorites = __webpack_require__(49);

var _Favorites2 = _interopRequireDefault(_Favorites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccountLayout() {
  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 flex-parent global-padding padding--top-10' },
    _react2.default.createElement(
      'div',
      { className: 'auth-nav-bar' },
      _react2.default.createElement(
        'h2',
        null,
        'My Account'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'auth-nav-bar-link', activeClassName: 'active', to: '/account/orders' },
        'Orders'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'auth-nav-bar-link', activeClassName: 'active', to: '/account/favorites' },
        'Favorites'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex-grow-1 flex-parent account-content' },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/account/(orders)?', component: _Orders2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/account/favorites', component: _Favorites2.default })
      )
    )
  );
}

var _default = AccountLayout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AccountLayout, 'AccountLayout', '/Users/realseanp1/Projects/archadon/src/client/components/AccountLayout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/AccountLayout.jsx');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Constants = __webpack_require__(11);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterDom = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var _ProductDetailLink = __webpack_require__(24);

var _ProductDetailLink2 = _interopRequireDefault(_ProductDetailLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART;


var CartItem = function CartItem(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === undefined ? _Constants.DEFAULT_ITEM : _ref$item,
      removeFromCart = _ref.removeFromCart;
  return _react2.default.createElement(
    'div',
    { className: 'cart-item' },
    _react2.default.createElement(
      'div',
      { className: 'img-wrap' },
      item.Images && _react2.default.createElement(
        _ProductDetailLink2.default,
        { product: item },
        _react2.default.createElement('img', { alt: item.Name, src: _Constants.IMAGE_ORIGIN + '/' + item.Images[0].src })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          item.Name
        ),
        _react2.default.createElement(
          'div',
          null,
          item.Width,
          ' x ',
          item.Height
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement(
        'span',
        { className: 'strong' },
        item.Price.toLocaleString('USD', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'margin--top-3' },
        _react2.default.createElement(
          'span',
          { onClick: removeFromCart(item.ID), style: { cursor: 'pointer' }, className: 'font-color--first' },
          'Remove'
        )
      )
    )
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: function removeFromCart(ID) {
      return function () {
        return dispatch((0, _Utils.action)(REMOVE_FROM_CART, ID));
      };
    }
  };
};

CartItem = (0, _reactRedux.connect)(null, mapDispatchToProps)(CartItem);

function Cart(_ref2) {
  var _ref2$cart = _ref2.cart,
      items = _ref2$cart.items,
      totalPrice = _ref2$cart.totalPrice;

  return _react2.default.createElement(
    'div',
    { className: 'global-padding padding--top-10 flex-parent flex-grow-1 flex-col' },
    items.length === 0 && _react2.default.createElement(
      'div',
      { className: 'flex-parent flex-col flex-grow-1 flex-align-center flex-justify-center' },
      _react2.default.createElement(
        'h2',
        null,
        'Your cart is empty'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/shop', className: 'btn btn--first margin--top-3' },
        'Shop Now'
      )
    ),
    items.length > 0 && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        { className: 'margin--bottom-7' },
        'Shopping Cart'
      ),
      _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1 cart-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'cart-wrap-aside' },
          _react2.default.createElement(
            'h3',
            { className: 'strong' },
            'Total: ',
            totalPrice.toLocaleString('USD', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
          ),
          _react2.default.createElement(
            'p',
            { className: 'margin--bottom-3' },
            'Shipping: FREE'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/checkout', className: 'btn btn--second alt flex-grow-0' },
            'Check Out Now'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-col flex-grow-1' },
          items.map(function (item) {
            return _react2.default.createElement(CartItem, { key: item.ID, item: item });
          })
        )
      )
    )
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Cart);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cart, 'Cart', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(CartItem, 'CartItem', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(16);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(21);

var _entries2 = _interopRequireDefault(_entries);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(10);

var _extends5 = _interopRequireDefault(_extends4);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PURCHASE = _Actions2.default.PURCHASE;


var regex = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  expMonth: /^\d{0,2}$/,
  expYear: /^\d{0,4}$/
};

var CheckOut = function (_Component) {
  (0, _inherits3.default)(CheckOut, _Component);

  function CheckOut(props) {
    (0, _classCallCheck3.default)(this, CheckOut);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckOut.__proto__ || (0, _getPrototypeOf2.default)(CheckOut)).call(this));

    _this.state = {
      data: {
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      cardDetails: {
        card: '',
        expMonth: '',
        expYear: '',
        cvc: ''
      },
      errors: {}
    };

    _this.onInputChange = function (key) {
      return function (_ref) {
        var currentTarget = _ref.currentTarget;
        var name = currentTarget.name,
            value = currentTarget.value;

        if (currentTarget.dataset.regex && currentTarget.dataset.regex !== 'email') {
          var re = new RegExp(regex[currentTarget.dataset.regex], 'i');
          if (!re.test(value)) {
            return;
          } else if (_this.state.errors[key]) {
            _this.setState({
              errors: (0, _extends5.default)({}, _this.state.errors, (0, _defineProperty3.default)({}, key, false))
            });
          }
        }
        if (value.length > 52) {
          return;
        }
        _this.setState((0, _defineProperty3.default)({}, key, (0, _extends5.default)({}, _this.state[key], (0, _defineProperty3.default)({}, name, value))));
      };
    };

    _this.submit = function (e) {
      e.preventDefault();
      if (_this.isValid()) {
        _this.props.purchase({
          data: _this.state.data,
          cardDetails: _this.state.cardDetails
        });
      }
    };

    _this.checkData = function (obj) {
      (0, _entries2.default)(obj).forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            name = _ref3[0],
            value = _ref3[1];

        if (value === '' && !_this.errorBlackList.includes(name)) {
          _this.errors[name] = true;
        }
      });
    };

    _this.errors = {};

    _this.isValid = function () {
      _this.errors = {};
      var _this$state = _this.state,
          data = _this$state.data,
          cardDetails = _this$state.cardDetails;

      _this.checkData(data);
      _this.checkData(cardDetails);
      if ((0, _keys2.default)(_this.errors).length) {
        _this.setState({ errors: _this.errors });
        return false;
      } else {
        if ((0, _keys2.default)(_this.state.errors).length) {
          _this.setState({ errors: {} });
        }
        return true;
      }
    };

    _this.errorBlackList = ['address2'];

    _this.addError = function (el) {
      var name = el.props.name;

      if (_this.state.errors[name]) {
        return _react2.default.cloneElement(el, { className: 'input-error' });
      }
      return el;
    };

    _this.onDataChange = _this.onInputChange('data');
    _this.onCardChange = _this.onInputChange('cardDetails');

    if (props.user && props.user.Email) {
      _this.state.data.email = props.user.Email;
    }
    return _this;
  }

  (0, _createClass3.default)(CheckOut, [{
    key: 'render',
    value: function render() {
      var error = ((0, _keys2.default)(this.state.errors).length > 0 || this.props.error) && _react2.default.createElement(
        'p',
        { className: 'font-color--danger margin--bottom-3' },
        this.props.error || 'Please fill in fields marked with red.'
      );

      return _react2.default.createElement(
        'div',
        { className: 'flex-parent global-padding padding--top-12 flex-col flex-align-center flex-justify-start full-width' },
        !this.props.items && _react2.default.createElement(_reactRouterDom.Redirect, { to: '/cart' }),
        this.props.loading && _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-grow-1 flex-justify-center flex-align-center' },
          _react2.default.createElement(
            'h2',
            null,
            'Processing Order. Please Wait'
          )
        ),
        !this.props.loading && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'margin--bottom-3' },
            'Check Out'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'margin--bottom-3 strong' },
            'Total: ',
            this.props.totalPrice.toLocaleString('USD', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
          ),
          _react2.default.createElement(
            'form',
            { className: 'form', onSubmit: this.submit },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              error,
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Personal'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Full Name'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.name, name: 'name', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Email'
                ),
                this.addError(_react2.default.createElement('input', { 'data-regex': 'email', value: this.state.data.email, onChange: this.onDataChange, name: 'email', type: 'email' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-6 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Shipping'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Address'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address1, name: 'address1', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Address Line 2'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address2, name: 'address2', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-parent mobile-col flex-justify-between' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'City'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.city, name: 'city', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component middle-input margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'State'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.state, name: 'state', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Zip'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.zip, name: 'zip', type: 'text' }))
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-6 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Payment'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Credit Card Number'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onCardChange, value: this.state.cardDetails.card, name: 'card', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-parent flex-row flex-justify-between' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Expiration Month'
                  ),
                  this.addError(_react2.default.createElement('input', { placeholder: 'MM', 'data-regex': 'expMonth', value: this.state.cardDetails.expMonth, onChange: this.onCardChange, name: 'expMonth', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 margin--x-3 middle-input flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Expiration Year'
                  ),
                  this.addError(_react2.default.createElement('input', { placeholder: 'YYYY', 'data-regex': 'expYear', value: this.state.cardDetails.expYear, onChange: this.onCardChange, name: 'expYear', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'CVC'
                  ),
                  this.addError(_react2.default.createElement('input', { 'data-regex': 'expYear', placeholder: '000(0)', onChange: this.onCardChange, value: this.state.cardDetails.cvc, name: 'cvc', type: 'text' }))
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--y-3' },
                error,
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn--second alt' },
                  'Purchase'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return CheckOut;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    totalPrice: state.cart.totalPrice,
    items: state.cart.items.length > 0,
    user: state.user,
    error: state.errors.checkout,
    loading: state.loading.page === 'purchase'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purchase: function purchase(data) {
      dispatch((0, _Utils.action)(PURCHASE, data));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CheckOut);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PURCHASE, 'PURCHASE', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(regex, 'regex', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(CheckOut, 'CheckOut', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Contact;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Contact() {
  return _react2.default.createElement(
    "div",
    { className: "global-padding" },
    _react2.default.createElement(
      "div",
      { className: "content-section content-section--center" },
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "h1",
          null,
          "Get In Touch"
        ),
        _react2.default.createElement(
          "h3",
          null,
          "Have a question, want to provide feedback, or just want to say hello?"
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "p",
          null,
          "Email us:"
        ),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "strong",
            null,
            "hello@archadon.com"
          )
        )
      )
    )
  );
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Contact, "Contact", "/Users/realseanp1/Projects/archadon/src/client/components/Contact.jsx");
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

var _ProductList = __webpack_require__(19);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_FAVORITES = _Actions2.default.LOAD_FAVORITES;

var Favorites = function (_Component) {
  (0, _inherits3.default)(Favorites, _Component);

  function Favorites() {
    (0, _classCallCheck3.default)(this, Favorites);
    return (0, _possibleConstructorReturn3.default)(this, (Favorites.__proto__ || (0, _getPrototypeOf2.default)(Favorites)).apply(this, arguments));
  }

  (0, _createClass3.default)(Favorites, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadFavorites();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1' },
        this.props.loading.page === 'favorites' ? _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-grow-1 flex-align-center flex-justify-center' },
          _react2.default.createElement(
            'h2',
            null,
            'Loading Favorites'
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'title margin--bottom-3' },
            'Favorites'
          ),
          this.props.favorites.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'favorites' },
            _react2.default.createElement(_ProductList2.default, { hideFav: true, className: 'flex-justify-start margin--top-3', hideBtn: true, products: this.props.favorites })
          ) : _react2.default.createElement(
            'div',
            { className: 'flex-grow-1' },
            _react2.default.createElement(
              'p',
              { className: 'margin--bottom-8' },
              'Aww. You haven\'t favorited anything yet.'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/shop', className: 'btn btn--first' },
              'Shop Now'
            )
          )
        )
      );
    }
  }]);
  return Favorites;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadFavorites: function loadFavorites() {
      dispatch((0, _Utils.action)(LOAD_FAVORITES));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favorites: state.user.FavoritesDetail || [],
    loading: state.loading
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Favorites);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOAD_FAVORITES, 'LOAD_FAVORITES', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(Favorites, 'Favorites', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomeSlider = __webpack_require__(51);

var _HomeSlider2 = _interopRequireDefault(_HomeSlider);

var _HomeFeaturedBoxes = __webpack_require__(85);

var _HomeFeaturedBoxes2 = _interopRequireDefault(_HomeFeaturedBoxes);

var _ProductList = __webpack_require__(19);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { width: '100%' } },
        _react2.default.createElement(
          'div',
          { className: 'wrap' },
          _react2.default.createElement(_HomeSlider2.default, null),
          _react2.default.createElement(_HomeFeaturedBoxes2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'slim-box' },
            _react2.default.createElement(
              'div',
              { className: 'flex-parent flex-justify-start flex-align-center margin--bottom-10' },
              _react2.default.createElement(
                'h2',
                { className: 'margin--right-5' },
                'Popular'
              ),
              _react2.default.createElement(
                'a',
                { href: '#', className: 'link--lighter small-caps' },
                'Shop All'
              )
            ),
            _react2.default.createElement(_ProductList2.default, { products: this.props.products })
          )
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products.hits.slice(0, 8)
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Home);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(11);

var _reactTransitionGroup = __webpack_require__(84);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = [{
  headline: 'Art',
  title: 'No, Floor Art',
  subtitle: 'Wall Art?',
  image: _Constants.IMAGE_ORIGIN + '/6x9_32963_29737.jpg',
  id: '59bdbf4f857c5b78b3a4c4ee'
}, {
  headline: 'Abstract',
  title: 'So Cool',
  subtitle: 'Tibetan Wool',
  image: _Constants.IMAGE_ORIGIN + '/3.1x5.1_32438_29431.jpg',
  id: '59bdbf4f857c5b78b3a4c440'
}, {
  headline: 'Classic',
  title: 'For Classy People',
  subtitle: 'The Classic Rug',
  image: _Constants.IMAGE_ORIGIN + '/6x9_S_2081_50.jpg',
  id: '59bdbf4f857c5b78b3a4c4f0'
}, {
  headline: 'More Classic',
  title: 'Oh My',
  subtitle: 'Red Dye',
  image: _Constants.IMAGE_ORIGIN + '/6.1x9.1_S_2090_59.jpg',
  id: '59bdbf4f857c5b78b3a4c49d'
}].map(function (image, i) {
  return (0, _extends3.default)({}, image, { i: i });
});

var HomeSlider = function (_React$Component) {
  (0, _inherits3.default)(HomeSlider, _React$Component);

  function HomeSlider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, HomeSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HomeSlider.__proto__ || (0, _getPrototypeOf2.default)(HomeSlider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      current: 0,
      headlines: images.filter(function (img, i) {
        return i !== 0;
      }),
      line: true
    }, _this.loops = [], _this.interval = function (callback, delay) {
      var tick = function tick(now) {
        if (now - start >= delay) {
          start = now;
          callback();
        }
        _this.loops.push(requestAnimationFrame(tick));
      };
      var start = performance.now();
      _this.loops.push(requestAnimationFrame(tick));
    }, _this.getHeadlines = function (current) {
      return images.filter(function (img, i) {
        return i !== current;
      });
    }, _this.updateState = function (current, cb) {
      _this.setState({
        headlines: _this.getHeadlines(current),
        start: true,
        current: current
      }, function () {
        // set timeout to give DOM time to remove before adding class
        setTimeout(function () {
          _this.line.classList.add('grow');
        }, 25);
        if (typeof cb === 'function') {
          cb();
        }
      });
    }, _this.startInterval = function () {
      if (_this.loops) {
        _this.loops.forEach(function (id) {
          return window.cancelAnimationFrame(id);
        });
        _this.loops = [];
      }

      _this.interval(function () {
        var current = _this.state.current === images.length - 1 ? 0 : _this.state.current + 1;
        _this.line.classList.remove('grow');
        _this.updateState(current);
      }, 8000);
    }, _this.headlineClick = function (i) {
      return (0, _Utils.throttle)(function () {
        _this.line.classList.remove('grow');
        _this.updateState(i, _this.startInterval);
      }, 300, _this);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(HomeSlider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startInterval();
      this.line.classList.add('grow');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'home-slider' },
          _react2.default.createElement(
            'div',
            { className: 'home-slider-item' },
            _react2.default.createElement(
              'div',
              { className: 'headlines' },
              _react2.default.createElement(
                _reactTransitionGroup.CSSTransitionGroup,
                {
                  transitionName: 'homeslider-headline-transition',
                  transitionEnterTimeout: 920,
                  transitionLeaveTimeout: 920,
                  component: 'div',
                  className: 'trans-wrap'
                },
                _react2.default.createElement(
                  'h1',
                  { className: 'main-headline', key: images[this.state.current].id },
                  images[this.state.current].headline
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'line' },
                _react2.default.createElement('div', { ref: function ref(c) {
                    _this2.line = c;
                  }, className: 'line--inner' })
              ),
              _react2.default.createElement(
                _reactTransitionGroup.CSSTransitionGroup,
                {
                  transitionName: 'homeslider-headline-transition',
                  transitionEnterTimeout: 920,
                  transitionLeaveTimeout: 920,
                  className: 'trans-wrap headline-links'
                },
                _react2.default.createElement(
                  'div',
                  { key: this.state.current, className: 'headline-links-wrap' },
                  this.state.headlines.map(function (item) {
                    return _react2.default.createElement(
                      'div',
                      { key: item.id, onClick: _this2.headlineClick(item.i), className: 'headline-link' },
                      item.headline
                    );
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'img home-slider-item' },
            _react2.default.createElement(
              _reactTransitionGroup.CSSTransitionGroup,
              {
                transitionName: 'featured-image-transition',
                transitionEnterTimeout: 1000,
                transitionLeaveTimeout: 1000,
                component: 'div',
                className: 'featured-img'
              },
              _react2.default.createElement('div', { key: images[this.state.current].id, className: 'inner', style: { backgroundImage: 'url(' + images[this.state.current].image + ')' } })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-slider-item' },
            _react2.default.createElement(
              'div',
              { className: 'home-slider-cta' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _reactTransitionGroup.CSSTransitionGroup,
                  {
                    transitionName: 'featured-image-transition',
                    transitionEnterTimeout: 1000,
                    transitionLeaveTimeout: 1000,
                    component: 'div',
                    className: 'featured-img'
                  },
                  _react2.default.createElement(
                    'div',
                    { key: images[this.state.current].id },
                    _react2.default.createElement(
                      'h3',
                      null,
                      images[this.state.current].subtitle
                    ),
                    _react2.default.createElement(
                      'h2',
                      { className: 'margin--top-2 margin--bottom-5' },
                      images[this.state.current].title
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '/' + images[this.state.current].id, className: 'btn btn--primary' },
                  'View Rug'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'home-slider-btns' },
          images.map(function (item, i) {
            return _react2.default.createElement('div', { key: item.id, onClick: _this2.headlineClick(i), className: (0, _classnames2.default)('ball', { active: images[_this2.state.current].id === item.id }) });
          })
        )
      );
    }
  }]);
  return HomeSlider;
}(_react2.default.Component);

var _default = HomeSlider;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(images, 'images', '/Users/realseanp1/Projects/archadon/src/client/components/HomeSlider.jsx');

  __REACT_HOT_LOADER__.register(HomeSlider, 'HomeSlider', '/Users/realseanp1/Projects/archadon/src/client/components/HomeSlider.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/HomeSlider.jsx');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function (_React$Component) {
  (0, _inherits3.default)(Loader, _React$Component);

  function Loader() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Loader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      done: true
    }, _this.handleEnd = function (e) {
      if (e.animationName === 'slideup') {
        _this.setState({ slidedown: true });
      } else if (e.animationName === 'slidedown') {
        _this.setState({
          done: true,
          slidedown: false
        }, function () {
          _this.props.done();
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Loader, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      console.log(this.props.location.pathname !== nextProps.location.pathname);
      if (!this.props.loading && nextProps.loading && this.state.done) {
        console.log('GO!');
        this.setState({ done: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('loader', { isLoading: !this.state.done }) },
        _react2.default.createElement('div', { style: this.state.slidedown ? { opacity: 0 } : null, className: 'loader-overlay' }),
        _react2.default.createElement('div', { onAnimationEnd: this.handleEnd, className: (0, _classnames2.default)('slide', {
            slideup: !this.state.done,
            slidedown: this.state.slidedown
          }) })
      );
    }
  }]);
  return Loader;
}(_react2.default.Component);

var _default = Loader;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Loader, 'Loader', '/Users/realseanp1/Projects/archadon/src/client/components/Loader.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Loader.jsx');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_IN = _Actions2.default.LOG_IN;

var LogInForm = function (_React$Component) {
  (0, _inherits3.default)(LogInForm, _React$Component);

  function LogInForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogInForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogInForm.__proto__ || (0, _getPrototypeOf2.default)(LogInForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.onChange = function (_ref2) {
      var _ref2$currentTarget = _ref2.currentTarget,
          value = _ref2$currentTarget.value,
          key = _ref2$currentTarget.name;

      _this.setState((0, _defineProperty3.default)({}, key, value));
    }, _this.submit = function (e) {
      e.preventDefault();
      _this.props.login(_this.state.email, _this.state.password);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LogInForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-col flex-align-center flex-justify-start full-width' },
        _react2.default.createElement(
          'h2',
          { className: 'margin--bottom-7' },
          'Enter Your Credentials'
        ),
        _react2.default.createElement(
          'form',
          { className: 'form', onSubmit: this.submit },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('form-group', { 'form-error': this.props.error }) },
            _react2.default.createElement(
              'div',
              { className: 'form-component' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'email' },
                'Email'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'email', value: this.state.email, type: 'text' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password' },
                'Password'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'password', value: this.state.password, type: 'password' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-content' },
            this.props.error && _react2.default.createElement(
              'p',
              { className: 'font-color--danger margin--bottom-3' },
              this.props.error
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn--first' },
              'Log In'
            ),
            _react2.default.createElement(
              'div',
              { className: 'margin--top-3' },
              _react2.default.createElement(
                'span',
                null,
                'Don\'t have an account?',
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/signup' },
                  'Register now'
                ),
                '.'
              )
            )
          )
        )
      );
    }
  }]);
  return LogInForm;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(email, password) {
      dispatch((0, _Utils.action)(LOG_IN, { email: email, password: password }));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.errors.login
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogInForm);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOG_IN, 'LOG_IN', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(LogInForm, 'LogInForm', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_OUT = _Actions2.default.LOG_OUT;

var Logout = function (_Component) {
  (0, _inherits3.default)(Logout, _Component);

  function Logout() {
    (0, _classCallCheck3.default)(this, Logout);
    return (0, _possibleConstructorReturn3.default)(this, (Logout.__proto__ || (0, _getPrototypeOf2.default)(Logout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Logout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.logout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }]);
  return Logout;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      dispatch((0, _Utils.action)(LOG_OUT));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Logout);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOG_OUT, 'LOG_OUT', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(Logout, 'Logout', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Svg = __webpack_require__(20);

var _Svg2 = _interopRequireDefault(_Svg);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_NAV_OPEN = _Actions2.default.ON_NAV_OPEN;

// <div className="logo">
// <Link to="/"><Svg variant="archadon-logo" color="#FFF" /></Link>
// </div>

// {user.authToken && user.ID ?

var links = [{ name: 'Shop', route: '/shop' }, { name: 'About', route: '/about' }, { name: 'Contact', route: '/contact' }, { name: 'Shipping & Returns', route: '/shipping-and-returns' }, { name: 'Sign Up', route: '/account' }, { name: 'Log In', route: '/account' }];

function Navigation(_ref) {
  var fixed = _ref.fixed,
      location = _ref.location,
      user = _ref.user,
      qty = _ref.qty,
      scrolled = _ref.scrolled,
      navOpen = _ref.navOpen,
      toggleNav = _ref.toggleNav;

  var classes = (0, _classnames2.default)('global-nav', 'wrap', {
    open: navOpen,
    fixed: fixed
  });
  return _react2.default.createElement(
    'nav',
    { className: classes },
    _react2.default.createElement(
      'div',
      { style: { zIndex: 10 }, className: 'menu-overlay' },
      _react2.default.createElement(
        'div',
        { className: 'wrap' },
        _react2.default.createElement(
          'div',
          null,
          links.map(function (_ref2) {
            var name = _ref2.name,
                route = _ref2.route;
            return _react2.default.createElement(
              'a',
              { key: name, href: route, className: 'menu-link' },
              name
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'bottom-links' },
          _react2.default.createElement(
            'span',
            null,
            'hello@archadon.com'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Instagram'
          ),
          _react2.default.createElement(
            'span',
            null,
            'Pinterest'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { style: { zIndex: 11 }, onClick: function onClick() {
            return toggleNav(navOpen);
          }, className: 'ham' + (navOpen ? ' open' : '') },
        _react2.default.createElement('div', { className: 'ham-inner' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'logo', style: { zIndex: 11 } },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        _react2.default.createElement(_Svg2.default, { variant: 'archadon-logo', color: navOpen ? '#FFF' : '#000' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'cart', style: { zIndex: 11 } },
      _react2.default.createElement(_Svg2.default, { variant: 'icon-cart', color: navOpen ? '#FFF' : '#000' })
    )
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    qty: state.cart.totalQty,
    navOpen: state.navOpen,
    fixed: state.ui.navFixed
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleNav: function toggleNav(open) {
      dispatch((0, _Utils.action)(ON_NAV_OPEN, !open));
    }
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Navigation));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navigation, 'Navigation', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(ON_NAV_OPEN, 'ON_NAV_OPEN', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(links, 'links', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <!-- Google Code for rug purchase Conversion Page -->
// <script type="text/javascript">
// /* <![CDATA[ */
// var google_conversion_id = 971281488;
// var google_conversion_language = "en";
// var google_conversion_format = "3";
// var google_conversion_color = "ffffff";
// var google_conversion_label = "8H8qCNmh33IQ0KiSzwM";
// var google_conversion_value = 1.00;
// var google_conversion_currency = "USD";
// var google_remarketing_only = false;
// /* ]]> */
// </script>
// <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
// </script>
// <noscript>
// <div style="display:inline;">
// <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/971281488/?value=1.00&amp;currency_code=USD&amp;label=8H8qCNmh33IQ0KiSzwM&amp;guid=ON&amp;script=0"/>
// </div>
// </noscript>


var OrderConfirmation = function (_React$Component) {
  (0, _inherits3.default)(OrderConfirmation, _React$Component);

  function OrderConfirmation() {
    (0, _classCallCheck3.default)(this, OrderConfirmation);
    return (0, _possibleConstructorReturn3.default)(this, (OrderConfirmation.__proto__ || (0, _getPrototypeOf2.default)(OrderConfirmation)).apply(this, arguments));
  }

  (0, _createClass3.default)(OrderConfirmation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && window.google_trackConversion) {
        window.google_trackConversion({
          google_conversion_id: 971281488,
          google_conversion_language: 'en',
          google_conversion_format: 3,
          google_conversion_color: 'ffffff',
          google_conversion_label: '8H8qCNmh33IQ0KiSzwM',
          google_conversion_value: 1.00,
          google_conversion_currency: 'USD',
          google_remarketing_only: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          orderID = _props.orderID,
          email = _props.email;


      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1 flex-align-center flex-justify-center' },
        _react2.default.createElement(
          'div',
          null,
          !orderID && !email && _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }),
          _react2.default.createElement(
            'h2',
            null,
            'Thanks For Your Order'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'margin--bottom-3' },
            'You\'re going to like it.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'margin--bottom-1' },
            'We\'ve sent a confirmation email to ',
            _react2.default.createElement(
              'span',
              { className: 'strong' },
              email
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'You\'re reference number is ',
            _react2.default.createElement(
              'span',
              { className: 'strong' },
              orderID
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'btn btn--first margin--top-3' },
            'Done'
          )
        )
      );
    }
  }]);
  return OrderConfirmation;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return (0, _extends3.default)({}, state.orderConfirmation);
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(OrderConfirmation);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OrderConfirmation, 'OrderConfirmation', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _Constants = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function timezoneOffset(date, raw) {
  var current = new Date();
  var offset = current.getTimezoneOffset() / 60;
  var output = new Date(date);
  output.setHours(output.getHours() + offset);
  if (raw) {
    return output;
  }
  return output.toDateString();
}

function OrderItem(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === undefined ? _Constants.DEFAULT_ITEM : _ref$item;

  return _react2.default.createElement(
    'div',
    { className: 'order-item' },
    item.Images && _react2.default.createElement('img', { alt: item.Name, src: _Constants.IMAGE_ORIGIN + '/' + item.Images[0].src }),
    _react2.default.createElement(
      'div',
      { className: 'margin--left-2' },
      _react2.default.createElement(
        'p',
        null,
        item.Name,
        ' $',
        item.Price.toFixed(2)
      )
    )
  );
}

function OrderBox(_ref2) {
  var order = _ref2.order;

  return _react2.default.createElement(
    'div',
    { className: 'item-box margin--y-3' },
    _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement(
        'p',
        { className: 'strong' },
        timezoneOffset(order.CreatedAt)
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'small',
          null,
          'Order ID: ',
          order.ID
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'small',
          null,
          'Status: ',
          _react2.default.createElement(
            'strong',
            { className: order.Status.toLowerCase() },
            order.Status
          )
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'small',
          null,
          order.Brand,
          ' ****',
          order.Last4
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'strong' },
        'Total: $',
        order.Price.toFixed(2)
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      order.Items.map(function (item, i) {
        return _react2.default.createElement(OrderItem, { key: i, item: item });
      })
    )
  );
}

function Orders(_ref3) {
  var orders = _ref3.orders;

  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 flex-parent flex-col' },
    _react2.default.createElement(
      'h2',
      { className: 'margin--bottom-5' },
      'Orders'
    ),
    orders.length === 0 && _react2.default.createElement(
      'div',
      { className: 'flex-grow-1' },
      _react2.default.createElement(
        'p',
        { className: 'margin--bottom-8' },
        'You don\'t have any recent orders.'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/shop', className: 'btn btn--first' },
        'Shop Now'
      )
    ),
    orders.length > 0 && orders.sort(function (b, a) {
      return b.CreatedAt < a.CreatedAt;
    }).map(function (order) {
      return _react2.default.createElement(OrderBox, { key: order.ID, order: order });
    })
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    orders: state.user.orders || []
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Orders);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(timezoneOffset, 'timezoneOffset', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');

  __REACT_HOT_LOADER__.register(OrderItem, 'OrderItem', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');

  __REACT_HOT_LOADER__.register(OrderBox, 'OrderBox', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');

  __REACT_HOT_LOADER__.register(Orders, 'Orders', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.jsx');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AddToCartBtn = __webpack_require__(64);

var _AddToCartBtn2 = _interopRequireDefault(_AddToCartBtn);

var _FavoriteBtn = __webpack_require__(26);

var _FavoriteBtn2 = _interopRequireDefault(_FavoriteBtn);

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _Constants = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductDetail(_ref) {
  var _ref$product = _ref.product,
      product = _ref$product === undefined ? _Constants.DEFAULT_ITEM : _ref$product;

  if (!product) {
    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/shop' });
  }

  return _react2.default.createElement(
    'div',
    { className: 'padding--top-1 flex-parent product-detail-wrap flex-col' },
    _react2.default.createElement(
      'div',
      { className: 'product-detail flex-grow-1 global-padding ' },
      _react2.default.createElement(
        'div',
        { className: 'product-detail-image' },
        product.Images && _react2.default.createElement('img', { alt: product.Name, src: _Constants.IMAGE_ORIGIN + '/' + product.Images[0].src })
      ),
      _react2.default.createElement(
        'div',
        { className: 'product-detail-info' },
        _react2.default.createElement(
          'h1',
          { className: 'margin--bottom-2 text-align-center' },
          'Hand-Knotted ',
          product.Name
        ),
        _react2.default.createElement(
          'h3',
          { className: 'strong' },
          '$',
          product.Price
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_FavoriteBtn2.default, { id: product.ID }),
        _react2.default.createElement(
          'p',
          { className: 'margin--top-3' },
          product.LongDescription
        ),
        _react2.default.createElement(
          'p',
          { className: 'margin--bottom-5' },
          product.ShortDescription
        ),
        product.Qty > 0 && _react2.default.createElement(_AddToCartBtn2.default, { className: 'margin--bottom-5', id: product.ID }),
        product.Qty === 0 && _react2.default.createElement(
          'h3',
          null,
          'Sold'
        )
      )
    )
  );
}

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.match.params.id;

  return {
    product: state.productDetails.find(function (product) {
      return product.ID === id;
    })
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductDetail);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductDetail, 'ProductDetail', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetail.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetail.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ProductDetail.jsx');
}();

;

/***/ }),
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(4);

var _classnames = __webpack_require__(15);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIGN_UP = _Actions2.default.SIGN_UP;

var LogInForm = function (_React$Component) {
  (0, _inherits3.default)(LogInForm, _React$Component);

  function LogInForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogInForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogInForm.__proto__ || (0, _getPrototypeOf2.default)(LogInForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: {}
    }, _this.onChange = function (_ref2) {
      var _ref2$currentTarget = _ref2.currentTarget,
          value = _ref2$currentTarget.value,
          key = _ref2$currentTarget.name;

      _this.setState((0, _defineProperty3.default)({}, key, value));
    }, _this.submit = function (e) {
      e.preventDefault();
      if (_this.state.password !== _this.state.confirmPassword) {
        _this.setState({
          error: {
            type: 'confirm',
            msg: 'Passwords do not match.'
          }
        });
        return;
      }
      _this.props.signup(_this.state.email, _this.state.password);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LogInForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-col flex-align-center flex-justify-start full-width' },
        _react2.default.createElement(
          'h2',
          { className: 'margin--bottom-7' },
          'Sign Up'
        ),
        _react2.default.createElement(
          'form',
          { className: 'form', onSubmit: this.submit },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('form-group', { 'form-error': this.props.error }) },
            _react2.default.createElement(
              'div',
              { className: 'form-component' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'email' },
                'Email'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'email', value: this.state.email, type: 'text' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password' },
                'Password'
              ),
              _react2.default.createElement('input', { className: (0, _classnames2.default)({ 'input-error': this.state.error.type === 'confirm' }), onChange: this.onChange, name: 'password', value: this.state.password, type: 'password' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'confirmPassword' },
                'Confirm Password'
              ),
              _react2.default.createElement('input', { className: (0, _classnames2.default)({ 'input-error': this.state.error.type === 'confirm' }), onChange: this.onChange, name: 'confirmPassword', value: this.state.confirmPassword, type: 'password' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-content' },
            (this.props.error || this.state.error.msg) && _react2.default.createElement(
              'p',
              { className: 'font-color--danger margin--top-0 margin--bottom-3' },
              this.props.error || this.state.error.msg
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn--first' },
              'Sign Up'
            ),
            _react2.default.createElement(
              'div',
              { className: 'margin--top-3' },
              _react2.default.createElement(
                'span',
                null,
                'Have an account?',
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/login' },
                  'Log in'
                ),
                '.'
              )
            )
          )
        )
      );
    }
  }]);
  return LogInForm;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(email, password) {
      dispatch((0, _Utils.action)(SIGN_UP, { email: email, password: password }));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.errors.signup
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogInForm);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SIGN_UP, 'SIGN_UP', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(LogInForm, 'LogInForm', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Shipping() {
  return _react2.default.createElement(
    "div",
    { className: "global-padding" },
    _react2.default.createElement(
      "h1",
      null,
      "Shipping & Returns"
    ),
    _react2.default.createElement(
      "h2",
      { className: "title" },
      "Shipping"
    ),
    _react2.default.createElement(
      "p",
      null,
      "We offer FREE shipping in the US."
    ),
    _react2.default.createElement(
      "h2",
      { className: "title" },
      "Returns"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Not happy with your rug? Email us within 30 days at ",
      _react2.default.createElement(
        "strong",
        null,
        "returns@archadon.com"
      ),
      " and we will send you a shipping label. You will receive a full refund if the rug is returned to us like new."
    )
  );
}

var _default = Shipping;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Shipping, "Shipping", "/Users/realseanp1/Projects/archadon/src/client/components/Shipping.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/realseanp1/Projects/archadon/src/client/components/Shipping.jsx");
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductList = __webpack_require__(19);

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection() {
  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 global-padding margin--y-10' },
    _react2.default.createElement(
      'h1',
      { className: 'align--center' },
      'Our Selection'
    ),
    _react2.default.createElement(_ProductList2.default, null)
  );
}

var _default = Selection;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Selection, 'Selection', '/Users/realseanp1/Projects/archadon/src/client/components/Shop.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Shop.jsx');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Login = __webpack_require__(53);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(60);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SignInForm(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(
    'div',
    { className: 'full-width padding--top-15 flex-grow-1 flex-parent global-padding flex-align-start flex-justify-center' },
    path === '/login' ? _react2.default.createElement(_Login2.default, null) : _react2.default.createElement(_Register2.default, null)
  );
}

var _default = SignInForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SignInForm, 'SignInForm', '/Users/realseanp1/Projects/archadon/src/client/components/SignInForm.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/SignInForm.jsx');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Utils = __webpack_require__(3);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TO_CART = _Actions2.default.ADD_TO_CART,
    REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART;


function AddToCartBtn(_ref) {
  var inCart = _ref.inCart,
      id = _ref.id,
      removeFromCart = _ref.removeFromCart,
      addToCart = _ref.addToCart,
      className = _ref.className;

  return _react2.default.createElement(
    'button',
    { onClick: inCart ? removeFromCart(id) : addToCart(id), className: 'btn btn--first' + (className ? ' ' + className : '') },
    inCart ? 'Remove From Cart' : 'Add To Cart'
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(product) {
      return function () {
        return dispatch((0, _Utils.action)(ADD_TO_CART, product));
      };
    },
    removeFromCart: function removeFromCart(ID) {
      return function () {
        return dispatch((0, _Utils.action)(REMOVE_FROM_CART, ID));
      };
    }
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.id;

  return {
    inCart: state.cart.items.findIndex(function (item) {
      return item === id || item.ID === id;
    }) > -1
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddToCartBtn);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddToCartBtn, 'AddToCartBtn', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');

  __REACT_HOT_LOADER__.register(ADD_TO_CART, 'ADD_TO_CART', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ui/AddToCartBtn.jsx');
}();

;

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(83);

var _assign2 = _interopRequireDefault(_assign);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Types = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TO_CART = _Actions2.default.ADD_TO_CART,
    PRODUCT_DATA_LOADED = _Actions2.default.PRODUCT_DATA_LOADED,
    REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART,
    REPLACE_CART = _Actions2.default.REPLACE_CART,
    SET_ORDER_CONFIRMATION = _Actions2.default.SET_ORDER_CONFIRMATION;


var INITIAL_STATE = {
  totalQty: 0,
  totalPrice: 0,
  items: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  if (!action.payload) return state;
  var newState = (0, _assign2.default)({}, state);
  var product = action.payload;
  var isString = typeof product === 'string';
  if (action.type !== REMOVE_FROM_CART && (isString && state.items.includes(product) || isString && state.items.find(function (p) {
    return p.ID === product;
  }) || state.items.find(function (p) {
    return p.ID === product.ID;
  }))) {
    return state;
  }

  switch (action.type) {

    case SET_ORDER_CONFIRMATION:
      return (0, _assign2.default)({}, INITIAL_STATE);

    case ADD_TO_CART:
      newState.items.push(action.payload);
      newState.totalQty = newState.items.length;
      if (!isString) {
        newState.totalPrice += product.Price;
      }
      return newState;

    case PRODUCT_DATA_LOADED:
      var id = action.payload.ID;

      newState.totalPrice += action.payload.Price;
      newState.items[newState.items.findIndex(function (p) {
        return p === id;
      })] = action.payload;
      return newState;

    case REPLACE_CART:
      return action.payload;

    case REMOVE_FROM_CART:
      var _ID = action.payload;
      var item = newState.items.find(function (p) {
        return p === _ID || p.ID === _ID;
      }) || { Price: 0 };
      newState.totalQty -= 1;
      if (typeof item !== 'string') {
        newState.totalPrice -= item.Price;
      }
      var products = newState.items.filter(function (p) {
        return p.ID !== _ID;
      });
      newState.items = products;
      return newState;

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ADD_TO_CART, 'ADD_TO_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(PRODUCT_DATA_LOADED, 'PRODUCT_DATA_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(REPLACE_CART, 'REPLACE_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(SET_ORDER_CONFIRMATION, 'SET_ORDER_CONFIRMATION', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = filters;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_COLLECTION_SUCCESS = _Actions2.default.ON_COLLECTION_SUCCESS;
function filters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case ON_COLLECTION_SUCCESS:

      return (0, _extends3.default)({}, state, action.payload);
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(filters, 'filters', '/Users/realseanp1/Projects/archadon/src/client/reducers/collections.js');

  __REACT_HOT_LOADER__.register(ON_COLLECTION_SUCCESS, 'ON_COLLECTION_SUCCESS', '/Users/realseanp1/Projects/archadon/src/client/reducers/collections.js');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(10);

var _extends4 = _interopRequireDefault(_extends3);

var _slicedToArray2 = __webpack_require__(12);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(21);

var _entries2 = _interopRequireDefault(_entries);

exports.default = errors;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterRedux = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ERROR = _Actions2.default.SET_ERROR;
function errors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _reactRouterRedux.LOCATION_CHANGE:
      return (0, _entries2.default)(state).filter(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            val = _ref2[1];

        return val !== null;
      }).reduce(function (a, _ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
            key = _ref4[0];

        a[key] = null;
        return a;
      }, {});
    case SET_ERROR:
      var _action$payload = action.payload,
          type = _action$payload.type,
          error = _action$payload.error;

      return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, type, error));
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(errors, 'errors', '/Users/realseanp1/Projects/archadon/src/client/reducers/errors.js');

  __REACT_HOT_LOADER__.register(SET_ERROR, 'SET_ERROR', '/Users/realseanp1/Projects/archadon/src/client/reducers/errors.js');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = filters;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_FILTER_UPDATE = _Actions2.default.ON_FILTER_UPDATE,
    ON_CLEAR_FILTERS = _Actions2.default.ON_CLEAR_FILTERS;
function filters() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case ON_FILTER_UPDATE:
      state = state.filter(function (item) {
        return item.type !== action.payload.filter.type;
      });

      return [].concat((0, _toConsumableArray3.default)(state), [action.payload.filter]);
    case ON_CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(filters, 'filters', '/Users/realseanp1/Projects/archadon/src/client/reducers/filters.js');

  __REACT_HOT_LOADER__.register(ON_FILTER_UPDATE, 'ON_FILTER_UPDATE', '/Users/realseanp1/Projects/archadon/src/client/reducers/filters.js');

  __REACT_HOT_LOADER__.register(ON_CLEAR_FILTERS, 'ON_CLEAR_FILTERS', '/Users/realseanp1/Projects/archadon/src/client/reducers/filters.js');
}();

;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(31);

var _reactRouterRedux = __webpack_require__(30);

var _errors = __webpack_require__(68);

var _errors2 = _interopRequireDefault(_errors);

var _user = __webpack_require__(77);

var _user2 = _interopRequireDefault(_user);

var _loading = __webpack_require__(71);

var _loading2 = _interopRequireDefault(_loading);

var _redirectPath = __webpack_require__(75);

var _redirectPath2 = _interopRequireDefault(_redirectPath);

var _products = __webpack_require__(74);

var _products2 = _interopRequireDefault(_products);

var _cart = __webpack_require__(66);

var _cart2 = _interopRequireDefault(_cart);

var _orderConfirmation = __webpack_require__(72);

var _orderConfirmation2 = _interopRequireDefault(_orderConfirmation);

var _productDetails = __webpack_require__(73);

var _productDetails2 = _interopRequireDefault(_productDetails);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _filters = __webpack_require__(69);

var _filters2 = _interopRequireDefault(_filters);

var _ui = __webpack_require__(76);

var _ui2 = _interopRequireDefault(_ui);

var _collections = __webpack_require__(67);

var _collections2 = _interopRequireDefault(_collections);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_NAV_OPEN = _Actions2.default.ON_NAV_OPEN;


function navOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case ON_NAV_OPEN:
      return action.payload;
    default:
      return state;
  }
}

var _default = (0, _redux.combineReducers)({
  router: _reactRouterRedux.routerReducer,
  navOpen: navOpen,
  user: _user2.default,
  cart: _cart2.default,
  redirectPath: _redirectPath2.default,
  orderConfirmation: _orderConfirmation2.default,
  productDetails: _productDetails2.default,
  filters: _filters2.default,
  ui: _ui2.default,
  errors: _errors2.default,
  loading: _loading2.default,
  products: _products2.default,
  collections: _collections2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(navOpen, 'navOpen', '/Users/realseanp1/Projects/archadon/src/client/reducers/index.js');

  __REACT_HOT_LOADER__.register(ON_NAV_OPEN, 'ON_NAV_OPEN', '/Users/realseanp1/Projects/archadon/src/client/reducers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/index.js');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING = _Actions2.default.LOADING,
    SET_LOADING_PAGE = _Actions2.default.SET_LOADING_PAGE;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { full: false, page: '' };
  var action = arguments[1];

  switch (action.type) {
    case LOADING:
      return (0, _extends3.default)({}, state, {
        full: action.payload
      });
    case SET_LOADING_PAGE:
      return (0, _extends3.default)({}, state, {
        page: action.payload
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOADING, 'LOADING', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');

  __REACT_HOT_LOADER__.register(SET_LOADING_PAGE, 'SET_LOADING_PAGE', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = products;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ORDER_CONFIRMATION = _Actions2.default.SET_ORDER_CONFIRMATION;
function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case SET_ORDER_CONFIRMATION:
      var _action$payload = action.payload,
          orderID = _action$payload.orderID,
          email = _action$payload.email;

      return {
        orderID: orderID,
        email: email
      };
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(products, 'products', '/Users/realseanp1/Projects/archadon/src/client/reducers/orderConfirmation.js');

  __REACT_HOT_LOADER__.register(SET_ORDER_CONFIRMATION, 'SET_ORDER_CONFIRMATION', '/Users/realseanp1/Projects/archadon/src/client/reducers/orderConfirmation.js');
}();

;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = productDetails;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCT_DETAIL_LOADED = _Actions2.default.PRODUCT_DETAIL_LOADED;
function productDetails() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case PRODUCT_DETAIL_LOADED:
      return [].concat((0, _toConsumableArray3.default)(state), [action.payload]);
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(productDetails, 'productDetails', '/Users/realseanp1/Projects/archadon/src/client/reducers/productDetails.js');

  __REACT_HOT_LOADER__.register(PRODUCT_DETAIL_LOADED, 'PRODUCT_DETAIL_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/productDetails.js');
}();

;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(14);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = products;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCT_LIST_LOADED = _Actions2.default.PRODUCT_LIST_LOADED,
    LOAD_MORE_DONE = _Actions2.default.LOAD_MORE_DONE,
    REPLACE_PRODUCT_LIST = _Actions2.default.REPLACE_PRODUCT_LIST;
function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case PRODUCT_LIST_LOADED:
      return (0, _extends3.default)({}, state, action.payload);
    case REPLACE_PRODUCT_LIST:
      return action.payload;
    case LOAD_MORE_DONE:
      var lastItems = state.hits || [];
      return (0, _extends3.default)({}, state, action.payload, {
        hits: [].concat((0, _toConsumableArray3.default)(lastItems), (0, _toConsumableArray3.default)(action.payload.hits))
      });
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(products, 'products', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');

  __REACT_HOT_LOADER__.register(PRODUCT_LIST_LOADED, 'PRODUCT_LIST_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');

  __REACT_HOT_LOADER__.register(LOAD_MORE_DONE, 'LOAD_MORE_DONE', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');

  __REACT_HOT_LOADER__.register(REPLACE_PRODUCT_LIST, 'REPLACE_PRODUCT_LIST', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');
}();

;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_REDIRECT_PATH = _Actions2.default.SET_REDIRECT_PATH;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case SET_REDIRECT_PATH:
      return action.payload;
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_REDIRECT_PATH, 'SET_REDIRECT_PATH', '/Users/realseanp1/Projects/archadon/src/client/reducers/redirectPath.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/redirectPath.js');
}();

;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = products;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HOME_LOADED = _Actions2.default.HOME_LOADED,
    NAV_STATE = _Actions2.default.NAV_STATE,
    PAGE_CHANGE = _Actions2.default.PAGE_CHANGE;
function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case HOME_LOADED:
      return (0, _extends3.default)({}, state, {
        homeLoaded: true
      });

    case NAV_STATE:
      return (0, _extends3.default)({}, state, {
        navFixed: action.payload
      });

    case PAGE_CHANGE:
      return (0, _extends3.default)({}, state, {
        pageChange: action.payload
      });
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(products, 'products', '/Users/realseanp1/Projects/archadon/src/client/reducers/ui.js');

  __REACT_HOT_LOADER__.register(HOME_LOADED, 'HOME_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/ui.js');

  __REACT_HOT_LOADER__.register(NAV_STATE, 'NAV_STATE', '/Users/realseanp1/Projects/archadon/src/client/reducers/ui.js');

  __REACT_HOT_LOADER__.register(PAGE_CHANGE, 'PAGE_CHANGE', '/Users/realseanp1/Projects/archadon/src/client/reducers/ui.js');
}();

;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = user;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_USER_DATA = _Actions2.default.SET_USER_DATA,
    USER_AUTH_SUCCESS = _Actions2.default.USER_AUTH_SUCCESS,
    LOG_OUT = _Actions2.default.LOG_OUT,
    CLEAR_AUTHENTICATION_DATA = _Actions2.default.CLEAR_AUTHENTICATION_DATA,
    TOGGLE_FAVORITE = _Actions2.default.TOGGLE_FAVORITE,
    FAVORITES_LOADED = _Actions2.default.FAVORITES_LOADED;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { Favorites: [], FavoritesDetail: [] };
  var action = arguments[1];

  switch (action.type) {
    case SET_USER_DATA:
      return (0, _extends3.default)({}, state, action.payload);
    case FAVORITES_LOADED:
      return (0, _extends3.default)({}, state, {
        FavoritesDetail: action.payload || []
      });
    case TOGGLE_FAVORITE:
      if (!state.authToken) return state;
      var ID = action.payload;
      state.Favorites = state.Favorites || [];
      var item = state.Favorites.find(function (p) {
        return p === ID;
      });
      var _Favorites = void 0;
      if (item) {
        _Favorites = state.Favorites.filter(function (p) {
          return p !== ID;
        });
      } else {
        state.Favorites.push(ID);
        _Favorites = state.Favorites.slice();
      }
      return (0, _extends3.default)({}, state, {
        Favorites: _Favorites
      });
    case CLEAR_AUTHENTICATION_DATA:
    case LOG_OUT:
      return {};
    case USER_AUTH_SUCCESS:
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(user, 'user', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(SET_USER_DATA, 'SET_USER_DATA', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(USER_AUTH_SUCCESS, 'USER_AUTH_SUCCESS', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(LOG_OUT, 'LOG_OUT', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(CLEAR_AUTHENTICATION_DATA, 'CLEAR_AUTHENTICATION_DATA', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(FAVORITES_LOADED, 'FAVORITES_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');
}();

;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(18);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(16);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(17);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = __webpack_require__(38);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _html = __webpack_require__(36);

var _html2 = _interopRequireDefault(_html);

var _App = __webpack_require__(32);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(40);

var _reactRouter = __webpack_require__(23);

var _reactRedux = __webpack_require__(2);

var _Store = __webpack_require__(33);

var _Store2 = _interopRequireDefault(_Store);

var _reactHotLoader = __webpack_require__(41);

var _nodeFetch = __webpack_require__(39);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _search = __webpack_require__(35);

var _search2 = _interopRequireDefault(_search);

var _batchItems = __webpack_require__(34);

var _batchItems2 = _interopRequireDefault(_batchItems);

var _bodyParser = __webpack_require__(37);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev/' : 'https://api.archadon.com/prod/';

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_express2.default.static('public'));

var productDetails = [];

app.post('/search/products', _search2.default);
app.post('/search/batch', _batchItems2.default);

app.use('/product/:name/:id', function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
    var response, _ref2, data;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _nodeFetch2.default)(API_URL + 'product/v1/data/' + req.params.id);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            _ref2 = _context.sent;
            data = _ref2.data;

            if ((0, _keys2.default)(data).length > 0) {
              data.ID = req.params.id;
              productDetails.push(data);
            }
            next();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](0);

            next();

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 12]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

app.use(function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
    var products, store, context;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _search.search)({ filters: 'Qty > 0' });

          case 2:
            products = _context2.sent;
            store = (0, _Store2.default)({ products: products, productDetails: productDetails });

            try {
              context = {};

              res.status(200).send((0, _html2.default)((0, _server.renderToString)(_react2.default.createElement(
                _reactHotLoader.AppContainer,
                null,
                _react2.default.createElement(
                  _reactRedux.Provider,
                  { store: store },
                  _react2.default.createElement(
                    _reactRouter.StaticRouter,
                    {
                      context: context,
                      location: req.originalUrl
                    },
                    _react2.default.createElement(_App2.default, null)
                  )
                )
              )), store.getState()));
            } catch (err) {
              next(err);
            }

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

app.listen(process.env.PORT || 8081, function () {
  console.log('App listening on port ' + (process.env.PORT || 8081)); //eslint-disable-line
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(API_URL, 'API_URL', '/Users/realseanp1/Projects/archadon/src/server/index.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/realseanp1/Projects/archadon/src/server/index.js');

  __REACT_HOT_LOADER__.register(productDetails, 'productDetails', '/Users/realseanp1/Projects/archadon/src/server/index.js');
}();

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(81)(undefined);
// imports


// module
exports.push([module.i, "/* This stylesheet generated by Transfonter (https://transfonter.org) on April 16, 2017 7:17 PM */\n.body-font {\n  font-family: Montserrat, sans-serif !important; }\n\n/* This stylesheet generated by Transfonter (https://transfonter.org) on September 22, 2017 7:35 PM */\n@font-face {\n  font-family: 'Montserrat';\n  src: url(\"http://localhost:8081/Montserrat-SemiBold.eot\");\n  src: url(\"http://localhost:8081/Montserrat-SemiBold.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:8081/Montserrat-SemiBold.woff\") format(\"woff\"), url(\"http://localhost:8081/Montserrat-SemiBold.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(\"http://localhost:8081/Montserrat-Light.eot\");\n  src: url(\"http://localhost:8081/Montserrat-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:8081/Montserrat-Light.woff\") format(\"woff\"), url(\"http://localhost:8081/Montserrat-Light.ttf\") format(\"truetype\");\n  font-weight: 300;\n  font-style: light; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(\"http://localhost:8081/Montserrat-Medium.eot\");\n  src: url(\"http://localhost:8081/Montserrat-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:8081/Montserrat-Medium.woff\") format(\"woff\"), url(\"http://localhost:8081/Montserrat-Medium.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(\"http://localhost:8081/Montserrat-Regular.eot\");\n  src: url(\"http://localhost:8081/Montserrat-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:8081/Montserrat-Regular.woff\") format(\"woff\"), url(\"http://localhost:8081/Montserrat-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.btn, .btn--alt, .btn--primary {\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  font-weight: 300;\n  user-select: none;\n  font-family: Montserrat, sans-serif;\n  border: 1px solid transparent;\n  background-color: transparent;\n  padding: 12px 40px;\n  cursor: pointer;\n  font-size: 16px;\n  font-size: 1.6rem;\n  transform-origin: center;\n  transition: 0.3s all cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .btn--alt {\n    border: none;\n    border-bottom: 1px solid #000;\n    padding-bottom: 10px;\n    padding-top: 10px; }\n\n.btn:focus, .btn--alt:focus, .btn--primary:focus {\n  outline: none; }\n\n.btn--primary {\n  border-color: #000;\n  color: #000; }\n  .btn--primary:hover {\n    background-color: #000;\n    color: #FFFFFF; }\n\n.text-align-center {\n  text-align: center; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n.wrap {\n  max-width: 1392px;\n  width: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n  margin: auto; }\n  @media (min-width: 768px) {\n    .wrap {\n      padding: 0 35px; } }\n\n.strong {\n  font-weight: bold; }\n\n.full-height {\n  height: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.item-box {\n  border: 1px solid #8c8688;\n  padding: 15;\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 100%; }\n  .item-box:first-child {\n    margin-top: 0 !important; }\n  .item-box:last-child {\n    margin-bottom: 0 !important; }\n\n.font-color--#FFFFFF {\n  color: #FFFFFF; }\n\n.font-color--#E85353 {\n  color: #E85353; }\n\n.font-color--#000 {\n  color: #000; }\n\n.font-color--#8c8688 {\n  color: #8c8688; }\n\n.font-color--#afafaf {\n  color: #afafaf; }\n\n.font-color--#dddddf {\n  color: #dddddf; }\n\n.font-color--#BEDBED {\n  color: #BEDBED; }\n\n.font-color--#e0e0e2 {\n  color: #e0e0e2; }\n\n.font-color--#6D3BDD {\n  color: #6D3BDD; }\n\n.font-color--#bf9b30 {\n  color: #bf9b30; }\n\n.uppercase {\n  text-transform: uppercase; }\n\n.img {\n  padding: 5px;\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);\n  background-size: 150%;\n  background-position: center; }\n  .img--inner {\n    width: 100%;\n    height: 100%;\n    background-size: 150%;\n    background-position: center; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--top-0 {\n  margin-top: 0px !important; }\n\n.padding--top-0 {\n  padding-top: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--top-1 {\n  margin-top: 5px !important; }\n\n.padding--top-1 {\n  padding-top: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--top-2 {\n  margin-top: 10px !important; }\n\n.padding--top-2 {\n  padding-top: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--top-3 {\n  margin-top: 15px !important; }\n\n.padding--top-3 {\n  padding-top: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--top-4 {\n  margin-top: 20px !important; }\n\n.padding--top-4 {\n  padding-top: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--top-5 {\n  margin-top: 25px !important; }\n\n.padding--top-5 {\n  padding-top: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--top-6 {\n  margin-top: 30px !important; }\n\n.padding--top-6 {\n  padding-top: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--top-7 {\n  margin-top: 35px !important; }\n\n.padding--top-7 {\n  padding-top: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--top-8 {\n  margin-top: 40px !important; }\n\n.padding--top-8 {\n  padding-top: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--top-9 {\n  margin-top: 45px !important; }\n\n.padding--top-9 {\n  padding-top: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--top-10 {\n  margin-top: 50px !important; }\n\n.padding--top-10 {\n  padding-top: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--top-11 {\n  margin-top: 55px !important; }\n\n.padding--top-11 {\n  padding-top: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--top-12 {\n  margin-top: 60px !important; }\n\n.padding--top-12 {\n  padding-top: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--top-13 {\n  margin-top: 65px !important; }\n\n.padding--top-13 {\n  padding-top: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--top-14 {\n  margin-top: 70px !important; }\n\n.padding--top-14 {\n  padding-top: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--top-15 {\n  margin-top: 75px !important; }\n\n.padding--top-15 {\n  padding-top: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--top-16 {\n  margin-top: 80px !important; }\n\n.padding--top-16 {\n  padding-top: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--top-17 {\n  margin-top: 85px !important; }\n\n.padding--top-17 {\n  padding-top: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--top-18 {\n  margin-top: 90px !important; }\n\n.padding--top-18 {\n  padding-top: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--top-19 {\n  margin-top: 95px !important; }\n\n.padding--top-19 {\n  padding-top: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--top-20 {\n  margin-top: 100px !important; }\n\n.padding--top-20 {\n  padding-top: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--left-0 {\n  margin-left: 0px !important; }\n\n.padding--left-0 {\n  padding-left: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--left-1 {\n  margin-left: 5px !important; }\n\n.padding--left-1 {\n  padding-left: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--left-2 {\n  margin-left: 10px !important; }\n\n.padding--left-2 {\n  padding-left: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--left-3 {\n  margin-left: 15px !important; }\n\n.padding--left-3 {\n  padding-left: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--left-4 {\n  margin-left: 20px !important; }\n\n.padding--left-4 {\n  padding-left: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--left-5 {\n  margin-left: 25px !important; }\n\n.padding--left-5 {\n  padding-left: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--left-6 {\n  margin-left: 30px !important; }\n\n.padding--left-6 {\n  padding-left: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--left-7 {\n  margin-left: 35px !important; }\n\n.padding--left-7 {\n  padding-left: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--left-8 {\n  margin-left: 40px !important; }\n\n.padding--left-8 {\n  padding-left: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--left-9 {\n  margin-left: 45px !important; }\n\n.padding--left-9 {\n  padding-left: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--left-10 {\n  margin-left: 50px !important; }\n\n.padding--left-10 {\n  padding-left: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--left-11 {\n  margin-left: 55px !important; }\n\n.padding--left-11 {\n  padding-left: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--left-12 {\n  margin-left: 60px !important; }\n\n.padding--left-12 {\n  padding-left: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--left-13 {\n  margin-left: 65px !important; }\n\n.padding--left-13 {\n  padding-left: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--left-14 {\n  margin-left: 70px !important; }\n\n.padding--left-14 {\n  padding-left: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--left-15 {\n  margin-left: 75px !important; }\n\n.padding--left-15 {\n  padding-left: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--left-16 {\n  margin-left: 80px !important; }\n\n.padding--left-16 {\n  padding-left: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--left-17 {\n  margin-left: 85px !important; }\n\n.padding--left-17 {\n  padding-left: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--left-18 {\n  margin-left: 90px !important; }\n\n.padding--left-18 {\n  padding-left: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--left-19 {\n  margin-left: 95px !important; }\n\n.padding--left-19 {\n  padding-left: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--left-20 {\n  margin-left: 100px !important; }\n\n.padding--left-20 {\n  padding-left: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--right-0 {\n  margin-right: 0px !important; }\n\n.padding--right-0 {\n  padding-right: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--right-1 {\n  margin-right: 5px !important; }\n\n.padding--right-1 {\n  padding-right: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--right-2 {\n  margin-right: 10px !important; }\n\n.padding--right-2 {\n  padding-right: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--right-3 {\n  margin-right: 15px !important; }\n\n.padding--right-3 {\n  padding-right: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--right-4 {\n  margin-right: 20px !important; }\n\n.padding--right-4 {\n  padding-right: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--right-5 {\n  margin-right: 25px !important; }\n\n.padding--right-5 {\n  padding-right: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--right-6 {\n  margin-right: 30px !important; }\n\n.padding--right-6 {\n  padding-right: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--right-7 {\n  margin-right: 35px !important; }\n\n.padding--right-7 {\n  padding-right: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--right-8 {\n  margin-right: 40px !important; }\n\n.padding--right-8 {\n  padding-right: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--right-9 {\n  margin-right: 45px !important; }\n\n.padding--right-9 {\n  padding-right: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--right-10 {\n  margin-right: 50px !important; }\n\n.padding--right-10 {\n  padding-right: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--right-11 {\n  margin-right: 55px !important; }\n\n.padding--right-11 {\n  padding-right: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--right-12 {\n  margin-right: 60px !important; }\n\n.padding--right-12 {\n  padding-right: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--right-13 {\n  margin-right: 65px !important; }\n\n.padding--right-13 {\n  padding-right: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--right-14 {\n  margin-right: 70px !important; }\n\n.padding--right-14 {\n  padding-right: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--right-15 {\n  margin-right: 75px !important; }\n\n.padding--right-15 {\n  padding-right: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--right-16 {\n  margin-right: 80px !important; }\n\n.padding--right-16 {\n  padding-right: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--right-17 {\n  margin-right: 85px !important; }\n\n.padding--right-17 {\n  padding-right: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--right-18 {\n  margin-right: 90px !important; }\n\n.padding--right-18 {\n  padding-right: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--right-19 {\n  margin-right: 95px !important; }\n\n.padding--right-19 {\n  padding-right: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--right-20 {\n  margin-right: 100px !important; }\n\n.padding--right-20 {\n  padding-right: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--bottom-0 {\n  margin-bottom: 0px !important; }\n\n.padding--bottom-0 {\n  padding-bottom: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--bottom-1 {\n  margin-bottom: 5px !important; }\n\n.padding--bottom-1 {\n  padding-bottom: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--bottom-2 {\n  margin-bottom: 10px !important; }\n\n.padding--bottom-2 {\n  padding-bottom: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--bottom-3 {\n  margin-bottom: 15px !important; }\n\n.padding--bottom-3 {\n  padding-bottom: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--bottom-4 {\n  margin-bottom: 20px !important; }\n\n.padding--bottom-4 {\n  padding-bottom: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--bottom-5 {\n  margin-bottom: 25px !important; }\n\n.padding--bottom-5 {\n  padding-bottom: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--bottom-6 {\n  margin-bottom: 30px !important; }\n\n.padding--bottom-6 {\n  padding-bottom: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--bottom-7 {\n  margin-bottom: 35px !important; }\n\n.padding--bottom-7 {\n  padding-bottom: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--bottom-8 {\n  margin-bottom: 40px !important; }\n\n.padding--bottom-8 {\n  padding-bottom: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--bottom-9 {\n  margin-bottom: 45px !important; }\n\n.padding--bottom-9 {\n  padding-bottom: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--bottom-10 {\n  margin-bottom: 50px !important; }\n\n.padding--bottom-10 {\n  padding-bottom: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--bottom-11 {\n  margin-bottom: 55px !important; }\n\n.padding--bottom-11 {\n  padding-bottom: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--bottom-12 {\n  margin-bottom: 60px !important; }\n\n.padding--bottom-12 {\n  padding-bottom: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--bottom-13 {\n  margin-bottom: 65px !important; }\n\n.padding--bottom-13 {\n  padding-bottom: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--bottom-14 {\n  margin-bottom: 70px !important; }\n\n.padding--bottom-14 {\n  padding-bottom: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--bottom-15 {\n  margin-bottom: 75px !important; }\n\n.padding--bottom-15 {\n  padding-bottom: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--bottom-16 {\n  margin-bottom: 80px !important; }\n\n.padding--bottom-16 {\n  padding-bottom: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--bottom-17 {\n  margin-bottom: 85px !important; }\n\n.padding--bottom-17 {\n  padding-bottom: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--bottom-18 {\n  margin-bottom: 90px !important; }\n\n.padding--bottom-18 {\n  padding-bottom: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--bottom-19 {\n  margin-bottom: 95px !important; }\n\n.padding--bottom-19 {\n  padding-bottom: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--bottom-20 {\n  margin-bottom: 100px !important; }\n\n.padding--bottom-20 {\n  padding-bottom: 100px !important; }\n\n@keyframes grow {\n  0% {\n    transform: translateY(-100%); }\n  80% {\n    opacity: 1;\n    transform: translateY(0); }\n  100% {\n    opacity: 0;\n    transform: translateY(0); } }\n\n.home-slider {\n  display: flex;\n  justify-content: center; }\n  .home-slider .img {\n    width: 480px; }\n  @media (max-width: 500px) {\n    .home-slider {\n      flex-direction: column; }\n      .home-slider .img {\n        width: 100%;\n        padding: 0; }\n      .home-slider .featured-img {\n        height: 475px; } }\n  .home-slider-item {\n    flex-grow: 1;\n    width: 33.3333%; }\n    .home-slider-item:nth-child(3) {\n      padding-top: 50px;\n      padding-left: 15px;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      @media (max-width: 500px) {\n        .home-slider-item:nth-child(3) {\n          width: 100%;\n          justify-content: flex-start;\n          padding-top: 30px;\n          padding-left: 0; } }\n    .home-slider-item:nth-child(1) {\n      padding-right: 15px;\n      padding-bottom: 50px;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n      align-items: center; }\n      .home-slider-item:nth-child(1) .headlines {\n        flex-grow: 1;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n        padding-top: 200px;\n        transform: translateY(-10%); }\n        .home-slider-item:nth-child(1) .headlines .line {\n          height: 60px;\n          width: 1px;\n          overflow: hidden;\n          transform: translateX(30px); }\n          .home-slider-item:nth-child(1) .headlines .line--inner {\n            background-color: #000;\n            transform: translateY(-100%);\n            transition: all 0.3s;\n            width: 100%;\n            height: 100%; }\n            .home-slider-item:nth-child(1) .headlines .line--inner.grow {\n              animation: grow 7900ms cubic-bezier(0.645, 0.045, 0.355, 1); }\n      @media (max-width: 999px) {\n        .home-slider-item:nth-child(1) {\n          display: none; } }\n\n.featured-img {\n  flex-grow: 0;\n  width: 480px;\n  height: 600px;\n  max-width: 100%;\n  position: relative; }\n  .featured-img .inner {\n    width: calc(100% - 5px);\n    height: calc(100% - 5px);\n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto; }\n  @media (max-width: 999px) {\n    .featured-img {\n      display: flex;\n      height: 600px;\n      width: 100%; } }\n\n.img {\n  box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.15); }\n\n.trans-wrap.headline-links {\n  transform: translateX(30px);\n  height: 145px; }\n\n.headline-link {\n  margin: 40px 0;\n  color: #8c8688;\n  cursor: pointer; }\n  .headline-link:hover {\n    color: #000; }\n  .headline-link:first-child {\n    margin-top: 0; }\n\n.headline-links-wrap {\n  position: absolute; }\n\n.trans-wrap {\n  position: relative;\n  flex-grow: 0;\n  height: 50px;\n  width: 100%;\n  position: relative; }\n\n.main-headline {\n  position: absolute; }\n\n.homeslider-headline-transition-enter:not(.healines-link-wrap) {\n  opacity: 0;\n  transform: translateY(10px); }\n\n.homeslider-headline-transition-enter.main-headline {\n  transform: translateY(10px) !important; }\n\n.homeslider-headline-transition-enter.headline-links-wrap .headline-link {\n  opacity: 0;\n  transform: translateY(-10px); }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active:not(.healines-link-wrap) {\n  transition: all 900ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 1;\n  transform: translateY(0px); }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active.main-headline {\n  transform: translateY(0px) !important; }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active.headline-links-wrap .headline-link {\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 1;\n  transform: translateX(0) translateY(0); }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active.headline-links-wrap .headline-link:nth-child(1) {\n  transition-delay: 200ms; }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active.headline-links-wrap .headline-link:nth-child(2) {\n  transition-delay: 400ms; }\n\n.homeslider-headline-transition-enter.homeslider-headline-transition-enter-active.headline-links-wrap .headline-link:nth-child(3) {\n  transition-delay: 600ms; }\n\n.homeslider-headline-transition-leave:not(.healines-link-wrap) {\n  opacity: 1;\n  transform: translateY(0px); }\n\n.homeslider-headline-transition-leave.main-headline {\n  transform: translateY(0px) !important; }\n\n.homeslider-headline-transition-leave.headline-links-wrap .headline-link {\n  opacity: 1; }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active:not(.healines-link-wrap) {\n  transition: all 900ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 0;\n  transform: translateY(-20px); }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active.main-headline {\n  transform: translateY(-20px) !important; }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active.headline-links-wrap .headline-link {\n  transition: 300ms all cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 0; }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active.headline-links-wrap .headline-link:nth-child(1) {\n  transition-delay: 300ms; }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active.headline-links-wrap .headline-link:nth-child(2) {\n  transition-delay: 600ms; }\n\n.homeslider-headline-transition-leave.homeslider-headline-transition-leave-active.headline-links-wrap .headline-link:nth-child(3) {\n  transition-delay: 900ms; }\n\n.featured-image-transition-enter {\n  opacity: 0; }\n\n.featured-image-transition-enter.featured-image-transition-enter-active {\n  transition: opacity 1s;\n  opacity: 1; }\n\n.featured-image-transition-leave {\n  opacity: 1; }\n\n.featured-image-transition-leave.featured-image-transition-leave-active {\n  transition: opacity 1s;\n  opacity: 0; }\n\n.home-slider-cta {\n  flex-grow: 1;\n  transform: translateX(25%);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box; }\n  .home-slider-cta div:first-child {\n    height: 90px;\n    position: relative; }\n    .home-slider-cta div:first-child div {\n      height: 100%;\n      width: 100%;\n      position: absolute; }\n  @media (max-width: 999px) {\n    .home-slider-cta {\n      transform: translateX(5%); } }\n  @media (max-width: 500px) {\n    .home-slider-cta {\n      transform: translateX(0); } }\n\n.home-slider-btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 50px 0 100px; }\n  .home-slider-btns .ball {\n    cursor: pointer;\n    margin: 0 10px;\n    width: 5px;\n    height: 5px;\n    border-radius: 15px;\n    border: 1px solid #000;\n    background-color: #FFFFFF;\n    transition: 0.25s background-color; }\n    @media (max-width: 500px) {\n      .home-slider-btns .ball {\n        width: 8px;\n        height: 8px; } }\n    .home-slider-btns .ball.active {\n      background-color: #000; }\n\n@media (min-width: 590px) {\n  .featured-boxes {\n    display: flex;\n    justify-content: space-between; }\n    .featured-boxes .featured-box, .featured-boxes .featured-box--white, .featured-boxes .featured-box--danger, .featured-boxes .featured-box--dark, .featured-boxes .featured-box--light, .featured-boxes .featured-box--lighter, .featured-boxes .featured-box--lightest, .featured-boxes .featured-box--first, .featured-boxes .featured-box--second, .featured-boxes .featured-box--third, .featured-boxes .featured-box--gold {\n      width: 100%; }\n      .featured-boxes .featured-box:first-child, .featured-boxes .featured-box--white:first-child, .featured-boxes .featured-box--danger:first-child, .featured-boxes .featured-box--dark:first-child, .featured-boxes .featured-box--light:first-child, .featured-boxes .featured-box--lighter:first-child, .featured-boxes .featured-box--lightest:first-child, .featured-boxes .featured-box--first:first-child, .featured-boxes .featured-box--second:first-child, .featured-boxes .featured-box--third:first-child, .featured-boxes .featured-box--gold:first-child {\n        margin-right: 25px; }\n      .featured-boxes .featured-box:nth-child(2), .featured-boxes .featured-box--white:nth-child(2), .featured-boxes .featured-box--danger:nth-child(2), .featured-boxes .featured-box--dark:nth-child(2), .featured-boxes .featured-box--light:nth-child(2), .featured-boxes .featured-box--lighter:nth-child(2), .featured-boxes .featured-box--lightest:nth-child(2), .featured-boxes .featured-box--first:nth-child(2), .featured-boxes .featured-box--second:nth-child(2), .featured-boxes .featured-box--third:nth-child(2), .featured-boxes .featured-box--gold:nth-child(2) {\n        margin-left: 25px; }\n      .featured-boxes .featured-box .img, .featured-boxes .featured-box--white .img, .featured-boxes .featured-box--danger .img, .featured-boxes .featured-box--dark .img, .featured-boxes .featured-box--light .img, .featured-boxes .featured-box--lighter .img, .featured-boxes .featured-box--lightest .img, .featured-boxes .featured-box--first .img, .featured-boxes .featured-box--second .img, .featured-boxes .featured-box--third .img, .featured-boxes .featured-box--gold .img {\n        max-width: 282px;\n        align-self: flex-end; } }\n\n.slim-box {\n  width: 100%;\n  margin: auto; }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-grow-2 {\n  flex-grow: 2; }\n\n.flex-shrink-2 {\n  flex-shrink: 2; }\n\n.flex-grow-3 {\n  flex-grow: 3; }\n\n.flex-shrink-3 {\n  flex-shrink: 3; }\n\n.flex-grow-4 {\n  flex-grow: 4; }\n\n.flex-shrink-4 {\n  flex-shrink: 4; }\n\n.flex-grow-5 {\n  flex-grow: 5; }\n\n.flex-shrink-5 {\n  flex-shrink: 5; }\n\n.flex-grow-6 {\n  flex-grow: 6; }\n\n.flex-shrink-6 {\n  flex-shrink: 6; }\n\n.flex-grow-7 {\n  flex-grow: 7; }\n\n.flex-shrink-7 {\n  flex-shrink: 7; }\n\n.flex-grow-8 {\n  flex-grow: 8; }\n\n.flex-shrink-8 {\n  flex-shrink: 8; }\n\n.flex-grow-9 {\n  flex-grow: 9; }\n\n.flex-shrink-9 {\n  flex-shrink: 9; }\n\n.flex-grow-10 {\n  flex-grow: 10; }\n\n.flex-shrink-10 {\n  flex-shrink: 10; }\n\n.flex-grow-11 {\n  flex-grow: 11; }\n\n.flex-shrink-11 {\n  flex-shrink: 11; }\n\n.flex-grow-12 {\n  flex-grow: 12; }\n\n.flex-shrink-12 {\n  flex-shrink: 12; }\n\n.flex-parent {\n  display: flex;\n  flex-wrap: nowrap; }\n\n.flex-wrap {\n  flex-wrap: wrap; }\n\n.inline-flex {\n  display: inline-flex; }\n\n.flex-row {\n  flex-direction: row; }\n  .flex-row-reverse {\n    flex-direction: row-reverse; }\n\n.flex-col {\n  flex-direction: column; }\n  .flex-col-reverse {\n    flex-direction: column-reverse; }\n\n.flex-justify-start {\n  justify-content: flex-start; }\n\n.flex-justify-end {\n  justify-content: flex-end; }\n\n.flex-justify-center {\n  justify-content: center; }\n\n.flex-justify-around {\n  justify-content: space-around; }\n\n.flex-justify-between {\n  justify-content: space-between; }\n\n.flex-align-center {\n  align-items: center; }\n\n.flex-align-end {\n  align-items: flex-end; }\n\n.flex-align-base {\n  align-items: baseline; }\n\n.flex-align-start {\n  align-items: flex-start; }\n\n.flex-align-stretch {\n  align-items: stretch; }\n\n.flex-self-start {\n  align-self: flex-start; }\n\n.flex-self-end {\n  align-self: flex-end; }\n\n.flex-self-center {\n  align-self: flex-center; }\n\n.flex-self-base {\n  align-self: baseline; }\n\n.flex-self-stretch {\n  align-self: stretch; }\n\n.flex-sm {\n  flex-direction: column; }\n  .flex-sm .right-spacer {\n    margin-right: 0; }\n  .flex-sm .left-spacer {\n    margin-left: 0; }\n\nbody, html {\n  width: 100%;\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: Montserrat, sans-serif;\n  font-size: 16px;\n  font-size: 1.6rem;\n  color: #000; }\n\nhtml {\n  font-size: 10px; }\n\nsvg {\n  transition: 0.25s fill; }\n\n#app {\n  height: 100%;\n  min-height: 667px;\n  min-width: 320px; }\n\n.global-padding {\n  padding: 15px;\n  box-sizing: border-box; }\n\n.global-padding-x {\n  padding: 0 15px; }\n\nhr {\n  outline: 0;\n  border: 0;\n  height: 1px;\n  background-color: #8c8688; }\n\n.global-margin {\n  margin: 15px; }\n\n.layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%; }\n\n@media (min-width: 600px) {\n  .global-padding {\n    padding: 25px 30px 0;\n    box-sizing: border-box; }\n  .global-padding-x {\n    padding: 0 30px; }\n  .global-margin {\n    margin: 25px 30px 0; } }\n\n@keyframes navIn {\n  0% {\n    transform: translateY(-100%); }\n  100% {\n    transform: translateY(0); } }\n\n.global-nav {\n  margin: 45px auto 70px;\n  height: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  .global-nav.fixed {\n    animation: navIn 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);\n    position: fixed;\n    background-color: #fff;\n    z-index: 999;\n    top: 0;\n    height: 55px;\n    max-width: none;\n    width: 100%;\n    margin-top: 0;\n    box-shadow: 0px 0px 3px #8c8688; }\n    @media (max-width: 500px) {\n      .global-nav.fixed {\n        height: 45px; } }\n\n.ham-inner, .ham-inner:after {\n  width: 60%;\n  height: 3px;\n  background: #FFFFFF;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  border-radius: 3px;\n  transform-origin: center;\n  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.menu-overlay {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.9);\n  transform: scale(0.95) translateY(10px);\n  transform-origin: center;\n  pointer-events: none;\n  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 0;\n  overflow: scroll; }\n  .menu-overlay .wrap {\n    transform: translateY(120px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: calc(100% - 150px); }\n  .menu-overlay .bottom-links {\n    color: #FFFFFF;\n    display: flex;\n    justify-content: flex-start;\n    font-size: 1.2rem;\n    padding-bottom: 50px; }\n    .menu-overlay .bottom-links span {\n      margin-right: 10%; }\n  .menu-overlay .menu-link {\n    color: #FFFFFF;\n    font-size: 32px;\n    display: block;\n    margin: 15px 0;\n    opacity: 0;\n    transform: translateY(5px);\n    transition: all 0.3s; }\n    .open .menu-overlay .menu-link:nth-child(1) {\n      transition-delay: 0.1s;\n      opacity: 1;\n      transform: translateY(0); }\n    .open .menu-overlay .menu-link:nth-child(2) {\n      transition-delay: 0.2s;\n      opacity: 1;\n      transform: translateY(0); }\n    .open .menu-overlay .menu-link:nth-child(3) {\n      transition-delay: 0.3s;\n      opacity: 1;\n      transform: translateY(0); }\n    .open .menu-overlay .menu-link:nth-child(4) {\n      transition-delay: 0.4s;\n      opacity: 1;\n      transform: translateY(0); }\n    .open .menu-overlay .menu-link:nth-child(5) {\n      transition-delay: 0.5s;\n      opacity: 1;\n      transform: translateY(0); }\n    .open .menu-overlay .menu-link:nth-child(6) {\n      transition-delay: 0.6s;\n      opacity: 1;\n      transform: translateY(0); }\n  .open .menu-overlay {\n    pointer-events: all;\n    opacity: 1;\n    transform: scale(1) translateY(0); }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 100%; } }\n\n.logo {\n  height: 25px; }\n\n.cart {\n  width: 35px; }\n\n.open .logo, .open .cart {\n  animation: fadeIn 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) forwards; }\n\n.ham {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  border-radius: 45px;\n  background-color: #000;\n  position: relative;\n  transition: background-color 0.6s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .open .ham {\n    background-color: transparent; }\n  .ham-inner {\n    transform: translateY(-3px); }\n    .ham-inner:after {\n      content: \"\";\n      width: 100%;\n      transform: translateY(6px); }\n  .open .ham-inner {\n    transform: translateY(0px) rotate(-135deg); }\n    .open .ham-inner:after {\n      transform: translateY(0px) rotate(270deg); }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes moveUp {\n  from {\n    transform: translate(0, 20px); }\n  to {\n    transform: translate(0, 0); } }\n\n.modal {\n  position: fixed;\n  top: 0;\n  background-color: transparent;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none; }\n  .modal.open {\n    display: block;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: 0.25s background-color;\n    animation: fadeIn 0.3s forwards; }\n    .modal.open .modal-content {\n      animation: moveUp 0.3s forwards; }\n  .modal-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    background-color: #FFFFFF; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin: 0;\n  font-weight: 600; }\n\nh1, .h1, h2, .h2 {\n  font-weight: 600; }\n\nh1, .h1 {\n  font-size: 38px;\n  font-size: 3.8rem;\n  line-height: 36px; }\n\n.h3, h3 {\n  font-family: Montserrat, sans-serif;\n  font-weight: normal; }\n\n.title {\n  margin: 15px 0;\n  padding-top: 5;\n  border-top: 1px solid #8c8688; }\n\np {\n  margin: 0; }\n\n.font-color--white {\n  color: #FFFFFF; }\n\n.font-color--danger {\n  color: #E85353; }\n\n.font-color--dark {\n  color: #000; }\n\n.font-color--light {\n  color: #8c8688; }\n\n.font-color--lighter {\n  color: #afafaf; }\n\n.font-color--lightest {\n  color: #dddddf; }\n\n.font-color--first {\n  color: #BEDBED; }\n\n.font-color--second {\n  color: #e0e0e2; }\n\n.font-color--third {\n  color: #6D3BDD; }\n\n.font-color--gold {\n  color: #bf9b30; }\n\n.align--center {\n  text-align: center; }\n\n.align--right {\n  text-align: right; }\n\n.align--left {\n  text-align: left; }\n\n.align--justify {\n  text-align: justify; }\n\n@media (min-width: 600px) {\n  h1, .h1 {\n    font-size: 48px;\n    font-size: 4.8rem;\n    line-height: 46px; } }\n\n.small-caps {\n  text-transform: uppercase;\n  font-size: 13px;\n  font-size: 1.3rem; }\n\n@keyframes error {\n  0% {\n    box-shadow: 0 0 1px #E85353; }\n  50% {\n    box-shadow: 0px 0px 25px #E85353; }\n  100% {\n    box-shadow: 0 0 0px #E85353; } }\n\n.form-error {\n  animation: error 1s ease-out; }\n\n.form {\n  max-width: 480px;\n  width: 100%; }\n\n.form-group {\n  border: 1px solid #8c8688;\n  border-radius: 5px;\n  width: 100%;\n  padding: 15;\n  box-sizing: border-box; }\n\n.form-content {\n  padding: 15;\n  box-sizing: border-box; }\n\n.form-component label {\n  font-size: 14px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  display: block;\n  padding-left: 15; }\n\n.form-component [type=\"text\"], .form-component [type=\"password\"], .form-component [type=\"email\"] {\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #8c8688;\n  font-size: 14px;\n  font-size: 1.4rem;\n  padding: 10px; }\n  .form-component [type=\"text\"].input-error, .form-component [type=\"password\"].input-error, .form-component [type=\"email\"].input-error {\n    border-color: #E85353; }\n  .form-component [type=\"text\"]:focus, .form-component [type=\"password\"]:focus, .form-component [type=\"email\"]:focus {\n    outline: none;\n    border-color: #726d6f; }\n\na, a:visited {\n  color: #000;\n  text-decoration: none; }\n\na.link--white, .link--white {\n  color: #FFFFFF; }\n\na.link--danger, .link--danger {\n  color: #E85353; }\n\na.link--dark, .link--dark {\n  color: #000; }\n\na.link--light, .link--light {\n  color: #8c8688; }\n\na.link--lighter, .link--lighter {\n  color: #afafaf; }\n\na.link--lightest, .link--lightest {\n  color: #dddddf; }\n\na.link--first, .link--first {\n  color: #BEDBED; }\n\na.link--second, .link--second {\n  color: #e0e0e2; }\n\na.link--third, .link--third {\n  color: #6D3BDD; }\n\na.link--gold, .link--gold {\n  color: #bf9b30; }\n\n.product-list-wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n  @media (max-width: 1000px) {\n    .product-list-wrap {\n      grid-template-columns: repeat(3, 1fr); } }\n  @media (max-width: 700px) {\n    .product-list-wrap {\n      grid-template-columns: repeat(2, 1fr); } }\n  @media (max-width: 483px) {\n    .product-list-wrap {\n      grid-template-columns: repeat(1, 1fr); } }\n\n.heart {\n  width: 20px;\n  height: 20px; }\n\n.product-tile {\n  display: flex;\n  flex-direction: column;\n  margin: 50px 0; }\n  .product-tile-title {\n    font-size: 14px;\n    font-size: 1.4rem; }\n  .product-tile-img {\n    position: relative;\n    width: 100%;\n    text-align: center; }\n  .product-tile img {\n    height: 250px;\n    width: auto; }\n  .product-tile-inner {\n    align-self: center;\n    flex-grow: 0; }\n    @media (max-width: 483px) {\n      .product-tile-inner {\n        min-width: auto;\n        padding: 10px;\n        box-sizing: border-box; }\n        .product-tile-inner img {\n          width: 100%;\n          max-width: 250px;\n          height: auto; } }\n\n.account-content {\n  padding-left: 25px; }\n\n.cart-item {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #8c8688;\n  border-radius: 5px;\n  display: block;\n  padding: 15px;\n  margin: 15px 0; }\n  .cart-item img {\n    height: auto;\n    width: 100%;\n    padding: 5; }\n  .cart-item .img-wrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.cart-wrap {\n  flex-direction: column; }\n\n.cart-wrap-aside {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n@media (min-width: 600px) {\n  .cart-item {\n    height: 150px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; }\n    .cart-item .img-wrap {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: center; }\n    .cart-item .details {\n      display: flex;\n      justify-content: flex-start;\n      flex-direction: column;\n      height: 100%; }\n    .cart-item img {\n      margin-right: 15px;\n      height: 100%;\n      width: auto; } }\n\n@media (min-width: 768px) {\n  .cart-wrap {\n    flex-direction: row; }\n  .cart-wrap-aside {\n    width: 200px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin-right: 25px; }\n  .cart-item {\n    display: flex; }\n    .cart-item:first-child {\n      margin: 0 0 15px 0; }\n    .cart-item img {\n      height: 100%;\n      width: auto; } }\n\n.mobile-col {\n  flex-direction: column; }\n\n@media (min-width: 600px) {\n  .mobile-col {\n    flex-direction: row; }\n  .middle-input {\n    margin: 0 15px; } }\n\n.order-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 15px 0; }\n  .order-item:nth-child(1) {\n    margin-top: 0; }\n  .order-item img {\n    max-width: 150px;\n    width: 100%; }\n\n.item-box {\n  display: flex;\n  flex-shrink: 0;\n  flex-direction: column; }\n  .item-box .details {\n    margin-right: 0; }\n\n@media (min-width: 768px) {\n  .order-item {\n    flex-direction: row; }\n    .order-item img {\n      max-width: 150px; }\n  .item-box {\n    flex-direction: row; }\n    .item-box .details {\n      margin-right: 15px; } }\n\n.next-bar {\n  height: 45px;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#6d3bdd+0,803bdd+100 */\n  background: #6d3bdd;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #6d3bdd 0%, #803bdd 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(-45deg, #6d3bdd 0%, #803bdd 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(135deg, #6d3bdd 0%, #803bdd 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d3bdd', endColorstr='#803bdd',GradientType=1 );\n  /* IE6-9 fallback on horizontal gradient */\n  margin-top: 25px;\n  color: #FFFFFF;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 0px 3px #000; }\n\n@media (min-width: 768px) {\n  .next-bar {\n    position: relative;\n    height: 60px;\n    box-shadow: 0 0 0; } }\n\n.product-detail-image img {\n  max-width: 100%; }\n\n.product-detail-info {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.product-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start; }\n\n.product-detail-image {\n  margin: 0 0 15 0; }\n\n@media (min-width: 768px) {\n  .product-detail-image, .product-detail-info {\n    width: 50%; }\n  .product-detail-image {\n    margin: 0 15 0 0; }\n  .product-detail {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center; } }\n\n.content-section {\n  min-height: 25vh;\n  padding: 100px 15px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #8c8688;\n  justify-content: center;\n  flex-direction: column; }\n  .content-section .content {\n    text-align: center;\n    width: 100%; }\n\n.content-section .content img {\n  width: 100%;\n  max-width: 100%; }\n\n.grid-item {\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .grid-item img {\n    max-width: 100%;\n    width: 100%;\n    height: auto; }\n\n@media (min-width: 768px) {\n  .content-grid {\n    display: grid;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 50px 0;\n    background: #f8f8f8; }\n    .content-grid-inner {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      height: 100%;\n      box-sizing: border-box;\n      padding: 15px; }\n  .content-section {\n    justify-content: flex-start;\n    padding: 100px 50px;\n    flex-direction: row;\n    min-height: 50vh; }\n    .content-section .content {\n      text-align: left;\n      width: 50%; }\n      .content-section .content:first-child {\n        padding-right: 15px; }\n    .content-section--center {\n      justify-content: center; }\n      .content-section--center .content {\n        text-align: center; } }\n\n.filter-wrap {\n  padding: 25;\n  box-sizing: border-box;\n  margin-top: 25; }\n  .filter-wrap .filter-option {\n    flex-grow: 1;\n    margin: 15 0; }\n    .filter-wrap .filter-option label {\n      display: block; }\n    .filter-wrap .filter-option select {\n      background: #FFFFFF;\n      border: 1px solid #8c8688;\n      height: 35px;\n      font-size: 1.2rem;\n      width: 100%; }\n\n@media (min-width: 768px) {\n  .filter-wrap .filters {\n    display: flex; }\n  .filter-wrap .filter-option {\n    margin-right: 25px; } }\n\n@keyframes slideup {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes slidedown {\n  0% {\n    transform: translateY(0); }\n  100% {\n    transform: translateY(-100%); } }\n\n.loader {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 99999;\n  opacity: 0;\n  pointer-events: none; }\n  .loader.isLoading {\n    opacity: 1; }\n  .loader-overlay {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    background: #fff;\n    opacity: 0; }\n    .isLoading .loader-overlay {\n      opacity: 1; }\n  .loader .slide {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #bf9b30;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n    .loader .slide.slideup {\n      animation: slideup 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards; }\n    .loader .slide.slidedown {\n      animation: slidedown 300ms 300ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards; }\n\n.collection-header {\n  position: relative;\n  grid-template-columns: repeat(1, 1fr);\n  width: 100%;\n  overflow: hidden;\n  min-height: 35vh; }\n  .collection-header-title {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    padding: 5;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 80%;\n    z-index: 2;\n    height: 80%; }\n  .collection-header-img {\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n    transform: translate(-10%, -10%); }\n    .collection-header-img img {\n      width: 150%;\n      height: auto; }\n\n@media (min-width: 768px) {\n  .desktop-break {\n    display: block; } }\n\n/* Mobile first */\n.featured-box, .featured-box--white, .featured-box--danger, .featured-box--dark, .featured-box--light, .featured-box--lighter, .featured-box--lightest, .featured-box--first, .featured-box--second, .featured-box--third, .featured-box--gold {\n  height: 450px;\n  position: relative;\n  padding: 0 30px;\n  box-sizing: border-box;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center; }\n  @media (min-width: 1200px) {\n    .featured-box, .featured-box--white, .featured-box--danger, .featured-box--dark, .featured-box--light, .featured-box--lighter, .featured-box--lightest, .featured-box--first, .featured-box--second, .featured-box--third, .featured-box--gold {\n      padding: 0 75px; } }\n  @media (min-width: 1400px) {\n    .featured-box, .featured-box--white, .featured-box--danger, .featured-box--dark, .featured-box--light, .featured-box--lighter, .featured-box--lightest, .featured-box--first, .featured-box--second, .featured-box--third, .featured-box--gold {\n      padding: 0 100px; } }\n  .featured-box .section-1, .featured-box--white .section-1, .featured-box--danger .section-1, .featured-box--dark .section-1, .featured-box--light .section-1, .featured-box--lighter .section-1, .featured-box--lightest .section-1, .featured-box--first .section-1, .featured-box--second .section-1, .featured-box--third .section-1, .featured-box--gold .section-1 {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 15px; }\n    @media (min-width: 1200px) {\n      .featured-box .section-1, .featured-box--white .section-1, .featured-box--danger .section-1, .featured-box--dark .section-1, .featured-box--light .section-1, .featured-box--lighter .section-1, .featured-box--lightest .section-1, .featured-box--first .section-1, .featured-box--second .section-1, .featured-box--third .section-1, .featured-box--gold .section-1 {\n        padding-top: 10px; }\n        .featured-box .section-1 div:first-child, .featured-box--white .section-1 div:first-child, .featured-box--danger .section-1 div:first-child, .featured-box--dark .section-1 div:first-child, .featured-box--light .section-1 div:first-child, .featured-box--lighter .section-1 div:first-child, .featured-box--lightest .section-1 div:first-child, .featured-box--first .section-1 div:first-child, .featured-box--second .section-1 div:first-child, .featured-box--third .section-1 div:first-child, .featured-box--gold .section-1 div:first-child {\n          transform: translateY(-250px) translateX(-10px); }\n        .featured-box .section-1 div:nth-child(2), .featured-box--white .section-1 div:nth-child(2), .featured-box--danger .section-1 div:nth-child(2), .featured-box--dark .section-1 div:nth-child(2), .featured-box--light .section-1 div:nth-child(2), .featured-box--lighter .section-1 div:nth-child(2), .featured-box--lightest .section-1 div:nth-child(2), .featured-box--first .section-1 div:nth-child(2), .featured-box--second .section-1 div:nth-child(2), .featured-box--third .section-1 div:nth-child(2), .featured-box--gold .section-1 div:nth-child(2) {\n          transform: translateX(20%); } }\n    @media (min-width: 1400px) {\n      .featured-box .section-1 div:nth-child(2), .featured-box--white .section-1 div:nth-child(2), .featured-box--danger .section-1 div:nth-child(2), .featured-box--dark .section-1 div:nth-child(2), .featured-box--light .section-1 div:nth-child(2), .featured-box--lighter .section-1 div:nth-child(2), .featured-box--lightest .section-1 div:nth-child(2), .featured-box--first .section-1 div:nth-child(2), .featured-box--second .section-1 div:nth-child(2), .featured-box--third .section-1 div:nth-child(2), .featured-box--gold .section-1 div:nth-child(2) {\n        transform: translateX(50%); } }\n  .featured-box--white * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--white .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--white .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #FFFFFF; }\n  .featured-box--danger * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--danger .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--danger .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #E85353; }\n  .featured-box--dark * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--dark .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--dark .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #000; }\n  .featured-box--light * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--light .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--light .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #8c8688; }\n  .featured-box--lighter * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--lighter .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--lighter .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #afafaf; }\n  .featured-box--lightest * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--lightest .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--lightest .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #dddddf; }\n  .featured-box--first * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--first .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--first .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #BEDBED; }\n  .featured-box--second * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--second .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--second .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #e0e0e2; }\n  .featured-box--third * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--third .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--third .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #6D3BDD; }\n  .featured-box--gold * {\n    position: relative;\n    z-index: 1; }\n  .featured-box--gold .img {\n    width: 100%;\n    height: 343px; }\n  .featured-box--gold .inner {\n    height: 405px;\n    width: 100%;\n    z-index: 0;\n    bottom: 0;\n    position: absolute;\n    background-color: #bf9b30; }\n", ""]);

// exports


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"opacity: 0; height: 0; width: 0; display: block;\"><defs><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 147 25\" version=\"1.1\" id=\"archadon-logo\"><title>archadon copy</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-1\" transform=\"translate(-21.000000, -22.000000)\" fill-rule=\"nonzero\" fill=\"currentColor\"><path d=\"M38.625,42.5625 C38.541666,43.0416689 38.3958345,43.5416641 38.1875,44.0625 C37.9791655,44.5833359 37.687502,45.062498 37.3125,45.5 C36.937498,45.937502 36.4583364,46.2968735 35.875,46.578125 C35.2916636,46.8593765 34.5729209,47 33.71875,47 C33.0937471,47 32.5468774,46.921876 32.078125,46.765625 C31.6093726,46.609374 31.208335,46.4062515 30.875,46.15625 C30.541665,45.9062485 30.2708345,45.6250015 30.0625,45.3125 C29.8541655,44.9999985 29.697917,44.6875015 29.59375,44.375 C29.1770811,45.2083374 28.5885454,45.8541646 27.828125,46.3125 C27.0677046,46.7708354 26.1770884,47 25.15625,47 C23.9270771,47 22.9270874,46.6666699 22.15625,46 C21.3854126,45.3333301 21,44.3854229 21,43.15625 C21,42.3437461 21.18229,41.6145864 21.546875,40.96875 C21.91146,40.3229136 22.4062471,39.7760439 23.03125,39.328125 C23.6562529,38.8802061 24.3749961,38.5208345 25.1875,38.25 C26.0000039,37.9791655 26.8541621,37.8125005 27.75,37.75 L29.46875,37.625 L29.46875,37.03125 C29.46875,36.1562456 29.453125,35.3229204 29.421875,34.53125 C29.390625,33.7395796 29.3125005,33.0520864 29.1875,32.46875 C29.0624995,31.8854136 28.8645845,31.421877 28.59375,31.078125 C28.3229155,30.734373 27.9479189,30.5625 27.46875,30.5625 C27.322916,30.5625 27.156251,30.583333 26.96875,30.625 C26.885416,30.6458335 26.8125005,30.6666665 26.75,30.6875 L25.09375,36.0625 C25.0312495,36.0833335 24.958334,36.09375 24.875,36.09375 C24.791666,36.09375 24.708334,36.0989585 24.625,36.109375 C24.541666,36.1197915 24.447917,36.125 24.34375,36.125 C24.0937485,36.125 23.8333345,36.0989585 23.5625,36.046875 C23.2916655,35.9947915 23.041668,35.895834 22.8125,35.75 C22.583332,35.604166 22.390626,35.3958345 22.234375,35.125 C22.078124,34.8541655 22,34.5104189 22,34.09375 C22,33.4687471 22.187498,32.8750029 22.5625,32.3125 C22.937502,31.7499971 23.4531216,31.2604189 24.109375,30.84375 C24.7656284,30.4270811 25.5572871,30.0989595 26.484375,29.859375 C27.4114629,29.6197905 28.4166611,29.5 29.5,29.5 C31.6666777,29.5 33.3489521,30.0572861 34.546875,31.171875 C35.7447979,32.2864639 36.34375,34.1458203 36.34375,36.75 L36.34375,43.46875 C36.34375,43.656251 36.359375,43.8489575 36.390625,44.046875 C36.421875,44.2447925 36.510416,44.34375 36.65625,44.34375 C36.760417,44.34375 36.869791,44.2812505 36.984375,44.15625 C37.098959,44.0312495 37.2031245,43.8697925 37.296875,43.671875 C37.3906255,43.4739575 37.4687495,43.260418 37.53125,43.03125 C37.5937505,42.802082 37.6354165,42.5833345 37.65625,42.375 L38.625,42.5625 Z M28.59375,44.375 C28.8020845,44.375 28.999999,44.1354189 29.1875,43.65625 C29.375001,43.1770811 29.46875,42.4479214 29.46875,41.46875 L29.46875,38.34375 L29.40625,38.375 C29.0104146,38.520834 28.6718765,38.8593726 28.390625,39.390625 C28.1093735,39.9218774 27.96875,40.7812441 27.96875,41.96875 C27.96875,42.5520864 28.0156245,43.0989556 28.109375,43.609375 C28.2031255,44.1197944 28.364582,44.375 28.59375,44.375 Z M51.09375,29.5 C52.1562554,29.5 53.0156216,29.8020801 53.671875,30.40625 C54.3281284,31.0104199 54.65625,31.8229116 54.65625,32.84375 C54.65625,33.8437549 54.3541699,34.6458301 53.75,35.25 C53.1458301,35.8541699 52.3437549,36.15625 51.34375,36.15625 C51.2187495,36.15625 51.0937505,36.1510415 50.96875,36.140625 C50.8437495,36.1302085 50.729167,36.1145835 50.625,36.09375 C50.520833,36.09375 50.416667,36.0833335 50.3125,36.0625 L50,31.15625 C49.9791665,31.15625 49.9583335,31.1458335 49.9375,31.125 L49.75,31.125 C49.458332,31.125 49.1875015,31.3020815 48.9375,31.65625 C48.6874985,32.0104185 48.468751,32.4947886 48.28125,33.109375 C48.093749,33.7239614 47.947917,34.4427041 47.84375,35.265625 C47.739583,36.0885459 47.6875,36.9791621 47.6875,37.9375 L47.6875,46.0625 L50.3125,46.0625 L50.3125,46.6875 L38.875,46.6875 L38.875,46.0625 L40.8125,46.0625 L40.8125,30.4375 L38.875,30.4375 L38.875,29.8125 C40.3333408,29.8125 41.6979102,29.7864585 42.96875,29.734375 C44.2395898,29.6822915 45.3541621,29.604167 46.3125,29.5 L46.75,29.6875 L46.90625,35.375 C47.0312505,34.2499941 47.2187485,33.3125039 47.46875,32.5625 C47.7187515,31.8124961 48.0208315,31.2135439 48.375,30.765625 C48.7291685,30.3177061 49.1354146,29.9947925 49.59375,29.796875 C50.0520854,29.5989575 50.5520806,29.5 51.09375,29.5 Z M54.90625,38.625 C54.90625,37.3124937 55.0989565,36.0989639 55.484375,34.984375 C55.8697935,33.8697861 56.4479126,32.9062539 57.21875,32.09375 C57.9895874,31.2812461 58.9583276,30.6458354 60.125,30.1875 C61.2916724,29.7291646 62.6562422,29.5 64.21875,29.5 C66.1979268,29.5 67.7083281,29.8541631 68.75,30.5625 C69.7916719,31.2708369 70.3125,32.2291606 70.3125,33.4375 C70.3125,34.3125044 70.0572944,35.0260391 69.546875,35.578125 C69.0364556,36.1302109 68.3645874,36.40625 67.53125,36.40625 C67.343749,36.40625 67.1458345,36.385417 66.9375,36.34375 C66.854166,36.34375 66.770834,36.3333335 66.6875,36.3125 L65.15625,30.53125 C65.0937495,30.5104165 65.041667,30.5 65,30.5 C64.854166,30.4791665 64.729167,30.46875 64.625,30.46875 C64.0833306,30.46875 63.645835,30.7031226 63.3125,31.171875 C62.979165,31.6406274 62.718751,32.2135381 62.53125,32.890625 C62.343749,33.5677119 62.213542,34.2916626 62.140625,35.0625 C62.067708,35.8333374 62.03125,36.5208301 62.03125,37.125 C62.03125,39.0833433 62.3229136,40.5937446 62.90625,41.65625 C63.4895864,42.7187554 64.3958271,43.25 65.625,43.25 C66.4166704,43.25 67.1562466,43.0260439 67.84375,42.578125 C68.5312534,42.1302061 69.0520815,41.4375049 69.40625,40.5 L70.3125,40.875 C70.083332,41.6250039 69.7395854,42.3697881 69.28125,43.109375 C68.8229146,43.8489619 68.2552119,44.5052056 67.578125,45.078125 C66.9010381,45.6510444 66.1197959,46.1145815 65.234375,46.46875 C64.3489541,46.8229185 63.3645889,47 62.28125,47 C61.1979111,47 60.2031294,46.8072935 59.296875,46.421875 C58.3906206,46.0364565 57.6145864,45.4843784 56.96875,44.765625 C56.3229136,44.0468716 55.81771,43.1718804 55.453125,42.140625 C55.08854,41.1093696 54.90625,39.9375063 54.90625,38.625 Z M91,46.0625 L91,46.6875 L82.40625,46.6875 L82.40625,34.96875 C82.40625,34.1979126 82.3437505,33.5833354 82.21875,33.125 C82.0937495,32.6666646 81.885418,32.4375 81.59375,32.4375 C81.3854155,32.4375 81.192709,32.552082 81.015625,32.78125 C80.838541,33.010418 80.6875005,33.3229146 80.5625,33.71875 C80.4374995,34.1145854 80.3437505,34.5624976 80.28125,35.0625 C80.2187495,35.5625024 80.1875,36.0833306 80.1875,36.625 L80.1875,46.0625 L81.5,46.0625 L81.5,46.6875 L71.375,46.6875 L71.375,46.0625 L73.3125,46.0625 L73.3125,25.4375 L71.375,25.4375 L71.375,24.8125 C72.8750073,24.6874995 74.3124932,24.4166689 75.6875,24 C77.0625068,23.5833311 78.3645771,22.9166714 79.59375,22 L80.1875,22.21875 L80.1875,28.6875 C80.1875,29.3541699 80.1770835,30.0364551 80.15625,30.734375 C80.1354165,31.4322949 80.0416675,32.1354131 79.875,32.84375 C80.5000029,31.5520767 81.2291626,30.6718774 82.0625,30.203125 C82.8958374,29.7343726 83.7812451,29.5 84.71875,29.5 C86.4062583,29.5 87.5885381,30.1249937 88.265625,31.375 C88.9427119,32.6250063 89.28125,34.4166548 89.28125,36.75 L89.28125,46.0625 L91,46.0625 Z M109.4375,42.5625 C109.354166,43.0416689 109.208334,43.5416641 109,44.0625 C108.791666,44.5833359 108.500002,45.062498 108.125,45.5 C107.749998,45.937502 107.270836,46.2968735 106.6875,46.578125 C106.104164,46.8593765 105.385421,47 104.53125,47 C103.906247,47 103.359377,46.921876 102.890625,46.765625 C102.421873,46.609374 102.020835,46.4062515 101.6875,46.15625 C101.354165,45.9062485 101.083334,45.6250015 100.875,45.3125 C100.666666,44.9999985 100.510417,44.6875015 100.40625,44.375 C99.9895811,45.2083374 99.4010454,45.8541646 98.640625,46.3125 C97.8802046,46.7708354 96.9895884,47 95.96875,47 C94.7395771,47 93.7395874,46.6666699 92.96875,46 C92.1979126,45.3333301 91.8125,44.3854229 91.8125,43.15625 C91.8125,42.3437461 91.99479,41.6145864 92.359375,40.96875 C92.72396,40.3229136 93.2187471,39.7760439 93.84375,39.328125 C94.4687529,38.8802061 95.1874961,38.5208345 96,38.25 C96.8125039,37.9791655 97.6666621,37.8125005 98.5625,37.75 L100.28125,37.625 L100.28125,37.03125 C100.28125,36.1562456 100.265625,35.3229204 100.234375,34.53125 C100.203125,33.7395796 100.125,33.0520864 100,32.46875 C99.8749995,31.8854136 99.6770845,31.421877 99.40625,31.078125 C99.1354155,30.734373 98.7604189,30.5625 98.28125,30.5625 C98.135416,30.5625 97.968751,30.583333 97.78125,30.625 C97.697916,30.6458335 97.6250005,30.6666665 97.5625,30.6875 L95.90625,36.0625 C95.8437495,36.0833335 95.770834,36.09375 95.6875,36.09375 C95.604166,36.09375 95.520834,36.0989585 95.4375,36.109375 C95.354166,36.1197915 95.260417,36.125 95.15625,36.125 C94.9062485,36.125 94.6458345,36.0989585 94.375,36.046875 C94.1041655,35.9947915 93.854168,35.895834 93.625,35.75 C93.395832,35.604166 93.203126,35.3958345 93.046875,35.125 C92.890624,34.8541655 92.8125,34.5104189 92.8125,34.09375 C92.8125,33.4687471 92.999998,32.8750029 93.375,32.3125 C93.750002,31.7499971 94.2656216,31.2604189 94.921875,30.84375 C95.5781284,30.4270811 96.3697871,30.0989595 97.296875,29.859375 C98.2239629,29.6197905 99.2291611,29.5 100.3125,29.5 C102.479178,29.5 104.161452,30.0572861 105.359375,31.171875 C106.557298,32.2864639 107.15625,34.1458203 107.15625,36.75 L107.15625,43.46875 C107.15625,43.656251 107.171875,43.8489575 107.203125,44.046875 C107.234375,44.2447925 107.322916,44.34375 107.46875,44.34375 C107.572917,44.34375 107.682291,44.2812505 107.796875,44.15625 C107.911459,44.0312495 108.015625,43.8697925 108.109375,43.671875 C108.203125,43.4739575 108.28125,43.260418 108.34375,43.03125 C108.40625,42.802082 108.447917,42.5833345 108.46875,42.375 L109.4375,42.5625 Z M99.40625,44.375 C99.6145845,44.375 99.812499,44.1354189 100,43.65625 C100.187501,43.1770811 100.28125,42.4479214 100.28125,41.46875 L100.28125,38.34375 L100.21875,38.375 C99.8229146,38.520834 99.4843765,38.8593726 99.203125,39.390625 C98.9218735,39.9218774 98.78125,40.7812441 98.78125,41.96875 C98.78125,42.5520864 98.8281245,43.0989556 98.921875,43.609375 C99.0156255,44.1197944 99.177082,44.375 99.40625,44.375 Z M128.375,46.0625 L128.375,46.6875 L120.75,46.6875 L120.28125,42.875 C119.927082,44.0625059 119.35417,45.0468711 118.5625,45.828125 C117.77083,46.6093789 116.750006,47 115.5,47 C114.749996,47 114.046878,46.833335 113.390625,46.5 C112.734372,46.166665 112.161461,45.6770864 111.671875,45.03125 C111.182289,44.3854136 110.796876,43.5729214 110.515625,42.59375 C110.234374,41.6145786 110.09375,40.4895898 110.09375,39.21875 C110.09375,37.8229097 110.27604,36.5312559 110.640625,35.34375 C111.00521,34.1562441 111.541663,33.1302129 112.25,32.265625 C112.958337,31.4010371 113.843745,30.7239609 114.90625,30.234375 C115.968755,29.7447891 117.187493,29.5 118.5625,29.5 C118.729167,29.5 118.895833,29.5052085 119.0625,29.515625 C119.229167,29.5260415 119.395833,29.53125 119.5625,29.53125 L119.5625,25.4375 L117.625,25.4375 L117.625,24.8125 C119.125007,24.6874995 120.562493,24.4166689 121.9375,24 C123.312507,23.5833311 124.614577,22.9166714 125.84375,22 L126.4375,22.21875 L126.4375,46.0625 L128.375,46.0625 Z M118.3125,44.125 C118.645835,44.125 118.937499,43.7916699 119.1875,43.125 C119.437501,42.4583301 119.5625,41.5104229 119.5625,40.28125 L119.5625,30.46875 C119.020831,30.5312505 118.583335,30.7604146 118.25,31.15625 C117.916665,31.5520854 117.661459,32.0677051 117.484375,32.703125 C117.307291,33.3385449 117.192708,34.0781206 117.140625,34.921875 C117.088542,35.7656294 117.0625,36.6562451 117.0625,37.59375 C117.0625,38.8645898 117.098958,39.9218706 117.171875,40.765625 C117.244792,41.6093794 117.338541,42.2812476 117.453125,42.78125 C117.567709,43.2812524 117.697916,43.6302075 117.84375,43.828125 C117.989584,44.0260425 118.145833,44.125 118.3125,44.125 Z M137.875,47 C135.14582,47 133.08334,46.3072988 131.6875,44.921875 C130.29166,43.5364512 129.59375,41.4062642 129.59375,38.53125 C129.59375,35.6145688 130.328118,33.3802163 131.796875,31.828125 C133.265632,30.2760337 135.479152,29.5 138.4375,29.5 C141.16668,29.5 143.22916,30.1927012 144.625,31.578125 C146.02084,32.9635488 146.71875,35.0937358 146.71875,37.96875 C146.71875,40.8854312 145.984382,43.1197837 144.515625,44.671875 C143.046868,46.2239663 140.833348,47 137.875,47 Z M138.28125,46.0625 C138.697919,46.0625 139.005208,45.5260469 139.203125,44.453125 C139.401042,43.3802031 139.5,41.5625127 139.5,39 C139.5,36.2083193 139.385418,34.0833408 139.15625,32.625 C138.927082,31.1666592 138.552086,30.4375 138.03125,30.4375 C137.614581,30.4375 137.307292,30.9739531 137.109375,32.046875 C136.911458,33.1197969 136.8125,34.9374873 136.8125,37.5 C136.8125,40.2916807 136.927082,42.4166592 137.15625,43.875 C137.385418,45.3333408 137.760414,46.0625 138.28125,46.0625 Z M167.5625,46.0625 L167.5625,46.6875 L158.96875,46.6875 L158.96875,34.96875 C158.96875,34.1979126 158.90625,33.5833354 158.78125,33.125 C158.65625,32.6666646 158.447918,32.4375 158.15625,32.4375 C157.947916,32.4375 157.755209,32.552082 157.578125,32.78125 C157.401041,33.010418 157.25,33.3229146 157.125,33.71875 C157,34.1145854 156.90625,34.5624976 156.84375,35.0625 C156.78125,35.5625024 156.75,36.0833306 156.75,36.625 L156.75,46.0625 L157.5,46.0625 L157.5,46.6875 L147.9375,46.6875 L147.9375,46.0625 L149.875,46.0625 L149.875,30.4375 L147.9375,30.4375 L147.9375,29.8125 C149.437507,29.8125 150.833327,29.7864585 152.125,29.734375 C153.416673,29.6822915 154.562495,29.604167 155.5625,29.5 L156,29.6875 L156.15625,33.84375 C156.385418,32.9895791 156.671873,32.2864609 157.015625,31.734375 C157.359377,31.1822891 157.749998,30.739585 158.1875,30.40625 C158.625002,30.072915 159.098956,29.8385425 159.609375,29.703125 C160.119794,29.5677075 160.645831,29.5 161.1875,29.5 C162.916675,29.5 164.124997,30.1145771 164.8125,31.34375 C165.500003,32.5729229 165.84375,34.3749883 165.84375,36.75 L165.84375,46.0625 L167.5625,46.0625 Z\" id=\"--ss-2\"></path></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 180 123\" version=\"1.1\" id=\"icon-cart\"><title>Cart Icon</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-4\" fill=\"currentColor\"><path d=\"M157.458177,69.2698936 L150.165205,74.8708913 L151.759735,69.2698936 L157.458177,69.2698936 Z M8.02220856,16.1813614 C3.8268176,16.1813614 0.42578125,12.6993885 0.42578125,8.40415726 C0.42578125,4.10892602 3.8268176,0.626953125 8.02220856,0.626953125 L54.7283671,0.626953125 C58.1345358,0.626953125 61.1243048,2.94820211 62.0431674,6.30614534 L79.2724751,69.2698936 L151.759735,69.2698936 L162.27223,32.3433638 L99.8989198,32.3433638 C95.7035288,32.3433638 92.3024924,28.8613909 92.3024924,24.5661596 C92.3024924,20.2709284 95.7035288,16.7889555 99.8989198,16.7889555 L172.398807,16.7889555 C177.462493,16.7889555 181.108692,21.7652689 179.691779,26.742366 L164.751149,79.2233041 C163.80628,82.5422832 160.834899,84.8243018 157.458177,84.8243018 L73.5117206,84.8243018 C70.1055519,84.8243018 67.1157829,82.5030529 66.1969203,79.1451096 L48.9676126,16.1813614 L8.02220856,16.1813614 Z\" id=\"--ss-5\" fill-rule=\"nonzero\"></path><ellipse id=\"--ss-6\" cx=\"83.3804076\" cy=\"106.931768\" rx=\"15.1928546\" ry=\"15.5544083\"></ellipse><ellipse id=\"--ss-7\" cx=\"144.292921\" cy=\"106.931768\" rx=\"15.1928546\" ry=\"15.5544083\"></ellipse></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 27 24\" version=\"1.1\" id=\"icon-heart-filled\"><title>Group 2</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-9\" transform=\"translate(1.000000, 1.000000)\"><g id=\"--ss-10\"></g><g id=\"--ss-11\" stroke=\"currentColor\"><g id=\"--ss-12\" fill=\"currentColor\"><path d=\"M12.5,3.214602 C8.332586,-3.034277 0,0.623987 0,7.431361 C0,12.038395 4.160685,15.322084 7.291854,17.798309 C10.541898,20.370981 11.457025,20.922748 12.5,21.963481 C13.540732,20.922748 14.413242,20.314907 17.708146,17.796066 C20.884174,15.37143 25,11.984564 25,7.379773 C24.997757,0.623987 16.665171,-3.034277 12.5,3.214602 Z\" id=\"--ss-13\"></path></g><path d=\"M12.5,3.214602 C8.332586,-3.034277 0,0.623987 0,7.431361 C0,12.038395 4.160685,15.322084 7.291854,17.798309 C10.541898,20.370981 11.457025,20.922748 12.5,21.963481 C13.540732,20.922748 14.413242,20.314907 17.708146,17.796066 C20.884174,15.37143 25,11.984564 25,7.379773 C24.997757,0.623987 16.665171,-3.034277 12.5,3.214602 Z\" id=\"--ss-14\"></path></g></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 27 24\" version=\"1.1\" id=\"icon-heart\"><title>Heart</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-15\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-16\" transform=\"translate(-416.000000, -1351.000000)\" stroke=\"currentColor\"><g id=\"--ss-17\" transform=\"translate(10.000000, 1065.000000)\"><path d=\"M419.5,290.214602 C415.332586,283.965723 407,287.623987 407,294.431361 C407,299.038395 411.160685,302.322084 414.291854,304.798309 C417.541898,307.370981 418.457025,307.922748 419.5,308.963481 C420.540732,307.922748 421.413242,307.314907 424.708146,304.796066 C427.884174,302.37143 432,298.984564 432,294.379773 C431.997757,287.623987 423.665171,283.965723 419.5,290.214602 Z\" id=\"--ss-18\"></path></g></g></g></svg></defs></svg>"

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeFeaturedBoxes() {
  return _react2.default.createElement(
    'div',
    { className: 'featured-boxes' },
    _react2.default.createElement(
      'div',
      { className: 'featured-box--lightest' },
      _react2.default.createElement(
        'div',
        { className: 'img' },
        _react2.default.createElement('div', { className: 'img--inner', style: { backgroundImage: 'url(' + _Constants.IMAGE_ORIGIN + '/6x9_32963_29737.jpg)' } })
      ),
      _react2.default.createElement(
        'div',
        { className: 'section-1' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Nice'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'font-color--lighter uppercase' },
            'Really nice'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', className: 'btn btn--alt' },
            'Shop'
          )
        )
      ),
      _react2.default.createElement('div', { className: 'inner' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'featured-box--first' },
      _react2.default.createElement(
        'div',
        { className: 'img' },
        _react2.default.createElement('div', { className: 'img--inner', style: { backgroundImage: 'url(' + _Constants.IMAGE_ORIGIN + '/6x9_32963_29737.jpg)' } })
      ),
      _react2.default.createElement(
        'div',
        { className: 'section-1' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Cool'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'font-color--lighter uppercase' },
            'And Lively'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: '#', className: 'btn btn--alt' },
            'Shop'
          )
        )
      ),
      _react2.default.createElement('div', { className: 'inner' })
    )
  );
}

var _default = HomeFeaturedBoxes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomeFeaturedBoxes, 'HomeFeaturedBoxes', '/Users/realseanp1/Projects/archadon/src/client/components/HomeFeaturedBoxes.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/HomeFeaturedBoxes.jsx');
}();

;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map