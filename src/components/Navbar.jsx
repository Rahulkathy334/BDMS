import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold tracking-wide">
            BDMS
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/donors" className="text-white hover:text-gray-200">
              Donors
            </Link>
            <Link to="/requests" className="text-white hover:text-gray-200">
              Requests
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-3 py-1 bg-white text-red-800 rounded-lg font-medium hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 bg-white text-black rounded-lg font-medium hover:bg-yellow-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
