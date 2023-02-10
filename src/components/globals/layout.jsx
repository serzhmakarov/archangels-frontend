import React from 'react';
import Header from './header/main';
import Footer from './footer';
import Menu from './header/menu';

const Layout = ({ children }) => {
  return (
		<div className="layout">
			<Header />
			<Menu />
			<div className="main">
				{children}
			</div>
			<Footer />
		</div>
	);
}

export default Layout;