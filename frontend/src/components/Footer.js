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
            <div className="container">
              <div className="linksnav">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                    </div>
                    </div>
          </nav>
        </div>
      </div>
      <div className="footer-iconos d-flex justify-content-around">
        <h6 className="fs-4 text-light">
          <i class="bi bi-instagram"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i class="bi bi-twitter"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i class="bi bi-facebook"></i>
        </h6>
        <h6 className="fs-4 text-light">
          <i class="bi bi-whatsapp"></i>
        </h6>
      </div>
    </>
  );
};

export default Footer;
