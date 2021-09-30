import React from 'react'

import { connect } from "react-redux"
import { useDispatch } from "react-redux";
import { logout } from "../store/Action/auth"
import { useHistory} from "react-router-dom";

const Navbar = ({auth}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const clickHandler = () => {
        dispatch(logout());
        history.push("/login");

    }

    

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light ml-auto bg-light  ">
        {auth.userName && <a href="/user" className="navbar-brand">{auth.userName}</a>}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
          </ul>
          
            {auth.isLogin && <button className="btn btn-outline-success my-2 my-sm-0  mx-5" onClick = {clickHandler} type="submit">Logout</button>}
          
        </div>
      </nav>
    )
}


const mapStateToProps = (state) => { 
    return {
        auth: state.auth
        
    }
}


export default connect(mapStateToProps, {logout} )(Navbar);
