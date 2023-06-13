import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

const NormalizedDate = ({ date }) => {
  const { i18n } = useTranslation();

  // Normalize the date and get the day name
  let formattedDate = moment(date).locale(i18n.language).format('dddd, Do MMMM YYYY');
  let normalizedDate = formattedDate.charAt(0).toUpperCase().concat(formattedDate.slice(1))

  return <Card.Text className="card-date">{normalizedDate}</Card.Text>
};

export default NormalizedDate;
