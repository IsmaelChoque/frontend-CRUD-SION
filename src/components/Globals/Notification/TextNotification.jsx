import React from 'react';

const TextNotification = ({ title, text }) => {
  return (
    <div className="d-flex ">
      <div className="pe-2 pt-1">
        {/* <i className="bi bi-check-circle h5"></i> */}
      </div>
      <div className="">
        <small>
          <b>{title}</b>
        </small>{' '}
        <br />
        <small> {text} </small>
        {/* <audio autoPlay>
                    <source src="https://rrii.unifranz.edu.bo/sound/alert.mp3" type="audio/mpeg" />
                </audio> */}
      </div>
    </div>
  );
};

export default TextNotification;
