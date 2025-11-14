// import { createBrowserRouter } from "react-router";
// import Home from "../pages/Home";
// import OurServices from "../pages/OurrServices";
// import ContactForm from "../components/ContactForm/ContactForm";
// import OurWork from "../pages/OurWork";
// import AboutUs from "../pages/AboutUs";
// import Careers from "../pages/Careers";
// import Articles from "../pages/Articles";
// import AiDigital from "../pages/OurrServices/ai_digital";
// import SEO from "../pages/OurrServices/seo";
// import Programmatic from "../pages/OurrServices/programmatic";
// import PPC from "../pages/OurrServices/ppc";
// import PaidSocial from "../pages/OurrServices/paidSocial";

// export const publicRoutes = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "/our-services", element: <OurServices /> },
//     { path: "/contact", element: <ContactForm /> },
//     { path: "/our-work", element: <OurWork /> },
//     { path: "/about-us", element: <AboutUs /> },
//     { path: "/careers", element: <Careers /> },
//     { path: "/articles", element: <Articles /> },
//     { path: "/services/ai-digital-marketing", element: <AiDigital /> },
//     { path: "/services/seo", element: <SEO /> },
//     { path: "/services/programmatic-advertising", element: <Programmatic /> },
//     { path: "/services/ppc", element: <PPC /> },
//     { path: "/services/paid-social", element: <PaidSocial /> },
// ])


import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import OurServices from "../pages/OurrServices";
import ContactForm from "../components/ContactForm/ContactForm";
import OurWork from "../pages/OurWork";
import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Articles from "../pages/Articles";
import AiDigital from "../pages/OurrServices/ai_digital";
import SEO from "../pages/OurrServices/seo";
import Programmatic from "../pages/OurrServices/programmatic";
import PPC from "../pages/OurrServices/ppc";
import PaidSocial from "../pages/OurrServices/paidSocial";
import DiscoverHow from "../pages/Discover-How";
import DiscoverStrategy from "../pages/Discover-Strategy";

export const publicRoutes = createBrowserRouter([
  {
    element: <MainLayout />,    // 🟢 Yahan ScrollToTop active hoga
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-services", element: <OurServices /> },
      { path: "/our-work", element: <OurWork /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/articles", element: <Articles /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <ContactForm /> },

      { path: "/services/ai-digital-marketing", element: <AiDigital /> },
      { path: "/services/seo", element: <SEO /> },
      { path: "/services/programmatic-advertising", element: <Programmatic /> },
      { path: "/services/ppc", element: <PPC /> },
      { path: "/services/paid-social", element: <PaidSocial /> },
      { path: "/discover", element: <DiscoverHow /> },
      { path: "/discover-strategy", element: <DiscoverStrategy /> },
    ],
  },
]);
