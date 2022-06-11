import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import {
  startAddNewClient,
  startUpdateClient,
} from '../../reduxtoolkit/slices/clients';
import UploadImage from './UploadImage';

const FormRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { clientActive, isLoading } = useSelector((state) => state.clients);

  const [errorInput, setErrorInput] = useState({ name: '', message: '' });

  const {
    values: formValues,
    handleInputChange,
    setValues,
  } = useForm({
    nombre: '',
    apellidos: '',
    correo: '',
    direccion: '',
    celular: '',
    telefono: '',
  });

  useEffect(() => {
    if (clientActive) {
      setValues({ ...formValues, ...clientActive });
    } else {
      setValues({ ...formValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientActive]);

  const hadleSubmitClient = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      if (clientActive) {
        dispatch(startUpdateClient(formValues, navigate));
      } else {
        dispatch(startAddNewClient(formValues, navigate));
      }
    }
  };

  const isFormValid = () => {
    if (formValues.nombre?.trim().length === 0) {
      setErrorInput({
        name: 'nombre',
        message: 'El nombre es obligatorio',
      });

      return false;
    } else if (formValues.apellidos?.trim().length === 0) {
      setErrorInput({
        name: 'apellidos',
        message: 'El apellido es obligatorio',
      });

      return false;
    } else if (!validator.isEmail(formValues.correo)) {
      setErrorInput({ name: 'correo', message: 'El correo no es válido' });
      return false;
    } else if (formValues.direccion?.trim().length === 0) {
      setErrorInput({
        name: 'direccion',
        message: 'La dirección es obligatorio',
      });

      return false;
    } else if (formValues.celular?.trim().length === 0) {
      setErrorInput({
        name: 'celular',
        message: 'El celular es obligatorio',
      });

      return false;
    }

    setErrorInput({ name: '', message: '' });

    return true;
  };

  return (
    <form onSubmit={(e) => hadleSubmitClient(e)} className="row px-0 px-md-3">
      <div className="mb-3 col-12">
        <UploadImage />
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre(s) <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control input-sion"
          id="nombre"
          name="nombre"
          value={formValues.nombre}
          onChange={handleInputChange}
          onFocus={() => setErrorInput({ name: '', message: '' })}
          placeholder=""
          required
        />
        {errorInput.name === 'nombre' && (
          <small className="text-danger">{errorInput.message}</small>
        )}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Apellido(s) <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control input-sion"
          id="apellidos"
          name="apellidos"
          value={formValues.apellidos}
          onChange={handleInputChange}
          onFocus={() => setErrorInput({ name: '', message: '' })}
          placeholder=""
          required
        />
        {errorInput.name === 'apellidos' && (
          <small className="text-danger">{errorInput.message}</small>
        )}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo <span className="text-danger">*</span>
        </label>
        <input
          type="email"
          className="form-control input-sion"
          id="correo"
          name="correo"
          value={formValues.correo}
          onChange={handleInputChange}
          onFocus={() => setErrorInput({ name: '', message: '' })}
          placeholder=""
          required
        />
        {errorInput.name === 'correo' && (
          <small className="text-danger">{errorInput.message}</small>
        )}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Dirección <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          className="form-control input-sion"
          id="direccion"
          name="direccion"
          value={formValues.direccion}
          onChange={handleInputChange}
          onFocus={() => setErrorInput({ name: '', message: '' })}
          placeholder=""
          required
        />
        {errorInput.name === 'direccion' && (
          <small className="text-danger">{errorInput.message}</small>
        )}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Celular <span className="text-danger">*</span>
        </label>
        <input
          type="number"
          className="form-control input-sion"
          id="celular"
          name="celular"
          value={formValues.celular}
          onChange={handleInputChange}
          onFocus={() => setErrorInput({ name: '', message: '' })}
          placeholder=""
          required
        />
        {errorInput.name === 'celular' && (
          <small className="text-danger">{errorInput.message}</small>
        )}
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Telefono
        </label>
        <input
          type="number"
          className="form-control input-sion"
          id="telefono"
          name="telefono"
          value={formValues.telefono ? formValues.telefono : ''}
          onChange={handleInputChange}
          placeholder=""
        />
      </div>
      <div className="col-12 d-flex justify-content-center my-4">
        {isLoading ? (
          <>
            <button type="button" className="btn btn-light me-3 px-5" disabled>
              Cancelar
            </button>
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Registrando cliente...
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => navigate('/clients', { replace: true })}
              className="btn btn-light me-3 px-3 px-md-5"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary ms-3 px-3 px-md-5">
              {clientActive ? 'Editar' : 'Registrar'} Cliente
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default FormRegister;
