import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../../../config/api";

function ChatAssistant() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 👋 I am ToolHub AI Assistant. How can I help you today?",
    },
  ]);

  const askAI = async () => {
    if (!prompt.trim()) return;

    const userPrompt = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userPrompt,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${API_BASE_URL}/ai/chat`,
        {
          prompt: userPrompt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const aiReply = res.data.choices[0].message.content;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiReply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "❌ AI service unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (
    <div className="bg-[#070B17] text-white h-[calc(100vh-76px)]">
      <div className="max-w-5xl mx-auto h-full flex flex-col px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black">AI Chat Assistant</h1>

            <p className="text-gray-400 mt-2">
              Ask anything. Powered by ToolHub AI.
            </p>
          </div>

          <button
            onClick={() => navigate("/ai-tools")}
            className="px-5 py-3 rounded-2xl bg-[#101827] border border-white/10 hover:border-violet-500/30"
          >
            ← Back
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-5 py-4 rounded-3xl whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-violet-600 text-white"
                    : "bg-[#101827] border border-white/10"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#101827] border border-white/10 px-5 py-4 rounded-3xl">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="pt-5">
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message ToolHub AI..."
              rows={2}
              className="flex-1 resize-none bg-[#101827] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-violet-500"
            />

            <button
              onClick={askAI}
              disabled={loading}
              className="px-8 rounded-2xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50"
            >
              Send
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2 text-center">
            ToolHub AI may make mistakes. Verify important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatAssistant;
