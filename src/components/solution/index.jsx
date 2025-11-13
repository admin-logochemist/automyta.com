// import React from 'react'
// import styles from './solution.module.css'

// const Solutions = () => {
//   return (
//     <>
//     <div className={`${styles.main_sec} container-fluid`}>
//         <div className={`${styles.contain} container`}>
//             <div className={`${styles.solution_sec}`}>
//                 <h1>“Together, these values guide us in building not just digital solutions, but lasting partnerships and a better way of doing business.”</h1>
//             </div>
//         </div>
//     </div>
//     </>

//   )
// }

// export default Solutions



import React from 'react';
import styles from './solution.module.css';

const Solutions = () => {
  return (
    <section className={`${styles.main_sec} container-fluid`}>
      <div className={`${styles.contain} container`}>
        <div className={styles.solution_sec}>
          <h4>Our Vision</h4>
          <h1>Crafting Solutions That Last</h1>
          <p>
            At automyta, we go beyond building digital products — we create meaningful experiences, scalable systems,
            and long-term partnerships. Every solution we design is driven by innovation, precision, and a commitment
            to help businesses thrive in an ever-changing digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
