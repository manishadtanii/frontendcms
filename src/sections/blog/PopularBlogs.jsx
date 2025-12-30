import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {Blog} from "../../blog";

/* const blogs = [
  {
    title: "5 Essential Financial Strategies for Small",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/blog-1.png",
    link: "#",
  },
  {
    title: "5 Essential Financial Strategies for Small",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/blog-1.png",
    link: "#",
  },
  {
    title: "5 Essential Financial Strategies for Small",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/blog-1.png",
    link: "#",
  },
]; */

const PopularBlogs = ({data}) => {

   const blogs = Blog.filter((b) => data.includes(b.id));
  return (
    <section>
      <div className="max-w-[1600px] m-auto pb-[100px]  px-[20px] md:px-[30px] lg:px-[50px]">
        {/* Animated Heading */}
        <motion.h2
          className="text-h2 font-semibold text-center mb-5 md:mb-12 font-parkinsans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Popular Blogs
        </motion.h2>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
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
                  src={`${blog.img}`}
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
              <p className="mt-2 font-manrope text-gray-600">{blog.description}</p>
              <a
                href={blog.link}
                className="mt-3 font-manrope text-sky-500 hover:underline"
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogs;
