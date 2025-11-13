import React from "react";
import styles from "./PaidSearch.module.css";
import {
  FaSearchDollar,
  FaChartLine,
  FaAd,
  FaLaptopCode,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";
import CustomButton from "../../common/CustomButton";
import { useNavigate } from "react-router";

const PaidSearch = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.paid_section} id="paid-search">
      <div className={`${styles.container} container`}>
        {/* Header */}
        <div className={styles.header}>
          <h2>
            Paid Search Advertising <br />
            <span>That Delivers Real ROI</span>
          </h2>
          <p>
            We turn every click into measurable revenue with AI-driven bid
            optimization, audience segmentation, and deep attribution models —
            giving your brand an edge on Google, Bing, and beyond.
          </p>
        </div>

        {/* Highlight metrics */}
        <div className={styles.metrics}>
          <div>
            <h3>+42%</h3>
            <span>Higher Conversion Rate</span>
          </div>
          <div>
            <h3>−28%</h3>
            <span>Lower Cost Per Acquisition</span>
          </div>
          <div>
            <h3>3.6x</h3>
            <span>Average Return on Ad Spend</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className={styles.features}>
          <div className={styles.card}>
            <FaSearchDollar className={styles.icon} />
            <h4>Smart Keyword Targeting</h4>
            <p>
              Discover intent-rich keywords with AI-assisted research to
              dominate high-value search results and reduce wasted spend.
            </p>
          </div>

          <div className={styles.card}>
            <FaChartLine className={styles.icon} />
            <h4>Performance-Driven Bidding</h4>
            <p>
              Dynamic CPC and CPA bidding ensures you pay the right price at the
              right moment, driven by predictive algorithms.
            </p>
          </div>

          <div className={styles.card}>
            <FaAd className={styles.icon} />
            <h4>Ad Copy & A/B Testing</h4>
            <p>
              AI-assisted creative testing and variant tracking to find
              high-CTR, high-conversion messaging fast.
            </p>
          </div>

          <div className={styles.card}>
            <FaLaptopCode className={styles.icon} />
            <h4>Landing Page Optimization</h4>
            <p>
              UX-optimized pages built for speed, clarity, and conversion —
              lowering bounce rate and boosting ROI.
            </p>
          </div>

          <div className={styles.card}>
            <FaClock className={styles.icon} />
            <h4>Real-Time Reporting</h4>
            <p>
              24/7 performance dashboards with transparent metrics and
              AI-generated insights.
            </p>
          </div>

          <div className={styles.card}>
            <FaArrowUp className={styles.icon} />
            <h4>Growth Optimization</h4>
            <p>
              Continuous refinement through data loops ensures your campaigns
              scale efficiently with every iteration.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.cta_box}>
          <h3>
            Ready to turn clicks into customers?
          </h3>
          <CustomButton
            text="Launch My Campaign"
            bgColor="linear-gradient(90deg, #5a65ff, #a958ff, #ff5f9e)"
            textColor="#fff"
            padding="14px 36px"
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
    </section>
  );
};

export default PaidSearch;
