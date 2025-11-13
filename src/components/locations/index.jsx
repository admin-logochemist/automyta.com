// import React from 'react'
// import styles from './location.module.css'
// import location1 from '../../assets/images/dallas.jpg'
// import location2 from '../../assets/images/charlotte.jpg'
// const Locations = () => {
//     const location = [
//         {
//             img: location1,
//             para1: "5717 Legacy Drive, Suite 250, #12",
//             para2: "Plano, TX 75024",
//             para3: "469.461.7571",
//         },
//         {
//             img: location2,
//             para1: "5717 Legacy Drive, Suite 250, #12",
//             para2: "Plano, TX 75024",
//             para3: "469.461.7571",
//         },
//     ]
//     return (
//         <>
//             <div className={`${styles.main_sec} container-fluid`}>
//                 <div className={`${styles.container} container`}>
//                     <div className={`${styles.location_head}`}>
//                         <h1>Locations</h1>
//                         <p>We are a remote-first company located across the US. We would still love to meet face to face if you would, with our main offices in Dallas, TX and Charlotte, NC, as well as in Irvine, CA.</p>
//                     </div>
//                     <div className={`${styles.location_sec}`}>
//                         {location.map((item, index) => (
//                             <div key={index} className={`${styles.location_img_sec}`}>
//                                 <img src={item.img} alt="dallas" className='img-fluid' />
//                                 <div className={`${styles.address}`}>
//                                     <p>{item.para1}</p>
//                                     <p>{item.para2}</p>
//                                     <p>{item.para3}</p>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Locations


import React from "react";
import styles from "./location.module.css";
import location1 from "../../assets/images/download23.jpg";
import location2 from "../../assets/images/download24.jpg";
import location3 from "../../assets/images/download25.jpg";
import location4 from "../../assets/images/download26.jpg";
import location5 from "../../assets/images/download27.jpg";
import location6 from "../../assets/images/download28.jpg";

const Locations = () => {
  const location = [
    {
      img: location1,
      para1: "5717 Legacy Drive, Suite 250",
      para2: "Plano, TX 75024",
      para3: "(972) 555-1023",
    },
    {
      img: location2,
      para1: "1200 W Morehead St, Suite 300",
      para2: "Charlotte, NC 28208",
      para3: "(704) 555-2045",
    },
    {
      img: location3,
      para1: "500 Spectrum Center Dr, Suite 100",
      para2: "Irvine, CA 92618",
      para3: "(949) 555-3098",
    },
    {
      img: location4,
      para1: "200 Tech Way, Suite 400",
      para2: "Austin, TX 78701",
      para3: "(512) 555-4077",
    },
    {
      img: location5,
      para1: "350 Innovation Blvd, Suite 150",
      para2: "Seattle, WA 98121",
      para3: "(206) 555-5120",
    },
    {
      img: location6,
      para1: "1000 Digital Ave, Suite 10",
      para2: "New York, NY 10018",
      para3: "(212) 555-6789",
    },
  ];

  return (
    <div className={`${styles.main_sec} container-fluid`}>
      <div className={`${styles.container} container`}>
        <div className={styles.location_head}>
          <h1>Our Locations</h1>
          <p>
            Automyta is a remote-first company with offices across the United States.
            While we thrive virtually, our teams are always ready for face-to-face collaboration
            from Dallas, Charlotte, Irvine, Austin, Seattle, and New York.
          </p>
        </div>

        <div className={styles.location_sec}>
          {location.map((item, index) => (
            <div key={index} className={styles.location_card}>
              <div className={styles.img_wrap}>
                <img src={item.img} alt="location" className="img-fluid" />
              </div>
              <div className={styles.address}>
                <p>{item.para1}</p>
                <p>{item.para2}</p>
                <p>{item.para3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
