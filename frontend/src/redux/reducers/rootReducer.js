import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import workersReducer from "./workersReducer"

const rootReducer = combineReducers({
    services: servicesReducer,
    workers: workersReducer
})

export default rootReducer;