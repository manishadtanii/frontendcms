import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
// slick-carousel CSS (required)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VerticalStatsSlider({ stats }) {
  console.log(stats);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1, // show one slide at a time
    slidesToScroll: 1, // scroll one slide at a time
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    // you can tweak responsive breakpoints if needed
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  const [active, setActive] = useState(0);
  const [slideHeight, setSlideHeight] = useState(0); // state instead of ref
  const sliderRef = useRef(null);
  const lengthItems = stats.length - 2; // 2 visible at once

  // Measure height of one slide after render
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children.length > 0) {
      setSlideHeight(sliderRef.current.children[0].clientHeight);
    }
  }, [stats]);

  // Auto-play every 4s
  useEffect(() => {
    if (slideHeight === 0) return; // wait until height measured
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 <= lengthItems ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [lengthItems, slideHeight]);

  return (
    <div>
      <div
        className="relative w-full overflow-hidden hidden md:block"
        style={{ height: slideHeight * 2 || "400px" }} // always show 2
      >
        {/* Slides container */}
        <div
          ref={sliderRef}
          className="absolute top-0 left-0 w-full flex flex-col transition-transform duration-1000"
          style={{
            transform: `translateY(-${active * slideHeight}px)`,
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-h3 font-medium font-parkinsans">
                  {stat.value}
                </h3>
                <p className="text-black font-manrope text-xl text-end max-w-[350px] pe-5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <ul className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col">
          {Array.from({ length: lengthItems + 1 }).map((_, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer w-2 rounded-full transition-all duration-500 ${
                active === index ? "h-8 bg-btn" : "h-2 bg-[#00000040]"
              } my-2`}
            ></li>
          ))}
        </ul>
      </div>
      <div className="block md:hidden">
        <Slider {...settings}>
          {stats.map((stat, index) => (
            <div key={index} className="w-full flex-shrink-0 p-4 mb-4">
              <div className="flex justify-between flex-col items-start">
                <h3 className="text-[40px] font-medium font-parkinsans">
                  {stat.title}
                </h3>
                <p className="text-black font-manrope text-xl text-end max-w-[350px] pe-5">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
