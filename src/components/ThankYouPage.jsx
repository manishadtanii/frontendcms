import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const ThankYouPage = ({ title, message, btnText, btnLink }) => {
  return (
    <div className="min-h-screen flex items-center bg-[url('/thankyou-bg.jpg')] bg-cover bg-bottom justify-center relative "> 
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-black/35 backdrop-blur-2xl text-white px-8 md:px-16 py-12 rounded-3xl shadow-xl max-w-3xl text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-h2 font-parkinsans leading-tight mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white font-manrope text-base md:text-xl leading-relaxed mb-8"
        >
          {message}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <Button text={btnText} link={btnLink} arrowClass={"d"} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
