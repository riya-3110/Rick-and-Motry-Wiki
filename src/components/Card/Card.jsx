import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ name, location, image, status }) => {
  const navigate = useNavigate();

  const baseClass =
    status === "Alive"
      ? "badge text-bg-success position-absolute rounded-pill fs-4  "
      : status === "Unknown"
      ? "badge text-bg-secondary position-absolute rounded-pill fs-4"
      : "badge text-bg-danger position-absolute rounded-pill fs-4";

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/card-details");
  };

  return (
    <div className="col">
      <div
        className="card"
        style={{ width: 300, cursor: "pointer" }}
        onClick={(e) => handleClick(e)}
      >
        <span className={baseClass}>{status}</span>
        <img
          src={image}
          className="card-img-top"
          alt="avatar"
          style={{ width: 300 }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Last Location</p>
          <p className="card-text">{location.name}</p>
        </div>
      </div>
    </div>
  );
};
