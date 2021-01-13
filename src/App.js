import React from 'react';
import ProfilePic from '../src/profile.jpg';
import Resume from '../src/NithinRichardResume.pdf';

class App extends React.Component {
	


	render() {
		
		return (
			<>
				
				<head>
					
				</head>
				
				<body>
					<h1>hi, i'm nithin!</h1>

						<h3>
							<a href = {Resume} target = "_blank" >Resume</a>

								{/* <a href = "https://localhost:3000/NithinRichardResume.pdf" target = "_blank"> Resume</a> */}
						</h3>

						<img class = "profile " src = {ProfilePic} alt = "Profile Pic" />

					<p>
						Currently I'm finishing my <a href="https://ischool.umd.edu/academics/bachelor-of-science-in-information-science-college-park" target="_blank"> Information Science </a> degree at the University of Maryland, with a minor in <a href="http://www.mtech.umd.edu/educate/minor/" target="_blank"> Technology Entrepneurship </a>. 
						
					</p>

					<p>
						At Maryland I was in <a href ="http://www.hinmanceos.umd.edu/index.html" target = "_blank">Hinman CEOs</a>, a program where I gained extensive knowledge in evaluating tech ventures while also creating a product of my own with peers.
					</p>

					<p>
						Previously, I worked as a software engineer at <a href="https://terrapinworks.umd.edu/" target="_blank" id = "infosci"> Terrapin Works</a> working on various client's projects including a mobile ballistics identificaton application in collaboration with <a href = "https://www.nist.gov/" target = "_blank">NIST</a>.
					</p>

					<p>
						Before, I created a feasability report for <a href = "https://www.ariumae.com/" target = "_blank">Arium AE</a>, regarding the efficiency of an integrated architectural engineering firm.
					</p>
				</body>

			</>
		);
	}
}

export default App;
