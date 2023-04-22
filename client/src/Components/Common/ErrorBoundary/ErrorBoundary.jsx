import { Component } from 'react';
import styles from './ErrorBoundary.module.scss';
class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:false
        }
    }

    static getDerivedStateFromError(err){
        return {error:true};
    }

    componentDidCatch(info,errDetails){
        // can be used to log erroe to server
    }

    render(){
        const {error} = this.state;
        if(!error) {
            return this.props.children;
        }

        return(
            <div className={styles.pageNotFound}>
              <h1>Error !</h1>
              <p>Something went wrong please try again after sometime</p>
            </div>
            )
    }
}

export default ErrorBoundary;