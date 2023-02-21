import React, { useEffect, useReducer, useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AdminTable from './nested/AdminTable';
import useFetchAdminData from './helpers/useFetchAdminData';
import withCredentials from './helpers/useCredentials';
import ConfirmationModal from './nested/ConfirmationModal';
import ModalCreateItem from './pages/modalCreatePost';
import { routesPath } from '../../../constants';

import { reducer, initialState } from './helpers/reducer';
import useApi from './helpers/useApi';

const tabs = {
  posts: 'Posts',
  reports: 'Reports',
  requests: 'Requests',
}

const AdminPageComponent = () => {
  const navigate = useNavigate();
  const [adminState, dispatch] = useReducer(reducer, initialState);
  
  const [activeTab, setActiveTab] = useState(tabs.posts);
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [renderedData, setRenderedData] = useState([]);

  useFetchAdminData({ dispatch });

  const {
    deletePostRequest, 
    deleteReportRequest,
    createPostRequest,
    createReportRequest
  } = useApi({ dispatch });

  const { 
    error, 
    loading,
    posts,
    reports,
    isCreationModalOpen,
    isConfirmationModalOpen,
   } = adminState;

  useEffect(() => {
    if (posts.isLoaded || reports.isLoaded) {
      setRenderedData(adminState[activeTab.toLocaleLowerCase()]?.data);
    }
  }, [adminState.posts, adminState.reports.isLoaded, activeTab]);

  const handleShowModal = (id) => {
    setShowModal(true);
    setRowDeleteId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setRowDeleteId(null);
  };

  const handleDelete = () => {
    if (activeTab === tabs.posts) {
      deletePostRequest(rowDeleteId)
        .then(() => setShowModal(false));

    } else if (activeTab === tabs.reports) {
      deleteReportRequest(rowDeleteId)
        .then(() => setShowModal(false));
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateClick = (formData) => {
    if (activeTab === tabs.posts) {
      return createPostRequest(formData);
    }

    else return createReportRequest(formData);
  };
  
  return (
    <Container className="admin-page">
      <ConfirmationModal 
        loading={loading}
        showModal={showModal}
        handleDelete={handleDelete}
        handleCloseModal={handleCloseModal}
      />
      <Row>
        <Col xs={12} className="admin-page__tabs-wrapper">
          <Tabs 
            defaultActiveKey="Posts" 
            id="tabs" 
            onSelect={handleTabChange}
          >
            <Tab eventKey="Posts" title="Posts" />
            <Tab eventKey="Reports" title="Reports" />
          </Tabs>
          
          <ModalCreateItem 
            activeTab={activeTab}
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
// export default AdminPageComponent;