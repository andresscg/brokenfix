import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import workersReducer from "./workersReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
    services: servicesReducer,
    users: usersReducer,
})

export default rootReducer;