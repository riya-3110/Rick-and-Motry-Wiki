import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let pageChange = (data) => {
    setPageNumber(data.selected + 1);
  };

  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={pageChange}
      pageRangeDisplayed={5}
      pageCount={info.pages}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
};
