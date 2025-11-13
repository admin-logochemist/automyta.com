// import React, { useState } from "react";
// import styles from "./BenefitsTabs.module.css";

// const BenefitsTabs = () => {
//     const [activeTab, setActiveTab] = useState("benefits");

//     const tabs = [
//         {
//             id: "benefits",
//             label: "AMAZING BENEFITS",
//             list: [
//                 "Competitive salary",
//                 "Paid time off",
//                 "401k, HSA, FSA",
//                 "Paid medical for you and your family",
//             ],
//         },
//         {
//             id: "balance",
//             label: "WORK LIFE BALANCE",
//             list: [
//                 "Flexible working hours",
//                 "Generous vacation policy",
//                 "Mental health support",
//                 "Company wellness programs",
//             ],
//         },
//         {
//             id: "remote",
//             label: "TRULY REMOTE",
//             list: [
//                 "Work from anywhere",
//                 "No commute stress",
//                 "Collaborate digitally",
//                 "Inclusive global culture",
//             ],
//         },
//     ];

//     return (
//         <div className={` ${styles.tabsSection} container-fluid`}>
//             <div className={`${styles.contain} container`}>
//                 <div className={styles.tabs}>
//                     {tabs.map((tab) => (
//                         <button
//                             key={tab.id}
//                             onClick={() => setActiveTab(tab.id)}
//                             className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""
//                                 }`}
//                         >
//                             {tab.label}
//                         </button>
//                     ))}
//                 </div>

//                 <div className={styles.tabContent}>
//                     <ul>
//                         {tabs
//                             .find((tab) => tab.id === activeTab)
//                             ?.list.map((item, index) => (
//                                 <li key={index}>{item}</li>
//                             ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BenefitsTabs;



import React, { useState } from "react";
import styles from "./BenefitsTabs.module.css";

const BenefitsTabs = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const tabs = [
    {
      id: "benefits",
      label: "AMAZING BENEFITS",
      list: [
        "Competitive salary and performance incentives",
        "Comprehensive health, dental, and vision coverage",
        "Generous paid time off and holidays",
        "Learning & professional development budgets",
      ],
    },
    {
      id: "balance",
      label: "WORK-LIFE BALANCE",
      list: [
        "Flexible working hours to fit your lifestyle",
        "Remote-first environment with optional office spaces",
        "Mental health & wellness programs",
        "Quarterly team retreats and bonding events",
      ],
    },
    {
      id: "remote",
      label: "TRULY REMOTE CULTURE",
      list: [
        "Work from anywhere around the world",
        "Inclusive and diverse global team",
        "Asynchronous collaboration tools for seamless productivity",
        "No commute, more time for life and passion projects",
      ],
    },
  ];

  return (
    <div className={styles.tabsSection}>
      <div className={styles.container}>
        {/* 🔹 Tabs Navigation */}
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 🔹 Content Section */}
        <div className={styles.tabContent}>
          <ul>
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.list.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsTabs;
