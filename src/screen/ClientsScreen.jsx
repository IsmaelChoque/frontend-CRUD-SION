import React from 'react';
import { Link } from 'react-router-dom';
import ClientItem from '../components/Clients/ClientItem';

const ClientsScreen = () => {
  return (
    <div className="container ">
      <div className="card mt-5 bg-sion ">
        <div className="card-body p-md-5 ">
          <div className="d-flex align-items-end justify-content-between mb-3">
            <h2 className="card-title">
              <b>Nuestros clientes</b>
            </h2>
            <div>
              <Link to="register" className="btn btn-primary " title="Ver">
                <i className="bi bi-plus-circle-fill"></i> Registrar nuevo
                cliente
              </Link>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table table-bordered text-sion">
              <thead>
                <tr>
                  <th scope="col">Nro.</th>
                  <th scope="col">Nombres</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <ClientItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsScreen;
