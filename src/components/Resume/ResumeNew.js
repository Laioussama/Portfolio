import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Oussama_Laiche_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Oussama_Laiche_CV.pdf"
            title="Download CV (FR)"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (FR)
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex flex-column align-items-center"
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {numPages &&
              (() => {
                const pageWidth = width > 786 ? 794 : Math.floor(width * 0.9); // A4-ish width in px at 96dpi
                return Array.from({ length: numPages }, (_, index) => (
                  <div
                    key={`page_${index + 1}`}
                    style={{
                      marginBottom: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.15)", background: "#fff" }}>
                      <Page
                        pageNumber={index + 1}
                        width={pageWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  </div>
                ));
              })()}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            download="Oussama_Laiche_CV.pdf"
            title="Download CV (FR)"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (FR)
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
