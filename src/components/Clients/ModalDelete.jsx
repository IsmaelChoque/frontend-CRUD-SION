import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeClient,
  startDeletedClient,
} from '../../reduxtoolkit/slices/clients';

const ModalDelete = () => {
  const dispatch = useDispatch();
  const { clientActive } = useSelector((state) => state.clients);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Eliminar cliente
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {clientActive && (
              <div className="row">
                <div className="col-12 text-center">
                  <h2>
                    {clientActive.nombre} {clientActive.apellidos}
                  </h2>

                  <p className="text-danger">
                    ¿Está seguro de eliminar a este cliente?
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => dispatch(activeClient(null))}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              onClick={() => {
                dispatch(startDeletedClient(clientActive.id));
              }}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Eliminar cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
