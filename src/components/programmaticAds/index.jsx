import React from "react";
import styles from "./ProgrammaticAds.module.css";
import {
  FaBullseye,
  FaRobot,
  FaChartBar,
  FaNetworkWired,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import CustomButton from "../../common/CustomButton";
import { useNavigate } from "react-router";

const ProgrammaticAds = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.programmatic_section} id="programmatic-ads">
      <div className={`${styles.container} container-fluid`}>
        <div className={styles.header}>
          <h2>
            Programmatic Advertising Services
            <br />
            <span>Powered by AI Attribution</span>
          </h2>
          <p>
            We combine real-time bidding, intelligent audience modeling and
            AI-driven attribution to deliver efficient, measurable ad spend and
            transparent ROI across channels.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Main feature */}
          <div className={styles.hero_card}>
            <div className={styles.hero_content}>
              <h3>End-to-End Programmatic Strategy</h3>
              <p>
                From auction strategy to creative optimization, our system
                leverages AI attribution to assign credit fairly across touchpoints,
                so budgets go where they actually perform.
              </p>

              <ul className={styles.benefits}>
                <li>
                  <FaBolt aria-hidden="true" />
                  Real-time bidding & dynamic budget allocation
                </li>
                <li>
                  <FaNetworkWired aria-hidden="true" />
                  Cross-channel reach (display, video, native, CTV)
                </li>
                <li>
                  <FaShieldAlt aria-hidden="true" />
                  Transparent reporting & fraud protection
                </li>
              </ul>

              <div className={styles.hero_cta}>
                <CustomButton
                  text="Start Programmatic"
                  bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                  textColor="#fff"
                  padding="10px 34px"
                  onClick={() => navigate("/contact")}
                />
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className={styles.features}>
            <div className={styles.card}>
              <FaBullseye className={styles.icon} />
              <h4>Audience Precision</h4>
              <p>
                AI-powered segmentation finds high-value users and micro-audiences
                to maximize conversion efficiency.
              </p>
            </div>

            <div className={styles.card}>
              <FaRobot className={styles.icon} />
              <h4>AI Attribution Modeling</h4>
              <p>
                Multi-touch attribution using causal models to credit touchpoints
                correctly and guide budget decisions.
              </p>
            </div>

            <div className={styles.card}>
              <FaChartBar className={styles.icon} />
              <h4>Automated Optimization</h4>
              <p>
                Algorithms adjust bids, creatives and placements continuously for
                CPA / ROAS targets.
              </p>
            </div>

            <div className={styles.card}>
              <FaNetworkWired className={styles.icon} />
              <h4>Supply Path Transparency</h4>
              <p>
                Full visibility into supply chains and publishers to reduce waste
                and lower CPMs.
              </p>
            </div>

            <div className={styles.card}>
              <FaShieldAlt className={styles.icon} />
              <h4>Brand Safety & Fraud Mitigation</h4>
              <p>
                Real-time filters and verification keep your media clean and
                measurable.
              </p>
            </div>

            <div className={styles.card}>
              <FaBolt className={styles.icon} />
              <h4>Fast Experimentation</h4>
              <p>
                Rapid A/B/X tests across creatives and audiences to discover
                winning combinations quickly.
              </p>
            </div>
          </div>
        </div>

        {/* quick metrics strip (optional visuals feel) */}
        <div className={styles.metrics}>
          <div>
            <strong>+30%</strong>
            <span>Avg. ROAS uplift</span>
          </div>
          <div>
            <strong>Real-time</strong>
            <span>Optimization & Bidding</span>
          </div>
          <div>
            <strong>Cross-Channel</strong>
            <span>Display • Video • CTV • Native</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammaticAds;
