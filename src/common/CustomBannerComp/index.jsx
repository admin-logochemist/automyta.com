// import React from 'react'
// import styles from './cbc.module.css'
// import CustomButton from '../../common/CustomButton'

// const CustomBannerComp = ({
//     heading1 = "Transforming",
//     heading2 = "AI Possibilities",
//     paragraph = "At Automyta, we design future-ready AI systems that empower businesses to automate workflows, enhance decision-making, and unlock new levels of digital intelligence. Our solutions help you innovate faster, operate smarter, and stay ahead of the technology curve.",
//     bgImage = require('../../assets/images/Discover_Bg.png'), // default background
//     showButton = false,
//     buttonText = "Ask Your Question",
//     buttonOnClick = () => {}
// }) => {

//     const dynamicBackground = {
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url(${bgImage})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed"
//     }

//     return (
//         <div className={`${styles.main_Section} container-fluid`} style={dynamicBackground}>
//             <div className={`${styles.contain_sec}`}>
//                 <div className={styles.main_ai}>
//                     <div className={styles.sec_content}>
//                         <div className={styles.motivation}>
//                             <h1 className={styles.gradientText}>{heading1}</h1>
//                         </div>
//                         <div className={styles.motivation}>
//                             <h1>{heading2}</h1>
//                         </div>
//                     </div>

//                     <div className={styles.moti_para}>
//                         <p>{paragraph}</p>
//                     </div>

//                     {showButton && (
//                         <CustomButton
//                             text={buttonText}
//                             bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
//                             textColor="#fff"
//                             padding="10px 25px"
//                             onClick={buttonOnClick}
//                         />
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CustomBannerComp



import React from 'react'
import styles from './cbc.module.css'
import CustomButton from '../../common/CustomButton'

const CustomBannerComp = ({
    heading1 = "",
    heading2 = "",
    paragraph = "",
    bgImage = "",
    showButton = false,
    buttonText = "",
    buttonOnClick = () => {}
}) => {

    const dynamicBackground = {
        backgroundImage: bgImage
            ? `linear-gradient(rgba(0, 0, 0, 0.562), rgba(0, 0, 0, 0.562)), url(${bgImage})`
            : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll" // FIXED HATA DIA
    }

    return (
        <div className={`${styles.main_Section} container-fluid`} style={dynamicBackground}>
            <div className={`${styles.contain_sec}`}>
                <div className={styles.main_ai}>
                    <div className={styles.sec_content}>
                        {heading1 && (
                            <div className={styles.motivation}>
                                <h1 className={styles.gradientText}>{heading1}</h1>
                            </div>
                        )}

                        {heading2 && (
                            <div className={styles.motivation}>
                                <h1>{heading2}</h1>
                            </div>
                        )}
                    </div>

                    {paragraph && (
                        <div className={styles.moti_para}>
                            <p>{paragraph}</p>
                        </div>
                    )}

                    {showButton && (
                        <CustomButton
                            text={buttonText}
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="10px 25px"
                            onClick={buttonOnClick}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CustomBannerComp
