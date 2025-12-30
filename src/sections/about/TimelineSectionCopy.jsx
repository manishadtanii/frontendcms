import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Managing a court reporting agency",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    title: "The Birth of TVG",
    year: "2017",
    desc: "Managing a court reporting agency means balancing client demands, coordinating with reporters, billing cycles and deadlines all while maintaining your firm's reputation. That's where TVG Management comes in. We help you as your supportive operational partner.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
  },
  {
    title: "Next Phase",
    desc: "Step 3 content goes here. Add relevant descriptive text and swap the image.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
  }
];

const TimelineSectionGSAP = () => {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const lineRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = containerRef.current;

    // Kill all triggers before re-running effect (prevents duplicates)
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Pin the timeline section while steps are animating
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=1200", // Adjust for the scroll distance needed for all animations
      pin: true,
      scrub: true
    });

    // Step connecting lines and content triggers
    steps.forEach((_, idx) => {
      if (idx < steps.length - 1) {
        gsap.to(lineRefs.current[idx], {
          height: "100%",
          background: "#3b82f6",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: `top+=${(idx + 1) * 400}px top`,
            end: `top+=${(idx + 2) * 400}px top`,
            scrub: true,
            onEnter: () => setActiveStep(idx + 1),
            onEnterBack: () => setActiveStep(idx)
          }
        });
      }
    });

    // Reset lines for initial render
    gsap.set(lineRefs.current, { height: "0%", background: "#e2e8f0" });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <div
        ref={containerRef}
        style={{
          minHeight: "1200px", // Must match ScrollTrigger duration for pin
          padding: "4rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            maxWidth: "1200px",
            width: "100%",
            gap: "3rem"
          }}
        >
          {/* Left: Timeline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0"
            }}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Step Circle */}
                <div
                  ref={el => (circleRefs.current[idx] = el)}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border:
                      activeStep >= idx
                        ? "3px solid #3b82f6"
                        : "2px solid #e2e8f0",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    color: activeStep >= idx ? "#3b82f6" : "#94a3b8",
                    boxShadow:
                      activeStep >= idx
                        ? "0 0 20px rgba(59, 130, 246, 0.3)"
                        : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 2,
                    position: "relative"
                  }}
                >
                  {idx + 1}
                </div>

                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      width: "4px",
                      height: "120px",
                      backgroundColor: "#e2e8f0",
                      position: "relative",
                      margin: "8px 0"
                    }}
                  >
                    <div
                      ref={el => (lineRefs.current[idx] = el)}
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "0%",
                        backgroundColor: "#e2e8f0",
                        borderRadius: "2px"
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Center: Image */}
          <div
            style={{
              width: "400px",
              height: "500px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              position: "relative"
            }}
          >
            <img
              key={activeStep}
              src={steps[activeStep].img}
              alt={steps[activeStep].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            />
          </div>

          {/* Right: Content */}
          <div style={{ maxWidth: "500px", flex: "1" }}>
            <div
              key={activeStep}
              style={{
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: "translateY(0)",
                opacity: 1
              }}
            >
              {steps[activeStep].year && (
                <p
                  style={{
                    fontSize: "1.25rem",
                    color: "#3b82f6",
                    fontWeight: "600",
                    margin: "0 0 1rem 0"
                  }}
                >
                  {steps[activeStep].year}
                </p>
              )}
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#1a202c",
                  margin: "0 0 1.5rem 0",
                  lineHeight: "1.2"
                }}
              >
                {steps[activeStep].title}
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  margin: 0
                }}
              >
                {steps[activeStep].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra footer for scroll (not pinned) */}
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default TimelineSectionGSAP;
