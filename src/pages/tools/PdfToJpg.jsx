import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PdfToJpg() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  // File Select
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Only PDF files are allowed");
    }
  };

  // Convert PDF to JPG
  const convertPdf = async () => {
    try {
      if (!file) {
        alert("Please upload a PDF");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axios.post(
        `${API_BASE_URL}/pdf-api/pdf-to-jpg`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "pdf-images.zip");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("PDF to JPG conversion failed");
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
          className="text-gray-400 hover:text-pink-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-4xl mb-5">
            🖼️
          </div>

          <h1 className="text-5xl font-black">PDF to JPG</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Convert PDF pages into high-quality JPG images.
          </p>
        </div>

        {/* Main Box */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload */}
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-pink-500/30 bg-[#0F172A] cursor-pointer hover:border-pink-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">📄</span>

            <p className="mt-5 text-xl font-semibold">Select PDF File</p>

            <p className="text-sm text-gray-500 mt-2">Only PDF allowed</p>
          </label>

          {/* Selected file */}
          {file && (
            <div className="mt-5 rounded-2xl bg-[#0F172A] border border-white/10 p-5 flex items-center justify-between">
              <div>
                <p className="font-medium">{file.name}</p>

                <p className="text-sm text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              <button
                onClick={() => setFile(null)}
                className="text-red-400 hover:text-red-500 transition"
              >
                ❌
              </button>
            </div>
          )}

          {/* Convert Button */}
          <button
            onClick={convertPdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert to JPG"}
          </button>

          {/* Info */}
          <div className="mt-6 text-sm text-gray-500 text-center">
            All pages will be exported in high quality JPG and downloaded as a
            ZIP file.
          </div>
        </div>
      </div>
    </main>
  );
}

export default PdfToJpg;
