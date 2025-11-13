// import React from "react";
// import styles from "./DynamicSection.module.css";

// const DynamicSection = ({ title, subtitle, desc, img, reverse }) => {
//     return (
//         <div
//             className={`${styles.section} ${reverse ? styles.reverse : ""} container`}
//         >
//             <div className={styles.textBox}>
//                 <h4 className={styles.subtitle}>{subtitle}</h4>
//                 <h2 className={styles.title}>{title}</h2>
//                 <p className={styles.desc}>{desc}</p>
//             </div>

//             <div className={styles.imageBox}>
//                 <img src={img} alt={title} />
//             </div>
//         </div>
//     );
// };

// export default DynamicSection;

import React from "react";
import styles from "./DynamicSection.module.css";

const DynamicSection = ({ title, subtitle, desc, img, reverse, showButton, buttonText }) => {
    return (
        <>
            <div className={`${styles.main_sec} container-fluid`}>
                <div
                    className={`${styles.section} ${reverse ? styles.reverse : ""} container`}
                >
                    <div className={styles.textBox}>
                        <h4 className={styles.subtitle}>{subtitle}</h4>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.desc}>{desc}</p>

                        {showButton && (
                            <button className={styles.ctaButton}>
                                {buttonText || "Learn More"}
                            </button>
                        )}
                    </div>

                    <div className={styles.imageBox}>
                        <img src={img} alt={title} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DynamicSection;
