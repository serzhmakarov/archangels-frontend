import React, { useState } from 'react';
import { Tabs, Tab, Container, Row } from 'react-bootstrap';

import withAuthorization from '../../../HOC/withAuthorization';
import Layout from '../../globals/layout';
import Reports from './pages/reports';
import Partners from './pages/partners';

const tabs = {
  reports: { key: 'reports', label: 'Звіти' },
  partners: { key: 'partners', label: 'Партнери' },
};

const AdminPageComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs.reports.key);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout>
      <Container className="admin-page">
        <Row xs={12} className="admin-page__tabs-wrapper">
          <Tabs defaultActiveKey="reports" id="tabs" onSelect={handleTabChange}>
            <Tab eventKey="reports" title="Звіти">
              <Reports activeTab={activeTab} />
            </Tab>
            <Tab eventKey="partners" title="Партнери">
              <Partners activeTab={activeTab} />
            </Tab>
          </Tabs>
        </Row>
      </Container>
    </Layout>
  );
};

export default withAuthorization(AdminPageComponent);
