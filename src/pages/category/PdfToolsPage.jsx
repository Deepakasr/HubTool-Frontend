import { useNavigate } from "react-router-dom";

const pdfTools = [
  {
    icon: "📄",
    color: "from-blue-600/30 to-blue-900/20 border-blue-500/30",
    name: "PDF Merge",
    desc: "Combine multiple PDF files into one single document easily.",
    tag: "Merge",
    route: "/pdf-tools/pdf-merge",
  },
  {
    icon: "✂️",
    color: "from-orange-500/30 to-orange-900/20 border-orange-500/30",
    name: "PDF Split",
    desc: "Split a large PDF into multiple smaller files by pages.",
    tag: "Split",
    route: "/pdf-tools/pdf-split",
  },
  {
    icon: "🗜️",
    color: "from-green-600/30 to-green-900/20 border-green-500/30",
    name: "PDF Compress",
    desc: "Reduce PDF file size without losing quality.",
    tag: "Compress",
    route: "/pdf-tools/pdf-compress",
  },
  {
    icon: "🖼️",
    color: "from-pink-600/30 to-pink-900/20 border-pink-500/30",
    name: "PDF to JPG",
    desc: "Convert PDF pages to high quality JPG images.",
    tag: "Convert",
    route: "/pdf-tools/pdf-to-jpg",
  },
  {
    icon: "🖼️",
    color: "from-purple-600/30 to-purple-900/20 border-purple-500/30",
    name: "JPG to PDF",
    desc: "Convert JPG, PNG images to a PDF document.",
    tag: "Convert",
    route: "/pdf-tools/jpg-to-pdf",
  },
  {
    icon: "🔒",
    color: "from-red-600/30 to-red-900/20 border-red-500/30",
    name: "Protect PDF",
    desc: "Add password protection to secure your PDF files.",
    tag: "Security",
    route: "/pdf-tools/protect-pdf",
  },
  {
    icon: "🔓",
    color: "from-yellow-500/30 to-yellow-900/20 border-yellow-500/30",
    name: "Unlock PDF",
    desc: "Remove password and restrictions from PDF files.",
    tag: "Security",
    route: "/pdf-tools/unlock-pdf",
  },
  {
    icon: "💧",
    color: "from-cyan-600/30 to-cyan-900/20 border-cyan-500/30",
    name: "Watermark PDF",
    desc: "Add text or image watermarks to your PDF pages.",
    tag: "Edit",
    route: "/pdf-tools/watermark-pdf",
  },
  {
    icon: "🔄",
    color: "from-teal-600/30 to-teal-900/20 border-teal-500/30",
    name: "Rotate PDF",
    desc: "Rotate PDF pages to the correct orientation.",
    tag: "Edit",
    route: "/pdf-tools/rotate-pdf",
  },
  {
    icon: "📑",
    color: "from-indigo-600/30 to-indigo-900/20 border-indigo-500/30",
    name: "Add Page Number",
    desc: "Automatically add page numbers to PDF documents.",
    tag: "Edit",
    route: "/pdf-tools/page-number-pdf",
  },
  {
    icon: "🗑️",
    color: "from-rose-600/30 to-rose-900/20 border-rose-500/30",
    name: "Remove Pages",
    desc: "Delete specific pages from your PDF document.",
    tag: "Edit",
    route: "/pdf-tools/remove-pages-pdf",
  },
  {
    icon: "📤",
    color: "from-amber-600/30 to-amber-900/20 border-amber-500/30",
    name: "Extract Pages",
    desc: "Extract selected pages into a new PDF file.",
    tag: "Extract",
    route: "/pdf-tools/extract-pages-pdf",
  },
  {
    icon: "📝",
    color: "from-blue-500/30 to-blue-900/20 border-blue-400/30",
    name: "Word to PDF",
    desc: "Convert Word (.doc, .docx) documents to PDF format.",
    tag: "Convert",
    route: "/pdf-tools/word-to-pdf",
  },
  {
    icon: "📕",
    color: "from-red-500/30 to-red-900/20 border-red-400/30",
    name: "PDF to Word",
    desc: "Convert PDF files to editable Word documents.",
    tag: "Convert",
    route: "/pdf-tools/pdf-to-word",
  },
  {
    icon: "📊",
    color: "from-green-500/30 to-green-900/20 border-green-400/30",
    name: "Excel to PDF",
    desc: "Convert Excel spreadsheets to PDF documents.",
    tag: "Convert",
    route: "/pdf-tools/excel-to-pdf",
  },
  {
    icon: "📽️",
    color: "from-orange-600/30 to-orange-900/20 border-orange-400/30",
    name: "PPT to PDF",
    desc: "Convert PowerPoint presentations to PDF format.",
    tag: "Convert",
    route: "/pdf-tools/ppt-to-pdf",
  },
  {
    icon: "🌐",
    color: "from-violet-600/30 to-violet-900/20 border-violet-500/30",
    name: "HTML to PDF",
    desc: "Convert any web page or HTML file to PDF.",
    tag: "Convert",
    route: "/pdf-tools/html-to-pdf",
  },
  {
    icon: "👀",
    color: "from-sky-600/30 to-sky-900/20 border-sky-500/30",
    name: "PDF Viewer",
    desc: "View, read and navigate PDF files online for free.",
    tag: "View",
    route: "/pdf-tools/pdf-viewer",
  },
];

const tagColors = {
  Merge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Split: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Compress: "bg-green-500/10 text-green-400 border-green-500/20",
  Convert: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Security: "bg-red-500/10 text-red-400 border-red-500/20",
  Edit: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Extract: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  View: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

function PdfToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-violet-400 transition flex items-center gap-1.5"
          >
            🏠 Home
          </button>

          <span className="text-gray-600">/</span>

          <span className="text-gray-300">PDF Tools</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-900/20 border border-blue-500/30 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/10 shrink-0">
            📄
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">PDF Tools</h1>

            <p className="text-gray-400 text-sm">
              All-in-one PDF toolkit — fast, free and secure
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            18 Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pdfTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-blue-500/30 hover:-translate-y-1 hover:bg-[#111a2e] hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)] transition-all duration-200 cursor-pointer"
            >
              <div
                className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${tool.color} border flex items-center justify-center text-lg`}
              >
                {tool.icon}
              </div>

              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition">
                    {tool.name}
                  </p>

                  <span
                    className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full border ${tagColors[tool.tag]}`}
                  >
                    {tool.tag}
                  </span>
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                  {tool.desc}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(tool.route);
                  }}
                  className="text-[11px] font-medium text-blue-400 hover:text-blue-300 transition"
                >
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

export default PdfToolsPage;
