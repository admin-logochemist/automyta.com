import React from 'react'
import styles from './built.module.css'
import built from "../../assets/images/download15.jpg";
import { Link } from 'react-router-dom';
const BuiltSection = () => {
    return (
        <>
            <div className={`${styles.main_built_sec}`}>
                <div className={`${styles.main_fluid} container`}>
                    <div className={`${styles.built_sec}`}>
                        <div className={styles.contact_built}>
                            <h1>Built for What’s Next</h1>
                            <p>
                                From AI-powered automation to immersive digital experiences —
                                we design and build solutions that prepare your business for the future.
                                Let’s create something extraordinary together.
                            </p>

                            <div className={styles.built_btn}>
                                <Link to="/contact">
                                    <button>Connect With Our Team</button>
                                </Link>
                            </div>
                        </div>
                        <div className={`${styles.image_sec}`}>
                            <img src={built} alt="built" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuiltSection



