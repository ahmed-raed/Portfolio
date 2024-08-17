import React from "react";
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
          <Link target="_blank" href="https://www.linkedin.com/in/ahmedalmawla/" className={styles.infoLink}>
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
