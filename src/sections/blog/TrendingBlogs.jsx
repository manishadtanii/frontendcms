import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {Blog} from "../../blog";

const blogs = [
  Blog[0],
  Blog[1],
  Blog[2]
];

const TrendingBlogs = () => {
  return (
    <section>
      <div className="max-w-[1600px] m-auto pb-[100px]  px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Heading */}
       

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Blog Card */}
          <motion.div
            className="md:col-span-2 relative rounded-xl overflow-hidden group h-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to={blogs[0].link}>
            <motion.img
              src={blogs[0].img}
              alt="Blog"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute h-full p-5 top-0 left-0 flex flex-col justify-end items-start text-white">
              <span className="bg-[#727272]/50 px-3 font-manrope border border-[#727272] py-1 rounded-md text-xl">
                {blogs[0].tag}
              </span>
              <p className="font-manrope mt-3 text-p lg:text-3xl font-semibold">
                {blogs[0].title}
              </p>
            </div>
            </Link>
          </motion.div>
         

          {/* Small Blog Cards */}
          <div className="flex flex-col gap-6 lg:h-full">
            {blogs.slice(1).map((blog, index) => (
              <Link to={blog.link} key={index} className="lg:block lg:min-h-[48%]">
                <motion.div
                  className="relative rounded-xl overflow-hidden group h-full"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={blog.img}
                  alt="Blog"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-end items-start   text-white">
                  <span className="bg-[#727272]/50 px-3 font-manrope border border-[#727272] py-1 rounded-md text-sm">
                    {blog.tag}
                  </span>
                  <p className="font-manrope mt-2 text-p font-medium">{blog.title}</p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingBlogs;
