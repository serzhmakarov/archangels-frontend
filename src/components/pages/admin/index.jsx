import React, { useEffect, useReducer, useState } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';

import AdminTable from './nested/AdminTable';
import useFetchAdminData from './helpers/useFetchAdminData';
import withCredentials from './helpers/useCredentials';
import ConfirmationModal from './nested/ConfirmationModal';
import ModalCreateItem from './nested/modalCreateItem';

import { reducer, initialState } from './reducer';
import useApi from './helpers/useApi';
import { actionTypes } from '../../../constants/actionTypes';

const tabs = {
  posts: { key: 'posts', label: 'Новини'},
  reports: { key: 'reports', label: 'Звіти' },
  requests: { key: 'requests', label: 'Запити' },
}

const AdminPageComponent = () => {
  const [adminState, dispatch] = useReducer(reducer, initialState);

  const [activeTab, setActiveTab] = useState(tabs.posts.key);
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [renderedData, setRenderedData] = useState([]);

  useFetchAdminData({ dispatch });

  const {
    deletePostRequest, 
    deleteReportRequest,
    createPostRequest,
    createReportRequest,
    updatePostRequest,
    updateReportRequest,
  } = useApi({ dispatch });

  const { 
    error, 
    loading,
    posts,
    reports,
    isCreationModalOpen,
    isConfirmationModalOpen,
    itemForUpdate,
   } = adminState;

  useEffect(() => {
    if (posts.isLoaded || reports.isLoaded) {
      setRenderedData(adminState[activeTab.toLocaleLowerCase()]?.data);
    }
  }, [adminState.posts, adminState.reports, activeTab]);

  const onUpdateButtonClick = (id) => {
    dispatch({ 
      type: actionTypes.onUpdateButtonClick,
      payload: { id, targetName: activeTab },
    })
  };

  const handleShowModal = (id) => {
    dispatch({ type: actionTypes.openConfirmationModal });
    setRowDeleteId(id);
  };

  const handleCloseModal = () => {
    setRowDeleteId(null);
  };

  const handleDelete = () => {
    if (activeTab === tabs.posts.key) {
      deletePostRequest(rowDeleteId)
        .then(() => dispatch({ type: actionTypes.closeConfirmationModal }));

    } else {
      deleteReportRequest(rowDeleteId)
      .then(() => dispatch({ type: actionTypes.closeConfirmationModal }))
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateClick = (formData) => {
    if (activeTab === tabs.posts.key) {
      const callback = itemForUpdate ? updatePostRequest : createPostRequest;
      
      return callback(formData, itemForUpdate?.id)
    } else {
      const callback = itemForUpdate ? updateReportRequest : createReportRequest;

      return callback(formData, itemForUpdate?.id);
    }
  };
  
  return (
    <Container className="admin-page">
      <ConfirmationModal 
        loading={loading}
        showModal={isConfirmationModalOpen}
        handleDelete={handleDelete}
        handleCloseModal={handleCloseModal}
      />
      <Row>
        <Col xs={12} className="admin-page__tabs-wrapper">
          <Tabs 
            defaultActiveKey="posts" 
            id="tabs" 
            onSelect={handleTabChange}
          >
            <Tab eventKey="posts" title="Новини" />
            <Tab eventKey="reports" title="Звіти" />
          </Tabs>
          
          <ModalCreateItem 
            itemForUpdate={itemForUpdate}
            isModalShow={isCreationModalOpen}
            handleCreateClick={handleCreateClick}
            dispatch={dispatch}
            loading={loading}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <AdminTable
            dispatch={dispatch}
            onUpdateButtonClick={onUpdateButtonClick}
            activeTab={activeTab}
            handleShowModal={handleShowModal}
            data={renderedData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default withCredentials(AdminPageComponent);