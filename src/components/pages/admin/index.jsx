import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AdminTable from './nested/AdminTable';
import useFetchAdminData from './helpers/useFetchAdminData';
import withCredentials from './helpers/useCredentials';
import ConfirmationModal from './nested/ConfirmationModal';
import { routesPath } from '../../../constants';
import { deletePost } from '../../../api';

const tabs = {
  posts: 'Posts',
  reports: 'Reports',
  requests: 'Requests',
}

const AdminPageComponent = () => {
  const navigate = useNavigate();
  const { data, isLoaded } = useFetchAdminData();
  
  const [activeTab, setActiveTab] = useState(tabs.posts);
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [renderedData, setRenderedData] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      setRenderedData([
        ...data[activeTab.toLocaleLowerCase()]
      ]);
    }
  }, [isLoaded, activeTab]);

  const handleShowModal = (id) => {
    setShowModal(true);
    setRowDeleteId(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setRowDeleteId(null);
  };

  const handleDelete = () => {
    deletePost(rowDeleteId)
      .then(() => {
        setRenderedData(renderedData.filter(({ id }) => id !== rowDeleteId));
      })

    setShowModal(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddClick = () => {
    navigate(routesPath.adminCreatePost);
  };
  
  return (
    <Container className="admin-page">
      <ConfirmationModal 
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
          <Button 
            variant="outline-success" 
            onClick={handleAddClick}
          >
            + Add
          </Button>
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