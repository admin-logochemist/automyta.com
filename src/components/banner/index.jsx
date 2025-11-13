
import React from 'react'
import styles from './banner.module.css'
import CustomButton from '../../common/CustomButton'
import Navbar from '../navbar'
import bgVideo from '../../assets/video/vdo.mp4' // 🎥 your background video

const BannerSection = () => {
    return (
        <>
            <Navbar BG={true} />
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
                                <h1 style={{ fontWeight: 400 }}>Leading The</h1>
                            </div>
                            <div className={styles.motivation}>
                                <h1 className={styles.gradientText}>Future Of</h1>
                            </div>

                            <div className={styles.motivation}>
                                <h1><span style={{ color: "#6751d6" }}>AI</span> Innovation</h1>
                            </div>
                        </div>

                        <div className={styles.moti_para}>
                            <p>
                                At <strong>Automyta</strong>, we create intelligent solutions that
                                redefine how businesses think, operate, and grow. Our AI-powered
                                platforms automate complex processes, enhance efficiency, and
                                unlock data-driven possibilities for a smarter tomorrow.
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

export default BannerSection
