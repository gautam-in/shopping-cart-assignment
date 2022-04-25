import { Component } from "react";
import { Link } from "react-router-dom";

class UnAuthorizedPage extends Component {
    render() {
        return (
            <section className="text-center">
                <h5 className="text-danger">UnAuthorized access, please <Link to="/">Login</Link> to continue.</h5>
            </section>
        )
    };
};
export default UnAuthorizedPage;