import { useNavigate } from "react-router-dom";

const studentTools = [
  {
    icon: "📝",
    name: "AI Notes Generator",
    desc: "Generate study notes instantly.",
    tag: "AI",
    premium: true,
    route: "/student-tools/notes-generator",
  },
  {
    icon: "📚",
    name: "Homework Solver",
    desc: "Solve homework problems.",
    tag: "Study",
    premium: true,
    route: "/student-tools/homework-solver",
  },
  {
    icon: "🧠",
    name: "Quiz Generator",
    desc: "Generate quizzes from topics.",
    tag: "Exam",
    route: "/student-tools/quiz-generator",
  },
  {
    icon: "📖",
    name: "Flashcards Maker",
    desc: "Create smart flashcards.",
    tag: "Study",
    route: "/student-tools/flashcards",
  },
  {
    icon: "🎯",
    name: "Exam Planner",
    desc: "Plan your exam schedule.",
    tag: "Planner",
    route: "/student-tools/exam-planner",
  },
  {
    icon: "📅",
    name: "Study Timetable",
    desc: "Build a smart study routine.",
    tag: "Planner",
    route: "/student-tools/timetable",
  },
  {
    icon: "⏰",
    name: "Pomodoro Timer",
    desc: "Focus timer for study sessions.",
    tag: "Focus",
    route: "/student-tools/pomodoro",
  },
  {
    icon: "📊",
    name: "CGPA Calculator",
    desc: "Calculate GPA / CGPA easily.",
    tag: "Calculator",
    route: "/student-tools/cgpa",
  },
  {
    icon: "🧮",
    name: "Scientific Calculator",
    desc: "Advanced math calculator.",
    tag: "Calculator",
    route: "/student-tools/scientific-calculator",
  },
  {
    icon: "➗",
    name: "Math Solver",
    desc: "Solve equations instantly.",
    tag: "Math",
    premium: true,
    route: "/student-tools/math-solver",
  },
  {
    icon: "🌍",
    name: "Language Translator",
    desc: "Translate study content.",
    tag: "Language",
    route: "/student-tools/translator",
  },
  {
    icon: "🎤",
    name: "Speech to Notes",
    desc: "Convert speech into notes.",
    tag: "AI",
    premium: true,
    route: "/student-tools/speech-notes",
  },
  {
    icon: "📑",
    name: "Summary Generator",
    desc: "Summarize long chapters.",
    tag: "AI",
    premium: true,
    route: "/student-tools/summarizer",
  },
  {
    icon: "🔍",
    name: "Grammar Checker",
    desc: "Fix writing mistakes.",
    tag: "Writing",
    route: "/student-tools/grammar",
  },
  {
    icon: "✍️",
    name: "Essay Writer",
    desc: "Generate essays with AI.",
    tag: "AI",
    premium: true,
    route: "/student-tools/essay-writer",
  },
  {
    icon: "💡",
    name: "Idea Generator",
    desc: "Get project ideas instantly.",
    tag: "Project",
    route: "/student-tools/project-ideas",
  },
  {
    icon: "💻",
    name: "Code Compiler",
    desc: "Run beginner coding online.",
    tag: "Coding",
    route: "/student-tools/compiler",
  },
  {
    icon: "🐍",
    name: "Python Practice",
    desc: "Practice Python basics.",
    tag: "Coding",
    route: "/student-tools/python-practice",
  },
  {
    icon: "☕",
    name: "Java Practice",
    desc: "Practice Java coding.",
    tag: "Coding",
    route: "/student-tools/java-practice",
  },
  {
    icon: "📈",
    name: "Progress Tracker",
    desc: "Track study progress.",
    tag: "Planner",
    route: "/student-tools/progress",
  },
];

const tagColors = {
  AI: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Study: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Exam: "bg-red-500/10 text-red-400 border-red-500/20",
  Planner: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Focus: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Calculator: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Math: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Language: "bg-green-500/10 text-green-400 border-green-500/20",
  Writing: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Project: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Coding: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

function StudentToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-cyan-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Student Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-900/20 border border-cyan-500/30 flex items-center justify-center text-3xl">
            🎓
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Student Tools</h1>

            <p className="text-gray-400 text-sm">
              Smart tools for students & learning
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            20+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {studentTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group relative flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-cyan-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              {tool.premium && (
                <span className="absolute top-3 right-3 px-2 py-1 text-[10px] rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold">
                  👑 Premium
                </span>
              )}

              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg">
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

export default StudentToolsPage;
