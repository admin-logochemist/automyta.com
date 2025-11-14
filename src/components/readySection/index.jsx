import React from 'react'
import styles from './ready.module.css'
import CustomButton from '../../common/CustomButton'
import bdImage from '../../assets/images/BG_6.png'
import { useNavigate } from 'react-router'

const ReadyNextSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.contain} container`}>
                    <div className={`${styles.ready_sec}`}>
                        <h1>Are You Ready for What’s Next?</h1>
                        <CustomButton
                            text="Contact Us"
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                            onClick={() => navigate("/contact")}
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default ReadyNextSection
