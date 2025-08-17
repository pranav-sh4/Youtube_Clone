import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h3>404 — Not Found</h3>
      <p className="muted">We couldn't find the page.</p>
      <Link to="/" className="btn btn-primary">Go home</Link>
    </div>
  );
}
export default NotFound;
