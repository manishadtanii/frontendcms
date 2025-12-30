import React, { useState, useEffect, useRef } from "react";

export default function VerticalSlider({ images }) {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const slideHeight = useRef(0); // store height of one slide
  const lengthItems = images.length - 1;

  useEffect(() => {
    if (sliderRef.current) {
      // Measure the height of the first child (one slide)
      slideHeight.current = sliderRef.current.children[0].clientHeight;
    }
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 <= lengthItems ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [lengthItems]);

  const goNext = () => setActive(active + 1 <= lengthItems ? active + 1 : 0);
  const goPrev = () => setActive(active - 1 >= 0 ? active - 1 : lengthItems);

  return (
    <div
      className="relative  min-w-[350px]
                  w-[100%] h-[250px]
                 sm:w-[500px] sm:h-[300px]
                 md:w-[600px] md:h-[400px]
                 lg:w-[750px] lg:h-[500px]
                 xl:w-[600px] xl:h-[480px]
                 2xl:w-[750px] 2xl:h-[500px] overflow-hidden me-auto xl:mx-auto"
    >
      {/* Image List */}
      <div
        ref={sliderRef}
        className="absolute top-0 left-0 w-full flex flex-col transition-all duration-1000"
        style={{
          transform: `translateY(-${active * slideHeight.current}px)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[350px] h-[250px] w-full sm:h-[500px] flex-shrink-0">
            <img src={src} alt={`Slide ${index}`} className="w-[750px] " />
          </div>
        ))}
      </div>

      {/* Dots */}
      {/* <ul className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col">
        {images.map((_, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer w-2 rounded-full transition-all duration-500 ${
              active === index ? "h-8 bg-btn" : "h-2 bg-[#FFFFFF40]"
            } my-2`}
          ></li>
        ))}
      </ul> */}
    </div>
  );
}
