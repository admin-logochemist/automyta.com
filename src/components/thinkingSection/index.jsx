
// import React from 'react'
// import styles from './thinking.module.css'
// import icon1 from '../../assets/images/a4.svg'
// import icon2 from '../../assets/images/a2.svg'
// import icon3 from '../../assets/images/a3.svg'
// import icon4 from '../../assets/images/a1.svg'
// import CustomButton from '../../common/CustomButton'


// const ThinkingSection = () => {

//     const digitalData = [
//         {
//             id: 1,
//             icon: icon1,
//             title: "Strategy + Intelligence",
//             desc: "We merge human insight with AI-driven analytics to uncover opportunities, reduce risk, and design strategies that evolve with your business. Every decision is guided by data, creativity, and clarity of purpose."
//         },
//         {
//             id: 2,
//             icon: icon2,
//             title: "AI-Powered Productivity",
//             desc: "Empower your people to work smarter with AI. Through hands-on enablement and guided adoption, we help teams harness automation, improve productivity, and confidently scale innovation across the organization."
//         },
//         {
//             id: 3,
//             icon: icon3,
//             title: "AI Transformation",
//             desc: "Empower your people to work smarter with AI. Through hands-on enablement and guided adoption, we help teams harness automation, improve productivity, and confidently scale innovation across the organization."
//         },
//         {
//             id: 4,
//             icon: icon4,
//             title: "Data-Driven Growth",
//             desc: "We merge human insight with AI-driven analytics to uncover opportunities, reduce risk, and design strategies that evolve with your business. Every decision is guided by data, creativity, and clarity of purpose."
//         }
//     ]

//     return (
//         <>
//             <div className={`${styles.main_fluid} container-fluid`}>
//                 <div className={`${styles.contain} container`}>
//                     <div className={`${styles.thinking_contact}`} data-aos="fade-up" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="1000">
//                         <h1>AI-Powered Thinking. Human-Led Outcomes</h1>
//                         <p>We combine the speed of intelligence with the power of human insight to transform digital.</p>
//                     </div>

//                     <div className={`${styles.digital_main_sec}`}>
//                         {digitalData.reduce((rows, _, i) => {
//                             if (i % 2 === 0) rows.push(digitalData.slice(i, i + 2))
//                             return rows
//                         }, []).map((row, rowIndex) => (
//                             <div key={rowIndex} className={`${styles.digital_box}`}>
//                                 {row.map((box, i) => {
//                                     const boxClass =
//                                         (rowIndex % 2 === 0 && i === 0) || (rowIndex % 2 !== 0 && i === 1)
//                                             ? styles.digital_box_first
//                                             : styles.digital_box_sec

//                                     return (
//                                         <div key={box.id} className={boxClass}>
//                                             <div className={styles.digital_details}>
//                                                 <div className={styles.images_sec}>
//                                                     <img src={box.icon} alt={box.title} />
//                                                 </div>
//                                                 <h1>{box.title}</h1>
//                                                 <p>{box.desc}</p>
//                                             </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         ))}
//                     </div>

//                     <div className={styles.explore}>
//                         <CustomButton
//                             text="Explore More Services"
//                             // bgColor="linear-gradient(90deg, #7A60FF, #AFA2FF)"
//                             // textColor="#fff"
//                             bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
//                             textColor="#fff"
//                             padding="5px 20px"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ThinkingSection








import React from 'react'
import styles from './thinking.module.css'
import { FaLightbulb, FaRobot, FaBrain, FaChartLine } from "react-icons/fa"
import CustomButton from '../../common/CustomButton'

const ThinkingSection = () => {

    const digitalData = [
        {
            id: 1,
            icon: <FaLightbulb className={styles.icon} />,
            title: "Strategy + Intelligence",
            desc: "We merge human insight with AI-powered data to uncover opportunities, reduce risk, and design strategies that evolve with your goals."
        },
        {
            id: 2,
            icon: <FaRobot className={styles.icon} />,
            title: "AI-Powered Productivity",
            desc: "Empower your teams to achieve more with automation and guided AI adoption — boosting creativity, precision, and innovation."
        },
        {
            id: 3,
            icon: <FaBrain className={styles.icon} />,
            title: "AI Transformation",
            desc: "We help businesses embrace change — integrating AI to streamline operations, enhance customer experiences, and drive growth."
        },
        {
            id: 4,
            icon: <FaChartLine className={styles.icon} />,
            title: "Data-Driven Growth",
            desc: "Transform raw data into meaningful insights that help you scale faster, smarter, and more confidently in the digital era."
        }
    ]

    return (
        <div className={`${styles.main_fluid} container-fluid`}>
            <div className={`${styles.contain} container`}>
                <div className={styles.thinking_contact} data-aos="fade-up">
                    <h1>AI-Powered Thinking. Human-Led Outcomes</h1>
                    <p>We combine the precision of intelligence with the creativity of people — shaping digital outcomes that truly matter.</p>
                </div>

                <div className={styles.digital_main_sec}>
                    {digitalData.reduce((rows, _, i) => {
                        if (i % 2 === 0) rows.push(digitalData.slice(i, i + 2))
                        return rows
                    }, []).map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.digital_box}>
                            {row.map((box, i) => {
                                const boxClass =
                                    (rowIndex % 2 === 0 && i === 0) || (rowIndex % 2 !== 0 && i === 1)
                                        ? styles.digital_box_first
                                        : styles.digital_box_sec

                                return (
                                    <div key={box.id} className={boxClass}>
                                        <div className={styles.digital_details}>
                                            <div className={styles.images_sec}>
                                                {box.icon}
                                            </div>
                                            <h1>{box.title}</h1>
                                            <p>{box.desc}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </div>

                <div className={styles.explore}>
                    <CustomButton
                        text="Explore More Services"
                        bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                        textColor="#fff"
                        padding="5px 20px"
                    />
                </div>
            </div>
        </div>
    )
}

export default ThinkingSection


