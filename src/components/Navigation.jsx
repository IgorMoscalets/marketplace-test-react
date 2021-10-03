import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
     <nav className="navbar navbar-expand-lg">
	  <Link className="navbar-brand" to="/"><img src="navbar.png" width="50" /></Link>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>

	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <Link className="nav-link" to="/">Dashboard</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/marketplace">Marketplace</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/about">About</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/account">Account</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/tester">Tester</Link>
	      </li>
	      <li className="nav-item login-btn">
	        <Link className="nav-link" to="/login"><img src="login.png" width="22px" />Login</Link>
	      </li>
	    </ul>
	  </div>
	</nav>
    </div>
  );
}

export default withRouter(Navigation);