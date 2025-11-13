// import React from 'react'
// import styles from './join.module.css'
// import team from '../../assets/images/about_us.jpg'
// import CustomButton from '../../common/CustomButton'

// const JoinOurTeam = () => {
//     return (
//         <>
//             <div className={`${styles.main_fluid} container-fluid`}>
//                 <div className={`${styles.container} container`}>
//                     <div className={`${styles.join_section}`}>
//                         <div className={`${styles.team_image}`}>
//                             <img src={team} alt="team" />
//                         </div>
//                         <div className={`${styles.team_contact}`}>
//                             <div className={`${styles.team_details}`}>
//                                 <h1>Join our team</h1>
//                                 <p>We are a people-first company. Our values drive what we do—and we back it up.</p>
//                             </div>

//                             <div className={`${styles.fully_contact}`}>
//                                 <div className={`${styles.contact_fully}`}>
//                                     <h1>Fully remote</h1>
//                                     <p>We've been operating remotely for years—it just works.</p>
//                                 </div>
//                                 <div className={`${styles.contact_fully}`}>
//                                     <h1>Fully remote</h1>
//                                     <p>We've been operating remotely for years—it just works.</p>
//                                 </div>
//                                 <div className={`${styles.contact_fully}`}>
//                                     <h1>Fully remote</h1>
//                                     <p>We've been operating remotely for years—it just works.</p>
//                                 </div>
//                             </div>
//                             <div className={`${styles.btn_custom}`}>
//                                 <CustomButton
//                                     text="See current openings"
//                                     bgColor="#42DDA6"
//                                     textColor="#1B1A1C"
//                                 />
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default JoinOurTeam




import React from 'react'
import styles from './join.module.css'
import team from '../../assets/images/download6.jpg'
import CustomButton from '../../common/CustomButton'

const JoinOurTeam = () => {
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.join_section}`}>

                    {/* ✅ Left Side Image */}
                    <div className={styles.team_image}>
                        <img src={team} alt="team" />
                    </div>

                    {/* ✅ Right Side Content */}
                    <div className={styles.team_contact}>
                        <div className={styles.team_details}>
                            <h1>Join our team</h1>
                            <p>
                                We are a people-first company. Our values drive what we do—and we back it up.
                            </p>
                        </div>

                        <div className={styles.fully_contact}>
                            <div className={styles.contact_fully}>
                                <h1>Fully remote</h1>
                                <p>We've been operating remotely for years—it just works.</p>
                            </div>
                            <div className={styles.contact_fully}>
                                <h1>Healthcare for all</h1>
                                <p>Your health matters. We cover you AND your entire family.</p>
                            </div>
                            <div className={styles.contact_fully}>
                                <h1>Grow with us</h1>
                                <p>We invest in YOU. We succeed when you reach your full potential.</p>
                            </div>
                        </div>

                        <div className={styles.btn_custom}>
                            <CustomButton
                                text="See current openings"
                                     bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinOurTeam
