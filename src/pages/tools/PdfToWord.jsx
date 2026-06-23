import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PdfToWord() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  // Select PDF
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Only PDF files are allowed");
    }
  };

  // Convert PDF → Word
  const convertPdfToWord = async () => {
    try {
      if (!file) {
        alert("Please upload PDF file");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axios.post(
        `${API_BASE_URL}/pdf/pdf-to-word`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "converted.docx");

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.error(error);

      const errorMessage = await error.response?.data?.text?.();

      alert(errorMessage || "Word to PDF failed");

      alert("PDF to Word conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-4xl mx-auto px-6 py-14">
        {/* Back */}
        <button
          onClick={() => navigate("/pdf-tools")}
          className="text-gray-400 hover:text-red-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-4xl mb-5">
            📕
          </div>

          <h1 className="text-5xl font-black">PDF to Word</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Convert PDF files to editable Word documents.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload */}
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-red-500/30 bg-[#0F172A] cursor-pointer hover:border-red-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">📄</span>

            <p className="mt-5 text-xl font-semibold">Select PDF File</p>

            <p className="text-sm text-gray-500 mt-2">
              Upload PDF to convert into editable Word
            </p>
          </label>

          {/* Selected File */}
          {file && (
            <div className="mt-5 rounded-2xl bg-[#0F172A] border border-white/10 p-5">
              <p className="font-medium">{file.name}</p>

              <p className="text-sm text-gray-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          {/* Info */}
          <div className="mt-5 rounded-2xl bg-red-500/10 border border-red-500/20 p-4">
            <p className="text-sm text-red-300">
              Best for text-based PDFs. Complex layouts, tables and scanned PDFs
              may not convert perfectly.
            </p>
          </div>

          {/* Convert Button */}
          <button
            onClick={convertPdfToWord}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert to Word"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default PdfToWord;
