import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";

// const data = [
//   {
//     title: "Nationwide Reach.",
//     title2: "Local Expertise.",
//     text: "Trusted with skilled professionals across all 50 states, we offer personalized court reporting and legal services backed by decades of regional expertise.",
//     img: "./featured-1.jpg",
//     link: "/services  ",
//     btnText: "Learn More",
//   },
//   {
//     title: "One Team.",
//     title2: "Multiple Solutions.",
//     text: "From court reporting coverage to administrative and business support, our team offers a comprehensive range of services customized to meet your firm’s unique needs.",
//     img: "./featured-2.jpg",
//     link: "/services  ",
//     btnText: "Learn More",
//   },
//   {
//     title: "Tech Driven. ",
//     title2: "People Focused.",
//     text: "We combine advanced technology with genuine human insight to deliver efficient, secure, and attentive support. Because behind every service is a team that truly cares.",
//     img: "./featured-3.jpg",
//     link: "/services  ",
//     btnText: "Learn More",
    
//   },
// ];


export default function FeaturedHighlights({ data }) {
   if (!data) return null;
    // console.log("FeaturedHighlights data:", data);
    const { heading, description, image,  cards, body } = data;
  return (
    <section className="bg-grad relative  text-white" id="feature">
      <div className="image-top absolute top-0 left-0 w-60 h-60">
        <img src="/icon-half.png" alt="Featured 1" />
      </div>
      <div className="image-middle absolute top-[50%] w-60 right-0">
        <img src="/icon-right.png" alt="Featured 2" />
      </div>
      <div className="image-bottom absolute left-0 -rotate-90 bottom-0 w-60 h-60">
        <img src="/icon-half.png" alt="Featured 3" />
      </div>
      <div className="container-fluid space-y-10 md:space-y-16">
        {cards.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse md:flex-row relative z-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-4 md:gap-10`}
          >
            {/* Text Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-medium font-parkinsans mb-2 md:mb-4">
                {item.title} 
              </h2>
              <p className="text-white mb-2 md:mb-6 font-manrope">{item.body}</p>
              <Button link={item.learnMore['url']}  text={item.learnMore['label']} key={idx} />
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image['url']}
                alt={item.image['alt']}
                className="rounded-2xl md:rounded-[50px] w-full"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
