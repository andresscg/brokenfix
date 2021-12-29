import "../styles/Footer.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-contenedor d-flex align-items-center">
        <img className="logofooter" src="../assets/logo.png" />
        <div className="footer-menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse fs-5"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <form className="footer-input d-flex">
                  <input
                    className="form-control me-4 border-0 border-bottom"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <button
                  className="footer-search-button btn btn-outline-light text-light border-0 border-bottom ms-4"
                  type="submit"
                >
                  Ok
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="footer-iconos d-flex justify-content-around">
        <h6 className="fs-4 text-light">
          <i className="bi bi-instagram"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i className="bi bi-twitter"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i className="bi bi-facebook"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i className="bi bi-whatsapp"></i>
        </h6>
      </div>
    </>
  );
};

export default Footer;
