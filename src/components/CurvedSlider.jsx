import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const CurvedSlider = ({
  rotationSpeed = 50,
  responsiveConfig = {
    mobile:{ maxWidth: Infinity, radius: 1000, cardCount: 12, cardSize: 145, spacing: 1 },
    tablet: { maxWidth: Infinity, radius: 1000, cardCount: 12, cardSize: 145, spacing: 1 },
    desktop: { maxWidth: Infinity, radius: 1000, cardCount: 12, cardSize: 145, spacing: 1 },
  },
  images
}) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP infinite rotation
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        rotation: 360,
        duration: rotationSpeed,
        ease: "none",
        repeat: -1,
      });
    }
    return () => gsap.killTweensOf(containerRef.current);
  }, [rotationSpeed]);

  // ✅ Get pixel config for current screen size
  const getResponsiveConfig = (width) => {
    if (width <= responsiveConfig.mobile.maxWidth) return responsiveConfig.mobile;
    if (width <= responsiveConfig.tablet.maxWidth) return responsiveConfig.tablet;
    return responsiveConfig.desktop;
  };

  const { radius, cardCount, cardSize, spacing } = getResponsiveConfig(windowSize.width);

  // Generate cards in pixels
 /*  const generateCards = () => {
    const cards = [];
    const angleStep = ((2 * Math.PI) / cardCount) * spacing;

    for (let i = 0; i < cardCount; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      cards.push({
        id: i + 1,
        x,
        y,
        angle: angle * (180 / Math.PI),
      image: images && images.length > 0 
  ? (typeof images[i] === 'string' ? images[i] : images[i]?.url) 
  : `/contact${(i % 3) + 1}.png`,
      });
    }
    return cards;
  }; */
  const generateCards = () => {
  const cards = [];
  
  // Define how many total cards you want (e.g., images.length * 5)
  const totalDisplayCount = images && images.length > 0 ? images.length * 4 : cardCount;
  const angleStep = (2 * Math.PI) / totalDisplayCount;

  for (let i = 0; i < totalDisplayCount; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    // Use modulo (%) to cycle through the images array repeatedly
    const currentImageData = images && images.length > 0 ? images[i % images.length] : null;

    cards.push({
      id: i, // Unique ID for each card instance
      x,
      y,
      angle: angle * (180 / Math.PI),
      image: currentImageData 
        ? (typeof currentImageData === 'string' ? currentImageData : currentImageData?.url) 
        : `/contact${(i % 3) + 1}.png`,
    });
  }
  return cards;
};

  const cards = generateCards();

  return (
    <div
      style={{
        width: "100%",
        height: `${radius - 200}px`, // only show top half
        position: "relative",
        overflow: "hidden",
      }}
      >
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          left: "50%",
          top: "300px",
          transform: "translateX(-50%)",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              position: "absolute",
              width: `${cardSize * 1.8}px`,
              height: `${cardSize}px`,
              left: `${card.x - (cardSize * 1.8) / 2 + radius}px`,
              top: `${card.y - cardSize / 2 + radius}px`,
              transformOrigin: "center",
              transform: `rotate(${card.angle + 90}deg)`,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              pointerEvents: "none",
              transition: "all 0.3s ease",
              scale: 1.5
            }}
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurvedSlider;
