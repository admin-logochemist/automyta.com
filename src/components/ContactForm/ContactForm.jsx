// import React, { useState } from "react";
// import axios from "axios";
// import styles from "./ContactForm.module.css";
// import Navbar from "../navbar";
// import Locations from "../locations";
// import Footer from "../footer";
// import ContactBanner from "../contactBanner";

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

//     const [loading, setLoading] = useState(false);
//     const [status, setStatus] = useState(null); // success | error | null

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setStatus(null);
//         try {
//             // 👇 Mock API for now
//             const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
//             console.log("Response:", res.data);
//             setStatus("success");
//             setFormData({
//                 firstName: "",
//                 lastName: "",
//                 email: "",
//                 phone: "",
//                 country: "",
//                 company: "",
//                 interest: "",
//                 message: "",
//             });
//         } catch (error) {
//             console.error(error);
//             setStatus("error");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <Navbar BG={true} />
//             <ContactBanner />
//             <div className={styles.contactWrapper}>
//                 <div className={`${styles.container} container`}>
//                     <h1 className={styles.heading}>Get in touch with Automyta</h1>
//                     <p className={styles.subheading}>
//                         Please fill out the form below — all fields are mandatory unless marked optional.
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
//                                 <label>Phone</label>
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
//                                 <label>Company</label>
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

//                         <div className={styles.btnWrap}>
//                             <button type="submit" className={styles.submitBtn} disabled={loading}>
//                                 {loading ? (
//                                     <span className={styles.loader}></span>
//                                 ) : (
//                                     "Send Message"
//                                 )}
//                             </button>
//                         </div>

//                         {status === "success" && (
//                             <p className={`${styles.status} ${styles.success}`}>✅ Message sent successfully!</p>
//                         )}
//                         {status === "error" && (
//                             <p className={`${styles.status} ${styles.error}`}>❌ Something went wrong!</p>
//                         )}
//                     </form>
//                 </div>
//             </div>
//             <Locations />
//             <Footer />
//         </>
//     );
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
      const res = await axios.post("http://localhost:5000/contact", formData);
      console.log("sent email" , formData)

      if (res.data.success) {
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
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar BG={true} />
      <ContactBanner />
      <div className={styles.contactWrapper}>
        <div className={`${styles.container} container`}>
          <h1 className={styles.heading}>Get in touch with Automyta</h1>
          <p className={styles.subheading}>
            Please fill out the form below — all fields are mandatory unless marked optional.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
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
                required
              />
            </div>

            <div className={styles.inputGroupFull}>
              <label>Tell us more (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className={styles.btnWrap}>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? <span className={styles.loader}></span> : "Send Message"}
              </button>
            </div>

            {status === "success" && (
              <p className={`${styles.status} ${styles.success}`}>
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className={`${styles.status} ${styles.error}`}>
                ❌ Something went wrong. Please try again!
              </p>
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
