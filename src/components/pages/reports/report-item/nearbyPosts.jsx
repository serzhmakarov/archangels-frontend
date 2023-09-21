import React from 'react';
import Col from 'react-bootstrap/Col';
import ReportCard from '../reportCard';

const NearbyPosts = ({ posts }) =>
  Boolean(posts.length) && (
    <Col lg={12} className="reports-item-page__reports-block">
      <h1 className="nearby_reports-title">ІНШІ ЗВІТИ</h1>
      <hr />
      <div className="reports-item-page__reports-block-cards">
        {posts.map((postData) => (
          <ReportCard
            {...postData}
            photo={postData.photo_url}
            key={postData.id}
          />
        ))}
      </div>
    </Col>
  );

export default NearbyPosts;
