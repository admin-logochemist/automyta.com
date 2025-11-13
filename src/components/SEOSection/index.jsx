import React from "react";
import styles from "./SEOSection.module.css";
import { FaSearch, FaChartLine, FaGlobe, FaRobot } from "react-icons/fa";
import CustomButton from "../../common/CustomButton";

const SEOSection = () => {
  return (
    <section className={`${styles.seo_section} container-fluid`}>
      <div className={styles.inner}>
        <h2>
          SEO Services That Maximize <span>Visibility</span> & <span>ROI</span>
        </h2>
        <p>
          Our AI-driven SEO solutions go beyond keywords. We optimize your entire
          digital ecosystem — from technical foundations to user intent — using
          predictive analytics and automation that continuously refine your
          rankings and conversions.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <FaSearch className={styles.icon} />
            <h3>Advanced Keyword Intelligence</h3>
            <p>
              Discover high-converting keywords through AI analysis of search trends,
              intent patterns, and competitor landscapes.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <h3>AI-Powered Rank Tracking</h3>
            <p>
              Monitor keyword positions in real-time and let algorithms adjust your
              strategy dynamically to maintain top results.
            </p>
          </div>

          <div className={styles.card}>
            <FaGlobe className={styles.icon} />
            <h3>Technical SEO & Site Health</h3>
            <p>
              We optimize page speed, indexing, and site architecture to improve
              crawl efficiency and UX-driven ranking signals.
            </p>
          </div>

          <div className={styles.card}>
            <FaRobot className={styles.icon} />
            <h3>Content Optimization Engine</h3>
            <p>
              AI models enhance your content with semantic SEO, sentiment analysis,
              and personalized on-page recommendations.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <CustomButton
            text="Boost My Rankings"
            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
            textColor="#fff"
            padding="12px 36px"
            onClick={() => (window.location.href = "/contact")}
          />
        </div>
      </div>
    </section>
  );
};

export default SEOSection;
