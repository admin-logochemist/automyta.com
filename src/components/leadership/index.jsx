// import React from 'react'
// import styles from './lead.module.css'
// import l1 from '../../assets/images/l1.jpg'
// import l2 from '../../assets/images/l2.webp'
// import l3 from '../../assets/images/l3.webp'
// import l4 from '../../assets/images/l4.webp'
// import l5 from '../../assets/images/l5.jpg'
// import l6 from '../../assets/images/l6.webp'
// import l7 from '../../assets/images/l7.webp'
// import { FaLinkedin } from "react-icons/fa";


// const Leadership = () => {
//     const leadData = [
//         {
//             img: l1,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l2,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l3,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l4,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l5,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l6,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//         {
//             img: l7,
//             head: "Martin Knudsen",
//             para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//         },
//     ]
//     return (
//         <>
//             <div className={`${styles.main_sec} container-fluid`}>
//                 <div className={`${styles.contain} container`}>
//                     <div className={`${styles.core_contact}`}>
//                         <h1>Meet Our Leadership Team</h1>
//                         <p>At Arkane Digital, culture isn’t an afterthought—it’s the foundation of everything we do. We believe that when people thrive, great work naturally follows. That’s why we’ve built an environment rooted in humility, curiosity, and collaboration.</p>
//                     </div>
//                     <div className={`${styles.card_section}`}>
//                         {leadData.map((item, index) => (

//                             <div key={index} className={`${styles.card_box}`}>
//                                 <div className={`${styles.lead_sec_img}`}>
//                                     <img src={item.img} alt="v1" className='img-fluid' />
//                                     <h3>{item.head}</h3>
//                                 </div>
//                                 <div className={`${styles.cultures_text}`}>
//                                     <div className={`${styles.lead_btn}`}>
//                                         <button>Chief Executive Officer</button>
//                                     </div>
//                                     <p>{item.para}</p>
//                                 </div>
//                                 <div className={`${styles.social_icons}`}>
//                                     <FaLinkedin className={`${styles.FaLinkedin}`} />

//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Leadership






// import React from 'react';
// import styles from './lead.module.css';
// import l1 from '../../assets/images/l1.jpg';
// import l2 from '../../assets/images/l2.webp';
// import l3 from '../../assets/images/l3.webp';
// import l4 from '../../assets/images/l4.webp';
// import l5 from '../../assets/images/l5.jpg';
// import l6 from '../../assets/images/l6.webp';
// import l7 from '../../assets/images/l7.webp';
// import { FaLinkedin } from "react-icons/fa";

// const Leadership = () => {
//   const leadData = [
//     {
//       img: l1,
//       head: "Martin Knudsen",
//       role: "Chief Executive Officer",
//       para: "Illuminating the path forward — aligning purpose, insight, and execution to create lasting impact.",
//     },
//     {
//       img: l2,
//       head: "Sofia Anders",
//       role: "Chief Creative Officer",
//       para: "Blending vision and innovation to design experiences that inspire, engage, and empower.",
//     },
//     {
//       img: l3,
//       head: "James Carter",
//       role: "Chief Technology Officer",
//       para: "Engineering future-ready solutions through collaboration, innovation, and technical excellence.",
//     },
//     {
//       img: l4,
//       head: "Lena Moreau",
//       role: "Chief Operations Officer",
//       para: "Streamlining processes and nurturing teams to deliver consistent value and creativity.",
//     },
//     {
//       img: l5,
//       head: "Ethan Brooks",
//       role: "Chief Strategy Officer",
//       para: "Shaping direction with data-driven insights and a deep understanding of market dynamics.",
//     },
//     {
//       img: l6,
//       head: "Mia Chen",
//       role: "Head of Product",
//       para: "Leading product innovation through empathy, vision, and customer-focused thinking.",
//     },
//     {
//       img: l7,
//       head: "David Kim",
//       role: "Head of Marketing",
//       para: "Telling brand stories that connect deeply and drive meaningful engagement across audiences.",
//     },
//   ];

