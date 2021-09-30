import { combineReducers } from "redux"; 

import User from "./user"; 
import Auth from "./auth"

export default combineReducers({
    user: User,
    auth: Auth
}) 