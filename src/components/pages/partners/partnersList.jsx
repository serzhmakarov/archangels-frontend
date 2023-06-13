import React from 'react';

import PartnerCard from './partnerCard';
import withLoading from '../../../hooks/useLoading';

function PartnersList({ partners }) {
  return (
    <div className="partners-list">
      {partners.map(({ id, name, projects_count, short_description, photo_url }) => (
        <PartnerCard 
          key={id}
          id={id}
          name={name} 
          projects_count={projects_count}
          short_description={short_description} 
          photo={photo_url} 
        />
      ))}
    </div>
  );
}

const PartnersListWithLoading = withLoading(PartnersList);

export default PartnersListWithLoading;