import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { actionTypes } from '../../../../../constants/actionTypes';
import { adminTablePartnersFields } from '../../../../../constants';
import PartnersRow from './PartnersRow';

const PartnersTable = ({
  dispatch,
  partners,
  showDeletePartnerModal,
  handleCloseConfirmationModal,
  handleCreatePartner,
  handleCreateProject,
  handleDeletePartner,
  handleDeleteProject,
  handleUpdatePartner,
  handleUpdateProject,
  onUpdateButtonClick,
}) => {
  const handleOpenRecordCreation = () => {
    dispatch({ type: actionTypes.openCreationModal });
  };

  return (
    <Table responsive="lg" striped bordered hover>
      <thead>
        <tr>
          {adminTablePartnersFields.map(({ key, label }) => (
            <th className="admin-table-headers" key={key}>
              {label}
            </th>
          ))}
          <th colSpan={3}>
            <Button
              variant="outline-success"
              onClick={handleOpenRecordCreation}
            >
              <FontAwesomeIcon icon={faPlus} /> Додати новий запис
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {partners.map((props, index) => (
          <PartnersRow
            {...props}
            index={index}
            showDeletePartnerModal={showDeletePartnerModal}
            onUpdateButtonClick={onUpdateButtonClick}
            key={props.id}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default PartnersTable;
