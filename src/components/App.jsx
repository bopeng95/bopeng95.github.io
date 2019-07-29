import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Photos from './Photos.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const App = () => {
	return (
		<Router>
			<div className="container">
				<Header/>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/projects' component={Projects}/>
					<Route path='/photos' component={Photos}/>
					<Route path='/contact' component={Contact}/>
				</Switch>
			</div>
		</Router>
	)
}

export default hot(App);
