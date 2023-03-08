import React from 'react';

import ReportCard from './reportCard';
import withLoading from '../../../hooks/useLoading';

function ReportsList({ reports }) {
  return (
    <div className="news-list">
      {reports.map(({ id, name, date, short_description, photo_url }) => (
        <ReportCard 
          key={id}
          id={id}
          name={name} 
          date={date} 
          short_description={short_description} 
          photo={photo_url} 
        />
      ))}
    </div>
  );
}

const ReportsListWithLoading = withLoading(ReportsList);

export default ReportsListWithLoading;