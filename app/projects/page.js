"use client";

import React, { useState, useRef } from "react";
import styles from "./page.module.css";
import RoboChat from "../../public/assets/RoboChat.png";
import StartupsBus from "../../public/assets/StartupsBus.jpg";
import HatraHome from "../../public/assets/hatrahome.jpg";
import Travelo from "../../public/assets/Travelo.jpg";
import linkIcon from "../../public/assets/link.png";
import blueStorm from "../../public/assets/Ellipse3.png";
import greenStorm from "../../public/assets/Ellipse1.png";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
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

          // Headline entrance
          gsap.from(`.${styles.headline}`, {
            y: -30,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
          });

          // ScrollTrigger entrance for each project card
          const projects = gsap.utils.toArray(`.${styles.project}`);
          projects.forEach((proj, idx) => {
            gsap.from(proj, {
              y: 50,
              autoAlpha: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: proj,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          });

          // Hover animation on project images (zoom overlay) & card lift
          projects.forEach((proj) => {
            const imgContainer = proj.querySelector(`.${styles.imageContainer}`);
            if (imgContainer) {
              const img = imgContainer.querySelector("img");
              imgContainer.addEventListener("mouseenter", () => {
                gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
              });
              imgContainer.addEventListener("mouseleave", () => {
                gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
              });
            }
          });
        }
      );
    },
    { scope: containerRef }
  );

  const handleHatraHomeClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div ref={containerRef} style={{ visibility: "hidden" }}>
      <div className={styles.main}>
        <h1 className={styles.headline}>Projects</h1>
        <div className={`${styles.project} ${styles.column}`}>
          <div className={styles.projectInfo}>
            <h2 className={styles.title}>Hatra Home</h2>
            <p className={styles.projectPara}>
              A real estate admin portal that allows real estate agency and
              agents to manage their properties and clients easily.
            </p>
            <span className={styles.storm2}>
              <Image
                src={greenStorm}
                alt="storm Icon"
                className={styles.smallClouds}
                priority
              />
            </span>
            <div className={`${styles.rightLink} ${styles.secondProjectLink}`}>
              <Link
                href=""
                onClick={handleHatraHomeClick}
                className={styles.projectLink}
                title="Click to learn more"
              >
                <Image
                  src={linkIcon}
                  alt="link Icon"
                  className={styles.linkIcon}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.projectImg} ${styles.projectTwoImg}`}>
            <Link
              href=""
              onClick={handleHatraHomeClick}
              title="Click to learn more"
              className={styles.imgLink}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={HatraHome}
                  alt="Hatra Home"
                  className={styles.pImg}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link
              href="https://robochat.ahmedalmawla.com/"
              target="_blank"
              title="Click to open"
              className={styles.imgLink}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={RoboChat}
                  alt="RoboChat"
                  className={styles.pImg}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>
            </Link>
          </div>
          <div className={styles.projectInfo}>
            <h2 className={styles.title}>RoboChat</h2>
            <p className={styles.projectPara}>
              An AI-powered chatbot and assistant developed using NLP. You can
              use it to help you with your tasks.
            </p>
            <span className={styles.storm1}>
              <Image
                src={blueStorm}
                alt="storm Icon"
                className={styles.smallClouds}
                priority
              />
            </span>
            <div className={styles.rightLink}>
              <Link
                href="https://robochat.ahmedalmawla.com/"
                target="_blank"
                title="Click to open"
                className={styles.projectLink}
              >
                <Image
                  src={linkIcon}
                  alt="link Icon"
                  className={styles.linkIcon}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.project} ${styles.column}`}>
          <div className={styles.projectInfo}>
            <h2 className={styles.title}>Startups Bus</h2>
            <p className={styles.projectPara}>
              The first digital platform for the entrepreneurial ecosystem in
              Iraq! I have had the honor to be one of its founding developers.
            </p>
            <span className={styles.storm2}>
              <Image
                src={greenStorm}
                alt="storm Icon"
                className={styles.smallClouds}
                priority
              />
            </span>
            <div className={`${styles.rightLink} ${styles.secondProjectLink}`}>
              <Link
                href="https://startupsbus.ahmedalmawla.com/"
                target="_blank"
                title="Click to open"
                className={styles.projectLink}
              >
                <Image
                  src={linkIcon}
                  alt="link Icon"
                  className={styles.linkIcon}
                  priority
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.projectImg} ${styles.projectTwoImg}`}>
            <Link
              href="https://startupsbus.ahmedalmawla.com/"
              target="_blank"
              title="Click to open"
              className={styles.imgLink}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={StartupsBus}
                  alt="Startups Bus"
                  className={styles.pImg}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link
              href="https://ahmed-raed.github.io/Travelo/"
              target="_blank"
              title="Click to open"
              className={styles.imgLink}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={Travelo}
                  alt="Travelo"
                  className={styles.pImg}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>
            </Link>
          </div>
          <div className={`${styles.projectInfo} ${styles.magnBtm}`}>
            <h2 className={styles.title}>Travelo</h2>
            <p className={styles.projectPara}>
              A travel platform that helps users find the best travel packages
              for their next trip!
            </p>
            <span className={styles.storm3}>
              <Image
                src={blueStorm}
                alt="storm Icon"
                className={styles.smallClouds}
                priority
              />
            </span>
            <div className={styles.rightLink}>
              <Link
                href="https://ahmed-raed.github.io/Travelo/"
                target="_blank"
                title="Click to open"
                className={styles.projectLink}
              >
                <Image
                  src={linkIcon}
                  alt="link Icon"
                  className={styles.linkIcon}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Modal for Hatra Home private project */}
        {showModal && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <h2>Private Project</h2>
              <p>
                This project is private and not publicly available. If you&apos;re
                interested in learning more about Hatra Home, please feel free
                to contact me and I&apos;ll be happy to show you the details.
              </p>
              <div className={styles.modalButtons}>
                <button onClick={closeModal} className={styles.closeBtn}>
                  Close
                </button>
                <Link href="/contact" className={styles.contactButton}>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
