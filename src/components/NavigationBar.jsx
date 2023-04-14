import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar py-4 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center justify-content-between order-lg-0"
        >
          <img src={"images/blixie-logo-white.png"} alt="Site Icon" />
          <span id="brand-name" className="text-white fw-bold fs-4 mx-2">
            Blixie
          </span>
        </NavLink>

        <div className="nav-btns order-lg-2">
          <NavLink
            to="/login"
            className="btn btn-login bg-dark position-relative mx-3 px-4"
            type="button"
          >
            <span className="nav-btn-label"> LOGIN</span>
          </NavLink>
          <NavLink
            to="/signup"
            className="btn btn-signup bg-light position-relative"
            type="button"
          >
            <span className="nav-btn-label"> SIGN UP</span>
          </NavLink>
        </div>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse className="order-lg-1">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                PRICING
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                WATCH
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-white">
                ABOUT
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
