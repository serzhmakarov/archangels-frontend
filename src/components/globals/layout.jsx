import React from 'react';
import Header from './header/main';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
		<div className="layout">
			<Header />
			<div className="main">
				{children}
			</div>
			<Footer />
		</div>
	);
}

export default Layout;