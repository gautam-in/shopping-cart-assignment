import React from 'react';

import { StyledCode, StyledDetails, StyledWentWrong } from './ErrorBoundary.styled';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error,
            errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <StyledWentWrong className="search-message-empty-container">
                        <span className="search-message-empty-decal">
                            <span className="search-message-empty-decal-eyes">:</span>
                            <span>(</span>
                        </span>
                        <h2 className="search-message-empty-message">
                            Something went wrong.
                        </h2>
                    </StyledWentWrong>
                    <StyledDetails style={{ whiteSpace: 'pre-wrap' }}>
                        <summary><span>ERROR:</span>  {this.state.error && this.state.error.toString()}</summary>
                        <StyledCode>{this.state.errorInfo.componentStack}</StyledCode>
                    </StyledDetails>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;