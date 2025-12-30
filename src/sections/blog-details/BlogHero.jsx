import React from "react";
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";

function BlogHero({ img, title, date }) {
  return (
    <Hero clCustom="dsf">
      <div className="max-w-[1600px] m-auto pt-[50px] md:pt-[70px] lg:pt-[100px] px-[20px] md:px-[30px] lg:px-[50px]">
        <motion.p
          className="text-gray-300 font-monospace text-xl mb-4 max-w-[800px] text-center mx-auto"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         <b>{date.day}</b>: {date.date}
        </motion.p>
        <motion.h1
          className="text-h2 font-parkinsans leading-tight  text-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        <div className="mt-5">
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 1.5 }} // Increased duration
            src={`${img}`}
            alt="Professional"
            className="w-full rounded-t-2xl"
          />
        </div>
      </div>
    </Hero>
  );
}

export default BlogHero;
