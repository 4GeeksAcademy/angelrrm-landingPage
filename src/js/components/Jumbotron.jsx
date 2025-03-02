import React from 'react';

const Jumbotron = () => {
  return (
    <div className="container my-4">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-md-12 fs-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, voluptates.
          </p>
          <button className="btn btn-primary btn-lg">Call to Action!</button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;