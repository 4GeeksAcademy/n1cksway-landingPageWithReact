import React from "react";

//include images into your bundle

import Filling from "./filling";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<div>
		<nav className="navbar navbar-dark bg-dark p-0">
  			<div className="container-fluid col-11 ps-5 pe-5">
    			<span className="navbar-brand mb-0 h1">Start Bootstrap</span>
				<div className="d-flex flex-end">
				<ul className="navbar-nav p-2">
       				 <li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
      				  </li>
				</ul>
					<ul className="navbar-nav p-2">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">About</a>
						</li>
					</ul>
					<ul className="navbar-nav p-2">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Services</a>
						</li>
					</ul>
					<ul className="navbar-nav p-2">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Contacts</a>
						</li>
					</ul>	  
				</div>
 			 </div>
		</nav>
		<Filling/>
		<Footer/>
		</div>
	);
};

export default Home;
