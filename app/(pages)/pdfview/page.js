'use client';

import { useEffect, useRef, useState } from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SecurePDFViewer() {
  const pdfUrl = './fcpl.pdf'; // Updated PDF URL
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPDF = async () => {
      const pdf = await pdfjs.getDocument(pdfUrl).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    };

    renderPDF();
  }, [pdfUrl]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative bg-white shadow-lg rounded-xl overflow-hidden p-4 max-w-4xl w-full">
        <h2 className="text-xl font-semibold text-center mb-4">Secure PDF Viewer</h2>
        <canvas ref={canvasRef} className="w-full" />
      </div>
      {/* Prevent screenshot using CSS */}
      <style jsx>{`
        canvas {
          pointer-events: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
