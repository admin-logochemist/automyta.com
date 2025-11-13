// import React, { useState } from 'react'
// import styles from './Navbar.module.css'
// import logo from '../../assets/images/logo.svg'
// import { IoMenuSharp, IoClose } from "react-icons/io5";
// import { NavLink } from 'react-router';


// const Navbar = ({ BG }) => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <>
//             <nav
//                 className={
//                     BG
//                         ? `container-fluid ${styles.backgroundNav}`
//                         : `container-fluid ${styles.backgroundTrans}`
//                 }
//             >
//                 <div className={`${styles.icon_nav_sec}`}>
//                     <IoMenuSharp
//                         className={styles.icon_sec}
//                         onClick={() => setMenuOpen(true)}
//                     />

//                 </div>
//                 <div className={`${styles.logo_nav_sec}`}>
//                     <div className={`${styles.logo_sec}`}>
//                         <img src={logo} alt="logo" />
//                     </div>
//                     <div className={`${styles.heading_sec}`}>
//                         <h1>Digital AI Agency</h1>
//                     </div>
//                 </div>


//                 <div className={`${styles.btn_qut}`}>
//                     <button>Have A Question</button>
//                 </div>
//             </nav>

//             {menuOpen && (
//                 <div
//                     className={styles.sidebar_overlay}
//                     onClick={() => setMenuOpen(false)}
//                 >
//                     <div
//                         className={styles.sidebar}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <IoClose
//                             className={styles.close_icon}
//                             onClick={() => setMenuOpen(false)}
//                         />
//                         <ul>
//                             <li className="nav-item ">
//                                 <NavLink
//                                     to="/our-services"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active} `
//                                             : `${styles.nav_item} `
//                                     }
//                                 >
//                                     Our Services
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item ">
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active} `
//                                             : `${styles.nav_item} `
//                                     }
//                                 >
//                                     Our Work
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item ">
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active} `
//                                             : `${styles.nav_item} `
//                                     }
//                                 >
//                                     Articles
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item ">
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active} `
//                                             : `${styles.nav_item} `
//                                     }
//                                 >
//                                     About Us
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item ">
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active} `
//                                             : `${styles.nav_item} `
//                                     }
//                                 >
//                                     Careers
//                                 </NavLink>
//                             </li>
//                         </ul>
//                         <div>
//                             <button className={styles.side_btn}>Have A Question</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default Navbar



// import React, { useState } from 'react';
// import styles from './Navbar.module.css';
// import defaultLogo from '../../assets/images/logo.svg';
// import { IoMenuSharp, IoClose } from "react-icons/io5";
// import { NavLink, useNavigate } from 'react-router';

// const Navbar = ({
//     BG = true,
//     logoImage = defaultLogo,
//     textColor = BG ? "#FFFBF8" : "#000",
//     iconColor = BG ? "#dadada" : "#000",
//     iconclose = BG ? "#dadada" : "#000",
//     buttonBg = BG ? "#fff" : "#000",
//     buttonTextColor = BG ? "#000" : "#fff",
//     textColors = BG ? "#fff" : "#000",
// }) => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();

//     return (
//         <>
//             <nav
//                 className={
//                     BG
//                         ? `container-fluid ${styles.backgroundNav}`
//                         : `container-fluid ${styles.backgroundTrans}`
//                 }
//             >
//                 {/* Left Icon (Menu) */}
//                 <div className={styles.icon_nav_sec}>
//                     {menuOpen ? (
//                         <IoClose
//                             className={styles.close_icon}
//                             style={{ color: iconclose }}
//                             onClick={() => setMenuOpen(false)}
//                         />
//                     ) : (
//                         <IoMenuSharp
//                             className={styles.icon_sec}
//                             style={{ color: iconColor }}
//                             onClick={() => setMenuOpen(true)}
//                         />
//                     )}
//                 </div>

//                 {/* Logo + Title */}
//                 <div className={styles.logo_nav_sec}>
//                     <div className={styles.logo_sec} onClick={() => navigate("/")}>
//                         <img src={logoImage} alt="logo" />
//                     </div>
//                     <div className={styles.heading_sec}>
//                         <h1 style={{ color: textColors }}>Digital AI Agency</h1>
//                     </div>
//                 </div>

//                 {/* Right Button */}
//                 <div className={styles.btn_qut}>
//                     <button
//                         style={{
//                             backgroundColor: buttonBg,
//                             color: buttonTextColor,
//                         }}
//                         onClick={() => navigate("/contact")}

//                     >
//                         Have A Question
//                     </button>
//                 </div>
//             </nav>

