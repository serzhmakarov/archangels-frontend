import React from 'react';
import DesktopHeader from './header/desktop';
import Footer from './footer';
import MobileHeader from './header/mobile';

const Layout = ({ children }) => {
  return (
		<div className="layout">
			<DesktopHeader />
			<MobileHeader />
			<div className="main">
				{children}
			</div>
			<Footer />
		</div>
	);
}

export default Layout;