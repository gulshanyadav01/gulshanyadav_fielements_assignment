import React from 'react'
import {Provider } from "react-redux";
import { store } from "./store/store"
import User from "./Components/User";
import Login from './Components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux"
import Navbar from './Components/Navbar';


const App = ({auth}) => {
  console.log(auth);
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <Navbar/>
          <Switch>
              
              <Route path  = "/login" exact component = {Login}/>
              <Route path = "/user" exact component = {User}/>
          </Switch>
      </BrowserRouter>
    </Provider>

  )
}


export default App; 