import axios from "axios";

const servicesAtions = {
  buscarTodasProfesiones: () => {
    return async (dispatch, getState) => {
      let res = await axios.get("//http:localhost:4000/api/");
      let informacion = res.data.respuesta;
      dispatch({ type: "BUSCAR_TODAS_PROFESIONES", payload: informacion });
    };
  },

  buscarProfesion: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.get("//http:localhost:4000/api/" + id);
      let informacion = res.data.respuesta;
      dispatch({ type: "BUSCAR_PROFESION", payload: informacion });
    };
  },
};

export default servicesAtions;
