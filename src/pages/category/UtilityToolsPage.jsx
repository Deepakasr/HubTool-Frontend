import { useNavigate } from "react-router-dom";

const utilityTools = [
  {
    icon: "📱",
    name: "QR Code Generator",
    desc: "Generate QR codes instantly.",
    tag: "Generator",
    route: "/utility-tools/qr-generator",
  },
  {
    icon: "📦",
    name: "Barcode Generator",
    desc: "Create barcodes quickly.",
    tag: "Generator",
    route: "/utility-tools/barcode-generator",
  },
  {
    icon: "🔐",
    name: "Password Generator",
    desc: "Generate secure passwords.",
    tag: "Security",
    route: "/utility-tools/password-generator",
  },
  {
    icon: "🛡️",
    name: "Password Checker",
    desc: "Check password strength.",
    tag: "Security",
    route: "/utility-tools/password-checker",
  },
  {
    icon: "🆔",
    name: "UUID Generator",
    desc: "Generate unique UUIDs.",
    tag: "Generator",
    route: "/utility-tools/uuid-generator",
  },
  {
    icon: "🎲",
    name: "Random Number",
    desc: "Generate random numbers.",
    tag: "Generator",
    route: "/utility-tools/random-number",
  },
  {
    icon: "🎂",
    name: "Age Calculator",
    desc: "Calculate exact age.",
    tag: "Calculator",
    route: "/utility-tools/age-calculator",
  },
  {
    icon: "⚖️",
    name: "BMI Calculator",
    desc: "Calculate body BMI.",
    tag: "Calculator",
    route: "/utility-tools/bmi-calculator",
  },
  {
    icon: "💰",
    name: "EMI Calculator",
    desc: "Calculate loan EMI.",
    tag: "Finance",
    route: "/utility-tools/emi-calculator",
  },
  {
    icon: "📊",
    name: "Percentage Calculator",
    desc: "Calculate percentages.",
    tag: "Calculator",
    route: "/utility-tools/percentage-calculator",
  },
  {
    icon: "🧾",
    name: "GST Calculator",
    desc: "Calculate GST quickly.",
    tag: "Finance",
    route: "/utility-tools/gst-calculator",
  },
  {
    icon: "🏷️",
    name: "Discount Calculator",
    desc: "Find final discounted price.",
    tag: "Finance",
    route: "/utility-tools/discount-calculator",
  },
  {
    icon: "💱",
    name: "Currency Converter",
    desc: "Convert currencies.",
    tag: "Converter",
    route: "/utility-tools/currency-converter",
  },
  {
    icon: "📏",
    name: "Unit Converter",
    desc: "Convert units instantly.",
    tag: "Converter",
    route: "/utility-tools/unit-converter",
  },
  {
    icon: "🌍",
    name: "Time Zone Converter",
    desc: "Convert world times.",
    tag: "Time",
    route: "/utility-tools/timezone-converter",
  },
  {
    icon: "⏱️",
    name: "Stopwatch",
    desc: "Track time accurately.",
    tag: "Time",
    route: "/utility-tools/stopwatch",
  },
  {
    icon: "⏳",
    name: "Countdown Timer",
    desc: "Set countdown timer.",
    tag: "Time",
    route: "/utility-tools/countdown",
  },
  {
    icon: "⏰",
    name: "Alarm Clock",
    desc: "Set alarms online.",
    tag: "Time",
    route: "/utility-tools/alarm",
  },
  {
    icon: "📅",
    name: "Calendar",
    desc: "View calendar quickly.",
    tag: "Time",
    route: "/utility-tools/calendar",
  },
  {
    icon: "📆",
    name: "Date Difference",
    desc: "Find days between dates.",
    tag: "Time",
    route: "/utility-tools/date-difference",
  },
  {
    icon: "🍽️",
    name: "Tip Calculator",
    desc: "Split tips easily.",
    tag: "Calculator",
    route: "/utility-tools/tip-calculator",
  },
  {
    icon: "🌐",
    name: "IP Address Finder",
    desc: "Find your IP address.",
    tag: "Network",
    route: "/utility-tools/ip-finder",
  },
  {
    icon: "💻",
    name: "Device Info",
    desc: "Check device details.",
    tag: "System",
    route: "/utility-tools/device-info",
  },
  {
    icon: "🔊",
    name: "Text to Speech",
    desc: "Convert text into voice.",
    tag: "AI",
    route: "/utility-tools/text-to-speech",
  },
  {
    icon: "🎤",
    name: "Speech to Text",
    desc: "Convert speech to text.",
    tag: "AI",
    route: "/utility-tools/speech-to-text",
  },
];

const tagColors = {
  Generator: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",

  Security: "bg-red-500/10 text-red-400 border-red-500/20",

  Calculator: "bg-green-500/10 text-green-400 border-green-500/20",

  Finance: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

  Converter: "bg-purple-500/10 text-purple-400 border-purple-500/20",

  Time: "bg-pink-500/10 text-pink-400 border-pink-500/20",

  Network: "bg-orange-500/10 text-orange-400 border-orange-500/20",

  System: "bg-blue-500/10 text-blue-400 border-blue-500/20",

  AI: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

function UtilityToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-yellow-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Utility Tools</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600/30 to-orange-900/20 border border-yellow-500/30 flex items-center justify-center text-3xl">
            🛠️
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Utility Tools</h1>

            <p className="text-gray-400 text-sm">
              Everyday useful online tools
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
            25+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {utilityTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-yellow-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-lg">
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

                <button className="text-xs text-yellow-400 hover:text-yellow-300">
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

export default UtilityToolsPage;
