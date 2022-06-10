import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ClientsScreen from '../screen/ClientsScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ViewClientScreen from '../screen/ViewClientScreen';

const ClientsRoutes = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<ClientsScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="client" element={<ViewClientScreen />} />
        </Routes>
      </div>
      {/* <Footer courses={true} /> */}
    </div>
  );
};

export default ClientsRoutes;
