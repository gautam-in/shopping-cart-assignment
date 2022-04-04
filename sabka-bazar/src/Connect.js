// <================== Older Way to connect Store ==================>
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as allActions from "./store/actions/index.action";
// import App from "./App";

// //exposes store data to react components
// function mapStateToProps(store) {
//   return {
//     ...store,
//   };
// }

// //exposes actions to react components
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(allActions, dispatch);
// }

// export var HOCApp = connect(mapStateToProps, mapDispatchToProps)(App);
