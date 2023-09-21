import React from 'react';
import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap';

import NormalizedDate from '../../../globals/NormalizedDate';
import withLoading from '../../../../hooks/useLoading';
import LazyBackground from '../../../../_helpers/LazyBackground';
import ReportSocialNetworks from './ReportSocialNetworks';
import NearbyPosts from './nearbyPosts';

const Content = ({ data, containerRef }) => {
  const {
    nearby_posts,
    post: {
      name,
      short_description,
      long_description,
      photo_url,
      date,
      social_links,
    },
  } = data;

  return (
    <Container className="reports-item-page" ref={containerRef} lg={12}>
      <Col className="content-wrapper" lg={12}>
        <h1 className="title-block-text">
          {name}
          <NormalizedDate date={date} />
          <ReportSocialNetworks socialNetworks={social_links} />
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
        >
          <Tab title="Про Проєкт" className="tab-title" eventKey="reports">
            <div className="description-wrapper">
              <p>
                <b dangerouslySetInnerHTML={{ __html: short_description }} />
              </p>
              <p dangerouslySetInnerHTML={{ __html: long_description }} />
            </div>
          </Tab>
        </Tabs>
      </Col>

      <NearbyPosts posts={nearby_posts} />
    </Container>
  );
};

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;
