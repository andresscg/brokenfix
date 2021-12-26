import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";

const rootReducer = combineReducers({
    services: servicesReducer,
})

export default rootReducer;