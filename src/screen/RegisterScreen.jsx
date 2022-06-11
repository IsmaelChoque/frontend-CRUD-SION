import FormRegister from '../components/Clients/FormRegister';

const RegisterScreen = () => {
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
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
