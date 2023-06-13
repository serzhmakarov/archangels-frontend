import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import PartnersTable from './PartnersTable';

const PartnersTab = ({ activeTab }) => {
  const tableRef = useRef();

  return (
    <Row className="partners-table" lg={12}>
      <Col lg={12} ref={tableRef}>
        <PartnersTable />
      </Col>
      <Col lg={12} className="admin-page__pagination">
        {/* <PaginationComponent 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={reports.meta?.total_pages}
        /> */}
      </Col>
    </Row>
  )
};

export default PartnersTab;