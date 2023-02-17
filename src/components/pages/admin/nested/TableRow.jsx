import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

// import { routesPath } from '../../../../constants';

const TableRow = ({ id, index, name, description, created_at, handleShowModal }) => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate('/admin');
    // navigate(routesPath[activeTab]);
    console.log('edit click');
  };

  const handleDeleteClick = () => {
    handleShowModal(id);
  }

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{moment(created_at).format('YYYY-MM-DD / hh:ss')}</td>
      <td>
        <Button variant="outline-secondary" onClick={handleUpdateClick}>Edit</Button>
      </td>
      <td>
        <Button variant="danger" onClick={handleDeleteClick}>Delete</Button>
      </td>
    </tr>
  );
}

export default TableRow;