import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/images/header_logo.svg';

const Logo = () => {
	return (
		<NavLink className="logo" to="/">
			<ReactLogo />
		</NavLink>
	);
};

export default Logo;