import React from 'react';
import Container from 'react-bootstrap/Container';
import { useTranslation } from 'react-i18next';

import PdfFilesComponent from './pdfs';

const Documents = () => {
  const { t } = useTranslation();
  return (
    <Container className="reports-page">
      <PdfFilesComponent t={t} />
    </Container>
  );
};

export default Documents;