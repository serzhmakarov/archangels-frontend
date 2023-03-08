import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationItemComponent = ({ handlePageChange, pageNumber, currentPage }) => {
  const onPageChange = () => {
    handlePageChange(pageNumber);
  };

  return (
    <Pagination.Item
      key={pageNumber}
      active={pageNumber === currentPage}
      onClick={onPageChange}
    >
      {pageNumber}
    </Pagination.Item>
  );
};

export default PaginationItemComponent;