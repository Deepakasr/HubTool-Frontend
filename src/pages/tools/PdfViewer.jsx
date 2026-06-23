import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF Worker Fix for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function PdfViewer() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [numPages, setNumPages] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  // Select PDF
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);

      setPageNumber(1);
    } else {
      alert("Only PDF files allowed");
    }
  };

  // PDF loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Next Page
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
  };

  // Previous Page
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Back */}
        <button
          onClick={() => navigate("/pdf-tools")}
          className="text-gray-400 hover:text-cyan-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-4xl mb-5">
            📖
          </div>

          <h1 className="text-5xl font-black">PDF Viewer</h1>

          <p className="mt-4 text-gray-400 text-lg">
            View and navigate PDF files online.
          </p>
        </div>

        {/* Upload */}
        {!file && (
          <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
            <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-cyan-500/30 bg-[#0F172A] cursor-pointer hover:border-cyan-500 transition">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              <span className="text-6xl">📄</span>

              <p className="mt-5 text-xl font-semibold">Select PDF File</p>

              <p className="text-sm text-gray-500 mt-2">
                Upload PDF to preview
              </p>
            </label>
          </div>
        )}

        {/* PDF Viewer */}
        {file && (
          <div className="mt-12">
            {/* Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <button
                onClick={prevPage}
                disabled={pageNumber === 1}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:opacity-90 disabled:opacity-50"
              >
                Previous
              </button>

              <span className="text-lg font-medium">
                Page {pageNumber} of {numPages}
              </span>

              <button
                onClick={nextPage}
                disabled={pageNumber === numPages}
                className="px-5 py-2 rounded-xl bg-cyan-500 hover:opacity-90 disabled:opacity-50"
              >
                Next
              </button>
            </div>

            {/* PDF Container */}
            <div className="bg-[#101827] rounded-3xl p-5 border border-white/10 flex justify-center overflow-auto min-h-[700px]">
              <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={(error) => {
                  console.error(error);

                  alert("Failed to load PDF file");
                }}
                loading={<p className="text-gray-400">Loading PDF...</p>}
              >
                <Page
                  pageNumber={pageNumber}
                  width={window.innerWidth < 768 ? 320 : 800}
                />
              </Document>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default PdfViewer;
