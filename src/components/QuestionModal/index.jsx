import React from "react";
import styles from "./QuestionModal.module.css";

const QuestionModal = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Ask Your Question</h2>
                <p>We’re here to help! Share your query below.</p>

                <form className={styles.form}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Write your question..." rows={4} required></textarea>

                    <button type="submit" className={styles.submitBtn}>
                        Submit
                    </button>
                </form>

                <button className={styles.closeBtn} onClick={onClose}>✕</button>
            </div>
        </div>
    );
};

export default QuestionModal;
