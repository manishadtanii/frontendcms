import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // icon package
import Arrow from "./Arrow";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50  bg-btn text-white  rounded-full shadow-lg  transition-all duration-300"
      >
        <Arrow customClass={"-rotate-90"} />
        {/* <ArrowUp size={20} /> */}
      </button>
    )
  );
}
