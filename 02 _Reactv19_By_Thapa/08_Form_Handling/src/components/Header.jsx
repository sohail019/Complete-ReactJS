import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">Form Handling</div>

        {/* Menu Button (visible on small screens) */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Menu */}
        <nav className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="register">Register</Link>
            </li>
            <li>
              <Link to="register-real">Real Register</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
