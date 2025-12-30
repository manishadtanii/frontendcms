import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button";
import { motion } from "framer-motion"; // ✅ Use framer-motion here
import ServiceDetailsHeroPage from "../../components/ServiceDetailsHeroPage";
import VerticalSlider from "./VerticalSlider";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceDetailsHero = ({ data }) => {
  if (!data) return null;
  // console.log("Service Hero data:", data);
  const { name, title, para, link, images } = data;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="service-details-hero bg-black text-white relative overflow-hidden p-0">
      <div className="container-fluid mx-auto px-4 grid xl:grid-cols-2 items-center relative z-10 gap-5">
       
       
        {/* Text Content */}
        <div className="">
          <motion.div
            className="tag text-xl inline-block leading-9 mb-3 md:py-4 px-6 rounded-[50px] border border-[#727272] md:my-5 sm:mt-10 lg:mt-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {name}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-parkinsans leading-10 xl:max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-white font-monospace text-xl mt-4 xl:max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {para}
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button text="Schedule a call now" arrowClass="d" />
          </motion.div>
        </div>
         {/* Image and Info Cards */}
        <motion.div
          className="mt-12 lg:mt-0 relative  justify-center  hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative ">
            <VerticalSlider images={images} />
          </div>
        </motion.div>
         <div className="block md:hidden">
          <Slick {...settings} className="w-[300px] mx-auto max-w-[100%]">
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img
                  src={image}
                  className="w-full rounded-xl"
                  alt={`Service slide ${index + 1}`}
                />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsHero;