//             {/* Sidebar */}
//             {menuOpen && (
//                 <div
//                     className={styles.sidebar_overlay}
//                     onClick={() => setMenuOpen(false)}
//                 >
//                     <div
//                         className={styles.sidebar}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <ul>
//                             <li>
//                                 <NavLink
//                                     to="/"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/our-services"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     Our Services
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/our-work"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     Our Work
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/articles"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     Articles
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/about-us"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     About Us
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/careers"
//                                     className={({ isActive }) =>
//                                         isActive
//                                             ? `${styles.nav_item_active}`
//                                             : `${styles.nav_item}`
//                                     }
//                                     style={{ color: textColor }}
//                                 >
//                                     Careers
//                                 </NavLink>
//                             </li>
//                         </ul>
//                         <div>
//                             <button
//                                 className={styles.side_btn}
//                                 style={{
//                                     backgroundColor: buttonBg,
//                                     color: buttonTextColor,
//                                 }}
//                                 onClick={() => navigate("/contact")}
//                             >

//                                 Have A Question
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;




// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import defaultLogo from "../../assets/images/logo.svg";
// import { IoMenuSharp, IoClose } from "react-icons/io5";
// import { NavLink, useNavigate } from "react-router";
// import { RxAvatar } from "react-icons/rx";
// import CustomButton from "../../common/CustomButton";

// const Navbar = ({
//     BG = true,
//     logoImage = defaultLogo,
// }) => {
//     const [menuOpen, setMenuOpen] = useState(false);
//       const [servicesOpen, setServicesOpen] = useState(false); // 👈 dropdown toggle for sidebar

//     const navigate = useNavigate();

//     return (
//         <>
//             <nav
//                 className={`${styles.main_nav} container-fluid ${BG ? styles.bgDark : styles.bgLight
//                     }`}
//             >
//                 {/* Left Icon */}
//                 <div className={styles.icon_sec}>
//                     {menuOpen ? (
//                         <IoClose
//                             className={styles.menu_icon}
//                             onClick={() => setMenuOpen(false)}
//                         />
//                     ) : (
//                         <IoMenuSharp
//                             className={styles.menu_icon}
//                             onClick={() => setMenuOpen(true)}
//                         />
//                     )}
//                 </div>

//                 {/* Logo */}
//                 <div className={styles.logo_sec} onClick={() => navigate("/")}>
//                     <img src={logoImage} alt="logo" />
//                     <h1>Digital AI Agency</h1>
//                 </div>

//                 {/* Menu Items */}
//                 <ul className={styles.nav_links}>
//                     <li>
//                         <NavLink to="/" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             Home
//                         </NavLink>
//                     </li>
//                     {/* <li>
//                         <NavLink to="/our-services" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             Services
//                         </NavLink>
//                     </li> */}
//                     {/* ✅ Services with Dropdown */}
//                     <li className={styles.dropdown}>
//                         <NavLink
//                             to="/our-services"
//                             className={({ isActive }) => (isActive ? styles.active : "")}
//                         >
//                             Services
//                         </NavLink>
//                         <ul className={styles.dropdown_menu}>
//                             <li>
//                                 <NavLink to="/services/ai-digital-marketing">
//                                     AI-Powered Digital Marketing Services
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/services/seo">
//                                     SEO Services That Maximize Visibility and ROI
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/services/programmatic-advertising">
//                                     Programmatic Advertising Services Powered by AI Attribution
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/services/ppc">PPC Services (Paid Search)</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/services/paid-social">
//                                     Paid Social Advertising Services
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </li>

//                     <li>
//                         <NavLink to="/our-work" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             Work
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/articles" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             Articles
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about-us" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             About
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/careers" className={({ isActive }) =>
//                             isActive ? styles.active : ""
//                         }>
//                             Careers
//                         </NavLink>
//                     </li>
//                 </ul>

//                 {/* Button */}
//                 <div className={styles.btn_sec}>
//                     {/* <button onClick={() => navigate("/contact")}>Have A Question</button> */}
//                     <CustomButton
//                         text="Have A Question"
//                         bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
//                         textColor="#fff"
//                         padding="8px 20px"
//                         onClick={() => navigate("/contact")}
//                     />
//                 </div>
//             </nav>

//             {/* Sidebar for mobile */}
//             {menuOpen && (
//                 <div
//                     className={styles.sidebar_overlay}
//                     onClick={() => setMenuOpen(false)}
//                 >
//                     <div
//                         className={styles.sidebar}
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <ul>
//                             <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
//                             <li><NavLink to="/our-services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
//                             <li><NavLink to="/our-work" onClick={() => setMenuOpen(false)}>Work</NavLink></li>
//                             <li><NavLink to="/articles" onClick={() => setMenuOpen(false)}>Articles</NavLink></li>
//                             <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About</NavLink></li>
//                             <li><NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
//                         </ul>

//                         <button
//                             className={styles.side_btn}
//                             onClick={() => navigate("/contact")}
//                         >
//                             Have A Question
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Navbar;




