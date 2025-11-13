import React from 'react'
import styles from './work.module.css'
import CustomButton from '../../common/CustomButton'
import Navbar from '../navbar'
import bgVideo from '../../assets/video/vdo_work.mp4' // 🎥 your background video
const WorkBanner = () => {
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

export default WorkBanner
