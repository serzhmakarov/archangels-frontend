import React, { useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ReportsList from './reports';
import useApi from './useApi';
import Placeholder from '../../globals/placeholder';

const Reports = () => {
  const { 
    fetchItems,
    loading, 
    isLoaded, 
    reports: {
      data,
      meta
    },
  } = useApi();

  useEffect(() => {
    fetchItems();
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  const handleScroll = useCallback((event) => {
    const elementRef = event.target.documentElement;
    const disabled = loading || meta.total_count === data.length;
    const shouldLoadData = elementRef.scrollTop + elementRef.clientHeight > elementRef.scrollHeight - 300

    if (shouldLoadData && !disabled) {
      fetchItems();
    }
  }, [loading, fetchItems, data.length, meta.total_count]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const isDataEmpty = isLoaded && !data.length

  return (
    <Container className="news-page">
      <Row className="about-page__title-block">
        <h1>Звіти</h1>
      </Row>
    
      <Row className="content-wrapper">
        <Placeholder 
          show={isDataEmpty}
          message="Незабаром тут з'являться всі новини нашого фонду від початку повномасштабного вторгнення."
        />
        <ReportsList 
          loading={loading}
          isLoaded={isLoaded}
          reports={data}
        />
      </Row>
    </Container>
  );
};

export default Reports;