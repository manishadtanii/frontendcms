import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSmoothScroll(duration = 2000) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const targetY = el.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const percent = Math.min(time / duration, 1); // 0 → 1 progress
      window.scrollTo(0, startY + diff * percent);
      if (time < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hash, duration]);
}

export default useSmoothScroll;
