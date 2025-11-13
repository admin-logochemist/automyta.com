import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    // Agar script pehle se add nahi hai to add karein
    if (!window.Tawk_API) {
      var Tawk_API = window.Tawk_API || {};
      var Tawk_LoadStart = new Date();
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69166d5bb06a19195bc27f25/1j9vpmc9n';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      var s0 = document.getElementsByTagName("script")[0];
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null; // Yeh component kuch render nahi karta
};

export default TawkTo;
