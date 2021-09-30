import { LOGIN } from "./Types"
import {LOGOUT} from "./Types"


export const login =  (username)  =>  {
     
    // console.log("this is login action")

    return({
        type:LOGIN,
        payload:username
    })
    
}

export const logout = () => {
    return({
        type: LOGOUT
    })
}