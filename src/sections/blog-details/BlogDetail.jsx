import { useParams, Link } from "react-router-dom";
import { Blog } from "../../blog";
import { motion } from "framer-motion";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = Blog.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="p-8 text-red-600">Blog not found</h2>;
  }

  return (
    <div className="blog-detail">
      <div className="container-fluid">
        {/* Blog Title + Date
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p
          className="text-gray-500 mb-6"
          dangerouslySetInnerHTML={{ __html: blog.date }}
        /> */}

        {/* Blog Content */}
        {blog.content.map((section, index) => (
          <div key={index} className="mb-10">
            {/* Section Heading */}
            {section.section && (
              <h2 className="text-xl font-manrope text-[#262626] font-bold mb-3">
                {section.section}
              </h2>
            )}

            {/* Paragraphs */}
            {Array.isArray(section.paragraphs)
              ? section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mb-3 text-base font-manrope text-[#262626]"
                  >
                    {p}
                  </p>
                ))
              : section.paragraphs && (
                  <p className="text-base font-manrope text-[#262626]">
                    {section.paragraphs}
                  </p>
                )}

            {/* Single Image */}
            {section.image && (
              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={section.image}
                  alt={section.section || "blog illustration"}
                  className="w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}

            {/* Multiple Images (Grid) */}
            {section.imageList && Array.isArray(section.imageList) && (
              <motion.div
                className={`my-8 grid gap-5 md:gap-10 
      ${section.imageList.length === 1 ? "grid-cols-1" : ""} 
      ${section.imageList.length === 2 ? "sm:grid-cols-2" : ""} 
      ${section.imageList.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
              >
                {section.imageList.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`blog-img-${i}`}
                    className="w-full "
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </motion.div>
            )}

            {/* List (if exists)
            {section.list && (
              <ul className="list-disc ml-6 mt-3">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="mb-2 text-base font-manrope text-[#262626]"
                  >
                    {item.title && <strong>{item.title}: </strong>}
                    {item.pera}
                  </li>
                ))}
              </ul>
            )} */}
            {section.list && (
              <ul className="list-disc ml-6 mt-3">
                {section.list.map((item, i) => (
                  <li
                    key={i}
                    className="mb-4 text-base font-manrope text-[#262626]"
                  >
                    {item.title && (
                      <p className="font-semibold mb-1">{item.title}</p>
                    )}
                    <p className="mb-2">{item.pera}</p>

                    {item.innerList && item.innerList.length > 0 && (
                      <ul className="list-disc ml-6">
                        {item.innerList.map((inner, j) => (
                          <p
                            key={j}
                            className="text-sm text-[#444]"
                            dangerouslySetInnerHTML={{ __html: inner }}
                          />
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
