import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import home from './Components/Home';
import Aboutus from './Components/AboutUs';
import Resource from './Components/Gallary';
import contuctus from './Components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
		    <Router>
				<div className="container">
					<header>
						<nav>
				  		<ul>
				  			<li><Link to="/home">Home</Link></li>
							<li><Link to="/Aboutus">About Us</Link></li>
							<li><Link to="/Resource">Gallary</Link></li>
							<li><Link to="/contuctus">Contact Us</Link></li>
				  		</ul>
					  	</nav>
					</header>
					<Route path="/home" component={home} />
					<Route path="/aboutus" component={Aboutus} />
					<Route path="/resource" component={Resource} />
					<Route path="/contuctus" component={contuctus}/>
				</div>
		    </Router>
		    
		</div>
    );
  }
}

export default App;
