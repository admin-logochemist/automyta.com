import React from 'react'
import styles from './discover.module.css'
import CustomButton from '../../common/CustomButton'
import bgVideo from '../../assets/video/vdo.mp4' // 🎥 your background video
const DiscoverBanner = () => {
    return (
        <>
            <div className={`${styles.main_Section} container-fluid`}>
                {/* 🔹 Background Video Overlay */}
                {/* <video
                    className={styles.video_bg}
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video> */}

                <div className={`${styles.contain_sec} `}>
                    <div className={styles.main_ai}>
                        <div className={styles.sec_content}>
                            <div className={styles.motivation}>
                                <h1 className={styles.gradientText}>Transforming</h1>
                            </div>
                            <div className={styles.motivation}>
                                <h1><span style={{ color: "#6751d6" }}>AI</span> Possibilities</h1>
                            </div>
                        </div>

                        <div className={styles.moti_para}>
                            <p>
                                At <strong>Automyta</strong>, we design future-ready AI systems that empower
                                businesses to automate workflows, enhance decision-making, and unlock new
                                levels of digital intelligence. Our solutions help you innovate faster,
                                operate smarter, and stay ahead of the technology curve.
                            </p>
                        </div>

                        <CustomButton
                            text="Ask Your Question"
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                        />
                    </div>

                </div>
            </div>
        </>

    )
}

export default DiscoverBanner
