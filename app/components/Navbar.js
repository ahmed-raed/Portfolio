"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const pathname = usePathname();

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
            gsap.set(navRef.current, { autoAlpha: 1 });
            gsap.set(".nav-item", { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(navRef.current, { autoAlpha: 1 });
          gsap.from(".nav-item", {
            y: -20,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform",
          });
        }
      );
    },
    { scope: navRef }
  );

  const navLinks = [
    { href: "/", label: "Home", className: "home" },
    { href: "/about", label: "About", className: "about" },
    { href: "/projects", label: "Projects", className: "projects" },
    { href: "/contact", label: "Contact", className: "contact" },
  ];

  return (
    <nav ref={navRef} style={{ visibility: "hidden" }}>
      <div className="links">
        {navLinks.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className={`${item.className} nav-item`}>
              <Link
                href={item.href}
                className="theLink"
                style={isActive ? { color: "#4afdfb" } : undefined}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
