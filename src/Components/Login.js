import React, {useState} from 'react'
import {connect} from "react-redux"
import { login } from "../store/Action/auth"; 
import { useDispatch } from "react-redux";

import { useHistory} from "react-router-dom";



const Login = (props) => {
    const dispatch = useDispatch();
    const [username, setUserName]  = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
 
    const submit = (e) => {
        
        e.preventDefault();
        if(!username || !password){
            return;
        }
        dispatch(login(username)); 

        history.push("/user");
        
    }

    

     
    return (
        <div className = "container mt-5">
        <form onSubmit = {submit}>
        <div class="form-group w-25 p-3">
          <label >Username</label>
          <input type="text" class="form-control" name = "email"  placeholder="Enter user name" onChange = {(e) => {setUserName(e.target.value)}} />
        </div>
        <div class="form-group w-25 p-3">
          <label>Password</label>
          <input type="password" class="form-control" name = "password"  placeholder="Password" onChange = {(e) => {setPassword(e.target.value)}}/>
        </div>
        
        <button type="submit" class="btn btn-primary m-5 p-2">Submit</button>
      </form>
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        auth :state.auth
    }
}


export default connect(mapStateToProps, {login} )(Login); 
