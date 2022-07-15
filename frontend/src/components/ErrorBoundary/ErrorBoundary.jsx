import React, { Component } from 'react';
import './ErrorBoundary.scss'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1 className='error-boundry'>Uh oh! Something went wrong.</h1>;
        }
        return this.props.children;
    }
}