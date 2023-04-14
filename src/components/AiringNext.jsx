import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AiringNext() {
  return (
    <>
      <section id="airing-next" className="p-5">
        <Container>
          <div className="title text-center py-3">
            <h3 className="fw-bold title">AIRING NEXT</h3>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="card col-md-6 col-lg-4 border-0 my-3 mx-3">
              <div>
                <img
                  src={"images/banner-1.png"}
                  alt="banner-1"
                  className="card-img-top img-fluid"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Show Title</h4>
                <p className="card-text mt-1 text-muted">
                  Short description or topic about the episode/move
                </p>
                <p className="card-text">
                  <small>MONDAY | APRIL 3, 2023</small>
                </p>
                <Link to="/" className="btn">
                  LEARN MORE
                </Link>
              </div>
            </div>

            <div className="card col-md-6 col-lg-4 border-0 my-3 mx-3">
              <img
                src={"images/banner-2.png"}
                alt="banner-2"
                className="card-img-top"
              />
              <div className="card-body">
                <h4 className="card-title">Show Title</h4>
                <p className="card-text mt-1 text-muted">
                  Short description or topic about the episode/move
                </p>
                <p className="card-text">
                  <small>MONDAY | APRIL 3, 2023</small>
                </p>
                <Link to="/" className="btn">
                  LEARN MORE
                </Link>
              </div>
            </div>

            <div className="card col-md-6 col-lg-4 border-0 my-3 mx-3">
              <img
                src={"images/banner-3.png"}
                alt="banner-3"
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <h4 className="card-title">Show Title</h4>
                <p className="card-text mt-1 text-muted">
                  Short description or topic about the episode/move
                </p>
                <p className="card-text">
                  <small>MONDAY | APRIL 3, 2023</small>
                </p>
                <Link to="/" className="btn">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AiringNext;
