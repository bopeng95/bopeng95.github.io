import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
	text: { 
		textDecoration: 'none', 
		display: 'inline-block',
	},
	link: { 
		marginRight: '30px',
		color: 'gray',
		fontWeight: '300',
		fontSize: '15px',
		fontFamily: 'Open Sans, sans-serif',
	},
	name: {
		color: 'black',
		fontSize: '25px',
		margin: '30px 0 20px 0',
		fontWeight: 'bold',
		fontFamily: 'Comfortaa, cursive',
	},
	active: { color: 'black' }
}

const Header = () => {
	const { text, link, name, active } = styles;
	return (
		<header>
			<NavLink to='/' style={{...text, ...name}}>bo peng</NavLink>
			<nav>
				<NavLink to='/projects' activeStyle={active} style={{...text, ...link}}>projects</NavLink>
				<NavLink to='/photos' activeStyle={active} style={{...text, ...link}}>photos</NavLink>
				<NavLink to='/contact' activeStyle={active} style={{...text, ...link}}>contact</NavLink>
			</nav>
		</header>
	)
}

export default Header;
