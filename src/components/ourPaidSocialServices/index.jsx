import React, { useState } from "react";
import styles from "./OurPaidSocialServices.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const OurPaidSocialServicesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "Instagram Ad Campaigns",
      desc: "We craft visually striking carousel, reels, and story ads powered by AI-driven audience insights to increase engagement and conversion rates.",
    },
    {
      title: "Meta Retargeting Strategy",
      desc: "Leverage AI attribution to reconnect with high-intent users across Facebook and Instagram—turning data into measurable revenue.",
    },
    {
      title: "TikTok Growth Campaigns",
      desc: "We analyze viral trends using AI models, creating adaptive TikTok ads that align with audience behavior and real-time engagement shifts.",
    },
    {
      title: "Audience Intelligence",
      desc: "AI-based segmentation tools help us understand behavior, mood, and micro-intent—delivering hyper-personalized targeting for better ROI.",
    },
    {
      title: "Performance Analytics",
      desc: "Get clear visibility with our live analytics dashboard—AI monitors every click, optimizing budgets in real-time for performance growth.",
    },
    {
      title: "Creative Studio & Content",
      desc: "We blend art and AI to produce compelling visuals, motion ads, and storytelling experiences that boost social visibility and conversions.",
    },
  ];

  return (
    <section className={styles.faq_section}>
      <div className={`${styles.container} container`}>
        <div className={styles.header}>
          <h2>Our Paid Social Services</h2>
          <p>
            A fusion of AI precision and creative excellence — explore how we transform
            paid social advertising into an intelligent performance engine.
          </p>
        </div>

        <div className={styles.faq_wrapper}>
          {faqs.map((faq, index) => (
            <div
              className={`${styles.faq_item} ${
                activeIndex === index ? styles.active : ""
              }`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faq_header}>
                <h3>{faq.title}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className={styles.icon} />
                ) : (
                  <FaChevronDown className={styles.icon} />
                )}
              </div>

              <div
                className={`${styles.faq_answer} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <p>{faq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPaidSocialServicesFAQ;
