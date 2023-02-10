import React from 'react';
import DesktopHeader from './header/desktopHeader';
import Footer from './footer';
import MobileHeader from './header/mobileHeader';

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