import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PageNumberPdf() {
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

  // Add page number
  const addPageNumber = async () => {
    try {
      if (!file) {
        alert("Please upload PDF");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axios.post(
        `${API_BASE_URL}/pdf/page-number`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "page-number.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("Failed to add page number");
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
          className="text-gray-400 hover:text-indigo-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-4xl mb-5">
            📑
          </div>

          <h1 className="text-5xl font-black">Add Page Number</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Automatically add page numbers to your PDF pages.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload Box */}
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-indigo-500/30 bg-[#0F172A] cursor-pointer hover:border-indigo-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">📄</span>

            <p className="mt-5 text-xl font-semibold">Select PDF File</p>

            <p className="text-sm text-gray-500 mt-2">
              Upload PDF to add page numbers
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

          {/* Info Box */}
          <div className="mt-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4">
            <p className="text-sm text-indigo-300">
              Page numbers will be added automatically at the bottom center of
              every page.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={addPageNumber}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Adding Page Numbers..." : "Add Page Number"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default PageNumberPdf;
