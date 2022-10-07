import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

import RenderRoutes from './routes';
import './App.css';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
