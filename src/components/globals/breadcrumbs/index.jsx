import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { t } from 'i18next';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length < 2) return null;
  
  return (
    <div className="breadcrumbs-container-wrapper">
      <Container className="breadcrumbs-container" lg={12}>
        <Breadcrumb className="breadcrumbs">
          {Boolean(pathnames.length) && (
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
              {t('home.header.main')}
            </Breadcrumb.Item>
          )}
    
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const breadcrumbLabel = isNaN(Number(value)) ? t(`home.header.${value}`) : value; 

            return (
              <Breadcrumb.Item
                key={index}
                linkAs={Link}
                linkProps={{ to }}
              >
                {breadcrumbLabel}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
