import React, { useState } from "react";
import Arrow from "../../components/Arrow";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // You can use react-icons or SVG

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    // Your reset logic here...
    setLoading(false);
  };

  return (
    <div className="hero min-h-screen flex items-center justify-center py-[80px] px-[20px]">
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] bg-[#0a0f14] rounded-3xl border border-gray-800 overflow-hidden">
        
        {/* Left Section: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-[36px] md:text-[47px] text-white font-manrope mb-2">
            Forgot Password
          </h2>
          <p className="text-gray-400 text-base md:text-xl mb-8 font-manrope">
            Lorem ipsum dolor sit amet consectetur. Adipiscing lectus tortor sit
            id risus amet.
          </p>

          <form onSubmit={handleReset} className="space-y-6">
            {/* New Password Field */}
            <div className="flex flex-col">
              <label className="block text-gray-400 text-base md:text-xl mb-2 ml-1 font-manrope">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded-full px-5 py-3 pr-12 text-white focus:outline-none focus:border-cyan-400 font-manrope transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {showNew ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <label className="block text-gray-400 text-base md:text-xl mb-2 ml-1 font-manrope">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full bg-transparent border rounded-full px-5 py-3 pr-12 text-white focus:outline-none transition-all font-manrope
                    ${error ? "border-red-600" : "border-gray-700 focus:border-cyan-400"}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {showConfirm ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}
                </button>
              </div>
              {error && (
                <p className="text-red-600 text-xs mt-2 ml-4 animate-pulse font-manrope">{error}</p>
              )}
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={loading}
              className={`main-btn flex font-manrope mt-4 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="text bg-secondary text-white text-base lg:text-lg leading-10 py-1 px-10 lg:leading-[40px] rounded-[50px]">
                {loading ? "Processing..." : "Reset"}
              </div>
              <Arrow customClass="bg-secondary text-white -rotate-45 " />
            </button>
          </form>

          <button 
            onClick={() => window.history.back()}
            className="text-gray-400 text-base md:text-lg block mt-8 hover:text-white transition-colors font-manrope text-left"
          >
            ← Back to Login
          </button>
        </div>

        {/* Right Section: Branding */}
        <div className="hidden md:block w-1/2 p-4">
          <div className="h-full w-full rounded-2xl overflow-hidden relative">
            <img src="/admin-login.png" alt="Branding" className="w-full object-cover h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;