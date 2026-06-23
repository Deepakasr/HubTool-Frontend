import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../../config/api";

function ImageResize() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const resizeImage = async () => {
    if (!file) {
      alert("Select Image First");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please Login First");
      navigate("/auth");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("width", width);
      formData.append("height", height);

      const response = await axios.post(
        `${API_BASE_URL}/image/resize`,
        formData,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;
      link.download = "resized-image.jpg";

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (error) {
      console.error(error);
      alert("Resize Failed");
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
            className="mb-8 px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500 transition"
          >
            ← Back
          </button>

          <h1 className="text-6xl font-black mb-4">Image Resize</h1>

          <p className="text-xl text-slate-400">
            Resize image dimensions instantly without losing quality.
          </p>
        </div>

        {/* Main Card */}
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
              border-blue-500/40
              rounded-3xl
              cursor-pointer
              hover:border-blue-500
              transition
            "
          >
            <div className="text-6xl mb-4">🖼️</div>

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
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Preview</h3>

              <div className="bg-black/20 rounded-3xl p-4">
                <img
                  src={preview}
                  alt="preview"
                  className="mx-auto max-h-[400px] rounded-2xl"
                />
              </div>
            </div>
          )}

          {/* Quick Presets */}
          <div className="mt-10">
            <h3 className="font-bold mb-4">Quick Presets</h3>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  setWidth(1920);
                  setHeight(1080);
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Full HD
              </button>

              <button
                onClick={() => {
                  setWidth(1280);
                  setHeight(720);
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                HD
              </button>

              <button
                onClick={() => {
                  setWidth(800);
                  setHeight(600);
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                800×600
              </button>
            </div>
          </div>

          {/* Dimensions */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div>
              <label className="block mb-3 text-slate-400">Width (px)</label>

              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="
                  w-full
                  h-14
                  px-4
                  rounded-2xl
                  bg-[#111827]
                  border
                  border-white/10
                "
              />
            </div>

            <div>
              <label className="block mb-3 text-slate-400">Height (px)</label>

              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="
                  w-full
                  h-14
                  px-4
                  rounded-2xl
                  bg-[#111827]
                  border
                  border-white/10
                "
              />
            </div>
          </div>

          {/* Stats */}
          {file && (
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-black/20 rounded-2xl p-5">
                <p className="text-slate-400 text-sm">File Name</p>

                <h4 className="font-bold mt-2 break-all">{file.name}</h4>
              </div>

              <div className="bg-black/20 rounded-2xl p-5">
                <p className="text-slate-400 text-sm">Current Size</p>

                <h4 className="font-bold mt-2">
                  {(file.size / 1024).toFixed(2)} KB
                </h4>
              </div>

              <div className="bg-black/20 rounded-2xl p-5">
                <p className="text-slate-400 text-sm">New Resolution</p>

                <h4 className="font-bold mt-2">
                  {width} × {height}
                </h4>
              </div>
            </div>
          )}

          {/* Resize Button */}
          <button
            onClick={resizeImage}
            disabled={loading || !file}
            className="
              w-full
              h-16
              mt-10
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              transition
              text-lg
              font-bold
              disabled:opacity-50
            "
          >
            {loading ? "Resizing..." : "Resize Image"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageResize;
