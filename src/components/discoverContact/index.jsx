import React from 'react'
import styles from './discoverContact.module.css'
import contactImg from '../../assets/images/download29.png'
import CustomButton from '../../common/CustomButton'
import { useNavigate } from 'react-router'

const DiscoverContact = () => {
    const navigate = useNavigate();

    return (
        <div className={`${styles.contact_section} container-fluid`}>
            <div className={`${styles.contain} container`}>
                <div className={`${styles.contact_sec_discover}`}>
                    <h3>Let’s Talk</h3>
                    <h1>Have A Question About AI?</h1>
                    <p>
                        Our experts are here to guide you through intelligent automation,
                        strategy development, and custom AI solutions designed to match
                        your business goals.
                    </p>
                    <div>
                        <CustomButton
                            text="Contact Us"
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                            onClick={() => navigate("/contact")}
                        />
                    </div>


                </div>
                <div className={`${styles.discover_img}`}>
                    <img src={contactImg} alt="contact" />
                </div>
            </div>
        </div>
    )
}

export default DiscoverContact;
