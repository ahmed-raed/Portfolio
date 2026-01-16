"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import email from "../../public/assets/Email.png";
import linkedin from "../../public/assets/linkedin.png";
import insta from "../../public/assets/insta.png";
import github from "../../public/assets/github.png";
import geenCloud from "../../public/assets/Ellipse1.png";
import blueCloud from "../../public/assets/Ellipse3.png";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ahmedraed.dev@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.headline}>Get In Touch</h1>
        <Image
          src={geenCloud}
          alt="Green Cloud"
          priority
          className={styles.greenCloud}
        />
        <div className={styles.contactBtns}>
          <div className={styles.emailContainer}>
            <Link
              target="_blank"
              href="mailto:ahmedraed.dev@gmail.com"
              className={styles.infoLink}
            >
              <Image
                src={email}
                alt=""
                priority
                className={styles.appIcon}
              />
              <span className={`${styles.naming} ${styles.one}`}>Email</span>
            </Link>
            <button
              onClick={copyEmail}
              className={styles.copyBtn}
              title={copied ? "Copied!" : "Copy email address"}
              aria-label={copied ? "Email address copied" : "Copy email address"}
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.copyIcon}
              >
                {copied ? (
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <>
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/ahmedalmawla/"
            className={`${styles.infoLink} ${styles.socialLink}`}
          >
            <Image
              src={linkedin}
              alt=""
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.two}`}>LinkedIn</span>
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/44.ed/"
            className={`${styles.infoLink} ${styles.socialLink}`}
          >
            <Image
              src={insta}
              alt=""
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.three}`}>
              Instagram
            </span>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/ahmed-raed"
            className={`${styles.infoLink} ${styles.socialLink}`}
          >
            <Image
              src={github}
              alt=""
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.four}`}>GitHub</span>
          </Link>
        </div>
        <Image
          src={blueCloud}
          alt="Blue Cloud"
          priority
          className={styles.blueCloud}
        />
      </div>
    </>
  );
}
