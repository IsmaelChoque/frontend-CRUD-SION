import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeIcon from '../DarkModeIcon/DarkModeIcon';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light mb-4">
      <div className="container-fluid">
        <div onClick={() => navigate('/', { replace: true })}>
          <img src={require('../../assets/images/icono-sion.png')} alt="" />
        </div>
        <div className="d-flex">
          <DarkModeIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
