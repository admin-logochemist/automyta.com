// import React from 'react'
// import styles from './footer.module.css'
// import f1 from '../../assets/images/f1.svg'

// const Footer = () => {
//   return (
//     <>
//     <div className={`${styles.main_footer} container-fluid`}>
//         <div className={`${styles.contain} container`}>
//             <div className={`${styles.footer_section}`}>
//                 <div className={`${styles.footer_logo}`}>
//                     <img src={f1} alt="logo" />
//                 </div>
//                 <div className={`${styles.contact_footer}`}>
//                     <p>"Arkane Digital embodies the fusion of digital expertise <br/> and a human-centric ethos, forging meaningful connections through the alchemy of values."</p>
//                 </div>
//                 <div className={`${styles.list_sec}`}>
//                     <ul>
//                         <li>About</li>
//                         <li>Services</li>
//                         <li>Our Work</li>
//                         <li>Careers</li>
//                         <li>Articles</li>
//                         <li>LinkedIn</li>
//                     </ul>

//                 </div>
//             </div>
//             <div className={`${styles.team_sec}`}>
//                 <p>© 2025 Arkane Digital</p>
//                 <p>Privacy Policy</p>
//             </div>
//         </div>
//     </div>
//     </>

//   )
// }

// export default Footer




// import React from "react";
// import styles from "./footer.module.css";
// import f1 from "../../assets/images/f1.svg";
// import { FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={`${styles.container} container`}>
//         <div className={styles.topSection}>
//           <div className={styles.logo}>
//             <img src={f1} alt="Arkane Digital" />
//           </div>

//           <p className={styles.text}>
//             We blend strategy, creativity, and technology to craft meaningful
//             digital experiences that connect brands with people.
//           </p>

//           <div className={styles.socials}>
//             <FaLinkedin />
//             <FaInstagram />
//             <FaDribbble />
//           </div>
//         </div>

//         <div className={styles.bottomSection}>
//           <ul className={styles.links}>
//             <li>About</li>
//             <li>Services</li>
//             <li>Our Work</li>
//             <li>Careers</li>
//             <li>Articles</li>
//             <li>Contact</li>
//           </ul>
//           <div className={styles.copy}>
//             <p>© 2025 Arkane Digital. All Rights Reserved.</p>
//             <p className={styles.policy}>Privacy Policy</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import styles from "./footer.module.css";
import logo_2 from "../../assets/images/automyta.png";
import { FaLinkedin, FaInstagram, FaDribbble, FaBehance, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import CustomButton from "../../common/CustomButton";

const Footer = () => {
  return (
    <footer className={styles.footer_alt}>
      <div className={`${styles.container_alt} container`}>
        {/* --- Top Section --- */}
        <div className={styles.footer_main}>
          {/* Left */}
          <div className={styles.left}>
            <img src={logo_2} alt="Arkane Logo" />
            <p>
              Arkane Digital crafts immersive digital experiences that blend strategy, creativity, and technology to move brands forward.
            </p>
            <div className={styles.location}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          <div className={`${styles.links_section}`}>
            {/* Links */}
            <div className={styles.center}>
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Work Showcase</li>
                <li>Careers</li>
                <li>Articles</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.resources}>
              <h4>Resources</h4>
              <ul>
                <li>Case Studies</li>
                <li>Brand Guidelines</li>
                <li>FAQs</li>
                <li>Community</li>
                <li>Support</li>
              </ul>
            </div>
          </div>




          {/* Right */}
          <div className={styles.right}>
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter to stay inspired with the latest in design and tech.</p>
            <div className={`${styles.input_section}`}>
              <div className={styles.newsletter}>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className={`${styles.subscribe}`}>
                {/* <button>Subscribe</button> */}
                <CustomButton
                  text="Subscribe"
                  bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                  textColor="#fff"
                  padding="8px 20px"
                />
              </div>
            </div>



            <div className={styles.socials}>
              <FaLinkedin />
              <FaInstagram />
              <FaDribbble />
              <FaBehance />
            </div>
            <p className={styles.email}><FaEnvelope /> hello@arkanedigital.com</p>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className={styles.bottom}>
          <p>© 2025 Arkane Digital. All Rights Reserved.</p>
          <p className={styles.policy}>Privacy Policy</p>
        </div>
      </div>

      <div className={styles.glow}></div>
    </footer>
  );
};

export default Footer;
