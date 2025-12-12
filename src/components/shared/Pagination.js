import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageView = 5;
  let startPage = Math.max(currentPage - Math.floor(maxPageView / 2), 1);
  let endPage = startPage + maxPageView - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxPageView + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-20 mb-10 text-black flex justify-center space-x-2">
      {/* First Page */}
      {currentPage > 1 && (
        <button
          className="px-4 py-2 rounded bg-gray-200"
          onClick={() => onPageChange(1)}
        >
          First
        </button>
      )}

      {/* Page Numbers */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`px-4 py-2 rounded ${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      {/* Last Page */}
      {currentPage < totalPages && (
        <button
          className="px-4 py-2 rounded bg-gray-200"
          onClick={() => onPageChange(totalPages)}
        >
          Last
        </button>
      )}
    </div>
  );
};

// ✅ Prop validation using PropTypes
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
