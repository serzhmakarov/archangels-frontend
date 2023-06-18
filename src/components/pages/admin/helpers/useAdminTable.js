import { useRef, useState, useEffect } from 'react';
import useFetchAdminData from './useFetchAdminData';
import { actionTypes } from '../../../../constants/actionTypes';

const useAdminTable = ({ 
  activeTab, 
  getRequest, 
  deleteRequest, 
  dispatch, 
  loading,
  getActionRequest,
  getActionSuccess,
  getActionFailure,
}) => {
  const tableRef = useRef();
  const [rowDeleteId, setRowDeleteId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useFetchAdminData({ 
    dispatch, 
    currentPage, 
    callback: getRequest,
    getActionRequest,
    getActionSuccess,
    getActionFailure,
  });

  useEffect(() => {
    tableRef.current.style.opacity = loading ? 0.6 : 1
  }, [loading]);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleDeleteShowModal = (id) => {
    dispatch({ type: actionTypes.openConfirmationModal });
    setRowDeleteId(id);
  };

  const handleDeleteRequest = () => {
    deleteRequest(rowDeleteId)
      .then(() => dispatch({ type: actionTypes.closeConfirmationModal }));
  };

  const handleCloseConfirmationModal = () => {
    setRowDeleteId(null);
  };

  const onUpdateButtonClick = (id) => {
    dispatch({ 
      type: actionTypes.onUpdateButtonClick,
      payload: { id, targetName: activeTab },
    })
  };

  return {
    handlePageChange,
    handleDeleteShowModal,
    handleDeleteRequest,
    handleCloseConfirmationModal,
    onUpdateButtonClick,
    rowDeleteId,
    tableRef,
  }
};

export default useAdminTable;