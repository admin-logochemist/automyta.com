// import React, { useState } from "react";
// import styles from "./ContactForm.module.css";
// import Navbar from "../navbar";
// import blackLogo from '../../assets/images/black_logo.svg';
// import Locations from "../locations";
// import Footer from "../footer";


// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         country: "",
//         company: "",
//         interest: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Form Data Submitted:", formData);
//         alert("Form submitted successfully!");
//     };

//     return (
//         <>
//             <Navbar BG={true}
//                 // logoImage={blackLogo}
//                 // textColor="#ffffffff"
//                 // iconColor="#000"
//                 // iconclose="#000000ff"
//                 // buttonBg="#ffffffff"
//                 // buttonTextColor="#000000ff"
//             />
//             <div className={styles.contactWrapper}>
//                 <div className={styles.container}>
//                     <h1 className={styles.heading}>Get in touch with Arkane</h1>
//                     <p className={styles.subheading}>
//                         All fields are required unless noted as optional
//                     </p>

//                     <form className={styles.form} onSubmit={handleSubmit}>
//                         <div className={styles.row}>
//                             <div className={styles.inputGroup}>
//                                 <label>First name</label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label>Last name</label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className={styles.row}>
//                             <div className={styles.inputGroup}>
//                                 <label>Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label>Phone Number</label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className={styles.row}>
//                             <div className={styles.inputGroup}>
//                                 <label>Country</label>
//                                 <input
//                                     type="text"
//                                     name="country"
//                                     value={formData.country}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className={styles.inputGroup}>
//                                 <label>Company Name</label>
//                                 <input
//                                     type="text"
//                                     name="company"
//                                     value={formData.company}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>

//                         <div className={styles.inputGroupFull}>
//                             <label>What would you like to know more about?</label>
//                             <textarea
//                                 name="interest"
//                                 value={formData.interest}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </div>

//                         <div className={styles.inputGroupFull}>
//                             <label>Tell us more (optional)</label>
//                             <textarea
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                             ></textarea>
//                         </div>

//                         <div className={styles.recaptchaBox}>
//                             <div className={styles.fakeCaptcha}>
//                                 <input type="checkbox" /> I'm not a robot
//                             </div>
//                         </div>

//                         <div className={styles.btnWrap}>
//                             <button type="submit" className={styles.submitBtn}>
//                                 GET IN TOUCH
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Locations/>
//             <Footer/>
//         </>

//     );
// };

// export default ContactForm;



// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./ContactForm.module.css";
// import Navbar from "../navbar";
// import blackLogo from "../../assets/images/black_logo.svg";
// import Locations from "../locations";
// import Footer from "../footer";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     company: "",
//     interest: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: "",
//     error: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: "", error: "" });

//     try {
//       // Mock API using JSONPlaceholder
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         formData,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Mock API Response:", response.data);
//       setStatus({
//         loading: false,
//         success: "Message sent successfully! ✅",
//         error: "",
//       });

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         country: "",
//         company: "",
//         interest: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setStatus({
//         loading: false,
//         success: "",
//         error: "Something went wrong. Please try again ❌",
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar BG={true} logoImage={blackLogo} />

//       <div className={styles.contactWrapper}>
//         <div className={styles.container}>
//           <h1 className={styles.heading}>Get in Touch </h1>
//           <p className={styles.subheading}>
//             All fields are required unless marked optional.
//           </p>

//           <form className={styles.form} onSubmit={handleSubmit}>
//             <div className={styles.row}>
//               <div className={styles.inputGroup}>
//                 <label>First name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Last name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className={styles.row}>
//               <div className={styles.inputGroup}>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Phone Number</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className={styles.row}>
//               <div className={styles.inputGroup}>
//                 <label>Country</label>
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className={styles.inputGroup}>
//                 <label>Company Name</label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className={styles.inputGroupFull}>
//               <label>What would you like to know more about?</label>
//               <textarea
//                 name="interest"
//                 value={formData.interest}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className={styles.inputGroupFull}>
//               <label>Tell us more (optional)</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className={styles.btnWrap}>
//               <button
//                 type="submit"
//                 className={styles.submitBtn}
//                 disabled={status.loading}
//               >
//                 {status.loading ? (
//                   <span className={styles.loader}></span>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </div>

//             {status.success && <p className={styles.success}>{status.success}</p>}
//             {status.error && <p className={styles.error}>{status.error}</p>}
//           </form>
//         </div>
//       </div>

//       <Locations />
//       <Footer />
//     </>
//   );
// };

// export default ContactForm;




import React, { useState } from "react";
import axios from "axios";
import styles from "./ContactForm.module.css";
import Navbar from "../navbar";
import Locations from "../locations";
import Footer from "../footer";
import ContactBanner from "../contactBanner";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        company: "",
        interest: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);
        try {
            // 👇 Mock API for now
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Response:", res.data);
            setStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                country: "",
                company: "",
                interest: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar BG={true} />
            <ContactBanner/>
            <div className={styles.contactWrapper}>
                <div className={`${styles.container} container`}>
                    <h1 className={styles.heading}>Get in touch with Arkane</h1>
                    <p className={styles.subheading}>
                        All fields are required unless noted as optional
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.inputGroup}>
                                <label>Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroupFull}>
                            <label>What would you like to know more about?</label>
                            <textarea
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className={styles.inputGroupFull}>
                            <label>Tell us more (optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className={styles.btnWrap}>
                            <button type="submit" className={styles.submitBtn} disabled={loading}>
                                {loading ? (
                                    <span className={styles.loader}></span>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>

                        {status === "success" && (
                            <p className={`${styles.status} ${styles.success}`}>✅ Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className={`${styles.status} ${styles.error}`}>❌ Something went wrong!</p>
                        )}
                    </form>
                </div>
            </div>
            <Locations />
            <Footer />
        </>
    );
};

export default ContactForm;
