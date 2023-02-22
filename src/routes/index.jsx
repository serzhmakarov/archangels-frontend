import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/globals/layout';
import routes from '../constants/routes';

export default function RenderRoutes() {
  return (
    <Layout>
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
    </Layout>
  );
}