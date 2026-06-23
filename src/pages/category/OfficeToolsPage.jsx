import { useNavigate } from "react-router-dom";
import { checkPremiumAccess } from "../../utils/premiumGuard";

const officeTools = [
  {
    icon: "📄",
    name: "Word to PDF",
    desc: "Convert Word documents into PDF.",
    tag: "PDF",
    route: "/office-tools/word-to-pdf",
  },
  {
    icon: "📊",
    name: "Excel to PDF",
    desc: "Convert Excel sheets to PDF.",
    tag: "PDF",
    route: "/office-tools/excel-to-pdf",
  },
  {
    icon: "📽️",
    name: "PPT to PDF",
    desc: "Convert PowerPoint into PDF.",
    tag: "PDF",
    route: "/office-tools/ppt-to-pdf",
  },
  {
    icon: "📄",
    name: "PDF to Word",
    desc: "Convert PDF into editable Word.",
    tag: "PDF",
    route: "/office-tools/pdf-to-word",
  },
  {
    icon: "📝",
    name: "Document Editor",
    desc: "Edit office documents online.",
    tag: "Edit",
    route: "/office-tools/document-editor",
  },
  {
    icon: "📋",
    name: "Resume Builder",
    desc: "Create professional resumes.",
    tag: "Career",
    premium: true,
    route: "/office-tools/resume-builder",
  },
  {
    icon: "💼",
    name: "Cover Letter Generator",
    desc: "Generate professional letters.",
    tag: "Career",
    premium: true,
    route: "/office-tools/cover-letter",
  },
  {
    icon: "📧",
    name: "Email Writer AI",
    desc: "Generate business emails.",
    tag: "AI",
    premium: true,
    route: "/office-tools/email-writer",
  },
  {
    icon: "🧾",
    name: "Invoice Generator",
    desc: "Create invoices instantly.",
    tag: "Business",
    route: "/office-tools/invoice",
  },
  {
    icon: "📑",
    name: "Meeting Notes",
    desc: "Write meeting notes easily.",
    tag: "Work",
    route: "/office-tools/meeting-notes",
  },
  {
    icon: "📌",
    name: "Task Manager",
    desc: "Manage office tasks.",
    tag: "Work",
    route: "/office-tools/task-manager",
  },
  {
    icon: "📅",
    name: "Attendance Sheet",
    desc: "Track attendance records.",
    tag: "HR",
    route: "/office-tools/attendance",
  },
  {
    icon: "💰",
    name: "Salary Calculator",
    desc: "Calculate employee salary.",
    tag: "Finance",
    route: "/office-tools/salary",
  },
  {
    icon: "📈",
    name: "Business Report Generator",
    desc: "Generate reports with AI.",
    tag: "AI",
    premium: true,
    route: "/office-tools/report-generator",
  },
  {
    icon: "🖋️",
    name: "E-Sign PDF",
    desc: "Sign documents digitally.",
    tag: "PDF",
    premium: true,
    route: "/office-tools/esign",
  },
  {
    icon: "📂",
    name: "File Converter",
    desc: "Convert office files format.",
    tag: "Convert",
    route: "/office-tools/file-converter",
  },
  {
    icon: "📚",
    name: "OCR Scanner",
    desc: "Convert image text into document.",
    tag: "AI",
    premium: true,
    route: "/office-tools/ocr",
  },
  {
    icon: "🔍",
    name: "Grammar Checker",
    desc: "Fix grammar mistakes.",
    tag: "AI",
    premium: true,
    route: "/office-tools/grammar",
  },
  {
    icon: "🌍",
    name: "Document Translator",
    desc: "Translate office files.",
    tag: "AI",
    premium: true,
    route: "/office-tools/translator",
  },
  {
    icon: "📖",
    name: "Summarize Document",
    desc: "Summarize long reports.",
    tag: "AI",
    premium: true,
    route: "/office-tools/summarizer",
  },
  {
    icon: "📦",
    name: "Zip Documents",
    desc: "Compress office files.",
    tag: "Utility",
    route: "/office-tools/zip",
  },
  {
    icon: "🔐",
    name: "Protect Document",
    desc: "Lock documents with password.",
    tag: "Security",
    route: "/office-tools/protect",
  },
  {
    icon: "📤",
    name: "Share File",
    desc: "Share office documents.",
    tag: "Utility",
    route: "/office-tools/share",
  },
  {
    icon: "📎",
    name: "Merge Documents",
    desc: "Merge multiple documents.",
    tag: "Utility",
    route: "/office-tools/merge-docs",
  },
  {
    icon: "📄",
    name: "Template Generator",
    desc: "Generate office templates.",
    tag: "Business",
    premium: true,
    route: "/office-tools/template-generator",
  },
];

const tagColors = {
  PDF: "bg-red-500/10 text-red-400 border-red-500/20",
  Edit: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Career: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  AI: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Business: "bg-green-500/10 text-green-400 border-green-500/20",
  Work: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  HR: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Finance: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Convert: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Utility: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  Security: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function OfficeToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate("/")}
            className="hover:text-red-400 transition"
          >
            🏠 Home
          </button>

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-indigo-900/20 border border-indigo-500/30 flex items-center justify-center text-3xl">
            🏢
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Office Tools</h1>

            <p className="text-gray-400 text-sm">
              Professional office productivity tools
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            25+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {officeTools.map((tool) => (
            <div
              key={tool.name}
              onClick={async () => {
                if (tool.premium) {
                  const allowed = await checkPremiumAccess(
                    "OFFICE",
                    tool.name,
                    navigate,
                  );

                  if (!allowed) return;
                }

                navigate(tool.route);
              }}
              className="group relative flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-indigo-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              {tool.premium && (
                <span className="absolute top-3 right-3 px-2 py-1 text-[10px] rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold">
                  👑 Premium
                </span>
              )}

              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-lg">
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

                <button className="text-xs text-indigo-400 hover:text-indigo-300">
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

export default OfficeToolsPage;
