import { useNavigate } from "react-router-dom";

const videoTools = [
  {
    icon: "🎥",
    name: "Video Compressor",
    desc: "Compress video size without losing quality.",
    tag: "Edit",
    route: "/video-tools/compress",
  },
  {
    icon: "✂️",
    name: "Video Trimmer",
    desc: "Cut and trim video clips easily.",
    tag: "Edit",
    route: "/video-tools/trimmer",
  },
  {
    icon: "🎬",
    name: "Merge Video",
    desc: "Combine multiple videos into one.",
    tag: "Edit",
    route: "/video-tools/merge",
  },
  {
    icon: "🔄",
    name: "Video Converter",
    desc: "Convert MP4, AVI, MOV & more.",
    tag: "Convert",
    route: "/video-tools/converter",
  },
  {
    icon: "🎞️",
    name: "Video to GIF",
    desc: "Convert videos into GIF animations.",
    tag: "Convert",
    route: "/video-tools/video-to-gif",
  },
  {
    icon: "🎵",
    name: "Extract Audio",
    desc: "Extract MP3 audio from videos.",
    tag: "Audio",
    route: "/video-tools/extract-audio",
  },
  {
    icon: "💧",
    name: "Add Watermark",
    desc: "Protect videos with watermark.",
    tag: "Edit",
    route: "/video-tools/watermark",
  },
  {
    icon: "🖼️",
    name: "Thumbnail Generator",
    desc: "Create thumbnails for videos.",
    tag: "Creator",
    route: "/video-tools/thumbnail",
  },
  {
    icon: "📱",
    name: "Resize Video",
    desc: "Resize videos for social media.",
    tag: "Edit",
    route: "/video-tools/resize",
  },
  {
    icon: "⚡",
    name: "Speed Controller",
    desc: "Increase or decrease video speed.",
    tag: "Edit",
    route: "/video-tools/speed",
  },
  {
    icon: "🔇",
    name: "Mute Video",
    desc: "Remove sound from video.",
    tag: "Audio",
    route: "/video-tools/mute",
  },
  {
    icon: "🎤",
    name: "Add Audio to Video",
    desc: "Add music or voice to videos.",
    tag: "Audio",
    route: "/video-tools/add-audio",
  },
  {
    icon: "📐",
    name: "Crop Video",
    desc: "Crop unwanted areas from videos.",
    tag: "Edit",
    route: "/video-tools/crop",
  },
  {
    icon: "🌈",
    name: "Video Filters",
    desc: "Apply beautiful video filters.",
    tag: "Effects",
    route: "/video-tools/filters",
  },
  {
    icon: "📽️",
    name: "Rotate Video",
    desc: "Rotate videos in any direction.",
    tag: "Edit",
    route: "/video-tools/rotate",
  },
  {
    icon: "📝",
    name: "Add Subtitle",
    desc: "Add subtitles to videos.",
    tag: "Creator",
    route: "/video-tools/subtitle",
  },
  {
    icon: "📸",
    name: "Frame Extractor",
    desc: "Extract frames as images.",
    tag: "Convert",
    route: "/video-tools/frame-extractor",
  },
  {
    icon: "🎦",
    name: "Screen Recorder",
    desc: "Record screen online.",
    tag: "Record",
    route: "/video-tools/screen-recorder",
  },
  {
    icon: "📹",
    name: "Webcam Recorder",
    desc: "Record webcam videos.",
    tag: "Record",
    route: "/video-tools/webcam-recorder",
  },
  {
    icon: "📊",
    name: "Video Metadata",
    desc: "Check video information.",
    tag: "Info",
    route: "/video-tools/metadata",
  },
];

const tagColors = {
  Edit: "bg-red-500/10 text-red-400 border-red-500/20",
  Convert: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Audio: "bg-green-500/10 text-green-400 border-green-500/20",
  Creator: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Effects: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Record: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Info: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function VideoToolsPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#070b17] min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate("/")}
            className="hover:text-red-400 transition"
          >
            🏠 Home
          </button>

          <span>/</span>

          <span className="text-gray-300">Video Tools</span>
        </div>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/30 to-red-900/20 border border-red-500/30 flex items-center justify-center text-3xl">
            🎥
          </div>

          <div>
            <h1 className="text-3xl font-extrabold">Video Tools</h1>

            <p className="text-gray-400 text-sm">
              Powerful online video editing tools
            </p>
          </div>

          <span className="ml-auto px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
            20+ Tools
          </span>
        </div>

        <div className="h-px bg-white/[0.08] mt-8" />
      </div>

      {/* Cards */}
      <div className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videoTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => navigate(tool.route)}
              className="group flex items-start gap-4 rounded-xl border border-white/[0.10] bg-[#0f1624] p-5 hover:border-red-500/30 hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-lg">
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

                <button className="text-xs text-red-400 hover:text-red-300">
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

export default VideoToolsPage;
