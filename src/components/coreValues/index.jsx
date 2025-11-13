// import React from 'react'
// import styles from './core.module.css'
// import v1 from '../../assets/images/v1.svg'

// const CoreValues = () => {
//     const coreData = [
//         {
//             img: v1,
//             head: "Stay Humble",
//             para: "We lead with humility, always honoring the trust our clients place in us and never losing sight of the bigger picture",
//         },
//         {
//             img: v1,
//             head: "Stay Humble",
//             para: "We lead with humility, always honoring the trust our clients place in us and never losing sight of the bigger picture",
//         },
//         {
//             img: v1,
//             head: "Stay Humble",
//             para: "We lead with humility, always honoring the trust our clients place in us and never losing sight of the bigger picture",
//         },
//     ]
//     return (
//         <>
//             <div className={`${styles.main_fluid} container-fluid`}>
//                 <div className={`${styles.contain} container`}>
//                     <div className={`${styles.core_contact}`}>
//                         <h1>Our Core Values</h1>
//                         <p>At Arkane Digital, our values are more than words—they’re the foundation of how we work, build, and grow alongside our clients. From the start, we’ve worked with humility (Stay Humble), embraced innovation and learning (Continually Growing), and built meaningful partnerships through collaboration (Stronger Together).</p>
//                     </div>
//                     <div className={`${styles.card_section}`}>
//                         {coreData.map((item, index) => (
//                             <div key={index} className={`${styles.card_box}`}>
//                                 <img src={item.img} alt="v1" className='img-fluid' />
//                                 <h1>{item.head}</h1>
//                                 <p>{item.para}</p>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CoreValues



import React from 'react';
import styles from './core.module.css';
import v1 from '../../assets/images/v1.svg';

const CoreValues = () => {
  const coreData = [
    {
      img: v1,
      head: "Innovate with Purpose",
      para: "We don’t chase trends — we build meaningful technology that solves real problems and drives lasting progress.",
    },
    {
      img: v1,
      head: "Evolve Constantly",
      para: "Learning fuels everything we do. We challenge ourselves to grow, adapt, and explore new ideas every single day.",
    },
    {
      img: v1,
      head: "Empower Through Collaboration",
      para: "We believe success is a shared effort. By uniting creativity and expertise, we help teams and clients thrive together.",
    },
  ];

  return (
    <section className={`${styles.main_fluid} container-fluid`}>
      <div className={`${styles.contain} container`}>
        <div className={styles.core_contact}>
          <h4>Our Philosophy</h4>
          <h1>Our Core Values</h1>
          <p>
            At automyta, our values shape every project we take on. We build with integrity, curiosity, and collaboration —
            creating solutions that empower people and transform businesses for the better.
          </p>
        </div>
        <div className={styles.card_section}>
          {coreData.map((item, index) => (
            <div key={index} className={styles.card_box}>
              <div className={styles.icon_wrap}>
                <img src={item.img} alt={item.head} className={styles.icon} />
              </div>
              <h2>{item.head}</h2>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
