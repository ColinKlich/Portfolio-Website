import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/ColinKlichResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {numPages && (
            <div>
              <Button
                variant="primary"
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber(pageNumber - 1)}
              >
                Previous
              </Button>
              <Button
                variant="primary"
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber(pageNumber + 1)}
                style={{ marginLeft: "10px" }}
              >
                Next
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
