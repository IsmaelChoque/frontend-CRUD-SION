import React from 'react';
import './Clients.css';

const ShowClient = () => {
  return (
    <div className="row pt-4 px-md-5">
      <div className="col-12 d-flex align-items-center justify-content-center mb-4">
        <div className="initial-name">
          <h1>I</h1>
        </div>
      </div>
      <div className="col-12  mt-3  show-client-data">
        <div>
          <i className="bi bi-person-fill h2 text-primary"></i>
        </div>
        <span className="ms-4">ismael choque</span>
      </div>
      <div className="col-12  mt-3  show-client-data">
        <div>
          <i className="bi bi-envelope-fill h2 text-warning"></i>
        </div>
        <span className="ms-4">isma@email.com</span>
      </div>
      <div className="col-12  mt-3  show-client-data">
        <div>
          <i className="bi bi-geo-fill h2 text-danger"></i>
        </div>
        <span className="ms-4">Av hola lskdjflksd</span>
      </div>
      <div className="col-12  mt-3  d-flex justify-content-between show-client-data">
        <div className=" d-flex ">
          <div>
            <i className="bi bi-phone-fill h2"></i>
          </div>
          <span className="ms-4">3452423423</span>
        </div>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, le escribimos de Gruo SION"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp h2 text-success"></i>
          </a>
        </div>
      </div>
      <div className="col-12  mt-3  show-client-data">
        <div>
          <i className="bi bi-telephone-fill h2 text-secondary"></i>
        </div>
        <span className="ms-4">3452423423</span>
      </div>
      <div className="col-12 d-flex align-items-center justify-content-center mt-5 mb-3">
        <button tyope="button" className="btn btn-outline-primary">
          <i className="bi bi-pencil-square me-3"></i> Editar datos del cliente
        </button>
      </div>
    </div>
  );
};

export default ShowClient;
