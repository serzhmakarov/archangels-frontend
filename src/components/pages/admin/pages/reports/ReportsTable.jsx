import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash-es';

import TableRow from './TableRow';
import { actionTypes } from '../../../../../constants/actionTypes';
import { adminTableReportsFields } from '../../../../../constants';

const ReportsTable = ({ activeTab, data, handleShowModal, onUpdateButtonClick, dispatch }) => {  
  const handleOpenRecordCreation = () => {
    dispatch({ type: actionTypes.openCreationModal });
  };

  return (
    <>
      <Table 
        responsive="lg"
        striped 
        bordered 
        hover
      >
        <thead>
          <tr>
            {adminTableReportsFields.map(({ key, label }) => (
              <th key={key}>{label}</th>
            ))}
            <th colSpan={3}>
              <Button 
                variant="outline-success" 
                onClick={handleOpenRecordCreation}
              >
                <FontAwesomeIcon icon={faPlus}/> Додати новий запис
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((props, index) => (
            <TableRow 
              {...props}
              key={props.id}
              index={index}
              handleShowModal={handleShowModal}
              activeTab={activeTab}
              onUpdateButtonClick={onUpdateButtonClick}
            />
          ))}
        </tbody>
      </Table>
      {isEmpty(data) && (
        <div className="admin-page__empty-data">
          Поки що немає створених записів
        </div>
      )}
    </>
  );
};

export default ReportsTable;