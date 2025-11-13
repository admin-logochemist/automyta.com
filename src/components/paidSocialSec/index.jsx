import React from "react";
import styles from "./PaidSocial.module.css";
import { FaInstagram, FaFacebookF, FaTiktok, FaBullhorn, FaRobot, FaUsers } from "react-icons/fa";
import CustomButton from "../../common/CustomButton";
import { useNavigate } from "react-router";

const PaidSocialSEC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.social_section}>
      <div className={`${styles.container} container`}>
        {/* Header */}
        <div className={styles.header}>
          <h2>
            Paid Social Advertising <br />
            <span>Powered by AI-Driven Strategies</span>
          </h2>
          <p>
            Turn social feeds into powerful sales engines. Our AI-powered
            algorithms find the right audiences, create dynamic ad variants,
            and deliver hyper-personalized experiences across every major
            social platform.
          </p>
        </div>

        {/* Social Platforms Showcase */}
        <div className={styles.platforms}>
          <div className={styles.platform}>
            <FaInstagram className={`${styles.icon} ${styles.insta}`} />
            <span>Instagram</span>
          </div>
          <div className={styles.platform}>
            <FaFacebookF className={`${styles.icon} ${styles.fb}`} />
            <span>Facebook</span>
          </div>
          <div className={styles.platform}>
            <FaTiktok className={`${styles.icon} ${styles.tiktok}`} />
            <span>TikTok</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.features}>
          <div className={styles.card}>
            <FaRobot className={styles.card_icon} />
            <h4>AI Audience Modeling</h4>
            <p>
              Predictive segmentation discovers your next best customer before
              they even click — across Meta, TikTok, and LinkedIn.
            </p>
          </div>

          <div className={styles.card}>
            <FaBullhorn className={styles.card_icon} />
            <h4>Creative Intelligence</h4>
            <p>
              Our AI analyzes real-time engagement data to auto-optimize ad
              creatives and messaging for maximum impact.
            </p>
          </div>

          <div className={styles.card}>
            <FaUsers className={styles.card_icon} />
            <h4>Cross-Channel Optimization</h4>
            <p>
              Unified strategy powered by machine learning ensures consistent
              brand voice and efficiency across every social network.
            </p>
          </div>
        </div>

        {/* Gradient CTA */}
        <div className={styles.cta}>
          <h3>Let’s make your brand the next viral success.</h3>
          <CustomButton
            text="Start My Social Campaign"
            bgColor="linear-gradient(90deg, #ff5f9e, #a958ff, #6a7bff)"
            textColor="#fff"
            padding="14px 36px"
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
    </section>
  );
};

export default PaidSocialSEC;
