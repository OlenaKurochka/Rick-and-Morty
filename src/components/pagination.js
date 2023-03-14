import React from "react";
import ReactPaginate from "react-paginate";
import "../style/pagination.css"

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        pageCount={info?.pages}
        onPageChange={pageChange}
      />
    </>
  );
};

export default Pagination;