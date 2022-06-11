import {
  requestDelete,
  requestGet,
  requestPost,
  requestPut,
} from '../../../request/api';
import { activeClient, loadingClients, setClients } from './clientSlice';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const startAddNewClient = (clientData, navigate) => {
  return async (dispatch) => {
    dispatch(loadingClients());

    try {
      const response = await requestPost('/clients', clientData);

      if (response.status === 200) {
        dispatch(getClients());
        navigate('/clients', { replace: true });
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const startUpdateClient = (clientData, navigate) => {
  return async (dispatch) => {
    dispatch(loadingClients());
    const id = clientData.id;

    delete clientData.id;

    try {
      const response = await requestPut(`/clients/${id}99`, clientData);

      if (response.status === 200) {
        dispatch(getClients());

        navigate(-1);
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const getClients = () => {
  return async (dispatch) => {
    dispatch(loadingClients());
    try {
      const response = await requestGet('/clients');

      if (response.status === 200) {
        dispatch(setClients(response.data));
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const getClient = (id) => {
  return async (dispatch) => {
    // dispatch(loadingClients());
    try {
      const response = await requestGet(`/clients/${id}`);

      if (response.status === 200) {
        dispatch(activeClient(response.data[0]));
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};

export const startDeletedClient = (id) => {
  return async (dispatch) => {
    dispatch(loadingClients());

    try {
      const response = await requestDelete(`/clients/${id}`);

      if (response.status === 200) {
        dispatch(getClients());
        dispatch(activeClient(null));
        // navigate('/clients', { replace: true });
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
