import React from 'react';

import FoundationRegistrationInfoPdg from '../../../../assets/pdfs/1.pdf';
import FoundationInfoPdf from '../../../../assets/pdfs/2.pdf';
import PdfPreview from './preview';

const pdfFiles = [
  { url: FoundationRegistrationInfoPdg, pages: 2 },
  { url: FoundationInfoPdf, pages: 1 },
];

const PdfFilesComponent = ({ t }) => {
  return (
    <div className="pdf-page">
      <h1 className="title-block-text">{t('home.header.documents')}</h1>
      <div className="pdf-page__documents-list">
        {pdfFiles.map(({ url, pages }) => (
          <PdfPreview file={url} pages={pages} />
        ))}
      </div>
    </div>
  );
};
export default PdfFilesComponent;
