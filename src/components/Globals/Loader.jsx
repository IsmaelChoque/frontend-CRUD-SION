import React from 'react';

const Loader = () => {
  return (
    <div className="d-flex flex-column align-items-center ">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="mt-2 text-secondary">Cargando...</span>
    </div>
  );
};

export default Loader;
