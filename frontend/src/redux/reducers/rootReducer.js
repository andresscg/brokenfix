import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    services: servicesReducer,
    users: usersReducer,
})

export default rootReducer;