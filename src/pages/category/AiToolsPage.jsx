import { useNavigate } from "react-router-dom";
import { checkPremiumAccess } from "../../utils/premiumGuard";

const aiTools = [
  {
    icon: "🤖",
    name: "AI Chat Assistant",
    desc: "ChatGPT style smart AI assistant.",
    tag: "Chat",
    premium: true,
    route: "/ai-tools/chat-assistant",
  },
  {
    icon: "✍️",
    name: "AI Content Writer",
    desc: "Generate blogs, posts & content.",
    tag: "Writing",
    premium: true,
    route: "/ai-tools/content-writer",
  },
  {
    icon: "📝",
    name: "AI Summarizer",
    desc: "Summarize long text instantly.",
    tag: "Writing",
    premium: true,
    route: "/ai-tools/summarizer",
  },
  {
    icon: "🔄",
    name: "AI Rewriter",
    desc: "Rewrite text smartly.",
    tag: "Writing",
    premium: true,
    route: "/ai-tools/rewriter",
  },
  {
    icon: "🌍",
    name: "AI Translator",
    desc: "Translate text instantly.",
    tag: "Writing",
    premium: true,
    route: "/ai-tools/translator",
  },
  {
    icon: "📚",
    name: "AI Essay Writer",
    desc: "Generate essays instantly.",
    tag: "Student",
    premium: true,
    route: "/ai-tools/essay-writer",
  },

  // IMAGE
  {
    icon: "🎨",
    name: "AI Image Generator",
    desc: "Generate AI images.",
    tag: "Image",
    premium: true,
    route: "/ai-tools/image-generator",
  },
  {
    icon: "🖼️",
    name: "Background Remover",
    desc: "Remove image background.",
    tag: "Image",
    premium: true,
    route: "/ai-tools/background-remover",
  },
  {
    icon: "✨",
    name: "AI Image Upscaler",
    desc: "Increase image quality.",
    tag: "Image",
    premium: true,
    route: "/ai-tools/image-upscaler",
  },
  {
    icon: "👤",
    name: "AI Avatar Generator",
    desc: "Generate avatars instantly.",
    tag: "Image",
    premium: true,
    route: "/ai-tools/avatar-generator",
  },
  {
    icon: "📸",
    name: "Thumbnail Generator",
    desc: "Generate thumbnails.",
    tag: "Image",
    premium: true,
    route: "/ai-tools/thumbnail-generator",
  },

  // FREE SOCIAL
  {
    icon: "📱",
    name: "Caption Generator",
    desc: "Generate captions.",
    tag: "Social",
    route: "/ai-tools/caption-generator",
  },
  {
    icon: "#️⃣",
    name: "Hashtag Generator",
    desc: "Generate hashtags.",
    tag: "Social",
    route: "/ai-tools/hashtag-generator",
  },
  {
    icon: "🎥",
    name: "YouTube Title Generator",
    desc: "Generate catchy titles.",
    tag: "Social",
    route: "/ai-tools/youtube-title",
  },

  // BUSINESS
  {
    icon: "📄",
    name: "Resume Builder",
    desc: "Generate smart resumes.",
    tag: "Business",
    premium: true,
    route: "/ai-tools/resume-builder",
  },
  {
    icon: "💼",
    name: "Cover Letter Writer",
    desc: "Generate cover letters.",
    tag: "Business",
    premium: true,
    route: "/ai-tools/cover-letter",
  },
  {
    icon: "📧",
    name: "Email Writer",
    desc: "Generate emails instantly.",
    tag: "Business",
    premium: true,
    route: "/ai-tools/email-writer",
  },

  // DEV
  {
    icon: "💻",
    name: "AI Code Generator",
    desc: "Generate code snippets.",
    tag: "Code",
    premium: true,
    route: "/ai-tools/code-generator",
  },
  {
    icon: "🐞",
    name: "Bug Fixer",
    desc: "Fix coding bugs.",
    tag: "Code",
    premium: true,
    route: "/ai-tools/bug-fixer",
  },
  {
    icon: "⚛️",
    name: "React Builder",
    desc: "Generate React components.",
    tag: "Code",
    premium: true,
    route: "/ai-tools/react-builder",
  },
];

const tagColors = {
  Chat: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Writing: "bg-green-500/10 text-green-400 border-green-500/20",
  Image: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Social: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Business: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Student: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Code: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

function AiToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-fuchsia-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">AI Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-600/30 to-fuchsia-900/20 border border-fuchsia-500/30 flex items-center justify-center text-3xl">
            🤖
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">AI Tools</h1>

            <p className="text-gray-400 text-sm">Smart AI powered tools</p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-medium">
            40+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              onClick={async () => {
                if (tool.premium) {
                  const allowed = await checkPremiumAccess(
                    "AI",
                    tool.name,
                    navigate,
                  );

                  if (!allowed) return;
                }

                navigate(tool.route);
              }}
              className={`group relative flex items-start gap-4 rounded-2xl border p-5 transition-all cursor-pointer hover:-translate-y-1

              ${
                tool.premium
                  ? "bg-gradient-to-br from-yellow-500/[0.08] to-[#0f1624] border-yellow-500/20 hover:border-yellow-400/40 shadow-[0_0_30px_rgba(234,179,8,0.08)]"
                  : "bg-[#0f1624] border-white/[0.10] hover:border-fuchsia-500/30"
              }`}
            >
              {/* PREMIUM BADGE */}
              {tool.premium && (
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full border border-yellow-400/30 bg-gradient-to-r from-yellow-500/20 to-amber-400/10 backdrop-blur-md shadow-lg">
                  <span className="text-yellow-300 text-xs">👑</span>

                  <span className="text-[10px] font-bold tracking-wide text-yellow-300 uppercase">
                    VIP
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl border

                ${
                  tool.premium
                    ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-300"
                    : "bg-fuchsia-500/10 border-fuchsia-500/20"
                }`}
              >
                {tool.icon}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold">{tool.name}</p>

                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full border ${tagColors[tool.tag]}`}
                  >
                    {tool.tag}
                  </span>
                </div>

                <p className="text-xs text-gray-400">{tool.desc}</p>

                <button
                  className={`text-xs font-medium ${
                    tool.premium
                      ? "text-yellow-300 hover:text-yellow-200"
                      : "text-fuchsia-400 hover:text-fuchsia-300"
                  }`}
                >
                  {tool.premium ? "Unlock Premium →" : "Use Tool →"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AiToolsPage;
