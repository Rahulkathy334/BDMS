import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">BloodBank</h2>
          <p className="text-sm">
            A platform to connect blood donors with patients in need. Together,
            we can save lives ❤️
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/donors" className="hover:underline">
                Donors
              </Link>
            </li>
            <li>
              <Link to="/requests" className="hover:underline">
                Requests
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="text-sm">📍 Delhi, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@bloodbank.com</p>
        </div>
      </div>

      <div className="bg-red-800 py-3 text-center text-sm">
        © {new Date().getFullYear()} BloodBank | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
