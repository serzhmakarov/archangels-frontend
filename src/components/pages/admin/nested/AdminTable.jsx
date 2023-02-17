import React from 'react';
import Table from 'react-bootstrap/Table';
import TableRow from './TableRow';

import { adminTableFields } from '../../../../constants';

const AdminTable = ({ activeTab, data, handleShowModal }) => {  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {adminTableFields.map(({ key, label }) => (
            <th key={key}>{label}</th>
          ))}
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
          />
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTable;