import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import email from "../../public/assets/Email.png";
import linkedin from "../../public/assets/linkedin.png";
import insta from "../../public/assets/insta.png";
import github from "../../public/assets/github.png";

export default function Contact() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.headline}>Get In Touch</h1>
        <div className={styles.contactBtns}>
          <Link
            target="_blank"
            href="mailto:ahmedraed.dev@gmail.com"
            className={styles.infoLink}
          >
            <Image
              src={email}
              alt="Email"
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.one}`}>Email</span>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/ahmedraed202/" className={styles.infoLink}>
            <Image
              src={linkedin}
              alt="LinkedIn"
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.two}`}>LinkedIn</span>
          </Link>
          <Link target="_blank" href="https://www.instagram.com/44.ed/" className={styles.infoLink}>
            <Image
              src={insta}
              alt="Instagram"
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.three}`}>
              Instagram
            </span>
          </Link>
          <Link target="_blank" href="https://github.com/ahmed-raed" className={styles.infoLink}>
            <Image
              src={github}
              alt="GitHub"
              priority
              className={styles.appIcon}
            />
            <span className={`${styles.naming} ${styles.four}`}>GitHub</span>
          </Link>
        </div>
      </div>
    </>
  );
}
