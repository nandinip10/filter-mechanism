import React from "react";
import Logo from "../assets/logo.svg";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="logo" />
        <div className="flex items-center gap-6">
          <button className="hover:text-violet-900 transition">Login</button>
          <button className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
