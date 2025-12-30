import React from "react";
import { motion } from "framer-motion";

const Story = ({ data }) => {
  if (!data) return null;
  const { heading, subHeading, blocks } = data;
  const item = [
    {
      year: "2017",
      title: "Our Legacy",
      para: "Founded in 2001 with a clear mission to deliver exceptional court reporting and legal support services rooted in professionalism, reliability, and personal attention, The Varallo Group builds on a family legacy dating back to 1937. For nearly 100 years, the Varallo name has been synonymous with excellence in the field.",
      img: "./our-legacy.jpg",
    },
    {
      year: "2018",
      title: "Our Commitment",
      para: "From the start, The Varallo Group set out to be a different kind of court reporting firm. We’ve assembled a team of experts dedicated to upholding the highest standards of accuracy, responsiveness, and service. Whether handling routine depositions, high-profile cases, administration or communications, we bring the same precision, discretion, and care to every client. Our founder, Nancy Varallo, a lifelong court reporter and respected industry leader, shaped the company’s client-first culture. Under her guidance, The Varallo Group has grown into a trusted partner for court reporting firms, government agencies, and organizations nationwide.",
      img: "/our-commitment.jpg",
    },
    {
      year: "2020",
      title: "Our Future",
      para: "What truly sets us apart is the people behind the name. Our team is loyal, experienced, and empowered to deliver results. We continuously invest in technology, talent, and training to stay ahead in a rapidly evolving legal landscape — because our clients rely on us to get it right, every time. At The Varallo Group, we combine a proud legacy of excellence with forward-thinking innovation to meet tomorrow’s challenges.",
      img: "/our-future.jpg",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="">
      <div className="container-fluid">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-h2 font-parkinsans">
            {heading ? heading : "The Varallo Group’s Journey"}

          </h2>
          <p className="mt-4 font-manrope text-xl max-w-4xl mx-auto">
            {subHeading ? subHeading : "A family name, a lifelong commitment to excellence."}
          </p>
        </div>
      

      {/* Story Content */}
      {blocks && blocks.map((story, index) => (
        
        <motion.div
          key={index}
          className="bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
          variants={fadeInUp}
        >
          <div className="max-w-[1600px] m-auto px-4 pt-[50px] md:py-[50px]">
            <div
              className={`flex flex-col md:flex-row gap-5 md:gap-10 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="md:w-[60%]"
                variants={fadeInUp}
              >
                <img
                  src={story.image['url']}
                  alt={story.image['alt']}
                  className="rounded-2xl w-full"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="md:w-[50%]"
                variants={fadeInUp}
              >
                {/* <p className="text-[#00100D] font-manrope text-base md:text-2xl lg:text-3xl mb-2">
                  {story.year}
                </p> */}
                <h3 className="text-h2 mb-4 font-parkinsans max-w-[300px] ">
                  {story.title}
                </h3>
                <p className="font-manrope  text-base md:text-lg lg:text-xl">
                  {story.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
};

export default Story;