import React, { useState } from "react";
import styles from "./Navbar.module.css";
import defaultLogo from "../../assets/images/logo.svg";
import logo_1 from "../../assets/images/logo_1.svg";
import logo_2 from "../../assets/images/automyta.png";
import Ai_logo from "../../assets/images/a_i_logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import CustomButton from "../../common/CustomButton";

const Navbar = ({ BG = true, logoImage = defaultLogo }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false); // 👈 dropdown toggle for sidebar
    const navigate = useNavigate();

    return (
        <>
            <nav
                className={`${styles.main_nav} container-fluid ${BG ? styles.bgDark : styles.bgLight
                    }`}
            >
                <div className={`${styles.main_section_logos}`}>

                    {/* Left Icon */}
                    <div className={styles.icon_sec}>
                        {menuOpen ? (
                            <IoClose
                                className={styles.menu_icon}
                                onClick={() => setMenuOpen(false)}
                            />
                        ) : (
                            <IoMenuSharp
                                className={styles.menu_icon}
                                onClick={() => setMenuOpen(true)}
                            />
                        )}
                    </div>

                    {/* Logo */}
                    <div className={styles.logo_sec} onClick={() => navigate("/")}>
                        <img src={logo_2} alt="logo" />
                        {/* <h1>Digital AI Agency</h1> */}
                    </div>
                </div>


                {/* Menu Items (Desktop) */}
                <ul className={styles.nav_links}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                            Home
                        </NavLink>
                    </li>

                    {/* Dropdown */}
                    <li className={styles.dropdown}>
                        <NavLink
                            to="/our-services"
                            className={({ isActive }) => (isActive ? styles.active : "")}
                        >
                            Services
                        </NavLink>
                        <ul className={styles.dropdown_menu}>
                            <li><NavLink to="/services/ai-digital-marketing">AI-Powered Digital Marketing</NavLink></li>
                            <li><NavLink to="/services/seo">SEO Services (Max ROI)</NavLink></li>
                            <li><NavLink to="/services/programmatic-advertising">Programmatic Advertising</NavLink></li>
                            <li><NavLink to="/services/ppc">PPC Services</NavLink></li>
                            <li><NavLink to="/services/paid-social">Paid Social Advertising</NavLink></li>
                        </ul>
                    </li>

                    <li><NavLink to="/our-work">Work</NavLink></li>
                    <li><NavLink to="/articles">Articles</NavLink></li>
                    <li><NavLink to="/about-us">About</NavLink></li>
                    <li><NavLink to="/careers">Careers</NavLink></li>
                </ul>

                {/* Button */}
                <div className={styles.btn_sec}>
                    <CustomButton
                        text="Have A Question"
                        bgColor="linear-gradient(90deg, #6a7bff, #a958ff, #ff5f9e)"
                        textColor="#fff"
                        padding="8px 20px"
                        onClick={() => navigate("/contact")}
                    />
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            {menuOpen && (
                <div
                    className={styles.sidebar_overlay}
                    onClick={() => setMenuOpen(false)}
                >
                    <div
                        className={styles.sidebar}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul>
                            <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>

                            {/* Sidebar Dropdown */}
                            <li
                                className={styles.sidebar_dropdown}
                                onClick={() => setServicesOpen(!servicesOpen)}
                            >
                                <div className={styles.sidebar_dropdown_header}>
                                    <span>Services</span>
                                    <span className={`${styles.arrow} ${servicesOpen ? styles.rotate : ""}`}>▼</span>
                                </div>

                                {servicesOpen && (
                                    <ul className={styles.sidebar_dropdown_menu}>
                                        <li><NavLink to="/services/ai-digital-marketing" onClick={() => setMenuOpen(false)}>AI-Powered Digital Marketing</NavLink></li>
                                        <li><NavLink to="/services/seo" onClick={() => setMenuOpen(false)}>SEO Services</NavLink></li>
                                        <li><NavLink to="/services/programmatic-advertising" onClick={() => setMenuOpen(false)}>Programmatic Advertising</NavLink></li>
                                        <li><NavLink to="/services/ppc" onClick={() => setMenuOpen(false)}>PPC Services</NavLink></li>
                                        <li><NavLink to="/services/paid-social" onClick={() => setMenuOpen(false)}>Paid Social Advertising</NavLink></li>
                                    </ul>
                                )}
                            </li>

                            <li><NavLink to="/our-work" onClick={() => setMenuOpen(false)}>Work</NavLink></li>
                            <li><NavLink to="/articles" onClick={() => setMenuOpen(false)}>Articles</NavLink></li>
                            <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About</NavLink></li>
                            <li><NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
                        </ul>

                        <button
                            className={styles.side_btn}
                            onClick={() => navigate("/contact")}
                        >
                            Have A Question
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
