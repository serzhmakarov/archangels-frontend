import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PaginationItemComponent from './PaginationItemComponent';

const PaginationComponent = ({ totalPages, handlePageChange, currentPage }) => {
  const onPrevPageClick = () => handlePageChange(currentPage - 1);

  const onNextPageClick = () => handlePageChange(currentPage + 1);

  const onLastPageClick = () => handlePageChange(totalPages);

  const onFirstPageClick = () => handlePageChange(1);

  return (
    <Pagination>
        <Pagination.First onClick={onFirstPageClick} />
        <Pagination.Prev
          onClick={onPrevPageClick}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItemComponent 
            key={index + 1}
            pageNumber={index + 1}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        ))}
        <Pagination.Next
          onClick={onNextPageClick}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={onLastPageClick} />
      </Pagination>
  );
};

export default PaginationComponent;