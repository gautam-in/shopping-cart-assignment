import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'

export function mapStateToProps(state) {
    return state
  }
  
export function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }