import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [1, 2, 3, 4, 5];

export default function StackingCards() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      // Scale effect while scrolling
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => "top bottom-=100",
          end: () => "top top-=100",
          scrub: true,
          markers: false, // set to true to see the markers
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: 1 - (cardRefs.current.length - index) * 0.025,
      });

      // Pinning each card
      ScrollTrigger.create({
        trigger: card,
        start: "top top+=40",
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans px-10">
      <div>
        <h1 className="mb-[80vh] text-4xl font-semibold">Stacking Cards</h1>
        <div className="flex">
          <div className="ml-24">
            {cardData.map((num, idx) => (
              <div
                key={num}
                ref={el => (cardRefs.current[idx] = el)}
                style={{ top: `${40 + 5 * idx}px`, position: "relative" }}
                className="card h-[200px] w-full mb-[50px] bg-white text-3xl flex items-center justify-center shadow-lg"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 bg-red-500 w-full h-[400px]" />
      </div>
    </div>
  );
}
