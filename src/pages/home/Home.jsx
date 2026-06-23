const categories = [
  {
    icon: "🤖",
    title: "AI Tools",
    route: "/ai-tools",
    count: "40+ Tools",
    color: "from-fuchsia-600/30 to-fuchsia-900/20 border-fuchsia-500/20",
  },
  {
    icon: "📄",
    title: "PDF Tools",
    count: "18+ Tools",
    color: "from-blue-600/30 to-blue-900/20 border-blue-500/20",
    route: "pdf-tools",
  },
  {
    icon: "🖼️",
    title: "Image Tools",
    route: "/image-tools",
    count: "24+ Tools",
    color: "from-green-600/30 to-green-900/20 border-green-500/20",
  },
  {
    icon: "💻",
    title: "Developer Tools",
    route: "/developer-tools",
    count: "30+ Tools",
    color: "from-cyan-600/30 to-cyan-900/20 border-cyan-500/20",
  },
  {
    icon: "📝",
    title: "Text Tools",
    route: "/text-tools",
    count: "20+ Tools",

    color: "from-orange-500/30 to-orange-900/20 border-orange-500/20",
  },
  {
    icon: "🌐",
    title: "Social Tools",
    route: "/social-tools",
    count: "15+ Tools",
    color: "from-pink-600/30 to-pink-900/20 border-pink-500/20",
  },
  {
    icon: "⚡",
    title: "Utility Tools",
    route: "/utility-tools",
    count: "25+ Tools",
    color: "from-teal-600/30 to-teal-900/20 border-teal-500/20",
  },
  {
    icon: "🎥",
    title: "Video Tools",
    route: "/video-tools",
    count: "20+ Tools",
    color: "from-red-600/30 to-red-900/20 border-red-500/20",
  },

  {
    icon: "🎵",
    title: "Audio Tools",
    route: "/audio-tools",
    count: "20+ Tools",
    color: "from-pink-600/30 to-pink-900/20 border-pink-500/20",
  },

  {
    icon: "🏢",
    title: "Office Tools",
    route: "/office-tools",
    count: "25+ Tools",
    color: "from-indigo-600/30 to-indigo-900/20 border-indigo-500/20",
  },

  {
    icon: "🎓",
    title: "Student Tools",
    route: "/student-tools",
    count: "20+ Tools",
    color: "from-emerald-600/30 to-emerald-900/20 border-emerald-500/20",
  },
  {
    icon: "🎨",
    title: "Design Tools",
    route: "/design-tools",
    count: "20+ Tools",
    color: "from-yellow-600/30 to-yellow-900/20 border-yellow-500/20",
  },
];

const popularTools = [
  {
    icon: "🗜️",
    iconBg: "bg-green-500/20 border-green-500/20",
    iconText: "text-green-400",
    title: "Image Compressor",
    desc: "Compress JPG, PNG, WebP images without losing quality.",
    linkColor: "text-green-400",
  },
  {
    icon: "📋",
    iconBg: "bg-orange-500/20 border-orange-500/20",
    iconText: "text-orange-400",
    title: "PDF Merge",
    desc: "Merge multiple PDF files into a single PDF file.",
    linkColor: "text-orange-400",
  },
  {
    icon: "{ }",
    iconBg: "bg-cyan-500/20 border-cyan-500/20",
    iconText: "text-cyan-400 font-mono text-xs",
    title: "JSON Formatter",
    desc: "Format and validate your JSON data instantly.",
    linkColor: "text-cyan-400",
  },
  {
    icon: "A",
    iconBg: "bg-violet-500/20 border-violet-500/20",
    iconText: "text-violet-400 font-bold",
    title: "Fancy Text Generator",
    desc: "Generate stylish and unique fancy text for social media.",
    linkColor: "text-violet-400",
  },
  {
    icon: "⬛",
    iconBg: "bg-yellow-500/20 border-yellow-500/20",
    iconText: "text-yellow-400",
    title: "QR Code Generator",
    desc: "Create custom QR codes for your text or links.",
    linkColor: "text-yellow-400",
  },
  {
    icon: "👤",
    iconBg: "bg-teal-500/20 border-teal-500/20",
    iconText: "text-teal-400",
    title: "Username Generator",
    desc: "Generate unique usernames for your apps and games.",
    linkColor: "text-teal-400",
  },
];

const recentTools = [
  { icon: "🗜️", name: "Image Compressor", time: "2 min ago" },
  { icon: "{ }", name: "JSON Formatter", time: "15 min ago" },
  { icon: "📄", name: "PDF to JPG", time: "1 hour ago" },
  { icon: "📝", name: "Text to Slug", time: "2 hours ago" },
  { icon: "⬛", name: "QR Code Generator", time: "Yesterday" },
];

const features = [
  {
    icon: "🛡️",
    title: "Fast & Secure",
    desc: "All tools are super fast and your files are 100% secure.",
  },
  {
    icon: "👍",
    title: "Easy to Use",
    desc: "Clean and simple interface designed for everyone.",
  },
  {
    icon: "🎁",
    title: "Always Free",
    desc: "Most of our tools are 100% free to use. No hidden fees.",
  },
  {
    icon: "👤",
    title: "No Registration",
    desc: "Use tools instantly without creating an account.",
  },
];

