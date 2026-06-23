import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config/api";

function MySubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${API_BASE_URL}/subscription/my-subscriptions`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setSubscriptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadSubscriptions();
  }, []);

  return (
    <div className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-10">My Subscriptions</h1>

        {subscriptions.length === 0 ? (
          <div className="bg-[#101827] rounded-3xl p-10 border border-white/10 text-center">
            <h2 className="text-2xl font-bold">No Active Subscription</h2>

            <p className="text-gray-400 mt-3">
              Purchase a premium plan to unlock tools.
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-full max-w-4xl space-y-6">
              {subscriptions.map((sub, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#101827] to-[#0B1220] p-8 shadow-[0_0_40px_rgba(139,92,246,0.08)] hover:border-violet-500/30 transition-all"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 blur-3xl rounded-full" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-violet-400 text-sm font-medium mb-2">
                        Premium Membership
                      </p>

                      <h2 className="text-3xl font-black">
                        {sub.planType === "SINGLE_TOOL"
                          ? "📌 Single Tool"
                          : sub.planType === "CATEGORY_VIP"
                            ? "👑 Category VIP"
                            : "🚀 ToolHub Pro"}
                      </h2>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        sub.active
                          ? "bg-green-500/20 text-green-400 border border-green-500/20"
                          : "bg-red-500/20 text-red-400 border border-red-500/20"
                      }`}
                    >
                      {sub.active ? "ACTIVE" : "EXPIRED"}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/[0.03] rounded-2xl p-4">
                      <p className="text-gray-400 text-sm">Category</p>
                      <p className="text-lg font-semibold mt-1">
                        {sub.category || "All Categories"}
                      </p>
                    </div>

                    <div className="bg-white/[0.03] rounded-2xl p-4">
                      <p className="text-gray-400 text-sm">Tool</p>
                      <p className="text-lg font-semibold mt-1">
                        {sub.toolName || "All Tools Included"}
                      </p>
                    </div>

                    <div className="bg-white/[0.03] rounded-2xl p-4">
                      <p className="text-gray-400 text-sm">Expiry Date</p>
                      <p className="text-lg font-semibold mt-1 text-yellow-400">
                        {sub.expiryDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-gray-400 text-sm">
                        Premium Access Status
                      </p>

                      <p className="text-xl font-bold text-green-400">
                        Subscription Active
                      </p>
                    </div>

                    <div className="text-5xl">
                      {sub.planType === "SINGLE_TOOL"
                        ? "📌"
                        : sub.planType === "CATEGORY_VIP"
                          ? "👑"
                          : "🚀"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MySubscriptions;
