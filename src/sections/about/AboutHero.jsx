import React from 'react'
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";

function AboutHero({ data }) {
  // console.log("AboutHero data:", data);
  if (!data) return null;
  const { heading, description, cta, image } = data;
  return (
    <Hero>
      <div className="mx-auto md:px-4  grid lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="">
          <motion.h1
            className="text-h2 font-parkinsans leading-tight"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {heading ? heading : `Your Business is Safe <br className='hidden md:block' /> in Our Hands`}
           
          </motion.h1>

          <motion.p
            className="text-white font-monospace text-xl mt-4 max-w-[500px]"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description ? description : `Rooted in a legacy of court reporting since 1937, The Varallo Group blends time-honored values with modern innovation to protect, preserve, and elevate the legal record.`}

          
          </motion.p>

          <motion.div
            className="mt-4 md:mt-10"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button text={cta ? cta["label"] : "Learn More"} arrowClass="d" />
          </motion.div>
        </div>

        {/* Image and Info Cards */}
        <div className="mt-12 lg:mt-0 relative flex justify-center">
          <div className="relative">
            {/* Main Image */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "tween", duration: 1.5 }} // Increased duration
              src={image ? image.url : "./about-hero.png"} // Replace with your actual image path
              alt={image ? image.alt : "Professional"}
              className="w-full  "
            />
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default AboutHero