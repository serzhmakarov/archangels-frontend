import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';

export default function RenderRoutes() {
  return (
    <Routes>
      {routes.map(({ exact = false, path, element: Element }) => (
        <Route
          exact={exact}
          key={path} 
          path={path} 
          element={<Element />} 
        />
      ))}
    </Routes>
  );
}