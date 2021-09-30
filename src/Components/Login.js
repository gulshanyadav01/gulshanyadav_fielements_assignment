import React, {useState} from 'react'
import {connect} from "react-redux"
import { login } from "../store/Action/auth"; 
import { useDispatch } from "react-redux";
import styles from "./Login.module.css"; 
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
        <div className = "container mt-5" >
        <form onSubmit = {submit} className ={styles.header}>
            <div className="form-group w-50 p-3 " className = {styles.inputForm}>
             <label  style ={{marginTop:"10px", padding:"5px"}}>USERNAME </label>
                <input type="text" class="form-control" name = "email"  placeholder="Enter user name" onChange = {(e) => {setUserName(e.target.value)}} />
            </div>
            <div className="form-group w-50  p-3 " className = {styles.inputForm1}>
                <label style ={{marginTop:"10px", padding:"5px"}}>PASSWORD</label>
                <input type="password" class="form-control" name = "password"  placeholder="Password" onChange = {(e) => {setPassword(e.target.value)}} />
            </div>
        
            <button type="submit" class="btn btn-primary mx-4 my-3 px-4 py-2" clasName = {styles.button}>Submit</button>
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
