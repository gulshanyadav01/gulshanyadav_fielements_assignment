import axios from "axios";
import { GET_USERS } from "./Types"

export const getUsers =() => async dispatch => {
    // console.log("hello this is action file")
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(res.data);
    dispatch({

        type:GET_USERS,
        payload:res.data
    })
}
