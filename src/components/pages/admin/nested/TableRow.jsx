import React from 'react';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { truncate } from 'lodash-es';

function truncateString(str, maxLength) {
  return truncate(str, {
    length: maxLength,
    omission: '...'
  });
};

const TableRow = ({ 
  id, 
  index, 
  name, 
  description, 
  created_at, 
  photo_url,
  handleShowModal, 
  onUpdateButtonClick 
}) => {
  const handleUpdateClick = () => {
    onUpdateButtonClick(id);
  };

  const handleDeleteClick = () => {
    handleShowModal(id);
  };

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>
        <img className="admin-page__row-item-image" src={photo_url} alt="" />
      </td>
      <td title={name}>{truncateString(name, 50)}</td>
      <td title={description}>{truncateString(description, 50)}</td>
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