import React from "react";
import Slider from "react-slick";
import styles from "./HowWeDeliver.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../assets/images/download9.jpg'
import s2 from '../../assets/images/download10.jpg'
import s3 from '../../assets/images/download11.jpg'
import s4 from '../../assets/images/download12.jpg'
import s5 from '../../assets/images/download13.jpg'

const slides = [
  {
    title: "Discovery",
    desc: "We start by understanding your business challenges, goals, and audience — forming the foundation for a tailored strategy.",
    img: s1,
  },
  {
    title: "Strategy",
    desc: "Our team crafts a smart roadmap combining insights, design, and technology to set direction for success.",
    img: s2,
  },
  {
    title: "Delivery",
    desc: "We execute using an Agile approach — fast, flexible, and focused on continuous improvement.",
    img: s3,
  },
  {
    title: "Support",
    desc: "Even after launch, we provide ongoing optimization, analytics, and evolution to keep your digital products thriving.",
    img: s4,
  },
    {
    title: "Support",
    desc: "Even after launch, we provide ongoing optimization, analytics, and evolution to keep your digital products thriving.",
    img: s5,
  },
];

const HowWeDeliver = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className={`${styles.main_fluid} container-fluid`}>
      <div className={`${styles.main_container} container`}>
        <div className={styles.header}>
          <h2>How we deliver</h2>
          <p>
            While most clients are different and have different needs, our delivery model typically
            applies more or less across all scenarios. Some projects may involve only certain
            aspects, but generally we maintain a consistent approach for all clients.
          </p>
        </div>

        <Slider {...settings} className={styles.slider}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div
                className={styles.bg}
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                <div className={styles.overlay}>
                  <div className={styles.textBox}>
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HowWeDeliver;
