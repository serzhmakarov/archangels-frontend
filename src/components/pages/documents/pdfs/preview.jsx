import React, { useState, useRef } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { usePdf } from "@mikecousins/react-pdf";

const PdfViewer = ({ file, pages }) => {
  const [page, setPage] = useState(1);

  const canvasRef = useRef(null);
  
  const { pdfDocument } = usePdf({ file, page, canvasRef });

  return (
    <div className="pdf-page__document-wrapper">
      {!pdfDocument && <Spinner variant="danger" />}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <div className="pdf-viewer__styled-navigation">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            {"‹"}
          </button>
          <span>{page} of {pages}</span>
          <button
            disabled={page === pdfDocument.numPages}
            onClick={() => setPage(page + 1)}
          >
            {"›"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;