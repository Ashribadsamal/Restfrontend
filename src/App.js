import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './component/Navs'
import Home from './component/Home';
import AddTo from './component/AddTo';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import View from './component/View'


function App() {
  return (
    <Router>
    <div className="App ">
       <Nav/>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path= "/add" component={AddTo}/>
          <Route exact path= "/adduser" component={AddUser}/>
          <Route exact path= "/:id" component={EditUser}/>
          <Route exact path= "/view/:id" component={View}/>

        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
