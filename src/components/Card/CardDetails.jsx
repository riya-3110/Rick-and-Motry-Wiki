import React from "react";
import { Link } from "react-router-dom";

export const CardDetails = () => {
  return (
    <div>
      <h1>name</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <div
            className="card-title fs-4"
            style={{
              backgroundColor: "red",
              textAlign: "center",
              color: "white",
            }}
          >
            status
          </div>
          <p className="card-text">
            <b>Gender : </b>female
          </p>
          <p className="card-text">
            <b>Location : </b>location
          </p>
          <p className="card-text">
            <b>Origin : </b>origin
          </p>
          <p className="card-text">
            <b>Species : </b>species
          </p>
          <Link to="/location" className="btn btn-primary">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
