import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PdfSplit() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [startPage, setStartPage] = useState("");

  const [endPage, setEndPage] = useState("");

  const [loading, setLoading] = useState(false);

  // File stelec
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Only PDF files are allowed");
    }
  };

  // Split PDF
  const splitPdf = async () => {
    try {
      if (!file) {
        alert("Please upload a PDF");
        return;
      }

      if (!startPage || !endPage) {
        alert("Enter page range");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      formData.append("startPage", startPage);

      formData.append("endPage", endPage);

      const response = await axios.post(
        `${API_BASE_URL}/pdf-api/split`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "split.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("PDF split failed");
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
          className="text-gray-400 hover:text-violet-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-4xl mb-5">
            ✂️
          </div>

          <h1 className="text-5xl font-black">PDF Split</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Split a PDF by page range instantly.
          </p>
        </div>

        {/* Main Box */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload */}
          <div>
            <label className="block text-lg font-semibold mb-4">
              Upload PDF
            </label>

            <label className="flex flex-col items-center justify-center h-[220px] rounded-[28px] border border-dashed border-violet-500/30 bg-[#0F172A] cursor-pointer hover:border-violet-500 transition">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={handleFileChange}
              />

              <span className="text-5xl">📄</span>

              <p className="mt-4 text-lg font-medium">Select PDF File</p>

              <p className="text-sm text-gray-500 mt-1">Only PDF allowed</p>
            </label>

            {file && (
              <div className="mt-4 rounded-2xl bg-[#0F172A] border border-white/10 p-4">
                <p className="font-medium">{file.name}</p>

                <p className="text-sm text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            )}
          </div>

          {/* Page Range */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Page Range</h2>

            <div className="grid grid-cols-2 gap-5">
              <input
                type="number"
                placeholder="Start Page"
                value={startPage}
                onChange={(e) => setStartPage(e.target.value)}
                className="h-14 rounded-2xl bg-[#0F172A] border border-white/10 px-5 outline-none focus:border-violet-500"
              />

              <input
                type="number"
                placeholder="End Page"
                value={endPage}
                onChange={(e) => setEndPage(e.target.value)}
                className="h-14 rounded-2xl bg-[#0F172A] border border-white/10 px-5 outline-none focus:border-violet-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={splitPdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Splitting..." : "Split PDF"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default PdfSplit;
