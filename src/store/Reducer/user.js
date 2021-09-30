import { GET_USERS } from '../Action/Types';

const initialState = {

    User:[]   
}

const  Users = (state = initialState, action) =>  {

    switch(action.type){
        case GET_USERS:
            console.log("this is reducer file")
            return{
                ...state,
                User: action.payload

            }
        default:
            return state; 
    }
    
}

export default Users;