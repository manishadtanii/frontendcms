import React from "react";
import { motion } from "framer-motion";
import {Blog} from "../../blog.js";
import { Link, useNavigate } from "react-router-dom";

const blogPosts = [
  Blog[0],
  Blog[1],
  Blog[2]
];

const BlogSection = () => {
  const navigate = useNavigate();
  return (
    <section className="container-fluid" id="our-blog">
      <motion.h2
        className="text-h2 font-semibold text-center mb-5 md:mb-12 font-parkinsans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Blog
      </motion.h2>

      <div className="space-y-12 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 border-t pt-10 sm:mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => navigate(post.link)}
          >
            <div className="md:w-[55%]">
              <h3 className="text-p lg:text-[30px] font-semibold font-manrope mb-2 sm:mb-5 ">
                {post.title}
              </h3>
              <p className="font-manrope text-lg mb-2 sm:mb-4">{post.description}</p>
              <Link
                href={post.link}
                className="font-manrope text-secondary font-medium underline text-[16px]"
              >
                Read more
              </Link>
            </div>
            <motion.div
              className="md:w-[45%] flex justify-center md:justify-end"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={`./${post.img}`}
                alt={post.title}
                className="rounded-xl w-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
