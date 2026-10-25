"use client";

import React, { useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import TypedText from "./components/typed";
import Image from "next/image";
import myImage from "../public/assets/Photo.jpg";
import blueStorm from "../public/assets/Ellipse3.png";
import greenStorm from "../public/assets/Ellipse1.png";
import ai from "../public/assets/ai.png";
import coding from "../public/assets/coding.png";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Home() {
  const strings = ["Web Developer", "AI Developer", "Technical Consultant"];
  const containerRef = useRef(null);

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
            gsap.set(containerRef.current, { autoAlpha: 1 });
            return;
          }

          gsap.set(containerRef.current, { autoAlpha: 1 });

          const tl = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          // Left side text and button entrance
          tl.from(`.${styles.text1}`, {
            y: 30,
            autoAlpha: 0,
            duration: 0.7,
          })
            .from(
              `.${styles.text2}`,
              {
                y: 40,
                autoAlpha: 0,
                duration: 0.8,
              },
              "-=0.5"
            )
            .from(
              `.${styles.text3}`,
              {
                y: 30,
                autoAlpha: 0,
                duration: 0.7,
              },
              "-=0.5"
            )
            .from(
              `.${styles.linkedinBtn}`,
              {
                y: 20,
                scale: 0.9,
                autoAlpha: 0,
                duration: 0.6,
              },
              "-=0.4"
            );

          // Right side hero image and decor entrance
          tl.from(
            `.${styles.blueStorm}`,
            {
              scale: 0.8,
              autoAlpha: 0,
              duration: 1,
              ease: "back.out(1.5)",
            },
            "-=0.8"
          )
            .from(
              `.${styles.imgAndBlurAndIcons}`,
              {
                scale: 0.85,
                y: 30,
                autoAlpha: 0,
                duration: 0.9,
              },
              "-=0.8"
            )
            .from(
              [`.${styles.codingIcon}`, `.${styles.aiIcon}`],
              {
                scale: 0,
                autoAlpha: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "back.out(1.7)",
              },
              "-=0.5"
            )
            .from(
              `.${styles.greenStorm}`,
              {
                scale: 0.8,
                autoAlpha: 0,
                duration: 1,
              },
              "-=0.6"
            );

          // Gentle continuous floating motion on background storms & icons
          gsap.to(`.${styles.blueStorm}`, {
            y: "-=12",
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(`.${styles.greenStorm}`, {
            y: "+=12",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(`.${styles.codingIcon}`, {
            y: "-=8",
            rotate: -4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(`.${styles.aiIcon}`, {
            y: "+=8",
            rotate: 4,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      <div className={styles.both}>
        <div className={styles.left}>
          <div className={styles.text1}>Hello, My name is</div>
          <div className={styles.text2}>Ahmed Al-Mawla</div>
          <div className={styles.text3}>
            And I am a{" "}
            <span>
              <TypedText strings={strings} />
            </span>
          </div>
          <Link
            href="https://www.linkedin.com/in/ahmedalmawla/"
            className={styles.linkedinBtn}
            target="_blank"
          >
            <span>My LinkedIn</span>
          </Link>
        </div>
        <div className={styles.right}>
          <div className={styles.allThings}>
            <Image
              src={blueStorm}
              alt="Blue Storm"
              className={styles.blueStorm}
            />
            <div className={styles.imgAndBlurAndIcons}>
              <Image
                src={myImage}
                alt="Picture of the author"
                className={styles.img}
                priority
              />
              <div className={styles.blur}>
                <span className={styles.blurText}>Welcome to my portfolio!</span>
              </div>
            </div>
            <div className={styles.iconsDiv}>
              <div className={styles.iconsCoding}>
                <Image src={coding} alt="ai icon" className={styles.codingIcon} />
              </div>
              <div className={styles.iconsAi}>
                <Image src={ai} alt="ai icon" className={styles.aiIcon} />
              </div>
            </div>
            <Image
              src={greenStorm}
              alt="Green Storm"
              className={styles.greenStorm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