//   return (
//     <section className={`${styles.main_sec} container-fluid`}>
//       <div className={`${styles.contain} container`}>
//         <div className={styles.core_contact}>
//           <h4>Our Leaders</h4>
//           <h1>Meet Our Leadership Team</h1>
//           <p>
//             At Arkane Digital, leadership means empowering people to push boundaries, build trust, and create digital
//             experiences that make an impact. Our team brings together vision, creativity, and strategy — the core
//             ingredients that define who we are.
//           </p>
//         </div>

//         <div className={styles.card_section}>
//           {leadData.map((item, index) => (
//             <div key={index} className={styles.card_box}>
//               <div className={styles.lead_image}>
//                 <img src={item.img} alt={item.head} />
//               </div>
//               <h2>{item.head}</h2>
//               <p className={styles.role}>{item.role}</p>
//               <p className={styles.desc}>{item.para}</p>
//               <a href="#" className={styles.linkedin}>
//                 <FaLinkedin />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leadership;




import React from 'react';
import styles from './lead.module.css';
import { FaLinkedin, FaUserTie, FaLightbulb, FaLaptopCode, FaCogs, FaProjectDiagram, FaBullhorn } from "react-icons/fa";

const Leadership = () => {
  const leadData = [
    {
      icon: <FaUserTie />,
      head: "Martin Knudsen",
      role: "Chief Executive Officer",
      para: "Guiding automyta with vision and purpose, ensuring innovation and strategy align to deliver meaningful impact.",
      color: "#6C63FF",
    },
    {
      icon: <FaUserTie />,
      head: "Sofia Anders",
      role: "Chief Creative Officer",
      para: "Blending design and innovation to craft experiences that inspire, engage, and resonate with users.",
      color: "#FF6584",
    },
    {
      icon: <FaUserTie />,
      head: "James Carter",
      role: "Chief Technology Officer",
      para: "Driving technical excellence and future-ready solutions through collaboration, innovation, and strategic thinking.",
      color: "#00BFA6",
    },
    {
      icon: <FaUserTie />,
      head: "Lena Moreau",
      role: "Chief Operations Officer",
      para: "Optimizing operations and nurturing teams to deliver consistent quality, creativity, and efficiency.",
      color: "#FFB400",
    },
    {
      icon: <FaUserTie />,
      head: "Ethan Brooks",
      role: "Chief Strategy Officer",
      para: "Shaping automyta’s strategic direction using data, insights, and market intelligence to drive growth.",
      color: "#8D6EFF",
    },
    {
      icon: <FaUserTie />,
      head: "Mia Chen",
      role: "Head of Product",
      para: "Leading product innovation by combining empathy, vision, and user-focused design to create scalable solutions.",
      color: "#FF6F61",
    },
    {
      icon: <FaUserTie />,
      head: "David Kim",
      role: "Head of Marketing",
      para: "Telling automyta’s story with creativity and strategy, driving engagement, brand awareness, and meaningful connections.",
      color: "#00C2FF",
    },
  ];

  return (
    <section className={`${styles.main_sec} container-fluid`}>
      <div className={`${styles.contain} container`}>
       <div className={styles.core_contact}>
          <h4>Our Leaders</h4>
          <h1>Meet the Leadership Team</h1>
          <p>
            At automyta, leadership is about inspiring innovation, empowering teams, and delivering results that make a real impact. 
            Our leaders combine vision, creativity, and strategy to guide our mission and shape the future of digital solutions.
          </p>
        </div>

        <div className={styles.card_section}>
          {leadData.map((item, index) => (
            <div key={index} className={styles.card_box}>
              <div className={styles.lead_image}>
                <div
                  className={styles.icon_wrapper}
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
              </div>
              <h2>{item.head}</h2>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.desc}>{item.para}</p>
              <a href="#" className={styles.linkedin}>
                <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
