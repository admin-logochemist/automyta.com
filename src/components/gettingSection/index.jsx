import React from 'react'
import styles from './getting.module.css'
import get from '../../assets/images/download1.jpg'
import CustomButton from '../../common/CustomButton'
import { useNavigate } from 'react-router'

const GettingSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.main_sec} container-fluid`}>
                <div className={`${styles.container} container`}>
                    <div className={`${styles.getting_sec}`}>
                        <div className={`${styles.img_sec}`}>
                            <img src={get} alt="img" />
                        </div>
                        <div className={`${styles.contact_sec_get}`}>
                            <h3>Innovation in Motion</h3>
                            <h1>Getting to Know Intelligent Design</h1>
                            <p>
                                Behind every transformation lies data, creativity, and human intelligence.
                                We help organizations bridge the gap between ideas and impact — using AI to
                                refine decisions, elevate experiences, and shape digital ecosystems that think
                                and evolve just like their users.
                            </p>
                            <div>
                                <CustomButton
                                    text="Discover How"
                                    bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                                    textColor="#fff"
                                    padding="5px 20px"
                                    onClick={() => navigate("/discover")}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default GettingSection
