"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import purpleStorm from "../../public/assets/purpleStorm.png";
import personalPhoto from "../../public/assets/personal-photo.png";
import blueStorm from "../../public/assets/Ellipse3.png";
import Link from "next/link";
import cert1 from "../../public/assets/AICertificate.png";
import cert2 from "../../public/assets/frontendCertificate.png";
import certIcon from "../../public/assets/cert.png";

export default function About() {
  const [showPopup, setShowPopup] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
  });

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setFormStatus({ message: "", type: "" });
  };

  const requestResume = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      setFormStatus({
        message: "Please enter your email address.",
        type: "error",
      });
      return;
    }

    setFormStatus({
      message: "Sending resume request...",
      type: "info",
    });

    try {
      const formspreeUrl = "https://formspree.io/f/xeolgdol";

      const formData = new FormData();
      formData.append("email", email);
      formData.append("subject", "New Resume Request from Portfolio");
      formData.append(
        "message",
        `Hello Ahmed,

Someone has requested your resume through your portfolio website.

Request Details:
- User Email: ${email}
- Date: ${new Date().toLocaleString()}

Please send your resume to the provided email address.

Best regards,
Portfolio Website`
      );

      const response = await fetch(formspreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({
          message:
            "Resume request sent successfully! I'll send you my resume shortly.",
          type: "success",
        });

        setTimeout(() => {
          closePopup();
        }, 3000);
      } else {
        throw new Error("Formspree request failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);

      const subject = "New Resume Request from Portfolio";
      const body = `Hello Ahmed,

Someone has requested your resume through your portfolio website.

Request Details:
- Email: ${email}
- Date: ${new Date().toLocaleString()}

Please send your resume to the provided email address.

Best regards,
Portfolio Website`;

      const mailtoUrl = `mailto:ahmedraed.dev@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);

      setFormStatus({
        message:
          "Email client opened with your request. If nothing happened, please email ahmedraed.dev@gmail.com directly.",
        type: "success",
      });

      setTimeout(() => {
        closePopup();
      }, 4000);
    }
  };

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
            <div
              className={styles.bluring}
              onClick={openPopup}
              style={{ cursor: "pointer" }}
            >
              My Resume
              <Image
                src={certIcon}
                alt="certificate"
                priority
                className={styles.certIco}
              />
            </div>
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
        {showPopup && (
          <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
              <button className={styles.closeButton} onClick={closePopup}>
                ×
              </button>
              <h2>Resume Request</h2>
              <p>Please enter your email to request my resume:</p>

              <form onSubmit={requestResume}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.submitButton}>
                  Request Resume
                </button>
              </form>

              {formStatus.message && (
                <p
                  className={
                    formStatus.type === "success"
                      ? styles.successMessage
                      : formStatus.type === "error"
                      ? styles.errorMessage
                      : styles.infoMessage
                  }
                >
                  {formStatus.message}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
