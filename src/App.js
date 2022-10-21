import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import ScrollToTop from './_helpers/scrollToTop';
import RenderRoutes from './routes';
import './App.css';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <BrowserRouter>
        <ScrollToTop />
        <RenderRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
