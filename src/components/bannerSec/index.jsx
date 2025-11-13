import React from "react";
import styles from "./bannerSec.module.css";
import blackLogo from '../../assets/images/black_logo.svg';
import Navbar from "../navbar";
import CustomButton from "../../common/CustomButton";
import bgVideo from '../../assets/video/vdo1.mp4' // 🎥 your background video

const BannerSecond = () => {
    return (
        <>
            <Navbar BG={true} />
            {/* <div className={`${styles.main_Section} container-fluid`}>
                <div className={`${styles.contain_sec} container`}>
                    <div className={`${styles.main_sec}`}>
                        <h1>We Don’t Add AI to <br /> Services, We build <br /> Services With AI.</h1>
                        <p>We combine deep expertise with built-in AI systems, we reinvent how digital<br /> work gets done faster, more intelligently, and designed for what’s next.</p>
                        <CustomButton
                            text="Learn More About Us"
                            bgColor="linear-gradient(90deg, #7A60FF, #AFA2FF)"
                            textColor="#fff"
                        />
                    </div>
                </div>
            </div> */}
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
    );
};

export default BannerSecond;
