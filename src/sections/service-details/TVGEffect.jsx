import React from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

export default function TVGEffect({ data }) {
  const { title, pera, impactStats } = data;

  return (
    <section className="tvg-effect">
      <div className="container-fluid">
        <div className="flex justify-center items-center  bg-white">
          <motion.div
            className="rounded-[50px] md:rounded-full bg-white shadow-xl flex flex-col justify-center items-center text-center p-5 sm:p-10 md:p-20 relative overflow-hidden md:w-[700px] md:h-[700px]"
            style={{
              boxShadow: "0 0 120px 20px rgba(0, 204, 255, 0.2)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="font-parkinsans text-h1 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="font-manrope max-w-xl mx-auto mb-10 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {pera}
            </motion.p>

            <div className="flex flex-row justify-center flex-wrap items-center gap-10">
              {impactStats.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div
                    className="text-h1 font-parkinsans font-medium text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%)",
                    }}
                  >
                    {item.number}
                  </div>
                  <div className="text-sm md:text-base font-manrope  mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
