import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import workersReducer from "./workersReducer"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
    services: servicesReducer,
<<<<<<< HEAD
    workers: workersReducer,
=======
>>>>>>> aa8016b6133f75d619fc9000b9208c6249f49682
    users: usersReducer,
})

export default rootReducer;