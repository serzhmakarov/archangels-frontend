import React from 'react';
import DesktopHeader from './header/desktop';
import Footer from './footer';
import MobileHeader from './header/mobile';
import Breadcrumbs from './breadcrumbs';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <DesktopHeader />
      <MobileHeader />
      <Breadcrumbs />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
