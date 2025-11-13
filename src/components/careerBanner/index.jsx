import React from 'react'
import CustomButton from '../../common/CustomButton'
import bgVideo from '../../assets/video/career_vdo.mp4'
import styles from './career.module.css'
const CarrerBanner = () => {
    return (
        <>
            <div className={`${styles.main_Section} container-fluid`}>

                {/* 🔹 Background Video Overlay */}
                <video
                    className={styles.video_bg}
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                <div className={`${styles.contain_sec} `}>
                    <div className={styles.main_ai}>
                        <div className={styles.sec_content}>
                            <div className={styles.motivation}>
                                <h1 style={{ fontWeight: 400 }}>Shape the</h1>
                            </div>
                            <div className={styles.motivation}>
                                <h1 className={styles.gradientText}> Future</h1>
                            </div>

                            <div className={styles.motivation}>
                                <h1><span style={{ color: "#6751d6" }}>of AI</span> with Us</h1>
                            </div>
                        </div>

                        <div className={styles.moti_para}>
                            <p>
                                Clean, confident, and tech-focused — ideal for AI agency careers page.
                            </p>
                        </div>
                        <CustomButton
                            text="Have A Question"
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

export default CarrerBanner
