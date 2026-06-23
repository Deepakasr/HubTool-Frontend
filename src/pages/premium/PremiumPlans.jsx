import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import API_BASE_URL from "../../config/api";

function PremiumPlans() {
  const navigate = useNavigate();
  const location = useLocation();

  const toolName = location.state?.toolName || "AI Assistant";
  const category = location.state?.category || "AI Tools";

  const [billing, setBilling] = useState("monthly");
  const [loading, setLoading] = useState(false);

  const prices = {
    monthly: {
      single: "₹49",
      category: "₹149",
      pro: "₹299",
    },
    sixmonth: {
      single: "₹199",
      category: "₹599",
      pro: "₹1299",
    },
    yearly: {
      single: "₹299",
      category: "₹999",
      pro: "₹1999",
    },
  };

  const handlePlanClick = async (planType) => {
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
      return;
    }

    try {
      const durationMonths =
        billing === "monthly" ? 1 : billing === "sixmonth" ? 6 : 12;

      const requestData = {
        planType,
        category,
        toolName,
        durationMonths,
      };

      const orderResponse = await axios.post(
        `${API_BASE_URL}/payment/create-order`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const order = orderResponse.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "ToolHub",

        description: planType,

        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyData = {
              razorpayOrderId: response.razorpay_order_id,

              razorpayPaymentId: response.razorpay_payment_id,

              razorpaySignature: response.razorpay_signature,

              subscription: requestData,
            };

            const verifyResponse = await axios.post(
              `${API_BASE_URL}/payment/verify`,
              verifyData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            toast.success(verifyResponse.data);

            setTimeout(() => {
              navigate("/my-subscriptions");
            }, 1500);
          } catch (error) {
            console.error(error);

            toast.error("Payment Verification Failed");
          }
        },

        theme: {
          color: "#7c3aed",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

      setTimeout(() => {
        if (planType === "SINGLE_TOOL") {
          navigate("/ai-tools/chat-assistant");
        } else {
          navigate("/ai-tools");
        }
      }, 1000);
    } catch (err) {
      console.error(err);

      toast.error(err.response?.data || "Subscription Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#070B17] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-fuchsia-400 mb-10"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-4xl mb-5">
            👑
          </div>

          <h1 className="text-6xl font-black tracking-tight">Unlock Premium</h1>

          <p className="mt-4 text-gray-400 text-lg">
            Unlock premium tools and advanced features.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mt-10 mb-14">
          <div className="bg-[#101827] border border-white/10 rounded-2xl p-1 flex shadow-lg">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-fuchsia-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("sixmonth")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billing === "sixmonth"
                  ? "bg-fuchsia-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              6 Months
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billing === "yearly"
                  ? "bg-fuchsia-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Single Tool */}
          <div className="bg-[#101827] border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500/30 transition">
            <h3 className="text-2xl font-bold">Single Tool</h3>

            <p className="text-gray-400 mt-2">{toolName}</p>

            <h2 className="text-5xl font-black mt-8">
              {prices[billing].single}
            </h2>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ One Premium Tool</li>
              <li>✓ Unlimited Usage</li>
              <li>✓ Future Updates</li>
            </ul>

            <button
              disabled={loading}
              onClick={() => handlePlanClick("SINGLE_TOOL")}
              className="w-full mt-8 h-12 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700"
            >
              {loading ? "Processing..." : "Choose Plan"}
            </button>
          </div>

          {/* Category VIP */}
          <div className="relative bg-[#101827] border-2 border-fuchsia-500/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(217,70,239,0.15)]">
            <div className="absolute top-4 right-4 text-xs bg-fuchsia-600 px-3 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-2xl font-bold">Category VIP</h3>

            <p className="text-gray-400 mt-2">All {category}</p>

            <h2 className="text-5xl font-black mt-8 text-fuchsia-400">
              {prices[billing].category}
            </h2>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ All Category Tools</li>
              <li>✓ Premium Features</li>
              <li>✓ Faster Processing</li>
              <li>✓ Priority Access</li>
            </ul>

            <button
              disabled={loading}
              onClick={() => handlePlanClick("CATEGORY_VIP")}
              className="w-full mt-8 h-12 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700"
            >
              {loading ? "Processing..." : "Get VIP"}
            </button>
          </div>

          {/* ToolHub Pro */}
          <div className="bg-[#101827] border border-yellow-500/20 rounded-3xl p-8 hover:border-yellow-500/40 transition">
            <div className="text-yellow-400 text-sm mb-2">👑 ALL ACCESS</div>

            <h3 className="text-2xl font-bold">ToolHub Pro</h3>

            <p className="text-gray-400 mt-2">Unlock Everything</p>

            <h2 className="text-5xl font-black mt-8 text-yellow-400">
              {prices[billing].pro}
            </h2>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✓ AI Tools</li>
              <li>✓ Office Tools</li>
              <li>✓ Design Tools</li>
              <li>✓ Student Tools</li>
              <li>✓ Future Premium Tools</li>
            </ul>

            <button
              disabled={loading}
              onClick={() => handlePlanClick("TOOLHUB_PRO")}
              className="w-full mt-8 h-12 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400"
            >
              {loading ? "Processing..." : "Go Premium"}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-4 mt-14">
          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            ⚡ Faster AI
          </div>

          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            🔓 Premium Tools
          </div>

          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            🚀 Priority Queue
          </div>

          <div className="bg-[#101827] rounded-2xl p-5 border border-white/10">
            ♾ Future Updates
          </div>
        </div>
      </div>
    </main>
  );
}

export default PremiumPlans;
