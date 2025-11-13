import React from 'react'
import styles from './power.module.css'
import CustomButton from '../../common/CustomButton'

const PowerSection = () => {
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.main_power} container`}>
                    <div className={`${styles.power_contact}`}>
                        <h1>Powered by AI and guided by human values, Arkane Digital transforms intelligence into connection—where technology fuels purpose, and people remain at the heart.</h1>
                        <CustomButton
                            text="Contact Us"
                            bgColor="linear-gradient(90deg, #7A60FF, #AFA2FF)"
                            textColor="#fff"
                        />
                    </div>

                </div>
            </div>
        </>

    )
}

export default PowerSection
