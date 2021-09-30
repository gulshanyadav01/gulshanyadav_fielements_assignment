import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsers } from "../store/Action/user"; 
import Table from "./Tables" 

class User extends Component{

    componentDidMount(){ 
        this.props.getUsers(); 
    }
    render(){
         
        return(
            <div>
                <Table />
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        users : state.user.User,
        auth: state.auth
        
    }
}


export default connect(mapStateToProps, {getUsers} )(User);
