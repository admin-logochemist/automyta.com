import React from 'react'
import styles from './engine.module.css'
import CustomButton from '../../common/CustomButton'
import e1 from '../../assets/images/download5.jpg'

const EngineSecton = () => {
    return (
        <>
            <div className={`${styles.main_engine} container-fluid`}>
                <div className={`${styles.contain} container`}>
                    <div className={`${styles.main_sec}`}>
                        <div className={`${styles.engine_head}`}>
                            <h1>AI is the Engine. People are the Drivers</h1>
                            <p>We believe AI should amplify human talent—not replace it. Every project we take on blends cutting-edge intelligence with human creativity, empathy, and decision-making.</p>
                            <CustomButton
                                text="Learn More"
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                            />
                        </div>
                        <div className={`${styles.engine_img}`}>
                            <img src={e1} alt="engine" />
                        </div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default EngineSecton
