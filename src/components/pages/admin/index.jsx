import React, { useReducer, useState, useRef, useEffect } from 'react';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';

import AdminTable from './nested/AdminTable';
import useFetchAdminData from './helpers/useFetchAdminData';
import ConfirmationModal from './nested/ConfirmationModal';
import ModalCreateItem from './nested/modalCreateItem';
import useApi from './helpers/useApi';
import withAuthorization from '../../../HOC/withAuthorization';
import Layout from '../../globals/layout';
import { actionTypes } from '../../../constants/actionTypes';
import { reducer, initialState } from './reducer';
import PaginationComponent from './nested/Pagination';

const tabs = {
  posts: { key: 'posts', label: 'Новини'},
}

const AdminPageComponent = () => {
  const tableRef = useRef();
  const [adminState, dispatch] = useReducer(reducer, initialState);
  const [activeTab, setActiveTab] = useState(tabs.posts.key);
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useFetchAdminData({ dispatch, currentPage })

  const {
    deletePostRequest, 
    createPostRequest,
    updatePostRequest,
  } = useApi({ dispatch });

  const { 
    loading,
    posts,
    isCreationModalOpen,
    isConfirmationModalOpen,
    itemForUpdate,
   } = adminState;

  useEffect(() => {
    tableRef.current.style.opacity = loading ? 0.6 : 1
  }, [loading]);

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
    deletePostRequest(rowDeleteId)
      .then(() => dispatch({ type: actionTypes.closeConfirmationModal }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCreateClick = (formData) => {
    const callback = itemForUpdate ? updatePostRequest : createPostRequest;
    
    return callback(formData, itemForUpdate?.id)
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <Layout>
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
          <Col xs={12} ref={tableRef}>
            <AdminTable
              dispatch={dispatch}
              onUpdateButtonClick={onUpdateButtonClick}
              activeTab={activeTab}
              handleShowModal={handleShowModal}
              data={posts.data}
            />
          </Col>
          <Col xs={12} className="admin-page__pagination">
            <PaginationComponent 
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              totalPages={posts.meta?.total_pages}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default withAuthorization(AdminPageComponent);