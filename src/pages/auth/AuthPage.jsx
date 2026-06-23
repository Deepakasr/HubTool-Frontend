import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import API_BASE_URL from "../../config/api";

function AuthPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [showOtp, setShowOtp] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`,
        registerData,
      );

      toast.success(response.data || "OTP Sent Successfully");

      setShowOtp(true);
    } catch (err) {
      console.log(err);
      console.log(err.response);

      toast.error(err.response?.data || "Registration Failed");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verify`, {
        email: registerData.email,
        otp,
      });

      toast.success(response.data || "Email Verified Successfully");

      setShowOtp(false);
      setActiveTab("login");
    } catch (err) {
      toast.error(err.response?.data || "Invalid OTP");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        loginData,
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("email", response.data.email);

      localStorage.setItem("name", response.data.name);
      localStorage.setItem("vip", response.data.vip);

      toast.success("Login Successful");

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#070b17] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-[#0f1624] border border-white/10 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black">ToolHub Auth</h1>

          <p className="text-gray-400 text-sm mt-2">Login or create account</p>
        </div>

        {!showOtp && (
          <div className="flex mb-8 bg-[#111827] rounded-xl p-1">
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 rounded-lg transition ${
                activeTab === "login" ? "bg-fuchsia-600" : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setActiveTab("register")}
              className={`flex-1 py-3 rounded-lg transition ${
                activeTab === "register" ? "bg-fuchsia-600" : "text-gray-400"
              }`}
            >
              Register
            </button>
          </div>
        )}

        {/* LOGIN */}
        {activeTab === "login" && !showOtp && (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 font-semibold"
            >
              Login
            </button>
          </form>
        )}

        {/* REGISTER */}
        {activeTab === "register" && !showOtp && (
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  name: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                })
              }
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 font-semibold"
            >
              Register
            </button>
          </form>
        )}

        {/* OTP */}
        {showOtp && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold">Verify Email</h2>

              <p className="text-gray-400 text-sm mt-2">
                OTP sent to {registerData.email}
              </p>
            </div>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-[#111827] border border-white/10 outline-none"
            />

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 font-semibold"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
