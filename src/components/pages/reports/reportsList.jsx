import React from 'react';

import Report from './report';
import withLoading from '../../../hooks/useLoading';

function ReportsList({ reports }) {
  return (
    <div className="reports-list">
      {reports.map(({ date, description, id, name, photo }) => (
        <Report 
          id={id} 
          date={date}
          description={description}
          name={name} 
          photo={photo}
        />
      ))}
    </div>
  );
}

const ReportsListsWithLoading = withLoading(ReportsList);

export default ReportsListsWithLoading;