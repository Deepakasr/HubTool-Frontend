import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function RotatePdf() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [angle, setAngle] = useState(90);

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

  // Rotate PDF
  const rotatePdf = async () => {
    try {
      if (!file) {
        alert("Please upload PDF");

        return;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);

      formData.append("angle", angle);

      const response = await axios.post(
        `${API_BASE_URL}/pdf/rotate`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "rotated.pdf");

      document.body.appendChild(link);

      link.click();
      link.remove();
    } catch (error) {
      console.error(error);

      alert("Failed to rotate PDF");
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
          className="text-gray-400 hover:text-teal-400 transition mb-8"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-4xl mb-5">
            🔄
          </div>

          <h1 className="text-5xl font-black">Rotate PDF</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Rotate PDF pages to the correct orientation.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-[32px] border border-white/10 bg-[#101827] p-8">
          {/* Upload Box */}
          <label className="flex flex-col items-center justify-center h-[240px] rounded-[28px] border border-dashed border-teal-500/30 bg-[#0F172A] cursor-pointer hover:border-teal-500 transition">
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <span className="text-6xl">📄</span>

            <p className="mt-5 text-xl font-semibold">Select PDF File</p>

            <p className="text-sm text-gray-500 mt-2">Upload PDF to rotate</p>
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

          {/* Rotation Angle */}
          <div className="mt-8">
            <label className="block text-sm text-gray-400 mb-3">
              Select Rotation Angle
            </label>

            <div className="grid grid-cols-3 gap-4">
              {[90, 180, 270].map((deg) => (
                <button
                  key={deg}
                  onClick={() => setAngle(deg)}
                  className={`h-14 rounded-2xl border font-semibold transition ${
                    angle === deg
                      ? "bg-teal-500 text-black border-teal-500"
                      : "bg-[#0F172A] border-white/10 hover:border-teal-500/40"
                  }`}
                >
                  {deg}°
                </button>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={rotatePdf}
            disabled={loading}
            className="w-full mt-8 h-14 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold text-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Rotating..." : `Rotate ${angle}°`}
          </button>
        </div>
      </div>
    </main>
  );
}

export default RotatePdf;
