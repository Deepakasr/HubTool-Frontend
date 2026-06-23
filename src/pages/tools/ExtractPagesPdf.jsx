import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function ExtractPagesPdf() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [pages, setPages] = useState("");

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

  // Extract pages
  const extractPages = async () => {
    try {
      if (!file) {
        alert("Please upload PDF");

        return;
      }

      if (!pages.trim()) {
        alert("Please enter page numbers");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      formData.append("pages", pages);

      const response = await axios.post(
        `${API_BASE_URL}/pdf/extract-pages`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "extracted.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("Failed to extract pages");
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
          className="text-gray-400 hover:text-amber-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-4xl mb-5">
            📤
          </div>

          <h1 className="text-5xl font-black">Extract Pages</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Extract selected pages into a new PDF file.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload */}
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-amber-500/30 bg-[#0F172A] cursor-pointer hover:border-amber-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">📄</span>

            <p className="mt-5 text-xl font-semibold">Select PDF File</p>

            <p className="text-sm text-gray-500 mt-2">
              Upload PDF to extract pages
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

          {/* Page Input */}
          <div className="mt-6">
            <label className="block text-sm text-gray-400 mb-3">
              Page Numbers
            </label>

            <input
              type="text"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              placeholder="Example: 2,4,7"
              className="w-full h-14 rounded-2xl bg-[#0F172A] border border-white/10 px-5 outline-none focus:border-amber-500"
            />
          </div>

          {/* Info Box */}
          <div className="mt-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4">
            <p className="text-sm text-amber-300">
              Enter page numbers separated by commas. Example: 2,4,7
            </p>
          </div>

          {/* Button */}
          <button
            onClick={extractPages}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Extracting Pages..." : "Extract Pages"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ExtractPagesPdf;
