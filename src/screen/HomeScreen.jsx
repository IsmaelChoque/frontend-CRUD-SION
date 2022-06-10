import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeIcon from '../components/DarkModeIcon/DarkModeIcon';

const HomeScreen = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-end pt-3 pe-3">
        <DarkModeIcon />
      </div>
      <div className="home-container">
        <div className="home-logo-container">
          <div className="home-sion-container">
            <div className="home-si">
              <img
                src={require('../assets/images/logo-sion.png')}
                className="img-fluid"
                alt="Grupo SION"
              />
            </div>

            <Link to={'clients'} className="home-logo-o">
              <img
                src={require('../assets/images/logo-o.png')}
                className="img-fluid"
                alt="Grupo SION"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
