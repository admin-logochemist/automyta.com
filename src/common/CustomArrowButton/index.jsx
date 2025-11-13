// import React from "react";
// import styles from "./arrow.module.css";

// const CustomArrowButton = ({ text = "READ THE WRITE-UP", onClick }) => {
//     return (
//         <button className={styles.arrow_btn} onClick={onClick}>
//             <span className={styles.line}></span>
//             <span className={styles.text}>{text}</span>
//         </button>
//     );
// };

// export default CustomArrowButton;

// import React from "react";
// import styles from "./arrow.module.css";

// const CustomArrowButton = ({
//   text = "READ THE WRITE-UP",
//   onClick,
//   textColor = "#FFFFFF",
//   lineColor = "#A689FF",
//   hoverColor = "#E4D6FF",
// }) => {
//   return (
//     <button
//       className={styles.arrow_btn}
//       onClick={onClick}
//       style={{ color: textColor }}
//     >
//       <span
//         className={styles.line}
//         style={{
//           backgroundColor: lineColor,
//           "--line-color": lineColor,
//           "--hover-color": hoverColor,
//           "--text-color": textColor,
//         }}
//       ></span>
//       <span className={styles.text}>{text}</span>
//     </button>
//   );
// };

// export default CustomArrowButton;



import React from "react";
import styles from "./arrow.module.css";

const CustomArrowButton = ({
  text = "READ THE WRITE-UP",
  onClick,
  textColor = "#FFFFFF",
  lineColor = "#A689FF",
  hoverColor = "#E4D6FF",
}) => {
  return (
    <button
      className={styles.arrow_btn}
      onClick={onClick}
      style={{
        "--text-color": textColor,
        "--line-color": lineColor,
        "--hover-color": hoverColor,
      }}
    >
      <span className={styles.line}></span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default CustomArrowButton;
