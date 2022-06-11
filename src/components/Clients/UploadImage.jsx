import React, { useState } from 'react';
import './Clients.css';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);

  const handleSelectImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setImageData(e.target.files[0]);
  };

  const handleClickSendImage = (second) => {
    if (!imageData) {
      alert('No hay imagen seleccionada');
      return;
    }

    const formdata = new FormData();
    formdata.append('image', imageData);

    fetch('http://localhost:8000/api/clients/images/upload', {
      method: 'POST',
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById('fileinput').value = null;

    setImageData(null);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="sion-client-image">
        <img
          src={image ? image : require('../../assets/images/user-default.jpg')}
          alt=""
        />
      </div>
      <div className="">
        <div className="btn-addcontainer mb-3">
          <label className=" mt-1" htmlFor="fileinput">
            <i className="bi bi-folder-plus text-white h5"></i>
          </label>
          <input
            id="fileinput"
            type="file"
            onChange={handleSelectImage}
            className="form-control sion-input-file"
          />
        </div>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClickSendImage()}
        >
          Cargar imagen al servidor
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
