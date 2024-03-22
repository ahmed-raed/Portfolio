import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import TypedText from "./components/typed";
import Image from "next/image";
import myImage from "../public/assets/Photo.jpg";
import blueStorm from "../public/assets/Ellipse3.png";
import greenStorm from "../public/assets/Ellipse1.png";

export default function Home() {
  const strings = ["Web Developer", "AI Enginner", "Software Developer"];

  return (
    <>
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
            href="https://www.linkedin.com/in/ahmedraed202/"
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
                priority={true}
              />
              <div className={styles.blur}><span className={styles.blurText}>Welcome To My Portfolio</span></div>
            </div>
            <Image
              src={greenStorm}
              alt="Green Storm"
              className={styles.greenStorm}
            />
          </div>
        </div>
      </div>
    </>
  );
}
