import React from "react";
import { InputGroup } from "../components/Filter/Categories/InputGroup";
import { Cards } from "../components/Cards/Cards";

export const Location = ({ results }) => {
  return (
    <div className="body-container">
      <h1>
        Location : <span style={{ color: "blue" }}>name</span>
      </h1>
      <h3>Dimension : dimension</h3>
      <h3>Type : type</h3>
      <div className="content">
        <InputGroup results={results} />
        <Cards results={results} />
      </div>
    </div>
  );
};
