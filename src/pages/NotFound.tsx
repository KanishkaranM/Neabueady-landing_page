
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neogray-light">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-neopurple">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link to="/" className="bg-neopurple hover:bg-neopurple-dark text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
