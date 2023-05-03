import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { t } from 'i18next';

import normalizeDate from '../../../_helpers/normalizeDate';
import withLoading from '../../../hooks/useLoading';

const Content = ({ data }) => {
  const {
    name,
    short_description,
    long_description,
    photo_url,
    date,
    feedback,
  } = data;

  return (
    <Container>
      <Row className="post-item-page__title-block">
        <h1 className="post-name">{name}</h1>
        <p className="post-date">{t('home.date')}: {normalizeDate(date)}</p>
        <p className="post-description">{short_description}</p>

        <div>
          <img src={photo_url} alt="post_img" />
          <div className="post-feedback">
          <p className="feedback-text">{feedback}</p>
          <span className="feedback-title">Відгук</span>
        </div>
        </div>
        <p className="post-description">{long_description}</p>
      </Row>
    </Container>
  );
};

Content.defaultProps = {
  data: {},
};

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;