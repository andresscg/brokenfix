const inicialState = { listaProfesiones: [] };

const servicesReducer = (state = inicialState, action) => {
  switch (action.type) {
    case "BUSCAR_TODAS_PROFESIONES":
      return {
        ...state,
        listaProfesiones: action.payload,
      };
    case "BUSCAR_PROFESION":
      return {
        ...state,
        profesion: action.payload,
      };
    default:
      return state;
  }
};

export default servicesReducer;
