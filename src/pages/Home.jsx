import React from "react";
import { Search } from "../components/Search/Search";
import { Filter } from "../components/Filter/Filter";
import { Cards } from "../components/Cards/Cards";
import { Pagination } from "../components/Pagination/Pagination";

export const Home = ({
  results,
  setSearch,
  setPageNumber,
  pageNumber,
  status,
  setStatus,
  setGender,
  setSpecies,
  fetchData,
}) => {
  return (
    <>
      <h1>Characters</h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="content">
        <Filter
          pageNumber={pageNumber}
          status={status}
          setStatus={setStatus}
          setGender={setGender}
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
        <Cards results={results} />
      </div>
      {fetchData && fetchData.info && (
        <Pagination
          info={fetchData.info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
};
