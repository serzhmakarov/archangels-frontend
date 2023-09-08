import React, { useState } from 'react';
import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap';

import NormalizedDate from '../../../globals/NormalizedDate';
import withLoading from '../../../../hooks/useLoading';
import LazyBackground from '../../../../_helpers/LazyBackground';
import ReportSocialNetworks from './ReportSocialNetworks';
import ReportCard from '../reportCard';

const tabs = {
  reports: { key: 'reports', label: 'Про Проєкт' },
  partners: { key: 'partners', label: 'Партнери' },
};

const Content = ({ data, containerRef }) => {
  const [activeTab, setActiveTab] = useState(tabs.reports.key);

  const handleTabChange = (tab) => setActiveTab(tab);

  const {
    nearby_posts,
    post: {
      name,
      short_description,
      long_description,
      photo_url,
      date,
      social_networks,
    },
  } = data;

  console.log(activeTab);

  return (
    <Container className="reports-item-page" ref={containerRef} lg={12}>
      <Col className="content-wrapper" lg={12}>
        <h1 className="title-block-text">
          {name}
          <NormalizedDate date={date} />
          <ReportSocialNetworks socialNetworks={social_networks} />
        </h1>
      </Col>

      <Row lg={12}>
        <Col lg={8}>
          <LazyBackground src={photo_url} />
        </Col>
      </Row>

      <Col lg={12} className="reports-item-page__description-block">
        <Tabs
          className="reports-item-page__description-block"
          defaultActiveKey="reports"
          id="tabs"
          onSelect={handleTabChange}
        >
          <Tab title="Про Проєкт" className="tab-title" eventKey="reports">
            <div className="description-wrapper">
              <p>
                <b>{short_description}</b>
              </p>
              <p>{long_description}</p>
            </div>
          </Tab>
        </Tabs>
      </Col>

      <Col lg={12} className="reports-item-page__reports-block">
        <h1 className="nearby_reports-title">ІНШІ ЗВІТИ</h1>
        <hr />
        <div className="reports-item-page__reports-block-cards">
          {nearby_posts.map((postData) => (
            <ReportCard
              {...postData}
              photo={postData.photo_url}
              key={postData.id}
            />
          ))}
        </div>
      </Col>
    </Container>
  );
};

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;
