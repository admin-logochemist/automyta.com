



import React from 'react'
import styles from './ai.module.css'
import CustomButton from '../../common/CustomButton'
import bgVideo from '../../assets/video/art_vdo.mp4'

const ArticlesBanner = () => {
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
                                We’re shaping the next era of artificial intelligence — where
                                creativity meets technology, and innovation drives real-world
                                impact. Our mission is to empower businesses and creators with
                                intelligent solutions that adapt, learn, and evolve with the
                                future.
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

export default ArticlesBanner
