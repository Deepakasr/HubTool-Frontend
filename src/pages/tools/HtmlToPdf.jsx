import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function HtmlToPdf() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.name.endsWith(".html")) {
      setFile(selectedFile);
    } else {
      alert("Only HTML files allowed");
    }
  };

  const convertHtmlToPdf = async () => {
    try {
      if (!file) {
        alert("Please upload HTML file");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      const response = await axios.post(
        `${API_BASE_URL}/pdf/html-to-pdf`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "converted.pdf");

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.error(error);

      alert("HTML to PDF failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <button
          onClick={() => navigate("/pdf-tools")}
          className="text-gray-400 hover:text-violet-400 mb-8"
        >
          ← Back
        </button>

        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-4xl mb-5">
            🌐
          </div>

          <h1 className="text-5xl font-black">HTML to PDF</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Convert HTML files into PDF
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-violet-500/30 bg-[#0F172A] cursor-pointer">
            <input
              type="file"
              accept=".html"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">🌐</span>

            <p className="mt-5 text-xl font-semibold">Select HTML File</p>
          </label>

          {file && (
            <div className="mt-5 rounded-2xl bg-[#0F172A] border border-white/10 p-5">
              {file.name}
            </div>
          )}

          <button
            onClick={convertHtmlToPdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-violet-500 to-purple-500 font-semibold text-lg"
          >
            {loading ? "Converting..." : "Convert to PDF"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default HtmlToPdf;
