import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const token = localStorage.getItem("token");

  const name = localStorage.getItem("name");

  const email = localStorage.getItem("email");

  const vip = localStorage.getItem("vip") === "true";

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#070B17]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1400px] mx-auto h-[76px] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#121826] border border-violet-500/20 flex items-center justify-center shadow-lg shadow-violet-500/10">
            <div className="w-4 h-4 rotate-45 border-[3px] border-violet-500 rounded-sm" />
          </div>
          <h1 className="text-[20px] font-bold text-white tracking-tight">
            Tool<span className="text-violet-500">Hub</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] text-gray-300">
          {["Tools", "Categories", "Blog", "API", "Changelog", "Contact"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ),
          )}
        </nav>

        {/* Right Buttons */}
        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="w-[44px] h-[44px] rounded-2xl bg-[#121826] border border-white/10 text-white flex items-center justify-center">
            🌙
          </button>

          {!token ? (
            <>
              <button
                onClick={() => navigate("/auth")}
                className="h-[44px] px-5 rounded-2xl bg-[#121826] border border-white/10 text-white text-[14px]"
              >
                Sign In
              </button>

              <button
                onClick={() => navigate("/auth")}
                className="h-[44px] px-5 rounded-2xl bg-violet-600 hover:bg-violet-700 transition text-white text-[14px] font-medium"
              >
                Get Started →
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 px-4 h-[44px] rounded-2xl bg-[#121826] border border-white/10 text-white"
              >
                {vip ? "👑" : "👤"}

                <span>{name || email}</span>

                <span>▼</span>
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-3 w-60 rounded-2xl bg-[#121826] border border-white/10 overflow-hidden shadow-2xl">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="font-semibold">{name || "User"}</p>

                    <p className="text-xs text-gray-400">{email}</p>

                    {vip && (
                      <span className="inline-block mt-2 px-2 py-1 rounded-lg bg-yellow-500/20 text-yellow-300 text-xs">
                        👑 VIP MEMBER
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => navigate("/profile")}
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                  >
                    👤 Profile
                  </button>

                  <button
                    onClick={() => navigate("/my-subscriptions")}
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                  >
                    💎 My Subscriptions
                  </button>

                  <button
                    onClick={() => navigate("/premium")}
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                  >
                    🚀 Premium Plans
                  </button>

                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("email");
                      localStorage.removeItem("name");
                      localStorage.removeItem("vip");

                      navigate("/");
                      window.location.reload();
                    }}
                    className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10"
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
