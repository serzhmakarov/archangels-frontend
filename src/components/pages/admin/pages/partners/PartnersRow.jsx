import React from 'react';
import Button from 'react-bootstrap/Button';
import { truncate } from 'lodash-es';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import PlaceholderImage from '../../../../../assets/images/post_image_default.jpg';
import LazyBackground from '../../../../../_helpers/LazyBackground';

function truncateString(str, maxLength) {
  return truncate(str, {
    length: maxLength,
    omission: '...'
  });
};

const PartnersRow = ({ 
  id, 
  index, 
  name, 
  short_description,
  full_description,
  projects, 
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
    <tr key={id} className="admin-table__partners-row">
      <td>{index + 1}</td>
      <td>
        <LazyBackground 
          src={photo_url} 
          placeholder={PlaceholderImage}
        />
      </td>
      <td title={name}>{truncateString(name, 50)}</td>
      <td title={short_description}>{truncateString(short_description, 50)}</td>
      <td title={full_description}>{truncateString(full_description, 50)}</td>
      <td>{projects.length}</td>
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

export default PartnersRow;