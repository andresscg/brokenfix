import { combineReducers } from "redux";
// import servicesReducer from "./servicesReducer";
import usersReducer from "./usersReducer";
import adminsReducer from "./adminsReducer";

const rootReducer = combineReducers({
    // services: servicesReducer,
    users: usersReducer,
    admin: adminsReducer
})

export default rootReducer;