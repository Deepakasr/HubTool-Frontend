import { useNavigate } from "react-router-dom";

const designTools = [
  {
    icon: "🎨",
    name: "Color Palette Generator",
    desc: "Generate beautiful color palettes.",
    tag: "Color",
    route: "/design-tools/color-palette",
  },
  {
    icon: "🌈",
    name: "Gradient Generator",
    desc: "Create CSS gradients easily.",
    tag: "Color",
    route: "/design-tools/gradient-generator",
  },
  {
    icon: "🖌️",
    name: "Logo Maker",
    desc: "Create stunning logos.",
    tag: "Branding",
    premium: true,
    route: "/design-tools/logo-maker",
  },
  {
    icon: "🧩",
    name: "UI Mockup Builder",
    desc: "Design app & website mockups.",
    tag: "UI/UX",
    premium: true,
    route: "/design-tools/mockup-builder",
  },
  {
    icon: "📱",
    name: "App Icon Generator",
    desc: "Generate app icons instantly.",
    tag: "Mobile",
    route: "/design-tools/app-icon",
  },
  {
    icon: "🔤",
    name: "Font Pair Generator",
    desc: "Find matching font combinations.",
    tag: "Typography",
    route: "/design-tools/font-pair",
  },
  {
    icon: "🅰️",
    name: "Text Style Generator",
    desc: "Create stylish text designs.",
    tag: "Typography",
    route: "/design-tools/text-style",
  },
  {
    icon: "📐",
    name: "CSS Shadow Generator",
    desc: "Generate modern box shadows.",
    tag: "CSS",
    route: "/design-tools/shadow-generator",
  },
  {
    icon: "⭕",
    name: "Border Radius Generator",
    desc: "Create custom rounded shapes.",
    tag: "CSS",
    route: "/design-tools/border-radius",
  },
  {
    icon: "📦",
    name: "Glassmorphism Generator",
    desc: "Create glass UI effects.",
    tag: "UI/UX",
    route: "/design-tools/glassmorphism",
  },
  {
    icon: "✨",
    name: "Neumorphism Generator",
    desc: "Generate soft UI designs.",
    tag: "UI/UX",
    route: "/design-tools/neumorphism",
  },
  {
    icon: "📏",
    name: "Spacing Generator",
    desc: "Generate layout spacing.",
    tag: "UI/UX",
    route: "/design-tools/spacing",
  },
  {
    icon: "🖼️",
    name: "Background Generator",
    desc: "Create custom backgrounds.",
    tag: "Graphics",
    route: "/design-tools/background",
  },
  {
    icon: "🪄",
    name: "AI Banner Generator",
    desc: "Create banners using AI.",
    tag: "AI",
    premium: true,
    route: "/design-tools/banner-generator",
  },
  {
    icon: "🏷️",
    name: "Brand Kit Builder",
    desc: "Create colors, fonts & branding.",
    tag: "Branding",
    premium: true,
    route: "/design-tools/brand-kit",
  },
  {
    icon: "📐",
    name: "Wireframe Builder",
    desc: "Build UI wireframes quickly.",
    tag: "UI/UX",
    premium: true,
    route: "/design-tools/wireframe",
  },
  {
    icon: "🎭",
    name: "Design Inspiration",
    desc: "Get trending UI ideas.",
    tag: "UI/UX",
    route: "/design-tools/inspiration",
  },
  {
    icon: "📋",
    name: "Portfolio Builder",
    desc: "Create designer portfolios.",
    tag: "Career",
    premium: true,
    route: "/design-tools/portfolio",
  },
  {
    icon: "💡",
    name: "Creative Idea Generator",
    desc: "Get unique design ideas.",
    tag: "AI",
    premium: true,
    route: "/design-tools/design-ideas",
  },
  {
    icon: "🎯",
    name: "UX Checklist",
    desc: "Improve app user experience.",
    tag: "UI/UX",
    route: "/design-tools/ux-checklist",
  },
];

const tagColors = {
  Color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Branding: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "UI/UX": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Mobile: "bg-green-500/10 text-green-400 border-green-500/20",
  Typography: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Graphics: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  AI: "bg-red-500/10 text-red-400 border-red-500/20",
  Career: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

function DesignToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-pink-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Design Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/30 to-pink-900/20 border border-pink-500/30 flex items-center justify-center text-3xl">
            🎨
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Design Tools</h1>

            <p className="text-gray-400 text-sm">
              Creative tools for designers & creators
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium">
            20+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group relative flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-pink-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              {tool.premium && (
                <span className="absolute top-3 right-3 px-2 py-1 text-[10px] rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold">
                  👑 Premium
                </span>
              )}

              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-lg">
                {tool.icon}
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold">{tool.name}</p>

                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full border ${tagColors[tool.tag]}`}
                  >
                    {tool.tag}
                  </span>
                </div>

                <p className="text-xs text-gray-500">{tool.desc}</p>

                <button className="text-xs text-pink-400 hover:text-pink-300">
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

export default DesignToolsPage;
