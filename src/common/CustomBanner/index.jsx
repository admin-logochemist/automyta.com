import React from 'react';
import styles from './CustomBanner.module.css';

const CustomBanner = ({
  title = "Build for What's Next",
  description = "We don’t just add AI tools — we rethink how every process can be faster, smarter, and more impactful with intelligence built-in.",
  backgroundImage = "../../assets/images/bb3.png",
  height = "100vh",
  overlay = true,
  className = "",
  children, // <-- allow injecting custom buttons / JSX
}) => {
  const bgStyle = {
    backgroundImage: overlay
      ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${backgroundImage})`
      : `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height,
  };

  return (
    <div className={`${styles.main_Section} ${className} container-fluid`} style={bgStyle}>
      <div className={`${styles.contain_sec} container`}>
        <div className={styles.main_sec}>
          <h1>{title}</h1>
          <p>{description}</p>

          {/* place for custom children (e.g., your existing CustomButton) */}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
