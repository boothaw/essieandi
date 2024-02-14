"use client";

import { ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children?: ReactNode;
  // any props that come into the component
  // gify
}

const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  // console.log(intersecting);

  const threshold = 1;
  const duration = "50";
  const x = 0;
  const y = 0;

  const clean = ref.current;

  useEffect(() => {
    const cleanup = ref.current;
    if (cleanup) {
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

      intersectionObserver.observe(cleanup);

      return () => {
        if (cleanup) {
          intersectionObserver.unobserve(cleanup);
        }
      };
    }
  }, [clean]);

  return (
    <div
      style={
        {
          // transitionDuration: duration,
          // transform: !intersecting
          //   ? `translate(${x}px, ${y}px)`
          //   : "translate(0px, 0px)",
        }
      }
      //   className={`transition ${intersecting ? "opacity-100" : "opacity-10"} `}
      //   add classname with transition property in it above ^
      ref={ref}
    >
      {children}
    </div>
  );
};
export default Reveal;
