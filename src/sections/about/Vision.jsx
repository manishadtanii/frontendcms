import React from "react";
import { motion } from "framer-motion";

const Vision = ({ data }) => {
  const visionPoints = [
    {
      img: "/v-1.png",
      title: "Reliable",
      desc: "Consistent support you can count on, every time.",
    },
    {
      img: "/v-2.png",
      title: "Scalable",
      desc: "Services that grow with your needs.",
    },
    {
      img: "/v-1.png",
      title: "Expert",
      desc: "Skilled guidance from industry professionals.",
    },
    {
      img: "/v-2.png",
      title: "Empowering",
      desc: "Helping the court reporting community thrive.",
    },
  ];
  if (!data) return null;
  const { heading, image, para1, para2 } = data;
  return (
    <section className="bg-gradient-to-br from-sky-500 to-sky-600 py-16 relative">
      <div className="image-bottom absolute left-0  top-0 w-32 md:w-60 h-32 md:h-60">
        <img src="/icon-half.png" alt="Featured 3" />
      </div>
      <div className="image-bottom absolute right-0 -rotate-180 bottom-0 w-32 md:w-60 h-32 md:h-60">
        <img src="/icon-half.png" alt="Featured 3" />
      </div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-h2 mb-5"
          >
          {heading ? heading : "Shaping the Future"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-5 leading-relaxed font-manrope text-xl"
          >
         {para1 ? para1 : " We strive to be the trusted partner powering the court reporting community with an expert team and scalable support."} 


          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-5 leading-relaxed font-manrope text-xl"
          >
          {para2 ? para2 : "We’re building a future where every firm, big or small, has access to proven solutions backed by experience.  Through smart tech and passionate people, we’re supporting the industry, one partnership at a time."} 

          </motion.p>
{/* 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-8">
            {visionPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h4 className="font-semibold font-manrope text-p">
                    {item.title}
                  </h4>
                  <p className="text-base lg:text-lg leading-snug font-manrope mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "tween", duration: 1.5 }}
            src={image ? image.url : "./vision.png"} // Replace with your actual image path
            alt={image ? image.alt : "Professional"}
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
