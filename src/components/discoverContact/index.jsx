import React from 'react'
import styles from './discoverContact.module.css'
// import contactImg from '../../assets/images/contact-sec.jpg'
import CustomButton from '../../common/CustomButton'
import { useNavigate } from 'react-router'

const DiscoverContact = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.contact_section}>
            
            <div className={styles.inner_box}>
                
                <div className={styles.left}>
                    <h3>Let’s Talk</h3>
                    <h1>Have A Question About AI?</h1>
                    <p>
                        Our experts are here to guide you through intelligent automation,
                        strategy development, and custom AI solutions designed to match
                        your business goals.
                    </p>

                    <CustomButton
                        text="Contact Us"
                        bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                        textColor="#fff"
                        padding="5px 20px"
                        onClick={() => navigate("/contact")}
                    />
                </div>

                <div className={styles.right}>
                    {/* <img src={contactImg} alt="contact" /> */}
                </div>

            </div>
        </div>
    )
}

export default DiscoverContact;
