import React from 'react'
import styles from './seo.module.css'
import CustomButton from '../../common/CustomButton'
import video_bg from '../../assets/video/seo_vid.mp4'

const SeoBanner = () => {
   return (
        <>
            {/* <Navbar BG={true} /> */}
            <div className={`${styles.main_Section} container-fluid`}>

                {/* 🔹 Background Video Overlay */}
                <video
                    className={styles.video_bg}
                    src={video_bg}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                <div className={`${styles.contain_sec} `}>
                    <div className={styles.main_ai}>
                        <div className={styles.sec_content}>
                            <div className={styles.motivation}>
                                <h1 style={{ fontWeight: 400 }}>SEO Services</h1>
                            </div>
                            <div className={styles.motivation}>
                                <h1 className={styles.gradientText}>That Maximize</h1>
                            </div>

                            <div className={styles.motivation}>
                                <h1><span style={{ color: "#6751d6" }}>Visibility </span> and ROI</h1>
                            </div>
                        </div>

                        <div className={styles.moti_para}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                                voluptate pariatur repudiandae, consequuntur in
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

export default SeoBanner
