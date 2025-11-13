import React from 'react'
import styles from './mail.module.css'
import mail from '../../assets/images/mail.webp'

const MailBox = () => {
    return (
        <>
            <div className={`${styles.main_sec} container-fluid`}>
                <div className={`${styles.contain} container`}>
                    <div className={`${styles.text_sec}`}>
                        <h1>Interested in a career at automyta? Let’s connect and explore opportunities together.</h1>
                        <div className={`${styles.mail_btn}`}>
                            <button>Get in Touch</button>
                        </div>
                    </div>
                    <div className={`${styles.mail_img}`}>
                        <img src={mail} alt="mail" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailBox
