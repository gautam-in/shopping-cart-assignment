import React from "react";

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    Something went wrong. Try reloading/refreshing the application. Sorry for the inconvenience
                </div>
            );
        }
        return this.props.children;
    }
}
