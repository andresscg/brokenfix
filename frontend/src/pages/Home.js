import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-main ">
        <div className="d-flex justify-content-center pt-5 pb-3">
          <h1>Home Service</h1>
        </div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide d-flex justify-content-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://muchosnegociosrentables.com/wp-content/uploads/2017/06/C%C3%B3mo-iniciar-un-servicio-de-fontanero-o-plomero.jpg"
                className="d-block w-100 home-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-success">
                <h5 className="fs-3">First slide label</h5>
                <p className="fs-4">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://th.bing.com/th/id/R.bd38bced012fe8d79391eb7f80f8fd0a?rik=zeJIJ3XhPDZ6uw&riu=http%3a%2f%2fplomero-gasista-capitalfederal.com%2fwp-content%2fuploads%2f2017%2f11%2fgasista-1024x754.jpg&ehk=C1wolpompf1gBYk7p9W0KHvCS725BanB87RhZut%2fbzo%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100 home-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-success">
                <h5 className="fs-3">Second slide label</h5>
                <p className="fs-4">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.f251b694d3b4bfe298386ade086951d3?rik=2I28YHE3zMj4NA&riu=http%3a%2f%2fmechatronics-d.com%2fwp-content%2fuploads%2f2013%2f11%2f3064esparza.jpg&ehk=nkRvI%2fDg1iIw6jmKTC9np96l%2bNGy29NynRxgWvz0KBk%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100 home-img"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-success">
                <h5 className="fs-3">Third slide label</h5>
                <p className="fs-4">
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
