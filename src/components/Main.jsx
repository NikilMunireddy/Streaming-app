import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LoginPage from './LoginPage'
import Choose from './Choose'
import Play from './Play';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match

// when the pathname is exactly the string "/"

//Home will be LoginPage.js
//Roster will be Choose.js
const Main = () => (
  
    <Switch>
      <Route exact path='/' component={LoginPage}/>
      <Route path='/choose' component={Choose}/>
      <Route path="/play" component={Play}/>
    </Switch>
)

export default Main
