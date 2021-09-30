import { LOGIN } from '../Action/Types'
import { LOGOUT } from '../Action/Types'

const initialState = {

    isLogin : true,
    userName: ''

}

const Auth = (state = initialState, action ) => {
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isLogin: true,
                userName: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                isLogin : false,
                userName: ""
            }
        default:
            return state;
    }

}

export default Auth;