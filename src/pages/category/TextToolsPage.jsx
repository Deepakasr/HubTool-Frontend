import { useNavigate } from "react-router-dom";

const textTools = [
  {
    icon: "📝",
    name: "Word Counter",
    desc: "Count words instantly.",
    tag: "Text",
    route: "/text-tools/word-counter",
  },
  {
    icon: "🔠",
    name: "Character Counter",
    desc: "Count characters & letters.",
    tag: "Text",
    route: "/text-tools/character-counter",
  },
  {
    icon: "Aa",
    name: "Case Converter",
    desc: "UPPERCASE, lowercase, Title Case.",
    tag: "Converter",
    route: "/text-tools/case-converter",
  },
  {
    icon: "🔁",
    name: "Text Repeater",
    desc: "Repeat text multiple times.",
    tag: "Generator",
    route: "/text-tools/text-repeater",
  },
  {
    icon: "🧹",
    name: "Remove Extra Spaces",
    desc: "Clean unnecessary spaces.",
    tag: "Cleaner",
    route: "/text-tools/remove-spaces",
  },
  {
    icon: "📄",
    name: "Duplicate Line Remover",
    desc: "Remove duplicate text lines.",
    tag: "Cleaner",
    route: "/text-tools/remove-duplicates",
  },
  {
    icon: "📊",
    name: "Sort Text Lines",
    desc: "Sort text alphabetically.",
    tag: "Formatter",
    route: "/text-tools/sort-lines",
  },
  {
    icon: "↩️",
    name: "Reverse Text",
    desc: "Reverse text instantly.",
    tag: "Converter",
    route: "/text-tools/reverse-text",
  },
  {
    icon: "⬆️",
    name: "Uppercase Text",
    desc: "Convert to uppercase.",
    tag: "Converter",
    route: "/text-tools/uppercase",
  },
  {
    icon: "⬇️",
    name: "Lowercase Text",
    desc: "Convert to lowercase.",
    tag: "Converter",
    route: "/text-tools/lowercase",
  },
  {
    icon: "🔤",
    name: "Capitalize Text",
    desc: "Capitalize each word.",
    tag: "Converter",
    route: "/text-tools/capitalize",
  },
  {
    icon: "🔗",
    name: "Slug Generator",
    desc: "Create SEO friendly slug.",
    tag: "SEO",
    route: "/text-tools/slug-generator",
  },
  {
    icon: "📃",
    name: "Lorem Ipsum Generator",
    desc: "Generate placeholder text.",
    tag: "Generator",
    route: "/text-tools/lorem-generator",
  },
  {
    icon: "🔍",
    name: "Find & Replace",
    desc: "Replace text instantly.",
    tag: "Editor",
    route: "/text-tools/find-replace",
  },
  {
    icon: "⚖️",
    name: "Text Compare",
    desc: "Compare two texts.",
    tag: "Editor",
    route: "/text-tools/text-compare",
  },
  {
    icon: "📈",
    name: "Keyword Density",
    desc: "Analyze keyword frequency.",
    tag: "SEO",
    route: "/text-tools/keyword-density",
  },
  {
    icon: "⏱️",
    name: "Reading Time",
    desc: "Calculate reading time.",
    tag: "Text",
    route: "/text-tools/reading-time",
  },
  {
    icon: "🔐",
    name: "Text to Base64",
    desc: "Encode text to Base64.",
    tag: "Converter",
    route: "/text-tools/text-base64",
  },
  {
    icon: "🔓",
    name: "Base64 to Text",
    desc: "Decode Base64 text.",
    tag: "Converter",
    route: "/text-tools/base64-text",
  },
  {
    icon: "🌐",
    name: "URL Encoder",
    desc: "Encode URL text.",
    tag: "Converter",
    route: "/text-tools/url-encoder",
  },
];

const tagColors = {
  Text: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  Converter: "bg-purple-500/10 text-purple-400 border-purple-500/20",

  Generator: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

  Cleaner: "bg-red-500/10 text-red-400 border-red-500/20",

  Formatter: "bg-green-500/10 text-green-400 border-green-500/20",

  SEO: "bg-orange-500/10 text-orange-400 border-orange-500/20",

  Editor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

function TextToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-cyan-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Text Tools</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-3xl">
            📝
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Text Tools</h1>

            <p className="text-gray-400 text-sm">
              Powerful text editing utilities
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            20+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {textTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-cyan-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg">
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

                <button className="text-xs text-cyan-400 hover:text-cyan-300">
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

export default TextToolsPage;
