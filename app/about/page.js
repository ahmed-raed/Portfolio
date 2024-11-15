import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import purpleStorm from "../../public/assets/purpleStorm.png";
import personalPhoto from "../../public/assets/personal.png";
import blueStorm from "../../public/assets/Ellipse3.png";
import Link from "next/link";
import cert1 from "../../public/assets/AICertificate.png";
import cert2 from "../../public/assets/frontendCertificate.png";
import certIcon from "../../public/assets/cert.png";

export default function About() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.headline}>Who am I?</h1>
        <div className={styles.bothSections}>
          <div className={styles.leftSec}>
            <Image
              src={purpleStorm}
              alt="Purple Storm"
              className={styles.purpleStorm}
            />
            <Image
              src={personalPhoto}
              alt="Personal Photo"
              className={styles.personalPhoto}
              priority
            />
            <Link
              href="/"
              target="_blank"
              className={styles.bluring}
            >
              My Resume
              <Image
                src={certIcon}
                alt="certificate"
                priority
                className={styles.certIco}
              />
            </Link>
            <Image
              src={blueStorm}
              alt="Blue Storm"
              className={styles.blueStorm}
            />
          </div>
          <div className={styles.rightSec}>
            <div className={styles.perParagraph}>
              <p>
                <span className={styles.paraSpan}>I am Ahmed Al-Mawla,</span>
                <br />
                an AI engineer and web developer passionate about blending
                artificial intelligence with web technologies. Specializing in
                building intelligent systems and user-focused web applications,
                he thrives on optimizing user experiences through scalable
                solutions. From crafting machine learning algorithms to
                implementing frontend innovations, Ahmed is dedicated to pushing
                technological boundaries for impactful results.
              </p>
            </div>
            <div className={styles.certificates}>
              <div className={styles.certOne}>
                <Link
                  href="https://scrimba.com/certificate/uRnqm9AV/gaiengineer"
                  target="_blank"
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={cert1}
                      alt="cert1"
                      className={styles.certs}
                      priority
                    />
                    <div className={styles.overlay}></div>
                  </div>
                </Link>
                <h4>AI Engineer Certificate</h4>
              </div>
              <div className={styles.certTwo}>
                <Link
                  href="https://drive.google.com/file/d/1Yzh2g-Pips-Zuni1ZeUfXrOtHWAxIvpu"
                  target="_blank"
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={cert2}
                      alt="cert2"
                      className={styles.certs}
                      priority
                    />
                    <div className={styles.overlay}></div>
                  </div>
                </Link>
                <h4>Meta Front-End Developer Certificate</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
