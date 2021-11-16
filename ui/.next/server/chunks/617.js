"use strict";
exports.id = 617;
exports.ids = [617];
exports.modules = {

/***/ 617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Authcontext),
  "x4": () => (/* binding */ login),
  "kS": () => (/* binding */ logout),
  "IU": () => (/* binding */ signup),
  "aC": () => (/* binding */ useAuth)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(9421);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);
// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(5942);
;// CONCATENATED MODULE: ./firebase.js


const firebaseConfig = {
  apiKey: "AIzaSyC93MDXcwgXMqYaNV3RFOUjSpAFe9FSNOw",
  authDomain: "test-demo-7832a.firebaseapp.com",
  projectId: "test-demo-7832a",
  storageBucket: "test-demo-7832a.appspot.com",
  messagingSenderId: "647183826931",
  appId: "1:647183826931:web:0f52764a13e99377cf5c86"
};
const app = (app_default()).apps.length === 0 ? app_default().initializeApp(firebaseConfig) : app_default().app();
const auth = app.auth();
/* harmony default export */ const firebase = ((/* unused pure expression or super */ null && (app)));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./Authcontext.js



const AuthContext = /*#__PURE__*/(0,external_react_.createContext)();

function useAuth() {
  return (0,external_react_.useContext)(AuthContext);
}

function signup(email, password) {
  console.log('email');
  return auth.createUserWithEmailAndPassword(email, password);
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function logout() {
  return auth.signOut();
}

function AuthProvider({
  children
}) {
  const {
    0: currentUser,
    1: setCurrentUser
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    const unsubscriber = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscriber;
  }, []);
  const value = {
    currentUser
  };
  return /*#__PURE__*/jsx_runtime_.jsx(AuthContext.Provider, {
    value: value,
    children: !loading && children
  });
}


/* harmony default export */ const Authcontext = (AuthProvider);

/***/ })

};
;