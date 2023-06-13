import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

import ProjectsList from './projects';
import withLoading from '../../../../hooks/useLoading';
import DefaultPartnerImage from '../../../../assets/images/nova-poshta.jpeg';

const Content = ({ data }) => {
  const {
    name,
    short_description,
    photo_url,
    projects,
  } = data;

  return (
    <Container xs={12}>
      <Row className="partner-item-page__title-block partner-title-desktop" lg={12}>
        <Col className="content-wrapper" lg={7}>
          <h1 className="title-block-text">{name}</h1>
          <p className="partner-description">{short_description}</p>
        </Col>
        <Col lg={5}>
          <Image src={photo_url || DefaultPartnerImage} alt="post_img" />
        </Col>
      </Row>

      <Row className="content-wrapper">
        <h1 className="title-block-text">Спільні проекти</h1>
      </Row>
      <ProjectsList projects={projects}/>
    </Container>
  );
};

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;