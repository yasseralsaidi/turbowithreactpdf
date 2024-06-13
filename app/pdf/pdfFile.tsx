"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfFile({ pdfFile }: any) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  async function processDocument(document: any, onTextExtracted: any) {
    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber++) {
      const page = await document.getPage(pageNumber);
      // Additional processing of the page can be done here
    }
    onTextExtracted();
  }

  return (
    <div onClick={() => console.log("pdfFile")}>
      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
        loading="جاري استخراج البيانات..."
        className="mx-auto">
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        ))}
      </Document>
      for test turbo with react-pdf
    </div>
  );
}
