(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(7552);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(8579);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(9894);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(998);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ../node_modules/react-icons/fi/index.esm.js
var index_esm = __webpack_require__(597);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Cart/CartList.jsx + 1 modules
var CartList = __webpack_require__(300);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Drawer.js









function CartDrawer() {
  const router = (0,router_.useRouter)();
  const btnRef = (0,external_react_.useRef)();
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const cartList = (0,external_react_redux_.useSelector)(state => state.cart.cartList);
  const totalCount = cartList.reduce((acc, current) => {
    acc += current.qty;
    return acc;
  }, 0);
  const totalAmount = cartList.reduce((acc, current) => {
    acc += current.qty * current.price;
    return acc;
  }, 0);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
      ref: btnRef,
      colorScheme: "",
      padding: "0px",
      margin: "0px",
      color: "black",
      height: "100%",
      width: "100%",
      minWidth: "5",
      onClick: onOpen,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FiShoppingCart */.Qyq, {
        size: "30"
      }), "\xA0", totalCount]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Drawer, {
      isOpen: isOpen,
      placement: "right",
      onClose: onClose,
      finalFocusRef: btnRef,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.DrawerOverlay, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.DrawerContent, {
        bg: "#EFE8E8",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.DrawerCloseButton, {
          color: "whitesmoke",
          size: "lg"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.DrawerHeader, {
          bgColor: "black",
          color: "whitesmoke",
          children: ["My Cart (\xA0", totalCount, "\xA0 Items)"]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.DrawerBody, {
          margin: "0px",
          padding: "10px",
          children: /*#__PURE__*/jsx_runtime_.jsx(CartList/* default */.Z, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.DrawerFooter, {
          margin: "0px",
          padding: "10px",
          flexDirection: "column",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              fontSize: '.8rem',
              marginBottom: '.5rem'
            },
            children: "Promo code can be applied at payment page"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Button, {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            onClick: () => {
              router.push('/checkout');
              onClose();
            },
            colorScheme: "red",
            bgColor: "var(--category-banner-card-button-color)",
            size: "sm",
            borderRadius: 0,
            _hover: {
              bg: 'var(--white)',
              color: 'var(--primary)',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0 0.5rem 1rem'
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "Proceed to Checkout"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: ["Rs. ", totalAmount, " ", '   >']
            })]
          })]
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: ./Authcontext.js + 1 modules
var Authcontext = __webpack_require__(617);
;// CONCATENATED MODULE: ./components/User/UserAvatar.js









function UserAvatar() {
  const {
    currentUser
  } = (0,Authcontext/* useAuth */.aC)();
  const router = (0,router_.useRouter)();

  function handleLoginClick() {
    router.push('/login');
  }

  function handleLogout() {
    (0,Authcontext/* logout */.kS)();
    if (router.pathname === '/checkout') router.push('/login');else router.push('/');
  }

  function handleRegisterClick() {
    router.push('/signup');
  }

  function loggedInMenuItems() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        id: "1",
        disabled: true,
        fontWeight: "bold",
        children: currentUser ? currentUser === null || currentUser === void 0 ? void 0 : currentUser.displayName : currentUser === null || currentUser === void 0 ? void 0 : currentUser.email
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        id: "2",
        onClick: handleLogout,
        children: "Logout"
      })]
    });
  }

  function loggedOutMenuItems() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        id: "3",
        disabled: true,
        fontWeight: "bold",
        children: "GUEST USER"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        id: "4",
        onClick: handleLoginClick,
        children: "Login"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        id: "5",
        onClick: handleRegisterClick,
        children: "Register"
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "UserAvatarContainer",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
          name: currentUser ? currentUser === null || currentUser === void 0 ? void 0 : currentUser.displayName : currentUser === null || currentUser === void 0 ? void 0 : currentUser.email
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuList, {
        children: currentUser ? loggedInMenuItems() : loggedOutMenuItems()
      })]
    })
  });
}

/* harmony default export */ const User_UserAvatar = (/*#__PURE__*/external_react_default().memo(UserAvatar));
;// CONCATENATED MODULE: ./components/Header.js








function Header() {
  const router = (0,router_.useRouter)();

  function handleLogoClick() {
    router.push('/');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: (Header_module_default()).HeaderMainContainer,
    "data-testid": "header-component",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).LogoAndProducts,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).HeaderLogo,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/static/images/logo.png",
          layout: "fill",
          objectFit: "contain",
          alt: "Logo",
          onClick: handleLogoClick
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).HeaderHome,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "Home"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).HeaderProducts,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/products",
          children: "Products"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Header_module_default()).UserAndCart,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).HeaderUser,
        children: /*#__PURE__*/jsx_runtime_.jsx(User_UserAvatar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Header_module_default()).HeaderCart,
        children: /*#__PURE__*/jsx_runtime_.jsx(CartDrawer, {})
      })]
    })]
  });
}
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(785);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js


function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: (Footer_module_default()).FooterMainContainer,
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Copyright 2011-2021 Sabka Bazar Grocery Supplies Pvt Ltd"
    })
  });
}
;// CONCATENATED MODULE: ./components/Layout.js






function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).MainContainer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Sabka Bazaar"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        lang: "en"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Sabka Bazaar"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Layout_module_default()).Content,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).Footer,
      children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {})
    })]
  });
}
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
// EXTERNAL MODULE: ./redux/features/productFilterSlice.js
var productFilterSlice = __webpack_require__(8417);
// EXTERNAL MODULE: ./redux/features/cartSlice.js
var cartSlice = __webpack_require__(2140);
;// CONCATENATED MODULE: ./redux/store.js
/* eslint-disable import/prefer-default-export */



const store = (0,toolkit_.configureStore)({
  reducer: {
    productFilter: productFilterSlice/* default */.ZP,
    cart: cartSlice/* default */.ZP
  }
});
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Authcontext/* default */.ZP, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
          children: /*#__PURE__*/jsx_runtime_.jsx("main", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
          })
        })
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 785:
/***/ ((module) => {

// Exports
module.exports = {
	"FooterMainContainer": "Footer_FooterMainContainer___mkIL"
};


/***/ }),

/***/ 998:
/***/ ((module) => {

// Exports
module.exports = {
	"HeaderMainContainer": "Header_HeaderMainContainer__VGf0M",
	"HeaderLogo": "Header_HeaderLogo__24uW5",
	"LogoAndProducts": "Header_LogoAndProducts__v4JCI",
	"UserAndCart": "Header_UserAndCart__25Buw",
	"HeaderCart": "Header_HeaderCart__1HItl",
	"HeaderHome": "Header_HeaderHome__2Z8rI"
};


/***/ }),

/***/ 7552:
/***/ ((module) => {

// Exports
module.exports = {
	"MainContainer": "Layout_MainContainer__29rwE",
	"Header": "Layout_Header__19cqx",
	"Content": "Layout_Content__1ueIt"
};


/***/ }),

/***/ 3426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9421:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ 5942:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 7206:
/***/ ((module) => {

"use strict";
module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 3810:
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6918:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [780,579,894,188,10,597,617,140,417,300], () => (__webpack_exec__(2636)));
module.exports = __webpack_exports__;

})();