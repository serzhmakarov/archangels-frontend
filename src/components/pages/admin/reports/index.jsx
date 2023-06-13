import React, { useRef, useEffect, useState, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';

import PaginationComponent from '../nested/Pagination';
import ReportsTable from './ReportsTable';
import ModalCreateItem from './ModalCreateItem';
import ConfirmationModal from './ConfirmationModal'

import useFetchAdminData from '../helpers/useFetchAdminData';
import useApi from '../helpers/useApi';
import { reducer, initialState } from './reducer';

import { getReports } from '../../../../api';
import { actionTypes } from '../../../../constants/actionTypes';

const ReportsTab = ({ activeTab }) => {
  const tableRef = useRef();
  const [adminState, dispatch] = useReducer(reducer, initialState);
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useFetchAdminData({ 
    dispatch, 
    currentPage, 
    callback: getReports 
  })

  const {
    deleteReportRequest, 
    createReportRequest,
    updateReportRequest,
  } = useApi({ dispatch });

  const { 
    loading,
    reports,
    isCreationModalOpen,
    isConfirmationModalOpen,
    itemForUpdate,
   } = adminState;

  useEffect(() => {
    tableRef.current.style.opacity = loading ? 0.6 : 1
  }, [loading]);

  const handleShowModal = (id) => {
    dispatch({ type: actionTypes.openConfirmationModal });
    setRowDeleteId(id);
  };

  const handleCloseConfirmationModal = () => {
    setRowDeleteId(null);
  };

  const handleDelete = () => {
    deleteReportRequest(rowDeleteId)
      .then(() => dispatch({ type: actionTypes.closeConfirmationModal }));
  };

  const onUpdateButtonClick = (id) => {
    dispatch({ 
      type: actionTypes.onUpdateButtonClick,
      payload: { id, targetName: activeTab },
    })
  };

  const handleCreateClick = (formData) => {
    const callback = itemForUpdate ? updateReportRequest : createReportRequest;
    
    return callback(formData, itemForUpdate?.id)
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Row lg={12}>
      <ConfirmationModal 
        loading={loading}
        showModal={isConfirmationModalOpen}
        handleDelete={handleDelete}
        handleCloseModal={handleCloseConfirmationModal}
      />
      <ModalCreateItem 
        itemForUpdate={itemForUpdate}
        isModalShow={isCreationModalOpen}
        handleCreateClick={handleCreateClick}
        dispatch={dispatch}
        loading={loading}
      />
      <Col lg={12} ref={tableRef}>
        <ReportsTable
          dispatch={dispatch}
          onUpdateButtonClick={onUpdateButtonClick}
          activeTab={activeTab}
          handleShowModal={handleShowModal}
          data={reports.data}
        />
      </Col>
      <Col lg={12} className="admin-page__pagination">
        <PaginationComponent 
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={reports.meta?.total_pages}
        />
      </Col>
    </Row>
  );
}

export default ReportsTab;