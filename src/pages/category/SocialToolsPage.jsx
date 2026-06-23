import { useNavigate } from "react-router-dom";

const socialTools = [
  {
    icon: "#️⃣",
    name: "Hashtag Generator",
    desc: "Generate trending hashtags.",
    tag: "Growth",
    route: "/social-tools/hashtag-generator",
  },
  {
    icon: "✍️",
    name: "Caption Generator",
    desc: "Create social captions.",
    tag: "Content",
    route: "/social-tools/caption-generator",
  },
  {
    icon: "👤",
    name: "Bio Generator",
    desc: "Generate stylish bios.",
    tag: "Profile",
    route: "/social-tools/bio-generator",
  },
  {
    icon: "@",
    name: "Username Generator",
    desc: "Find unique usernames.",
    tag: "Profile",
    route: "/social-tools/username-generator",
  },
  {
    icon: "▶️",
    name: "YouTube Title Generator",
    desc: "Generate catchy video titles.",
    tag: "YouTube",
    route: "/social-tools/youtube-title",
  },
  {
    icon: "📺",
    name: "YouTube Description",
    desc: "Generate descriptions.",
    tag: "YouTube",
    route: "/social-tools/youtube-description",
  },
  {
    icon: "📸",
    name: "Instagram Caption",
    desc: "Create Insta captions.",
    tag: "Instagram",
    route: "/social-tools/instagram-caption",
  },
  {
    icon: "🎵",
    name: "TikTok Caption",
    desc: "Create TikTok captions.",
    tag: "TikTok",
    route: "/social-tools/tiktok-caption",
  },
  {
    icon: "🐦",
    name: "Tweet Generator",
    desc: "Generate viral tweets.",
    tag: "Twitter",
    route: "/social-tools/tweet-generator",
  },
  {
    icon: "😍",
    name: "Emoji Text Generator",
    desc: "Add emojis to text.",
    tag: "Content",
    route: "/social-tools/emoji-text",
  },
  {
    icon: "✨",
    name: "Fancy Text Generator",
    desc: "Generate stylish text.",
    tag: "Content",
    route: "/social-tools/fancy-text",
  },
  {
    icon: "📝",
    name: "Post Formatter",
    desc: "Format social posts.",
    tag: "Content",
    route: "/social-tools/post-formatter",
  },
  {
    icon: "🔥",
    name: "Trending Hashtags",
    desc: "Find trending hashtags.",
    tag: "Growth",
    route: "/social-tools/trending-hashtags",
  },
  {
    icon: "🔗",
    name: "Link Shortener",
    desc: "Shorten long links.",
    tag: "Utility",
    route: "/social-tools/link-shortener",
  },
  {
    icon: "📱",
    name: "QR Code Generator",
    desc: "Create QR codes instantly.",
    tag: "Utility",
    route: "/social-tools/qr-generator",
  },
  {
    icon: "📈",
    name: "Engagement Calculator",
    desc: "Calculate engagement rate.",
    tag: "Growth",
    route: "/social-tools/engagement-calculator",
  },
];

const tagColors = {
  Growth: "bg-green-500/10 text-green-400 border-green-500/20",

  Content: "bg-purple-500/10 text-purple-400 border-purple-500/20",

  Profile: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  YouTube: "bg-red-500/10 text-red-400 border-red-500/20",

  Instagram: "bg-pink-500/10 text-pink-400 border-pink-500/20",

  TikTok: "bg-white/10 text-white border-white/20",

  Twitter: "bg-sky-500/10 text-sky-400 border-sky-500/20",

  Utility: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
};

function SocialToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-pink-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Social Tools</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/30 to-purple-900/20 border border-pink-500/30 flex items-center justify-center text-3xl">
            📱
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Social Tools</h1>

            <p className="text-gray-400 text-sm">
              Tools for creators & social growth
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium">
            15+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-pink-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-lg">
                {tool.icon}
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2">
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

export default SocialToolsPage;
