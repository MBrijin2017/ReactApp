import React, { Component } from 'react';

class Aboutus extends Component {
	render() {
		return(
			<div className="aboutus-content section-row">
				<div className="container">
					<h1>About us page</h1>
					<p>yea totally my mistake. when using create-react-app, it creates a public folder, thats where the html is, I had created a html in the src folder which was not being loaded... Thanks for all the help. When changing the right index.html page in the public folder everything worked</p>
				</div>
			</div>

		);
	}
}

export default Aboutus;