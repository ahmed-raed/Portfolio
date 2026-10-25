"use client";

import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Template({ children }) {
  const containerRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position on route navigation
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger instances for the new route
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isNormalMotion: "(prefers-reduced-motion: no-preference)",
          isReducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isReducedMotion } = context.conditions;

          if (isReducedMotion) {
            gsap.set(containerRef.current, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            containerRef.current,
            { autoAlpha: 0, y: 15 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              clearProps: "transform",
            }
          );
        }
      );
    },
    { scope: containerRef, dependencies: [pathname] }
  );

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
