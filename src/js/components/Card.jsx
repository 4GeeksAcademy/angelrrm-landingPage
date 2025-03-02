import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-center">
        <button className="btn btn-primary">Find out More!</button>
      </div>
    </div>
  );
};

export default Card;
