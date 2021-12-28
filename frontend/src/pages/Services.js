import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import servicesAction from "../redux/actions/servicesAction";
import Loader from "../components/Loader";
import "../styles/Services.css";

const Services = (props) => {
  // FALTA EL FECHEO

  useEffect(() => {
    props.BUSCAR_TODAS_PROFESIONES();
    // props.BUSCAR_PROFESION(id);
  }, []);

  const profesiones = this.props;
  return (
    <>
      <div className="city-container">
        <div className="subtitle-container">
          <h2>FIND YOUR HOME SERVICE:</h2>
        </div>
        <div className="city-container-card">
          {/* {profesiones.length === 0 ? (
            <Loader />
          ) : profesiones.length > 0 ? ( */}
          {profesiones.map((element) => {
            return (
              <div className="container-card" key={element._id}>
                <div key={element._id} className="city-img-container">
                  <Link to="/Service">
                    <img src={element.img} alt={element.name} />
                  </Link>
                  <div className="name-container">
                    <p className="name-city">{element.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    profesiones: state.services.listaProfesiones,
  };
};

const mapDispatchToProps = {
  buscarProfesion: servicesAction.buscarTodasProfesiones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
