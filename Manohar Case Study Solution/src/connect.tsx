import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as allActions from "./actions/action";
import App from "./App";
import { IStore } from "./model/IStore";

//to expose store data as props to react component
function mapStateToProps(store: IStore) {
  return {
    store,
  };
}

// to expose actions as props to react component
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(allActions, dispatch);
}
// a HOC
let MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default MainApp;
