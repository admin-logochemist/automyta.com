// import React from "react";
// import styles from "./WhatWeDo.module.css";
// import {
//   FaAtom,
//   FaCode,
//   FaCogs,
//   FaRobot,
//   FaChartLine,
//   FaUserCog,
// } from "react-icons/fa";

// const WhatWeDo = () => {
//   const cards = [
//     {
//       id: 1,
//       icon: <FaAtom className={styles.icon} />,
//       title: "STRATEGY + INTELLIGENCE",
//       desc: "Smarter Strategies, Powered by AI + Expertise. We combine AI-driven insights with deep strategic expertise to uncover opportunities, reduce risk, and chart paths to growth. Our approach helps you move faster, with clarity and confidence.",
//     },
//     {
//       id: 2,
//       icon: <FaCode className={styles.icon} />,
//       title: "EXPERIENCE + ITERATIONS",
//       desc: "We blend human-centered design with AI-driven insights to continuously refine digital experiences. Every iteration enhances engagement, accessibility, and impact.",
//     },
//     {
//       id: 3,
//       icon: <FaCogs className={styles.icon} />,
//       title: "DEVELOPMENT + AUTOMATION",
//       desc: "We leverage intelligent automation and agile engineering to help teams code, deploy, and iterate with speed—transforming how digital products are maintained.",
//     },

//         {
//       id: 1,
//       icon: <FaAtom className={styles.icon} />,
//       title: "STRATEGY + INTELLIGENCE",
//       desc: "Smarter Strategies, Powered by AI + Expertise. We combine AI-driven insights with deep strategic expertise to uncover opportunities, reduce risk, and chart paths to growth. Our approach helps you move faster, with clarity and confidence.",
//     },
//     {
//       id: 2,
//       icon: <FaCode className={styles.icon} />,
//       title: "EXPERIENCE + ITERATIONS",
//       desc: "We blend human-centered design with AI-driven insights to continuously refine digital experiences. Every iteration enhances engagement, accessibility, and impact.",
//     },
//     {
//       id: 3,
//       icon: <FaCogs className={styles.icon} />,
//       title: "DEVELOPMENT + AUTOMATION",
//       desc: "We leverage intelligent automation and agile engineering to help teams code, deploy, and iterate with speed—transforming how digital products are maintained.",
//     },
//   ];

//   return (
//     <div className={`${styles.main_Section} container-fluid`}>
//       <div className={`${styles.section} container`}>
//         <div className={styles.header}>
//           <h2>What we do</h2>
//           <p>
//             We combine the speed of intelligence with the power of human insight
//             to transform digital.
//           </p>
//         </div>

//         <div className={styles.cardsWrapper}>
//           {cards.map((card) => (
//             <div key={card.id} className={styles.card}>
//               {card.icon}
//               <h3>{card.title}</h3>
//               <p>{card.desc}</p>
//               <span className={styles.learnMore}>+ LEARN MORE</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDo;





import React from "react";
import styles from "./WhatWeDo.module.css";
import {
  FaRobot,
  FaCode,
  FaCogs,
  FaChartLine,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

const WhatWeDo = () => {
  const cards = [
    {
      id: 1,
      icon: <FaLightbulb className={styles.icon} />,
      title: "STRATEGY + INTELLIGENCE",
      desc: "We merge human insight with AI-driven analytics to craft smarter strategies that unlock growth and reduce risk.",
    },
    {
      id: 2,
      icon: <FaBrain className={styles.icon} />,
      title: "EXPERIENCE + INNOVATION",
      desc: "Human-centered design meets adaptive intelligence. We create seamless experiences that evolve through user data.",
    },
    {
      id: 3,
      icon: <FaCode className={styles.icon} />,
      title: "ENGINEERING + AUTOMATION",
      desc: "We use agile engineering and automation to build, deploy, and scale digital products faster and more efficiently.",
    },
    {
      id: 4,
      icon: <FaCogs className={styles.icon} />,
      title: "OPERATIONS + OPTIMIZATION",
      desc: "AI-driven automation that enhances workflows, improves productivity, and powers sustainable growth.",
    },
    {
      id: 5,
      icon: <FaChartLine className={styles.icon} />,
      title: "ANALYTICS + INSIGHT",
      desc: "Data is nothing without meaning. We transform analytics into actionable intelligence for decision-making.",
    },
    {
      id: 6,
      icon: <FaRobot className={styles.icon} />,
      title: "AI + FUTURE SYSTEMS",
      desc: "From predictive models to intelligent chatbots, we build scalable AI systems that redefine efficiency.",
    },
  ];

  return (
    <div className={`${styles.main_Section} container-fluid`}>
      <div className={`${styles.section} container`}>
        <div className={styles.header}>
          <h2>
            What We <span>Do</span>
          </h2>
          <div className={styles.divider}></div>
          <p>
            We combine the speed of intelligence with the power of human insight
            to transform digital experiences.
          </p>
        </div>

        <div className={styles.cardsWrapper}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.iconBox}>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className={styles.learnMore}>+ LEARN MORE</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
