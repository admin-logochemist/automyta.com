import React from "react";
import styles from "./CustomTextSection.module.css";

const CustomTextSection = ({
    title,
    subheading,
    sections = [],
    highlightBox = "",
    conclusion = "",
    conclusionHeading = "",
    listItems = [],
}) => {
    return (
        <div className={`${styles.main_text_Sec} container-fluid`}>
            <div className={`${styles.wrapper} container`}>
                <h1 className={styles.title}>{title}</h1>
                {subheading && <p className={styles.subheading}>{subheading}</p>}

                {sections.map((sec, index) => (
                    <div key={index} className={styles.section}>
                        <h2 className={styles.sectionHeading}>{sec.heading}</h2>
                        <p className={styles.sectionText}>{sec.text}</p>
                    </div>
                ))}

                {highlightBox && (
                    <div className={styles.highlightBox}>
                        <p>{highlightBox}</p>
                    </div>
                )}

                {listItems.length > 0 && (
                    <ul className={styles.list}>
                        {listItems.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                )}

                {conclusion && (
                    <div className={styles.conclusionSection}>
                        {conclusionHeading && (
                            <h2 className={styles.conclusionHeading}>
                                {conclusionHeading}
                            </h2>
                        )}
                        <p className={styles.conclusion}>{conclusion}</p>
                    </div>
                )}
            </div>

        </div>

    );
};

export default CustomTextSection;
