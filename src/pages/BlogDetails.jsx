import React from 'react'
import BlogHero from '../sections/blog-details/BlogHero'
// import Blog from '../blog'
import { Blog } from "../blog";

import BlogDetail from '../sections/blog-details/BlogDetail'
import { useParams } from 'react-router-dom';
import PopularBlogs from '../sections/blog/PopularBlogs';

function BlogDetails() {
   const { id } = useParams();
  const blog = Blog.find((b) => b.id === parseInt(id));
  console.log(blog.recommendedBlogIds)
  return (
    <div>
      <BlogHero img={blog.img} title={blog.title} date={blog.date} />
      <BlogDetail blog={blog.content} />
      <PopularBlogs data={blog.recommendedBlogIds} />
    </div>
  )
}

export default BlogDetails