import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section id="hero" className="bg-black vh-100">
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div>
            <h2 className="fw-bold">Blixie</h2>
            <h1 className="text-white">
              Watch unlimited <br /> Movies, Series, <br /> & More.
            </h1>
            <Link
              to="/"
              className="btn btn-lg btn-light border-0 mt-3 p-3 px-5 fw-semibold"
            >
              {" "}
              WATCH NOW{" "}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
