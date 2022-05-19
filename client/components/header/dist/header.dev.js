"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Header =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Header, _HTMLElement);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this));
    _this._shadowRoot = _this.attachShadow({
      'mode': 'open'
    });
    _this._cart_count = _this.getAttribute('cart-item') || 0;
    _this._shadowRoot.innerHTML = "\n        <style>\n       .p1{\n            margin-bottom: 0.5rem;\n        }\n            header{\n                box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);\n                box-shadow: 0 8px 8px -4px rgb(0 0 0 / 20%);\n            }\n            nav{\n                display: flex;\n                justify-content: space-between;\n                padding: 1rem;\n            }\n            #nav__logo{\n                margin-right: 5rem;\n                height: 75px;\n            }\n            .nav__links{\n                text-decoration: none;\n                color: black;\n                padding: 0 15px 0px 0;\n            }\n            .nav__cart__container{\n                background-color: #ddd6d6;\n                padding: 10px;\n                cursor: pointer;\n            }\n            .nav__rightcontainer{\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                padding-top: 10px;\n            }\n            .nav__leftcontainer{\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            }\n            @media screen and (max-width: 480px){\n                nav{\n                    width: 100%\n                }\n                #nav__logo{\n                    height: 50px;\n                    margin: 0 15px 0 0;\n                }\n                .nav__links{\n                    padding: 0 10px 0 0;\n                }\n            }\n        </style>\n        <header>\n            <nav>\n                <div class=\"nav__leftcontainer\">\n                    <img src=\"../../../static/images/logo.png\" id=\"nav__logo\" alt=\"Sabka Bazaar Logo\"/>\n                    <a class=\"nav__links\" href=\"../home/home.html\">Home</a>\n                    <a class=\"nav__links\" href=\"../products/products.html\">Products</a>\n                </div>\n                <div class=\"nav__rightcontainer\">\n                    <div class=\"p1\">\n                        <a class=\"nav__links\" href=\"../login/login.html\">SignIn</a>\n                        <a class=\"nav__links\" href=\"../register/register.html\">Register</a>\n                    </div>\n                    <div class=\"nav__cart__container\" onclick=\"openCart()\">\n                        <img src=\"../../../static/images/cart.svg\" height=\"30px\" width=\"30px\" alt=\"Item Cart\"/>\n                        <span id=\"cart-count\">".concat(_this._cart_count, " items</span>\n                    </div>\n                </div>\n            </nav>\n        </header>\n        ");
    return _this;
  }

  _createClass(Header, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      this.shadowRoot.getElementById('cart-count').innerText = newValue + ' items';
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['cart-item'];
    }
  }]);

  return Header;
}(_wrapNativeSuper(HTMLElement));

customElements.define('uc-header', Header);
//# sourceMappingURL=header.dev.js.map
