"use client";

import React, { useEffect, useRef, useState } from "react";
const Reveal = ({ children, duration, x, y }) => {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  console.log(intersecting);

  const threshold = 1;

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, [intersecting, setIntersecting]);

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : "translate(0px, 0px)",
      }}
      className={`transition ${intersecting ? "opacity-100" : "opacity-10"}`}
      //   add classname with transition property in it above ^
      ref={ref}
    >
      {children}
    </div>
  );
};
export default Reveal;
