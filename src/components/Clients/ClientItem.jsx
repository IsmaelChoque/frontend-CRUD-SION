import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activeClient } from '../../reduxtoolkit/slices/clients';
import './Clients.css';

const ClientItem = ({ client, nro }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { nombre, apellidos, correo, direccion } = client;

  const handleClickViewClient = () => {
    dispatch(activeClient(client));
    navigate('client');
  };

  const handleClickEditClient = () => {
    dispatch(activeClient(client));
    navigate('register');
  };

  return (
    <tr>
      <td>{nro}</td>
      <td>
        {nombre} {apellidos}
      </td>
      <td>{correo}</td>
      <td>{direccion}</td>
      <td
        className=""
        style={{
          width: '180px',
        }}
      >
        <button
          onClick={() => handleClickViewClient()}
          className="btn btn-sm btn-success ms-3"
          title="Ver"
        >
          <i className="bi bi-eye-fill"></i>
        </button>
        <button
          onClick={() => handleClickEditClient()}
          className="btn btn-sm btn-primary ms-3"
          title="Editar"
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          type="button"
          onClick={() => dispatch(activeClient(client))}
          className="btn btn-sm btn-danger ms-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          title="Eliminar"
        >
          <i className="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  );
};

export default ClientItem;
