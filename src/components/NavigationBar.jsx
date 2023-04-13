import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" variant="light" className="navbar py-3 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between border-0"
        >
          <img src={"images/blixie-logo-white.png"} alt="Site Icon" />
          <span
            id="brand-name"
            className="text-white text-monospace fw-bold mx-2"
          >
            Blixie
          </span>
        </NavLink>

        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="navMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/"
                className="btn position-relative border-0"
                type="button"
              >
                <span className="nav-btn-label text-white">HOME</span>
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/"
                className="btn position-relative border-0"
                type="button"
              >
                <span className="nav-btn-label text-white">PRICING</span>
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/"
                className="btn position-relative border-0"
                type="button"
              >
                <span className="nav-btn-label text-white">WATCH</span>
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/"
                className="btn position-relative border-0"
                type="button"
              >
                <span className="nav-btn-label text-white">ABOUT</span>
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink
                to="/"
                className="btn position-relative bg-white border-white"
                type="button"
              >
                <span className="nav-btn-label text-dark">SIGN UP</span>
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
