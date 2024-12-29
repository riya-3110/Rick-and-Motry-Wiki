import React from "react";
import { Card } from "../Card/Card";

export const Cards = ({ results }) => {
  if (!results || results.length === 0) {
    return <h1>No character Found</h1>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {results.map((data) => {
        const { id, image, name, status, location } = data;
        return (
          <Card
            key={id}
            name={name}
            location={location}
            image={image}
            status={status}
          />
        );
      })}
    </div>
  );
};
