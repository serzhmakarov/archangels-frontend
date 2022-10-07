import React from 'react';
import Row from 'react-bootstrap/Row';

import normalizeDate from '../../../_helpers/normalizeDate';
import withLoading from '../../../hooks/useLoading';
import DefaultPostImage from '../../../assets/images/post-default-image.jpg';

const Content = ({ data, photo }) => {
  const {
    name,
    description,
    date,
  } = data;

  return (
    <Row className="post-item-page__title-block">
      <h1>{name}</h1>
      <p>{normalizeDate(date)}</p>
      <p>{description}</p>
      <img src={photo} alt="post_img" />
      <p>{description}</p>
    </Row>
  );
};

Content.defaultProps = {
  data: {
    name: '',
    description: '',
    date: new Date(),
  },
  photo: DefaultPostImage
}

const ContentWithLoading = withLoading(Content);

export default ContentWithLoading;