import React from 'react';
import { BrowserRouter as Router, Route, NavLink ,Link} from "react-router-dom";


const Navs=()=> {
    return (
      
        <div>
        {/*<Router>*/}
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <NavLink className="navbar-brand" exact to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link " exact to="/">Home 
                </NavLink>
                <NavLink className="nav-item nav-link" exact to = "/add">AddtoTable
                </NavLink>
               
               
              </div>
            </div>
            <Link className = "btn btn-success" to = "/adduser">Add</Link>
           </nav>
         {/*</Router>*/}
        </div>
    )
}

export default Navs
