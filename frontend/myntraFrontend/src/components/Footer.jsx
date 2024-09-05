// src/components/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p>
            Learn more about our mission and values. We are committed to
            delivering the best products and services to our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/yourpage"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
