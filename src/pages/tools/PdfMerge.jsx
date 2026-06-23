import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function PdfMerge() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  // File Select
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Only PDF validation
    const pdfFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf",
    );

    setFiles((prev) => [...prev, ...pdfFiles]);
  };

  // Remove file
  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };
  // Merge PDFs
  const mergePdf = async () => {
    try {
      if (files.length < 2) {
        alert("Please select at least 2 PDF files");
        return;
      }

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        `${API_BASE_URL}/pdf-api/merge`,
        formData,
        {
          responseType: "blob",
        },
      );

      // Auto Download
      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", "merged.pdf");

      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      let errorMessage = "PDF merge failed";

      try {
        errorMessage = await error.response?.data?.text();
      } catch {}

      alert(errorMessage);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-8">
        <button
          onClick={() => navigate("/pdf-tools")}
          className="text-gray-400 hover:text-violet-400 transition"
        >
          ← Back to PDF Tools
        </button>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-violet-600/10 blur-[140px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
          <h1 className="text-[48px] md:text-[64px] font-extrabold tracking-[-2px]">
            PDF <span className="text-violet-500">Merge</span>
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Combine multiple PDFs into one file instantly.
          </p>

          <div className="mt-3 flex justify-center gap-4 text-sm text-gray-500">
            <span>⚡ Fast</span>
            <span>🔒 Secure</span>
            <span>🆓 Free</span>
          </div>
        </div>
      </section>

      {/* Upload Area */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="rounded-[30px] border border-dashed border-violet-500/30 bg-[#101827] p-10 text-center">
          <div className="text-6xl mb-5">📄</div>

          <h2 className="text-3xl font-bold">Upload PDF Files</h2>

          <p className="mt-3 text-gray-400">
            Drag & Drop PDF files here or select manually
          </p>

          <label className="inline-block mt-7 cursor-pointer">
            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="bg-violet-600 hover:bg-violet-700 transition px-7 py-4 rounded-2xl font-medium">
              Select PDF Files
            </div>
          </label>

          <p className="mt-4 text-sm text-gray-500">
            Only PDF files are allowed
          </p>
        </div>

        {/* Selected Files */}
        {files.length > 0 && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-5">Selected Files</h3>

            <div className="space-y-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-[#101827] border border-white/10 rounded-2xl p-5 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium">{file.name}</h4>

                    <p className="text-sm text-gray-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-500 transition"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* Merge Button */}
            <button
              onClick={mergePdf}
              className="mt-8 w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 transition py-4 rounded-2xl text-lg font-semibold"
            >
              Merge PDFs
            </button>
          </div>
        )}

        {/* Trust Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            ✔ Only PDF Files
          </div>

          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            ✔ Max Upload 50MB
          </div>

          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            ✔ Files Auto Deleted
          </div>
        </div>
      </section>
    </main>
  );
}

export default PdfMerge;
