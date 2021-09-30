import React, {useState} from 'react'
import {connect } from "react-redux"
import { Table } from "react-bootstrap";
import { Redirect } from 'react-router';
import Pagination from './Pagination';
const Tables = ({users,  auth}) => {

    
    //pagination logic 

    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(5); 
    
    // get current user 
    const indexOfLastUser = currentPage * userPerPage; 
    const indexOfFirstUser = indexOfLastUser - userPerPage; 
    const currentUser  = users.slice(indexOfFirstUser, indexOfLastUser); 

    const [data, setData] = useState(currentUser);
    
    const [order , setOrder ] = useState("ASC"); 
    const sorting = (col) => {
        
        if(order === 'ASC'){
            const sorted = [...data].sort((a,b) => 
                a[col] > b[col] ? 1 : -1
            ); 
            setData(sorted);
            setOrder("DSC"); 
        }

        if(order === 'DSC'){
            const sorted = [...data].sort((a,b) => 
                a[col] < b[col] ? 1 : -1
            ); 
            setData(sorted)
            setOrder("ASC"); 
        }
    }

    // change page number 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

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
                    {data.map((d) => {
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
        <div>
            <Pagination userPerPage = {userPerPage} totalUser = {users.length} paginate = {paginate} />
        </div>
        </div>
    )
}
const mapStateToProps = (state) => { 
    return {
        
        auth: state.auth
        
    }
}


export default connect(mapStateToProps)(Tables);

