import React from "react";
import { InputGroup } from "../components/Filter/Categories/InputGroup";
import { Cards } from "../components/Cards/Cards";

export const Episode = ({ results }) => {
  let { name, created } = results;
  return (
    <div className="body-container">
      <h1>Episode Name : {name}</h1>
      <h2>Air Date : {created}</h2>
      <div className="content">
        <InputGroup results={results} />
        <Cards results={results} />
      </div>
    </div>
  );
};
