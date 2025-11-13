// import React from 'react';
// import styles from './CustomButton.module.css';

// const CustomButton = ({ text, bgColor = '#42DDA6', textColor = '#1B1A1C', onClick }) => {
//   return (
//     <button
//       className={styles.btn}
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// export default CustomButton;

import React from 'react'
import styles from './CustomButton.module.css'

const CustomButton = ({ text, bgColor, textColor, padding, onClick }) => {
  return (
    <button
      className={styles.btn}
      style={{
        background: bgColor,
        color: textColor,
        padding: padding || '10px 36px',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default CustomButton
