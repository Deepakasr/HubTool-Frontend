import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PdfCompress() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Only PDF files are allowed");
    }
  };

  const compressPdf = async () => {
    try {
      if (!file) {
        alert("Please upload a PDF");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axios.post(
        `${API_BASE_URL}/pdf-api/compress`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "compressed.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
      alert("Compression failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <button
          onClick={() => navigate("/pdf-tools")}
          className="text-gray-400 hover:text-violet-400 transition mb-8"
        >
          ← Back
        </button>

        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-4xl mb-5">
            🗜️
          </div>

          <h1 className="text-5xl font-black">PDF Compress</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Reduce PDF size instantly.
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          <label className="flex flex-col items-center justify-center h-[220px] rounded-[28px] border border-dashed border-green-500/30 bg-[#0F172A] cursor-pointer hover:border-green-500 transition">
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

          <button
            onClick={compressPdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Compressing..." : "Compress PDF"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default PdfCompress;
