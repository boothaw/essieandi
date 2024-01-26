"use client";

import { ReactNode } from "react";
import { LayoutProps } from "@/.next/types/app/layout";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  children?: ReactNode;
  x: any;
  y: any;
  // any props that come into the component
}

const Reveal = ({ children, x, y }: Props) => {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  console.log(intersecting);

  const threshold = 1;

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
      style={{
        // transitionDuration: 50,
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
