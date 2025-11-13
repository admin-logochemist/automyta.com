import React from "react";
import styles from "./AIMarketing.module.css";
import { FaBrain, FaChartLine, FaRobot, FaBullhorn } from "react-icons/fa";
import CustomButton from "../../common/CustomButton";

const AIMarketing = () => {
  return (
    <section className={`${styles.services_section} container-fluid`}>
      <div className={styles.content}>
        <h2>
          Unlock Growth with <span>AI-Powered Digital Marketing</span>
        </h2>
        <p>
          We combine human creativity with artificial intelligence to deliver
          smarter, data-driven marketing campaigns that adapt in real time and
          maximize ROI across every channel.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaBrain className={styles.icon} />
            <h3>Predictive Insights</h3>
            <p>
              Use machine learning models to forecast user intent and optimize
              campaigns before they even launch.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <h3>Real-Time Optimization</h3>
            <p>
              Automate budget allocation and audience targeting through AI
              algorithms that improve every hour.
            </p>
          </div>

          <div className={styles.card}>
            <FaRobot className={styles.icon} />
            <h3>Smart Automation</h3>
            <p>
              From ad placements to email timing — our AI tools manage workflows
              with precision and consistency.
            </p>
          </div>

          <div className={styles.card}>
            <FaBullhorn className={styles.icon} />
            <h3>Personalized Campaigns</h3>
            <p>
              Deliver hyper-personalized content that speaks directly to your
              audience’s behavior and preferences.
            </p>
          </div>
        </div>

        <div className={styles.btn_sec}>
          <CustomButton
            text="Let’s Grow With AI"
            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
            textColor="#fff"
            padding="10px 30px"
            onClick={() => (window.location.href = "/contact")}
          />
        </div>
      </div>
    </section>
  );
};

export default AIMarketing;
