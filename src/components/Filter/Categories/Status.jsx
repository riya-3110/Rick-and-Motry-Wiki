import React from "react";

export const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  const handleStatus = (s) => {
    setStatus(s);
    setPageNumber(1);
  };

  return (
    <li className="dropdown-item ">
      {status.map((s) => (
        <button
          type="button"
          className="btn btn-outline-primary"
          key={s}
          onClick={() => handleStatus(s)}
        >
          {s}
        </button>
      ))}
    </li>
  );
};
