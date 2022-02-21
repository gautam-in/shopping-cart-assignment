import { Component } from "react";

class ErrorBoundary extends Component {
	state = {
		error: false,
	};

	static getDerivedStateFromError(error) {
		return {
			error: true,
		};
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		const { error } = this.state;

		if (error) {
			return <div>Error</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
