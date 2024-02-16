// Install required packages
// npm install react react-dom react-router-dom html2canvas jsPDF

// App.js

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ReportGenerator = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      // Add any styling or modifications before capturing the content
    },
  });

  const handleDownloadPDF = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('aaa_report.pdf');
    });
  };

  return (
    <div>
      <h2>After Action Assessment Report Generator</h2>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleDownloadPDF}>Download PDF</button>

      <div ref={componentRef}>
        {/* Your AAA report content goes here */}
        <p>This is a sample AAA report content.</p>
      </div>
    </div>
  );
};

export default ReportGenerator;
