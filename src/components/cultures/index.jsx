// import React from 'react'
// import styles from './culture.module.css'
// import h1 from '../../assets/images/h1.svg'


// const OurCultures = () => {
//     const coreData = [
//         {
//             img: h1,
//             head: "Human-First, Always",
//             para: "We lead with empathy. Whether it’s with clients, partners, or teammates, we listen first, respect every perspective, and value authenticity over ego.",
//         },
//         {
//             img: h1,
//             head: "Human-First, Always",
//             para: "We lead with empathy. Whether it’s with clients, partners, or teammates, we listen first, respect every perspective, and value authenticity over ego.",
//         },
//         {
//             img: h1,
//             head: "Human-First, Always",
//             para: "We lead with empathy. Whether it’s with clients, partners, or teammates, we listen first, respect every perspective, and value authenticity over ego.",
//         },
//     ]
//     return (
//         <>
//             <div className={`${styles.main_fluid} container-fluid`}>
//                 <div className={`${styles.contain} container`}>
//                     <div className={`${styles.core_contact}`}>
//                         <h1>Our Culture</h1>
//                         <p>At Arkane Digital, culture isn’t an afterthought—it’s the foundation of everything we do. We believe that when people thrive, great work naturally follows. That’s why we’ve built an environment rooted in humility, curiosity, and collaboration.</p>
//                     </div>
//                     <div className={`${styles.card_section}`}>
//                         {coreData.map((item, index) => (
//                             <div key={index} className={`${styles.card_box}`}>
//                                 <img src={item.img} alt="v1" className='img-fluid' />
//                                 <div className={`${styles.cultures_text}`}>
//                                     <h1>{item.head}</h1>
//                                     <p>{item.para}</p>
//                                 </div>

//                             </div>
//                         ))}

//                     </div>
//                     <div className={`${styles.culture_para}`}>
//                         <p>At Arkane Digital, culture means more than perks or policies—it’s the way we show up every day. Humble. Hungry to grow. Stronger together. And always driven by the belief that values come first, and solutions follow</p>

//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default OurCultures



import React from 'react';
import styles from './culture.module.css';
import h1 from '../../assets/images/h1.svg';

const OurCultures = () => {
  const coreData = [
    {
      img: h1,
      head: "Human-Centered by Design",
      para: "We put people first — clients, teammates, and partners. Empathy guides our decisions, and authenticity drives how we work together.",
    },
    {
      img: h1,
      head: "Curiosity Fuels Innovation",
      para: "We ask questions, experiment boldly, and continuously explore new ideas that challenge the status quo and unlock growth.",
    },
    {
      img: h1,
      head: "Collaboration Creates Impact",
      para: "Great results come from shared effort. We celebrate teamwork, empower every voice, and build solutions stronger together.",
    },
  ];

  return (
    <section className={`${styles.main_fluid} container-fluid`}>
      <div className={`${styles.contain} container`}>
        <div className={styles.core_contact}>
          <h4>What Defines Us</h4>
          <h1>Our Culture</h1>
          <p>
            At automyta, culture is at the heart of everything we do. We cultivate an environment where people thrive, ideas flourish, and innovation drives meaningful impact.
          </p>
        </div>


        <div className={styles.card_section}>
          {coreData.map((item, index) => (
            <div key={index} className={styles.card_box}>
              <div className={styles.icon_wrap}>
                <img src={item.img} alt={item.head} className={styles.icon} />
              </div>
              <div className={styles.cultures_text}>
                <h2>{item.head}</h2>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.culture_para}>
          <p>
            At automyta, culture is more than a statement — it’s the way we show up every day.
            Empathetic. Curious. Collaborative. Values-driven. Every project we tackle reflects who we are and what we stand for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCultures;
