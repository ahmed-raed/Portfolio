import React from "react";
import styles from "./page.module.css";
import RoboChat from "../../public/assets/RoboChat.png";
import StartupsBus from "../../public/assets/StartupsBus.png";
import Travelo from "../../public/assets/Travelo.png";
import linkIcon from "../../public/assets/link.png";
import blueStorm from "../../public/assets/Ellipse3.png";
import greenStorm from "../../public/assets/Ellipse1.png";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.headline}>Projects</h1>
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link href="/jump" target="_blank" className={styles.imgLink}>
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
              A chatbot that helps users find the best chatbot platform for
              their business.
            </p>
            <span className={styles.storm}>
              <Image src={blueStorm} alt="storm Icon" priority />
            </span>
            <div className={styles.rightLink}>
              <Link href="/jump" target="_blank" className={styles.projectLink}>
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
        <div className={styles.project}>
          <div className={styles.projectInfo}>
            <h2 className={styles.title}>Startups Bus</h2>
            <p className={styles.projectPara}>
              The first digital platform for the entrepreneurial ecosystem in
              Iraq.
            </p>
            <span className={`${styles.storm} ${styles.leftStorm}`}>
              <Image src={greenStorm} alt="storm Icon" priority />
            </span>
            <div className={`${styles.rightLink} ${styles.secondProjectLink}`}>
              <Link href="/jump" target="_blank" className={styles.projectLink}>
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
            <Link href="/jump" target="_blank" className={styles.imgLink}>
              <div className={styles.imageContainer}>
                <Image
                  src={StartupsBus}
                  alt="RoboChat"
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
            <Link href="/jump" target="_blank" className={styles.imgLink}>
              <div className={styles.imageContainer}>
                <Image
                  src={Travelo}
                  alt="RoboChat"
                  className={styles.pImg}
                  priority
                />
                <div className={styles.overlay}></div>
              </div>
            </Link>
          </div>
          <div className={styles.projectInfo}>
            <h2 className={styles.title}>Travelo</h2>
            <p className={styles.projectPara}>
              A travel platform that helps users find the best travel packages
              for their next trip.
            </p>
            <span className={`${styles.storm} ${styles.storming}`}>
              <Image src={blueStorm} alt="storm Icon" priority />
            </span>
            <div className={styles.rightLink}>
              <Link href="/jump" target="_blank" className={styles.projectLink}>
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
      </div>
    </>
  );
}
