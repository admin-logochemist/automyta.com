// // import React from 'react'
// // import styles from './clients.module.css'
// // import m1 from '../../assets/images/m1.svg'
// // import m2 from '../../assets/images/m2.svg'
// // import m3 from '../../assets/images/m3.svg'
// // import m4 from '../../assets/images/m4.svg'
// // import m5 from '../../assets/images/m5.svg'
// // import m6 from '../../assets/images/m6.svg'
// // import m7 from '../../assets/images/m7.svg'
// // import Marquee from 'react-fast-marquee'

// // const OurClients = () => {
// //     const imgData = [
// //         { icon: m1 }, { icon: m2 }, { icon: m3 }, { icon: m4 }, { icon: m5 }, { icon: m6 }, { icon: m7 },{ icon: m3 }, { icon: m4 }
// //     ]
// //     return (
// //         <>
// //             <div className={`${styles.main_fluid} container-fluid`}>
// //                 <div className={`${styles.contain} container`}>
// //                     <div className={`${styles.client_head}`}>
// //                         <h1>Our Clients Trust Us.</h1>
// //                     </div>
// //                 </div>
// //                 <div className={`${styles.marque_sec}`}>
// //                     <Marquee speed={40} pauseOnHover gradient={false}>
// //                     {imgData.map((item, index) => (
// //                         <div key={index} className={`${styles.img_marque}`}>
// //                             <img src={item.icon} alt={`client-${index}`} />
// //                         </div>
// //                     ))}
// //                     </Marquee>
// //                 </div>
// //             </div>
// //         </>

// //     )
// // }

// // export default OurClients



// import React from 'react';
// import styles from './clients.module.css';
// import m1 from '../../assets/images/m1.svg';
// import m2 from '../../assets/images/m2.svg';
// import m3 from '../../assets/images/m3.svg';
// import m4 from '../../assets/images/m4.svg';
// import m5 from '../../assets/images/m5.svg';
// import m6 from '../../assets/images/m6.svg';
// import m7 from '../../assets/images/m7.svg';
// import Marquee from 'react-fast-marquee';

// const OurClients = () => {
//   const imgData = [
//     { icon: m1 }, { icon: m2 }, { icon: m3 }, { icon: m4 },
//     { icon: m5 }, { icon: m6 }, { icon: m7 }, { icon: m3 }, { icon: m4 }
//   ];

//   return (
//     <div className={`${styles.main_fluid} container-fluid`}>
//       <div className={`${styles.contain} container`}>
//         <div className={styles.client_head}>
//           <h1>Our Clients Trust Us.</h1>
//         </div>
//       </div>

//       <div className={styles.marque_sec}>
//         <Marquee speed={40} pauseOnHover gradient={false}>
//           {imgData.map((item, index) => (
//             <div key={index} className={styles.img_marque}>
//               <img src={item.icon} alt={`client-${index}`} />
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default OurClients;



import React from 'react';
import styles from './clients.module.css';
import m1 from '../../assets/images/m1.svg';
import m2 from '../../assets/images/m2.svg';
import m3 from '../../assets/images/m3.svg';
import m4 from '../../assets/images/m4.svg';
import m5 from '../../assets/images/m5.svg';
import m6 from '../../assets/images/m6.svg';
import m7 from '../../assets/images/m7.svg';
import Marquee from 'react-fast-marquee';

const OurClients = () => {
  const imgData = [
    { icon: m1 }, { icon: m2 }, { icon: m3 }, { icon: m4 },
    { icon: m5 }, { icon: m6 }, { icon: m7 }, { icon: m3 }, { icon: m4 }
  ];

  return (
    <div className={`${styles.main_fluid} container-fluid`}>
      <div className={`${styles.contain} container`}>
        <div className={styles.client_head}>
          <h1>
            Our <span>Clients</span> Trust Us
          </h1>
          <p>Brands that partner with us to shape bold, future-ready experiences.</p>
        </div>
      </div>

      <div className={styles.marque_sec}>
        <Marquee speed={45} pauseOnHover gradient={false}>
          {imgData.map((item, index) => (
            <div key={index} className={styles.img_marque}>
              <img src={item.icon} alt={`client-${index}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurClients;