const trendingTools = [
  { name: "Image Compressor", count: "125K" },
  { name: "PDF to JPG", count: "98K" },
  { name: "JSON Formatter", count: "72K" },
  { name: "QR Code Generator", count: "61K" },
  { name: "Fancy Text Generator", count: "48K" },
];

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex flex-col justify-center pt-16 pb-14">
        {/* Purple glow blob */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-violet-700/20 blur-[130px] pointer-events-none" />

        <div className="relative z-10 w-full px-6 text-center">
          {/* Heading — forced 2-line structure */}
          <h1 className="font-extrabold leading-[1.08] tracking-[-2px]">
            <span className="block text-[56px] sm:text-[72px] lg:text-[88px] xl:text-[96px]">
              <span className="text-white">One Place. </span>
              <span className="text-violet-500">100+</span>
            </span>
            <span className="block text-[56px] sm:text-[72px] lg:text-[88px] xl:text-[96px] text-white">
              Powerful Tools.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-gray-400 text-lg">
            All the tools you need in one place. Fast, free and easy to use.
          </p>

          {/* Search bar */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-[680px] h-[64px] rounded-3xl border border-violet-500/50 bg-[#0c1322] flex items-center px-6 gap-3 shadow-[0_0_32px_rgba(139,92,246,0.18)]">
              <span className="text-gray-500 text-xl shrink-0">🔍</span>
              <input
                type="text"
                placeholder="Search a tool..."
                className="flex-1 bg-transparent outline-none text-base placeholder:text-gray-500 text-white"
              />
              <kbd className="shrink-0 bg-[#1a2540] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-lg font-mono">
                Ctrl K
              </kbd>
            </div>
          </div>

          {/* Popular searches */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-500">
            <span>Popular searches:</span>
            {[
              "Image Compressor",
              "PDF to JPG",
              "JSON Formatter",
              "Text to Slug",
              "QR Code",
            ].map((item) => (
              <button
                key={item}
                className="px-4 py-1.5 rounded-full bg-[#0c1322] border border-white/10 text-gray-300 text-xs hover:border-violet-500/40 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse by Categories ────────────────────────────────── */}
      <section
        className="max-w-[1400px] mx-auto px-6"
        style={{ marginBottom: "40px" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Browse by Categories
          </h2>
          <button className="text-sm text-gray-400 hover:text-white transition">
            View all categories →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              onClick={() => cat.route && navigate(cat.route)}
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.14] bg-[#101728] p-4 hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(139,92,246,0.15)] transition-all duration-200 cursor-pointer"
            >
              <div
                className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${cat.color} border flex items-center justify-center text-2xl`}
              >
                {cat.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-violet-300 transition leading-tight">
                  {cat.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Tools ─────────────────────────────────────── */}
      <section
        className="max-w-[1400px] mx-auto px-6"
        style={{ marginBottom: "60px" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Tools</h2>
          <button className="text-sm text-gray-400 hover:text-white transition">
            View all tools →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {popularTools.map((tool) => (
            <div
              key={tool.title}
              className="group flex flex-col rounded-2xl border border-white/[0.14] bg-[#101728] overflow-hidden hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(139,92,246,0.15)] transition-all duration-200 cursor-pointer"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 px-4 pt-4 pb-3">
                <div
                  className={`w-10 h-10 shrink-0 rounded-xl border ${tool.iconBg} flex items-center justify-center`}
                >
                  <span className={`text-base ${tool.iconText}`}>
                    {tool.icon}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white leading-tight">
                  {tool.title}
                </p>
              </div>
              {/* Divider */}
              <div className="h-px bg-white/[0.06] mx-4" />
              {/* Description + Link */}
              <div className="flex flex-col gap-3 px-4 py-3 flex-1">
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tool.desc}
                </p>
                <a
                  href="#"
                  className={`text-xs font-medium ${tool.linkColor} hover:underline mt-auto`}
                >
                  Use Tool →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom 3-column Section ───────────────────────────── */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recently Used Tools */}
          <div className="rounded-2xl border border-white/[0.14] bg-[#101728] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🕐</span>
              <h3 className="font-semibold text-white">Recently Used Tools</h3>
            </div>
            <div className="flex flex-col gap-3">
              {recentTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#1a2236] border border-white/10 flex items-center justify-center text-xs">
                      {tool.icon}
                    </div>
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{tool.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10">
              <a
                href="#"
                className="text-xs text-violet-400 hover:text-violet-300 transition"
              >
                — View All History →
              </a>
            </div>
          </div>

          {/* Why Choose ToolHub */}
          <div className="rounded-2xl border border-white/[0.14] bg-[#101728] p-6">
            <h3 className="text-xl font-bold text-white mb-1">
              Why Choose ToolHub?
            </h3>
            <div className="w-12 h-1 bg-violet-500 rounded-full mb-6" />
            <div className="grid grid-cols-2 gap-5">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1a2236] border border-white/10 flex items-center justify-center text-2xl">
                    {feat.icon}
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {feat.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Tools */}
          <div className="rounded-2xl border border-white/[0.14] bg-[#101728] p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg">🔥</span>
              <h3 className="font-semibold text-white">Trending Tools</h3>
            </div>
            <div className="flex flex-col gap-3">
              {trendingTools.map((tool, idx) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 w-4">
                      {idx + 1}.
                    </span>
                    <span className="text-sm text-gray-300">{tool.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{tool.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10">
              <a
                href="#"
                className="text-xs text-violet-400 hover:text-violet-300 transition"
              >
                — View All Trends →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#070b17]">
        <div className="max-w-[1400px] mx-auto px-6 h-[56px] flex items-center justify-between">
          <span className="text-xs text-gray-500">
            🕐 Made with ❤️ for everyone
          </span>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            {["About", "Privacy", "Terms", "API", "Sitemap"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-300 transition">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <a href="#" className="hover:text-white transition">
              𝕏
            </a>
            <a href="#" className="hover:text-white transition text-sm">
              ⚙
            </a>
            <a href="#" className="hover:text-white transition">
              💬
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
