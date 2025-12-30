import React from "react";
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";

function BlogHero() {
  return (
    <Hero>
      <div className="">
        <motion.h1
          className="text-h2 font-parkinsans leading-tight  text-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
         Insights That Keep You Ahead
          <br />
        </motion.h1>

        <motion.p
          className="text-gray-300 font-monospace text-xl mt-4 max-w-[800px] text-center mx-auto"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        From industry trends to practical tips, explore helpful topics from The Varallo Group that help court reporters, videographers, and legal support professionals work smarter, stay competitive, and grow their businesses.


        </motion.p>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          
          <Button text="Submit a Post Idea" link={"mailto:Info@thevarallogroup.com"}  arrowClass="d" />
        </motion.div>
       <div className="mt-5">
         <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween", duration: 1.5 }} // Increased duration
          src="./blog-hero.png" // Replace with your actual image path
          alt="Professional"
          className="w-full  "
        />
       </div>
      </div>
    </Hero>
  );
}

export default BlogHero;
