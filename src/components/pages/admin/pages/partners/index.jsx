import React, { useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import { PaginationControl } from 'react-bootstrap-pagination-control';

import PartnersTable from './PartnersTable';
import PartnersForm from './PartnersForm';

import ConfirmationModal from '../reports/ConfirmationModal';
import { actionTypes } from '../../../../../constants/actionTypes';

import { reducer, initialState } from './reducer';
import { getPartners } from '../../../../../api';
import useApi from '../../helpers/useApi';
import useAdminTable from '../../helpers/useAdminTable';

const PAGE_LIMIT = 15;

const PartnersTab = ({ activeTab }) => {
  const [adminState, dispatch] = useReducer(reducer, initialState);

  const {
    loading,
    partners,
    isCreationModalOpen,
    isConfirmationModalOpen,
    itemForUpdate,
  } = adminState;

  const {
    deletePartnerRequest,
    deleteProjectRequest,
    createPartnerRequest,
    createProjectRequest,
    updateProjectRequest,
    updatePartnerRequest,
  } = useApi({ dispatch });

  const {
    tableRef,
    handlePageChange,
    handleCloseConfirmationModal,
    handleDeleteShowModal,
    handleDeleteRequest: handleDeletePartner,
    onUpdateButtonClick,
  } = useAdminTable({
    activeTab,
    deleteRequest: deletePartnerRequest,
    dispatch,
    getRequest: getPartners,
    getActionRequest: actionTypes.getPartnersRequest,
    getActionSuccess: actionTypes.getPartnersSuccess,
    getActionFailure: actionTypes.getPartnersFailure,
    loading,
  });

  const handleUpdatePartner = (formData) => {
    return updatePartnerRequest(formData, itemForUpdate?.id);
  };

  return (
    <Row className="partners-table" lg={12}>
      <ConfirmationModal
        loading={loading}
        showModal={isConfirmationModalOpen}
        handleDelete={handleDeletePartner}
        handleCloseModal={handleCloseConfirmationModal}
      />
      <PartnersForm
        itemForUpdate={itemForUpdate}
        isModalShow={isCreationModalOpen}
        handleUpdatePartner={handleUpdatePartner}
        handleCreatePartner={createPartnerRequest}
        dispatch={dispatch}
        loading={loading}
      />
      <Col lg={12} ref={tableRef}>
        <PartnersTable
          loading={loading}
          partners={partners.data}
          dispatch={dispatch}
          showDeletePartnerModal={handleDeleteShowModal}
          handleDeletePartner={handleDeletePartner}
          handleCloseConfirmationModal={handleCloseConfirmationModal}
          handleDeleteP={deleteProjectRequest}
          handleCreatePartner={createPartnerRequest}
          handleCreateProject={createProjectRequest}
          handleUpdatePartner={handleUpdatePartner}
          handleUpdateProject={updateProjectRequest}
          onUpdateButtonClick={onUpdateButtonClick}
        />
      </Col>
      <Col lg={12} className="admin-page__pagination">
        <PaginationControl
          page={partners.meta?.current_page}
          total={partners.meta?.total_count}
          limit={PAGE_LIMIT}
          changePage={handlePageChange}
          between={4}
          ellipsis={1}
        />
      </Col>
    </Row>
  );
};

export default PartnersTab;
