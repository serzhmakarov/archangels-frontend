import React from 'react';
import Button from 'react-bootstrap/Button';
import { truncate } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import NormalizedDate from '../../../../globals/NormalizedDate';
import PlaceholderImage from '../../../../../assets/images/post_image_default.jpg';

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
  short_description,
  long_description, 
  date, 
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
        <img className="admin-page__row-item-image" src={photo_url || PlaceholderImage} alt="" />
      </td>
      <td title={name}>{truncateString(name, 50)}</td>
      <td title={short_description}>{truncateString(short_description, 50)}</td>
      <td title={long_description}>{truncateString(long_description, 50)}</td>
      <td>
        <NormalizedDate date={date} />
      </td>
      <td className="edit-button">
        <Button title="Редагувати" variant="outline-secondary" onClick={handleUpdateClick}>
          <FontAwesomeIcon icon={faPenToSquare} />        
        </Button>
      </td>
      <td className="delete-button">
        <Button title="Видалити" variant="outline-danger" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
}

export default TableRow;