import React from 'react';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';

class AlertComp extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    
    render() {
        const { alert } = this.props;

        return (
            <div>
                
                {alert.message &&
                            <p style={{color:'red',paddingLeft:'62%'}}>{alert.message}</p>
                } 
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedAlertComp = connect(mapState, actionCreators)(AlertComp);
export { connectedAlertComp as AlertComp };