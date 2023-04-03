import { Link } from "react-router-dom";
import "../assets/styles/pages/NotFound.scss";

const NotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>

      <Link to="/" className="btn-return">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
