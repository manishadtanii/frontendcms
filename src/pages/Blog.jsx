import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogHero from "../sections/blog/BlogHero";
import TrendingBlogs from "../sections/blog/TrendingBlogs";
import LatestBlogs from "../sections/blog/LatestBlogs";
import PopularBlogs from "../sections/blog/PopularBlogs";
import { Blog as blogs } from "./../blog";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <BlogHero data={blogs[0]} />
     <div className="max-w-[1600px] m-auto pt-[100px]  px-[20px] md:px-[30px] lg:px-[50px]">
       {/* Search Bar */}
      <div className="flex flex-col  md:flex-row justify-between gap-5 md:gap-3 mb-10 items-center">
         <motion.h2
                  className="text-center font-parkinsans text-h2 font-semibold"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Trending Posts
                </motion.h2>
        <input
          type="text"
          placeholder="Search Posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#48CAE4] px-4 py-2 md:w-96 md:p-4 md:px-6 rounded-[50px] focus:outline-none text-white placeholder:text-white placeholder:font-manrope"
        />
      </div>
     </div>

      {/* Conditional Rendering */}
      {searchTerm ? (
        // 🔎 Show only search results
        <div className="max-w-[1600px] m-auto pb-[100px]  px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image Wrapper */}
                <motion.div
                  className="overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Text Content */}
                <h3 className="mt-5 text-p text-[32px] font-manrope font-semibold">
                  {blog.title}
                </h3>
                <p className="mt-2 font-manrope text-gray-600">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="mt-3 font-manrope text-sky-500 hover:underline"
                >
                  Read more
                </a>
              </motion.div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 text-lg">
              No blogs found.
            </p>
          )}
        </div>
        </div>
      ) : (
        // 📰 Show original blog layout
        <div>
          
          <main>
            <div id="trending-blogs">
              <TrendingBlogs data={blogs.slice(0, 3)} />
            </div>
            <div id="latest-blogs">
              <LatestBlogs data={blogs.slice(3, 6)} />
            </div>
            <div id="popular-blogs">
              {/* <PopularBlogs data={blogs.slice(6, 9)} /> */}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

export default Blog;
