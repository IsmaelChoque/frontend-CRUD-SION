import React from 'react';
import ShowClient from '../components/Clients/ShowClient';

const ViewClientScreen = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="card bg-sion">
          <div className="card-body">
            <ShowClient />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClientScreen;
