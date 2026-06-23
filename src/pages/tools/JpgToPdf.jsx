import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function JpgToPdf() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const [loading, setLoading] = useState(false);

  // Select Images
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const validFiles = selectedFiles.filter((file) =>
      file.type.includes("image"),
    );

    if (validFiles.length === 0) {
      alert("Only JPG and PNG images allowed");
      return;
    }

    setFiles(validFiles);
  };

  // Remove image
  const removeFile = (index) => {
    const updatedFiles = [...files];

    updatedFiles.splice(index, 1);

    setFiles(updatedFiles);
  };

  // Convert
  const convertToPdf = async () => {
    try {
      if (files.length === 0) {
        alert("Please select images");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
      });

      const response = await axios.post(
        `${API_BASE_URL}/jpg-api/jpg-to-pdf`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(response.data);

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "converted.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("JPG to PDF conversion failed");
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
          className="text-gray-400 hover:text-purple-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-4xl mb-5">
            🖼️
          </div>

          <h1 className="text-5xl font-black">JPG to PDF</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Convert JPG & PNG images into a PDF instantly.
          </p>
        </div>

        {/* Upload Box */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-purple-500/30 bg-[#0F172A] cursor-pointer hover:border-purple-500 transition">
            <input
              type="file"
              multiple
              accept=".jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">🖼️</span>

            <p className="mt-5 text-xl font-semibold">Select Images</p>

            <p className="text-sm text-gray-500 mt-2">JPG & PNG only</p>
          </label>

          {/* Selected Files */}
          {files.length > 0 && (
            <div className="mt-6 space-y-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#0F172A] border border-white/10 p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{file.name}</p>

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
          )}

          {/* Convert Button */}
          <button
            onClick={convertToPdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Converting..." : "Convert to PDF"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default JpgToPdf;
