import React from "react";
import "./style-card.css";

const Card = ({ name, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/*<p className="card-description">{description}</p>*/}
      </div>
    </div>
  );
};

export default Card;
