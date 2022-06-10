import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.css';

const ClientItem = () => {
  return (
    <tr>
      <td>1</td>
      <td>Ismael choque</td>
      <td>Cs</td>
      <td>@editar eliminar</td>
      <td
        className=""
        style={{
          width: '180px',
        }}
      >
        <Link to={'client'} className="btn btn-sm btn-success ms-3" title="Ver">
          <i className="bi bi-eye-fill"></i>
        </Link>
        <button className="btn btn-sm btn-primary ms-3" title="Editar">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-sm btn-danger ms-3" title="Eliminar">
          <i className="bi bi-trash3-fill"></i>
        </button>
      </td>
    </tr>
  );
};

export default ClientItem;
