import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-contenedor d-flex align-items-center">
        <img src="https://th.bing.com/th/id/R.471c98cfd98c131a4f57528b8a6551d0?rik=PDjrcLMKqLgOLA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-rhot-xS-PFA%2fUQ2PYKahIDI%2fAAAAAAAAAFI%2fkdFyYR02NCg%2fs1600%2flogo-nike_verde.png&ehk=nbsx7hSwnSBJQNc88ZvrYvRX4%2fhRPtIMC%2fA%2bG8ryVf0%3d&risl=&pid=ImgRaw&r=0" />
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
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
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
