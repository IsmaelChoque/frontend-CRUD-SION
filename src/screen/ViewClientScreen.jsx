import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ShowClient from '../components/Clients/ShowClient';
import { getClient } from '../reduxtoolkit/slices/clients';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewClientScreen = () => {
  const dispatch = useDispatch();
  const { clientActive } = useSelector((state) => state.clients);

  useEffect(() => {
    if (clientActive) {
      dispatch(getClient(clientActive.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="card bg-sion">
          <div className="card-body">
            {clientActive ? (
              <ShowClient client={clientActive} />
            ) : (
              <Navigate to="/clients" />
            )}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ViewClientScreen;
