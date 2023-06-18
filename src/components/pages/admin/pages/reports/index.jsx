import React, { useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';

import ReportsTable from './ReportsTable';
import ModalCreateItem from './ModalCreateForm/ModalCreateItem';
import ConfirmationModal from './ConfirmationModal'

import useApi from '../../helpers/useApi';
import { reducer, initialState } from './reducer';

import { getReports } from '../../../../../api';
import { actionTypes } from '../../../../../constants/actionTypes';
import useAdminTable from '../../helpers/useAdminTable';

const PAGE_LIMIT = 15;

const ReportsTab = ({ activeTab }) => {
  const [adminState, dispatch] = useReducer(reducer, initialState);

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

  const {
    tableRef,
    handlePageChange,
    handleCloseConfirmationModal,
    handleDeleteShowModal,
    handleDeleteRequest,
   } = useAdminTable({
    dispatch,
    loading,
    getRequest: getReports,
    deleteRequest: deleteReportRequest,
    getActionRequest: actionTypes.getReportsRequest,
    getActionSuccess: actionTypes.getReportsSuccess,
    getActionFailure: actionTypes.getReportsFailure,
  });

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

  return (
    <Row lg={12}>
      <ConfirmationModal 
        loading={loading}
        showModal={isConfirmationModalOpen}
        handleDelete={handleDeleteRequest}
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
          handleShowModal={handleDeleteShowModal}
          data={reports.data}
        />
      </Col>
      <Col lg={12} className="admin-page__pagination">
        <PaginationControl 
          page={reports.meta?.current_page}
          total={reports.meta?.total_count}
          limit={PAGE_LIMIT}
          changePage={handlePageChange}
          between={4}
          ellipsis={1}
        />
      </Col>
    </Row>
  );
}

export default ReportsTab;