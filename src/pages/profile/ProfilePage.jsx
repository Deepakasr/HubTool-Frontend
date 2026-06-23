import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#070B17] flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-7xl mb-4">{profile.vip ? "👑" : "👤"}</div>

          <h1 className="text-5xl font-black">My Profile</h1>

          <p className="text-gray-400 mt-3">Account & Membership Details</p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#101827] to-[#0B1220] border border-white/10 p-8 shadow-[0_0_50px_rgba(139,92,246,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">{profile.name}</h2>

              <p className="text-gray-400 mt-2">{profile.email}</p>
            </div>

            <div>
              {profile.vip ? (
                <span className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/20 text-yellow-300 font-semibold">
                  👑 VIP MEMBER
                </span>
              ) : (
                <span className="px-4 py-2 rounded-full bg-gray-500/20 border border-gray-500/20 text-gray-300 font-semibold">
                  👤 NORMAL USER
                </span>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/[0.03] rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Role</p>

              <p className="text-xl font-bold mt-2">{profile.role}</p>
            </div>

            <div className="bg-white/[0.03] rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Membership</p>

              <p className="text-xl font-bold mt-2">
                {profile.vip ? "VIP" : "Free"}
              </p>
            </div>

            <div className="bg-white/[0.03] rounded-2xl p-5">
              <p className="text-gray-400 text-sm">Status</p>

              <p className="text-xl font-bold mt-2 text-green-400">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
