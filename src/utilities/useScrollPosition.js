import { useState, useEffect } from "react";

function getScrollPosition() {
  const { pageYOffset: scrollPosition } = window;
  return scrollPosition;
}

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    function handleScroll() {
      // console.log(window.pageYOffset);
      setScrollPosition(getScrollPosition());
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}
