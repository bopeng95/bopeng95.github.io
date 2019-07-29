import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
	text: { 
		textDecoration: 'none', 
		display: 'inline-block',
		fontFamily: 'Comfortaa, cursive',
	},
	link: { 
		marginRight: '30px',
		color: 'gray',
		fontWeight: '300',
		fontSize: '14px',
	},
	name: {
		color: 'black',
		fontSize: '25px',
		margin: '30px 0 20px 0',
		fontWeight: 'bold',
	},
}

const Header = () => {
	const { text, link, name } = styles;
	return (
		<header>
			<NavLink to='/' style={{...text, ...name}}>bo peng</NavLink>
			<nav>
				<NavLink to='/projects' activeStyle={{color:'black'}} style={{...text, ...link}}>projects</NavLink>
				<NavLink to='/photos' activeStyle={{color:'black'}} style={{...text, ...link}}>photos</NavLink>
				<NavLink to='/contact' activeStyle={{color:'black'}} style={{...text, ...link}}>contact</NavLink>
			</nav>
		</header>
	)
}

export default Header;
