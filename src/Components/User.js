import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsers } from "../store/Action/user"; 
import Table from "./Tables" 

class User extends Component{

    componentDidMount(){ 
        this.props.getUsers(); 
    }
    render(){
         console.log(this.props.users);
        return(
            <div>
                <Table users = {this.props.users}/>
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
