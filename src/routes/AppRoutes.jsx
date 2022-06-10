import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screen/HomeScreen';
import ClientsRoutes from './ClientsRoutes';

const AppRoutes = () => {
  const { darkMode } = useSelector((state) => state.dark);
  return (
    <BrowserRouter>
      <div
        className={darkMode ? 'dark-mode' : 'light-mode'}
        style={{ minHeight: '100vh' }}
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="clients/*" element={<ClientsRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
