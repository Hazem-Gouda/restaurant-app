import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "var(--brand-dark)",
        minHeight: "60px",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <div
        className="container-fluid"
        style={{ minHeight: "56px", paddingTop: 0, paddingBottom: 0 }}
      >
        {/* Logo and brand name */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleClose}
        >
          <span
            style={{
              display: "inline-block",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "var(--brand-accent)",
              marginRight: "0.5rem",
              overflow: "hidden",
            }}
          >
            <img
              src={logo}
              alt="Gouda Restaurant Logo"
              width="40"
              height="40"
              style={{ borderRadius: "50%" }}
            />
          </span>
          <span style={{ color: "var(--brand-accent)", fontWeight: "bold" }}>
            Gouda Restaurant
          </span>
        </Link>
        {/* Desktop navigation links */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-lg-flex text-center">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "var(--brand-accent)" : "var(--brand-light)",
                fontWeight: isActive ? 700 : 500,
                fontSize: 17,
                padding: "0.8rem 1.2rem",
                display: "block",
                letterSpacing: isActive ? "0.5px" : "normal",
                transition: "all 0.2s",
              })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "var(--brand-accent)" : "var(--brand-light)",
                fontWeight: isActive ? 700 : 500,
                fontSize: 17,
                padding: "0.8rem 1.2rem",
                display: "block",
                letterSpacing: isActive ? "0.5px" : "normal",
                transition: "all 0.2s",
              })}
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={({ isActive }) => ({
                color: isActive ? "var(--brand-accent)" : "var(--brand-light)",
                fontWeight: isActive ? 700 : 500,
                fontSize: 17,
                padding: "0.8rem 1.2rem",
                display: "block",
                letterSpacing: isActive ? "0.5px" : "normal",
                transition: "all 0.2s",
              })}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hamburger toggler for mobile only */}
        <button
          id="navbar-toggler"
          className="navbar-toggler d-lg-none"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          style={{
            border: "none",
            background: "transparent",
            marginLeft: "auto",
          }}
          onClick={handleToggle}
        >
          <span style={{ fontSize: 28, color: "var(--brand-accent)" }}>
            &#9776;
          </span>
        </button>
        {/* Mobile menu (slide-in) */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="navbar-toggler"
          className={`navbar-menu${menuOpen ? "open" : ""} d-lg-none`}
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? 0 : "-100vw",
            width: "70vw",
            maxWidth: 320,
            height: "100vh",
            background: "var(--brand-dark)",
            boxShadow: menuOpen ? "-2px 0 16px rgba(0,0,0,0.12)" : "none",
            transition: "right 0.3s cubic-bezier(.4,0,.2,1)",
            zIndex: 1050,
            display: "flex",
            flexDirection: "column",
            paddingTop: 80,
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              background: "none",
              border: "none",
              fontSize: 32,
              color: "var(--brand-accent)",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="navbar-nav text-center" style={{ width: "100%" }}>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--brand-accent)"
                    : "var(--brand-light)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: isActive ? 26 : 20,
                  letterSpacing: isActive ? "1px" : "normal",
                  padding: "1.2rem 0",
                  display: "block",
                  transition: "all 0.2s",
                })}
                to="/"
                onClick={handleClose}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--brand-accent)"
                    : "var(--brand-light)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: isActive ? 26 : 20,
                  letterSpacing: isActive ? "1px" : "normal",
                  padding: "1.2rem 0",
                  display: "block",
                  transition: "all 0.2s",
                })}
                to="/menu"
                onClick={handleClose}
              >
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--brand-accent)"
                    : "var(--brand-light)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: isActive ? 26 : 20,
                  letterSpacing: isActive ? "1px" : "normal",
                  padding: "1.2rem 0",
                  display: "block",
                  transition: "all 0.2s",
                })}
                to="/contact"
                onClick={handleClose}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
