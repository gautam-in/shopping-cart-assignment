import { Link } from "react-router-dom"

export const NotFoundPage = () => (
  <div className="grid-center text-center">
    <h1>Not found</h1>
    <br />
    <p>
      Page not found. Click <Link to="/">here</Link> to return to home page.
    </p>
  </div>
)
