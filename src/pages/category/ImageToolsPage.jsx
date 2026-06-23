import { useNavigate } from "react-router-dom";

const imageTools = [
  {
    icon: "🗜️",
    color: "from-green-600/30 to-green-900/20 border-green-500/30",
    name: "Image Compress",
    route: "/image-tools/image-compress",
    desc: "Compress JPG, PNG, WebP images without losing quality.",
    tag: "Optimize",
  },
  {
    icon: "📏",
    color: "from-blue-600/30 to-blue-900/20 border-blue-500/30",
    name: "Resize Image",
    route: "/image-tools/image-resize",
    desc: "Resize image dimensions to custom width and height.",
    tag: "Edit",
  },
  {
    icon: "✂️",
    color: "from-orange-600/30 to-orange-900/20 border-orange-500/30",
    name: "Crop Image",
    desc: "Crop unwanted image areas quickly and easily.",
    tag: "Edit",
  },
  {
    icon: "🔄",
    color: "from-cyan-600/30 to-cyan-900/20 border-cyan-500/30",
    name: "Rotate Image",
    desc: "Rotate image to correct orientation.",
    tag: "Edit",
  },
  {
    icon: "↔️",
    color: "from-teal-600/30 to-teal-900/20 border-teal-500/30",
    name: "Flip Image",
    desc: "Flip image horizontally or vertically.",
    tag: "Edit",
  },
  {
    icon: "🔁",
    color: "from-purple-600/30 to-purple-900/20 border-purple-500/30",
    name: "Image Converter",
    desc: "Convert JPG, PNG, WEBP, BMP and GIF formats.",
    tag: "Convert",
  },
  {
    icon: "🖼️",
    color: "from-pink-600/30 to-pink-900/20 border-pink-500/30",
    name: "JPG to PNG",
    desc: "Convert JPG image into PNG format.",
    tag: "Convert",
  },
  {
    icon: "📷",
    color: "from-red-600/30 to-red-900/20 border-red-500/30",
    name: "PNG to JPG",
    desc: "Convert PNG image into JPG format.",
    tag: "Convert",
  },
  {
    icon: "🌐",
    color: "from-violet-600/30 to-violet-900/20 border-violet-500/30",
    name: "WEBP to JPG",
    desc: "Convert WEBP image into JPG.",
    tag: "Convert",
  },
  {
    icon: "📦",
    color: "from-indigo-600/30 to-indigo-900/20 border-indigo-500/30",
    name: "JPG to WEBP",
    desc: "Convert JPG image into WEBP format.",
    tag: "Convert",
  },
  {
    icon: "📄",
    color: "from-sky-600/30 to-sky-900/20 border-sky-500/30",
    name: "Image to PDF",
    desc: "Convert images into PDF document.",
    tag: "Convert",
  },
  {
    icon: "💧",
    color: "from-cyan-600/30 to-cyan-900/20 border-cyan-500/30",
    name: "Watermark Image",
    desc: "Add text or image watermark.",
    tag: "Edit",
  },
  {
    icon: "📝",
    color: "from-amber-600/30 to-amber-900/20 border-amber-500/30",
    name: "Add Text",
    desc: "Add custom text on image.",
    tag: "Edit",
  },
  {
    icon: "🎨",
    color: "from-rose-600/30 to-rose-900/20 border-rose-500/30",
    name: "Image Filters",
    desc: "Apply black & white, sepia and more filters.",
    tag: "Edit",
  },
  {
    icon: "☀️",
    color: "from-yellow-600/30 to-yellow-900/20 border-yellow-500/30",
    name: "Brightness & Contrast",
    desc: "Adjust image brightness and contrast.",
    tag: "Edit",
  },
  {
    icon: "🧹",
    color: "from-emerald-600/30 to-emerald-900/20 border-emerald-500/30",
    name: "Remove Background",
    desc: "Remove image background automatically.",
    tag: "AI",
  },
  {
    icon: "📊",
    color: "from-lime-600/30 to-lime-900/20 border-lime-500/30",
    name: "Image Size Reducer",
    desc: "Reduce image MB/KB size.",
    tag: "Optimize",
  },
  {
    icon: "🚀",
    color: "from-fuchsia-600/30 to-fuchsia-900/20 border-fuchsia-500/30",
    name: "Image Upscaler",
    desc: "Increase image quality and resolution.",
    tag: "AI",
  },
  {
    icon: "👀",
    color: "from-sky-600/30 to-sky-900/20 border-sky-500/30",
    name: "Image Viewer",
    desc: "View image online instantly.",
    tag: "View",
  },
  {
    icon: "📌",
    color: "from-orange-600/30 to-orange-900/20 border-orange-500/30",
    name: "Image Metadata",
    desc: "View EXIF and metadata details.",
    tag: "Utility",
  },
];

const tagColors = {
  Convert: "bg-purple-500/10 text-purple-400 border-purple-500/20",

  Edit: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  Optimize: "bg-green-500/10 text-green-400 border-green-500/20",

  AI: "bg-pink-500/10 text-pink-400 border-pink-500/20",

  View: "bg-sky-500/10 text-sky-400 border-sky-500/20",

  Utility: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

function ImageToolsPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-violet-400 transition flex items-center gap-1.5"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Image Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/30 to-pink-900/20 border border-pink-500/30 flex items-center justify-center text-3xl">
            🖼️
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Image Tools</h1>

            <p className="text-gray-400 text-sm">
              Powerful image editing, conversion and optimization tools
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm">
            24+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      {/* Tools Grid */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {imageTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-pink-500/30 hover:-translate-y-1 hover:bg-[#111a2e] transition-all duration-200 cursor-pointer"
            >
              <div
                className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${tool.color} border flex items-center justify-center text-lg`}
              >
                {tool.icon}
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-sm font-semibold text-white">
                    {tool.name}
                  </p>

                  <span
                    className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full border ${tagColors[tool.tag]}`}
                  >
                    {tool.tag}
                  </span>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  {tool.desc}
                </p>

                <button className="text-[11px] font-medium text-pink-400 hover:text-pink-300 transition">
                  Use Tool →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageToolsPage;
