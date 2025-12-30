import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../components/Arrow";

const ResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen flex items-center justify-center py-[80px] px-[20px]">
      <div className="flex flex-col items-center justify-center w-full max-w-[800px] bg-[#0a0f14] rounded-3xl border border-gray-800 p-8 md:p-20 text-center">
        
        {/* Success Icon / Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 border border-gray-700 rounded-3xl flex items-center justify-center mb-10">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Text Content */}
        <h2 className="text-[32px] md:text-[47px] text-white font-manrope mb-4">
          Congratulations Password Reset
        </h2>
        <p className="text-gray-400 text-base md:text-xl mb-12 font-manrope max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur. Adipiscing lectus tortor sit
          id risus amet.
        </p>

        {/* Back to Sign In Button */}
        <button
          onClick={() => navigate("/admin/login")}
          className="main-btn flex font-manrope"
        >
          <div className="text bg-secondary text-white text-base lg:text-lg leading-10 py-1 px-8 lg:leading-[40px] rounded-[50px]">
            Back To Sign In
          </div>
          <Arrow customClass="bg-secondary text-white -rotate-45 " />
        </button>

      </div>
    </div>
  );
};

export default ResetSuccess;