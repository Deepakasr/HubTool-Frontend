import { useNavigate } from "react-router-dom";

const audioTools = [
  {
    icon: "🎵",
    name: "Audio Converter",
    desc: "Convert MP3, WAV, AAC & more.",
    tag: "Convert",
    route: "/audio-tools/converter",
  },
  {
    icon: "✂️",
    name: "Audio Cutter",
    desc: "Trim and cut audio files.",
    tag: "Edit",
    route: "/audio-tools/cutter",
  },
  {
    icon: "🎼",
    name: "Merge Audio",
    desc: "Combine multiple audio files.",
    tag: "Edit",
    route: "/audio-tools/merge",
  },
  {
    icon: "📉",
    name: "Audio Compressor",
    desc: "Reduce audio file size.",
    tag: "Edit",
    route: "/audio-tools/compress",
  },
  {
    icon: "🔊",
    name: "Volume Booster",
    desc: "Increase audio loudness.",
    tag: "Edit",
    route: "/audio-tools/volume-booster",
  },
  {
    icon: "🔇",
    name: "Mute Audio",
    desc: "Remove sound from audio.",
    tag: "Edit",
    route: "/audio-tools/mute",
  },
  {
    icon: "🎤",
    name: "Voice Recorder",
    desc: "Record voice online.",
    tag: "Record",
    route: "/audio-tools/voice-recorder",
  },
  {
    icon: "🎙️",
    name: "Mic Test",
    desc: "Test microphone quality.",
    tag: "Record",
    route: "/audio-tools/mic-test",
  },
  {
    icon: "🧹",
    name: "Noise Remover",
    desc: "Remove background noise.",
    tag: "AI",
    route: "/audio-tools/noise-remover",
  },
  {
    icon: "🎧",
    name: "Bass Booster",
    desc: "Boost audio bass.",
    tag: "Effects",
    route: "/audio-tools/bass-booster",
  },
  {
    icon: "⚡",
    name: "Speed Changer",
    desc: "Increase or decrease speed.",
    tag: "Effects",
    route: "/audio-tools/speed",
  },
  {
    icon: "🎚️",
    name: "Audio Equalizer",
    desc: "Adjust audio frequencies.",
    tag: "Effects",
    route: "/audio-tools/equalizer",
  },
  {
    icon: "🎶",
    name: "Pitch Changer",
    desc: "Change voice pitch.",
    tag: "Effects",
    route: "/audio-tools/pitch",
  },
  {
    icon: "🗣️",
    name: "Text to Speech",
    desc: "Convert text into voice.",
    tag: "AI",
    route: "/audio-tools/text-to-speech",
  },
  {
    icon: "📝",
    name: "Speech to Text",
    desc: "Convert voice into text.",
    tag: "AI",
    route: "/audio-tools/speech-to-text",
  },
  {
    icon: "🎼",
    name: "Lyrics Generator",
    desc: "Generate lyrics with AI.",
    tag: "AI",
    route: "/audio-tools/lyrics-generator",
  },
  {
    icon: "🎹",
    name: "Audio Metadata",
    desc: "View audio file information.",
    tag: "Info",
    route: "/audio-tools/metadata",
  },
  {
    icon: "📻",
    name: "Podcast Editor",
    desc: "Edit podcast recordings.",
    tag: "Creator",
    route: "/audio-tools/podcast-editor",
  },
  {
    icon: "🎥",
    name: "Extract Audio",
    desc: "Extract MP3 from video.",
    tag: "Convert",
    route: "/audio-tools/extract-audio",
  },
  {
    icon: "🎛️",
    name: "Audio Mixer",
    desc: "Mix multiple audio tracks.",
    tag: "Creator",
    route: "/audio-tools/mixer",
  },
];

const tagColors = {
  Edit: "bg-red-500/10 text-red-400 border-red-500/20",
  Convert: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Record: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  AI: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Effects: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Creator: "bg-green-500/10 text-green-400 border-green-500/20",
  Info: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function AudioToolsPage() {
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

          <span className="text-gray-300">Audio Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/30 to-pink-900/20 border border-pink-500/30 flex items-center justify-center text-3xl">
            🎵
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Audio Tools</h1>

            <p className="text-gray-400 text-sm">
              Powerful online audio editing tools
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
          {audioTools.map((tool) => (
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

export default AudioToolsPage;
