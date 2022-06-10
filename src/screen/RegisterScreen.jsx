import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="card bg-sion">
          <div className="card-body">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="fw-bolder">Formulario de registro</h2>
              </div>
            </div>
            <form action="" className="row px-3">
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nombre(s) <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control input-sion"
                  id="exampleFormControlInput1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Apellido(s) <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control input-sion"
                  id="exampleFormControlInput1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Correo <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control input-sion"
                  id="exampleFormControlInput1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Dirección <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control input-sion"
                  id="exampleFormControlInput1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Celular <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control input-sion"
                  id="exampleFormControlInput1"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-3 col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control input-sion"
                  id="Teléfono"
                  placeholder=""
                />
              </div>
              <div className="col-12 d-flex justify-content-center my-4">
                <button
                  type="button"
                  onClick={() => navigate('/clients', { replace: true })}
                  className="btn btn-light me-3 px-5"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary ms-3 px-5">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
