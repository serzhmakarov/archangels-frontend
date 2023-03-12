import React from 'react';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

import PdfFilesComponent from './pdfs';
import Acknowledgments from './acknowledgments';

const Documents = () => {
  const { t } = useTranslation();
  return (
    <Container className="reports-page">
      <PdfFilesComponent t={t} />
      <Acknowledgments t={t} />
    </Container>
  );
};

export default Documents;