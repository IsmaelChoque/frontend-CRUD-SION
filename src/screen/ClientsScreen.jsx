import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ClientItem from '../components/Clients/ClientItem';
import ModalDelete from '../components/Clients/ModalDelete';
import Loader from '../components/Globals/Loader';
import { activeClient, getClients } from '../reduxtoolkit/slices/clients';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientsScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clients, isLoading } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className="container ">
      <div className="card mt-5 bg-sion ">
        <div className="card-body p-md-5 ">
          <div className="d-flex flex-column flex-md-row align-items-center align-md-items-end justify-content-between mb-3">
            <h2 className="card-title">
              <b>Nuestros clientes</b>
            </h2>
            <div className="">
              <button
                onClick={() => {
                  dispatch(activeClient(null));
                  navigate('register');
                }}
                className="btn btn-primary "
                title="Ver"
              >
                <i className="bi bi-plus-circle-fill me-2"></i> Registrar nuevo
                cliente
              </button>
            </div>
          </div>

          {clients.length > 0 ? (
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
                  {clients.map((client, index) => (
                    <ClientItem key={index} client={client} nro={index + 1} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : isLoading ? (
            <div className="mt-5 pt-5">
              <Loader />
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center ">
              <div className="text-center" style={{ maxWidth: '250px' }}>
                <img
                  src={require('../assets/images/no-clients.png')}
                  alt=""
                  style={{ width: '100%' }}
                />
                <p className="text-secondary">
                  No hay ningún cliente registrado
                </p>
                <div className="mt-3">
                  <button
                    onClick={() => {
                      dispatch(activeClient(null));
                      navigate('register');
                    }}
                    className="btn btn-outline-primary "
                    title="Ver"
                  >
                    <i className="bi bi-plus-circle me-2"></i> Registrar un
                    cliente
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>

      <ModalDelete />
    </div>
  );
};

export default ClientsScreen;
