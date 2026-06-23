import { useNavigate } from "react-router-dom";

const developerTools = [
  // FORMATTERS
  {
    icon: "{ }",
    name: "JSON Formatter",
    desc: "Format and validate JSON data.",
    tag: "Formatter",
    route: "/developer-tools/json-formatter",
  },
  {
    icon: "</>",
    name: "HTML Formatter",
    desc: "Beautify HTML code.",
    tag: "Formatter",
    route: "/developer-tools/html-formatter",
  },
  {
    icon: "🎨",
    name: "CSS Formatter",
    desc: "Format CSS instantly.",
    tag: "Formatter",
    route: "/developer-tools/css-formatter",
  },
  {
    icon: "⚡",
    name: "JavaScript Formatter",
    desc: "Beautify JavaScript code.",
    tag: "Formatter",
    route: "/developer-tools/js-formatter",
  },
  {
    icon: "☕",
    name: "Java Formatter",
    desc: "Format Java code.",
    tag: "Formatter",
    route: "/developer-tools/java-formatter",
  },
  {
    icon: "🐍",
    name: "Python Formatter",
    desc: "Format Python code.",
    tag: "Formatter",
    route: "/developer-tools/python-formatter",
  },
  {
    icon: "🗄️",
    name: "SQL Formatter",
    desc: "Beautify SQL queries.",
    tag: "Formatter",
    route: "/developer-tools/sql-formatter",
  },
  {
    icon: "📦",
    name: "XML Formatter",
    desc: "Format XML files.",
    tag: "Formatter",
    route: "/developer-tools/xml-formatter",
  },
  {
    icon: "📑",
    name: "YAML Formatter",
    desc: "Format YAML files.",
    tag: "Formatter",
    route: "/developer-tools/yaml-formatter",
  },

  // MINIFIERS
  {
    icon: "🧹",
    name: "HTML Minifier",
    desc: "Minify HTML code.",
    tag: "Formatter",
    route: "/developer-tools/html-minifier",
  },
  {
    icon: "🎨",
    name: "CSS Minifier",
    desc: "Minify CSS files instantly.",
    tag: "Formatter",
    route: "/developer-tools/css-minifier",
  },
  {
    icon: "⚡",
    name: "JS Minifier",
    desc: "Compress JavaScript code.",
    tag: "Formatter",
    route: "/developer-tools/js-minifier",
  },

  // ENCODERS
  {
    icon: "🔐",
    name: "Base64 Encoder",
    desc: "Encode Base64 text.",
    tag: "Encoder",
    route: "/developer-tools/base64-encoder",
  },
  {
    icon: "🔓",
    name: "Base64 Decoder",
    desc: "Decode Base64 text.",
    tag: "Encoder",
    route: "/developer-tools/base64-decoder",
  },
  {
    icon: "🌐",
    name: "URL Encoder",
    desc: "Encode URL text.",
    tag: "Encoder",
    route: "/developer-tools/url-encoder",
  },
  {
    icon: "🔗",
    name: "URL Decoder",
    desc: "Decode URL instantly.",
    tag: "Encoder",
    route: "/developer-tools/url-decoder",
  },

  // SECURITY
  {
    icon: "🔑",
    name: "JWT Decoder",
    desc: "Decode JWT tokens easily.",
    tag: "Security",
    route: "/developer-tools/jwt-decoder",
  },
  {
    icon: "🔒",
    name: "Password Generator",
    desc: "Generate strong passwords.",
    tag: "Security",
    route: "/developer-tools/password-generator",
  },
  {
    icon: "#",
    name: "Hash Generator",
    desc: "Generate MD5 & SHA256 hash.",
    tag: "Security",
    route: "/developer-tools/hash-generator",
  },

  // TESTING
  {
    icon: "🧩",
    name: "Regex Tester",
    desc: "Test regex patterns online.",
    tag: "Testing",
    route: "/developer-tools/regex-tester",
  },
  {
    icon: "📧",
    name: "Email Validator",
    desc: "Validate email address.",
    tag: "Testing",
    route: "/developer-tools/email-validator",
  },

  // GENERATORS
  {
    icon: "🆔",
    name: "UUID Generator",
    desc: "Generate unique UUIDs.",
    tag: "Generator",
    route: "/developer-tools/uuid-generator",
  },
  {
    icon: "📝",
    name: "Lorem Ipsum Generator",
    desc: "Generate placeholder text.",
    tag: "Generator",
    route: "/developer-tools/lorem-generator",
  },
  {
    icon: "🔗",
    name: "Slug Generator",
    desc: "Convert text into SEO slug.",
    tag: "Generator",
    route: "/developer-tools/slug-generator",
  },

  // TEXT TOOLS
  {
    icon: "Aa",
    name: "Case Converter",
    desc: "Convert uppercase/lowercase.",
    tag: "Text",
    route: "/developer-tools/case-converter",
  },
  {
    icon: "📊",
    name: "Character Counter",
    desc: "Count words & characters.",
    tag: "Text",
    route: "/developer-tools/character-counter",
  },
  {
    icon: "🧹",
    name: "Duplicate Line Remover",
    desc: "Remove duplicate text lines.",
    tag: "Text",
    route: "/developer-tools/remove-duplicates",
  },

  // COLOR TOOLS
  {
    icon: "🎨",
    name: "HEX to RGB",
    desc: "Convert HEX color.",
    tag: "Color",
    route: "/developer-tools/hex-rgb",
  },
  {
    icon: "🌈",
    name: "RGB to HEX",
    desc: "Convert RGB color.",
    tag: "Color",
    route: "/developer-tools/rgb-hex",
  },
  {
    icon: "✨",
    name: "Gradient Generator",
    desc: "Create CSS gradients.",
    tag: "Color",
    route: "/developer-tools/gradient-generator",
  },

  // BEGINNER FRIENDLY EDITORS
  {
    icon: "☕",
    name: "Java Editor",
    desc: "Write Java code online.",
    tag: "Editor",
    route: "/developer-tools/java-editor",
  },
  {
    icon: "🐍",
    name: "Python Editor",
    desc: "Write Python code.",
    tag: "Editor",
    route: "/developer-tools/python-editor",
  },
  {
    icon: "⚡",
    name: "JavaScript Editor",
    desc: "Write JS code instantly.",
    tag: "Editor",
    route: "/developer-tools/js-editor",
  },
  {
    icon: "🌐",
    name: "HTML Editor",
    desc: "Write HTML online.",
    tag: "Editor",
    route: "/developer-tools/html-editor",
  },
  {
    icon: "🎨",
    name: "CSS Editor",
    desc: "Edit CSS styles.",
    tag: "Editor",
    route: "/developer-tools/css-editor",
  },
];

const tagColors = {
  Formatter: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  Encoder: "bg-green-500/10 text-green-400 border-green-500/20",

  Generator: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

  Text: "bg-purple-500/10 text-purple-400 border-purple-500/20",

  Security: "bg-red-500/10 text-red-400 border-red-500/20",

  Testing: "bg-pink-500/10 text-pink-400 border-pink-500/20",

  Color: "bg-orange-500/10 text-orange-400 border-orange-500/20",

  Editor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

function DeveloperToolsPage() {
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

          <span className="text-gray-300">Developer Tools</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-3xl">
            💻
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Developer Tools</h1>

            <p className="text-gray-400 text-sm">
              Powerful coding & developer utilities
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            35+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {developerTools.map((tool) => (
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

export default DeveloperToolsPage;
