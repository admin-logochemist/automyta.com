import React from 'react'
import styles from './community.module.css'
import p1 from '../../assets/images/p1.webp'

const CommunitySection = () => {
    return (
        <>
            <div className={`${styles.main_fluid} container-fluid`}>
                <div className={`${styles.partner} container`}>
                    <div className={`${styles.heading_partner}`}>
                        <h1>Our Partner Community</h1>
                        <p>We collaborate with world-class partners to spark innovation, fuel growth, and build what’s next.</p>
                    </div>
                    <div className={`${styles.img_sec}`}>
                        <img src={p1} alt="img" className='img-fluid' />
                    </div>
                </div>

            </div>

        </>

    )
}

export default CommunitySection
