import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../../config/api";

function AiImageGenerator() {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");

  const generateImage = async () => {
    if (!prompt.trim()) {
      alert("Enter Prompt");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
      return;
    }

    setLoading(true);
    setImageLoading(true);

    setImageUrl("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/ai/generate-image`,
        {
          prompt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setCurrentPrompt(prompt);

      setImageUrl(response.data + "?t=" + Date.now());
    } catch (error) {
      console.error(error);

      alert("Image Generation Failed");

      setImageLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="relative mb-14">
          <button
            onClick={() => navigate("/ai-tools")}
            className="
              absolute
              left-0
              top-0
              px-5
              py-3
              rounded-xl
              bg-white/5
              border
              border-white/10
              hover:border-violet-500
              transition
            "
          >
            ← Back
          </button>

          <div className="text-center">
            <h1 className="text-6xl font-black mb-4">AI Image Generator</h1>

            <p className="text-xl text-slate-400">
              Generate stunning AI images from text prompts.
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#0F172A] border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Prompt */}
          <div>
            <label className="block mb-3 text-slate-400">
              Describe your image
            </label>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={5}
              placeholder="Example: A futuristic cyberpunk city at night with neon lights"
              className="
                w-full
                bg-[#111827]
                border
                border-white/10
                rounded-2xl
                p-5
                outline-none
                focus:border-violet-500
              "
            />
          </div>

          {/* Quick Prompts */}
          <div className="mt-8">
            <h3 className="font-bold mb-4">Quick Prompts</h3>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  setPrompt("A futuristic cyberpunk city at night")
                }
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Cyberpunk City
              </button>

              <button
                onClick={() =>
                  setPrompt("A majestic dragon flying above mountains")
                }
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Dragon
              </button>

              <button
                onClick={() =>
                  setPrompt("A luxury sports car in neon lighting")
                }
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Sports Car
              </button>

              <button
                onClick={() =>
                  setPrompt("A realistic astronaut walking on Mars")
                }
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
              >
                Astronaut
              </button>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateImage}
            disabled={loading}
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
            {loading ? "Requesting AI..." : "Generate Image"}
          </button>

          {/* Image Loading */}
          {imageLoading && (
            <div className="mt-10">
              <div className="bg-[#111827] border border-violet-500/20 rounded-3xl p-10 text-center">
                <div className="text-6xl animate-pulse mb-4">🎨</div>

                <h3 className="text-3xl font-bold">Rendering Image...</h3>

                <p className="text-slate-400 mt-3">
                  AI is generating your artwork.
                </p>
              </div>
            </div>
          )}

          {/* Result */}
          {imageUrl && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-5">Generated Image</h3>

              <div className="bg-black/20 rounded-3xl p-5 border border-white/10">
                <img
                  src={imageUrl}
                  alt="AI Generated"
                  onLoad={() => setImageLoading(false)}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                  "
                />

                <div className="mt-5">
                  <p className="text-slate-400 text-sm">Prompt Used</p>

                  <p className="mt-2 text-lg">{currentPrompt}</p>
                </div>
              </div>

              <a
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-5
                  inline-block
                  px-6
                  py-3
                  rounded-xl
                  bg-green-600
                  hover:bg-green-700
                "
              >
                Download Image
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AiImageGenerator;
