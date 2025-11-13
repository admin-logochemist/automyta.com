// import React from 'react'
// import styles from './experience.module.css'
// import Navbar from '../navbar'
// import blackLogo from '../../assets/images/black_logo.svg';

// const ExperienceWork = ({ head, subHead, para, bgImage }) => {
//     return (
//         <>
//             {/* <Navbar BG={true}
//                 // logoImage={blackLogo}
//                 // textColor="#ffffffff"
//                 // iconColor="#000"
//                 // iconclose="#fff"
//                 // buttonBg="#ffffffff"
//                 // buttonTextColor="#000000ff"
//             /> */}
//             <div className={`${styles.work_sec} container-fluid`} >
//                 <div className={`${styles.work_contain} container`} style={{
//                     backgroundImage: `
//                 linear-gradient(rgba(15, 10, 20, 0.6), rgba(15, 10, 20, 0.6)),
//                 url(${bgImage})
//                 `,
//                     backgroundPosition: 'center',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundSize: 'cover',
//                 }}>
//                     <div className={`${styles.ai_work}`}>
//                         <div className={`${styles.ai_work_contact}`}>
//                             <h3>{head}</h3>
//                             <h1>{subHead}</h1>
//                             <p>{para}</p>

//                         </div>


//                     </div>

//                 </div>

//             </div>
//         </>

//     )
// }

// export default ExperienceWork



import React from 'react';
import styles from './experience.module.css';
import Navbar from '../navbar';
import blackLogo from '../../assets/images/black_logo.svg';

const ExperienceWork = ({ head, subHead, para, bgImage }) => {
  return (
    <>
      {/* <Navbar BG={true} logoImage={blackLogo} /> */}
      <div className={`${styles.work_sec} container-fluid`}>
        <div
          className={`${styles.work_contain} container`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(10, 5, 25, 0.8), rgba(10, 5, 25, 0.8)),
              url(${bgImage})
            `,
          }}
        >
          <div className={styles.ai_work}>
            <div className={styles.ai_work_contact}>
              <h3>{head}</h3>
              <h1 className={styles.gradientText}>{subHead}</h1>
              <p>{para}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceWork;
