<<<<<<< HEAD
const servicesReducer = (state = {}, action) => {
    return state
}
=======
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
>>>>>>> d8e9c485ca73e0f1b008b026bd999f155f75737a

export default servicesReducer;
