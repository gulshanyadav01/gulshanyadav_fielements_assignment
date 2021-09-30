import React, {useState} from 'react'
import {connect } from "react-redux"
import { Table } from "react-bootstrap";
import { Redirect } from 'react-router';

const login  = true; 

const Tables = ({users,  auth}) => {
    
    const [data, setData] = useState([users]); 
    const [order , setOrder ] = useState("ASC"); 

    const sorting = (col) => {
        console.log("this is sorting")
        if(order === 'ASC'){
            const sorted = [...users].sort((a,b) => 
                a[col] > b[col] ? 1 : -1
            ); 
            setData([sorted]);
            setOrder("DSC"); 
        }

        if(order === 'DSC'){
            const sorted = [...users].sort((a,b) => 
                a[col] < b[col] ? 1 : -1
            ); 
            setData([sorted])
            setOrder("ASC"); 
        }
    }
    return (
        <div className = "container mt-5">
            {auth.isLogin  ? (<div> <Table striped bordered hover>
                
                    <thead>
                    <th onClick = {() => sorting("id")}>Id</th>
                    <th onClick = {() => sorting("name")}>Name</th>
                    <th onClick = {() => sorting("username")}>UserName</th>
                    <th onClick = {() => sorting("email")}>Email</th>
                    </thead>
                
                    <tbody>
                    {data[0].map((d) => {
                        return(
                            <tr key = {d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                        </tr>
                        )
                        
                    })}
                    </tbody>
            </Table> </div>)
            :(<div><Redirect to = "/login"/></div>)

        }
        </div>
    )
}
const mapStateToProps = (state) => { 
    return {
        users : state.user.User,
        auth: state.auth
        
    }
}


export default connect(mapStateToProps)(Tables);

