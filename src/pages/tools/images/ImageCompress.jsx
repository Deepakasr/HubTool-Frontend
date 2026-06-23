import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../../config/api";

function ImageCompress() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [quality, setQuality] = useState(0.7);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const compressImage = async () => {
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("quality", quality);

      const response = await axios.post(
        `${API_BASE_URL}/image/compress`,
        formData,
        {
          responseType: "blob",
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;
      link.download = "compressed.jpg";

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.error(error);
      alert("Compression Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <button
            onClick={() => navigate("/image-tools")}
            className="mb-8 px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500 transition"
          >
            ← Back
          </button>

          <h1 className="text-6xl font-black mb-4">Image Compress</h1>

          <p className="text-xl text-slate-400">
            Compress JPG, PNG and WebP images instantly without losing quality.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-8 shadow-2xl">
            {/* Upload Area */}
            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                h-72
                border-2
                border-dashed
                border-violet-500/40
                rounded-3xl
                cursor-pointer
                hover:border-violet-500
                transition
              "
            >
              <div className="text-6xl mb-4">📷</div>

              <h3 className="text-2xl font-bold mb-2">Upload Image</h3>

              <p className="text-slate-400">Drag & Drop or Click to Browse</p>

              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </label>

            {/* Preview */}
            {preview && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Preview</h3>

                <div className="bg-black/20 rounded-3xl p-4">
                  <img
                    src={preview}
                    alt="preview"
                    className="
                      mx-auto
                      max-h-[400px]
                      rounded-2xl
                    "
                  />
                </div>
              </div>
            )}

            {/* Quality */}
            <div className="mt-10">
              <div className="flex justify-between mb-4">
                <span className="text-slate-300">Compression Quality</span>

                <span className="font-bold text-violet-400">
                  {Math.round(quality * 100)}%
                </span>
              </div>

              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Action Button */}
            <button
              onClick={compressImage}
              disabled={!file || loading}
              className="
                w-full
                h-16
                mt-10
                rounded-2xl
                bg-violet-600
                hover:bg-violet-700
                transition
                text-lg
                font-bold
                disabled:opacity-50
              "
            >
              {loading ? "Compressing..." : "Compress Image"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCompress;
