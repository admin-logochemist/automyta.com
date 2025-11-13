import React from 'react'
import ExperienceWork from '../../components/experienceWork'
import puzzle from "../../assets/images/download20.jpg";
import CoreValues from '../../components/coreValues';
import OurCultures from '../../components/cultures';
import Leadership from '../../components/leadership';
import Footer from '../../components/footer';
import Solutions from '../../components/solution';
import Locations from '../../components/locations';
import DynamicSection from '../../common/DynamicSection'
import img1 from "../../assets/images/g1.jpg";
import Navbar from '../../components/navbar';
import AboutBanner from '../../components/aboutBanner';



const AboutUs = () => {
    return (
        <>
            <Navbar BG={true} />
            <AboutBanner />

            <ExperienceWork
                head="automyta"
                subHead="About Us"
                para="automyta crafts digital products that move businesses forward. Backed by decades of collective experience, we combine design, data, and engineering to deliver clear, measurable outcomes. We partner closely with clients to solve real problems, build meaningful experiences, and scale solutions that last."
                bgImage={puzzle}
            />
            <CoreValues />
            <Solutions />
            <OurCultures />
            <Leadership />
            <Locations />
            {/* <DynamicSection
                subtitle="CREATIVE STRATEGY"
                title="Transforming a digital identity"
                desc="Our team redesigned the entire brand structure and built a clean, modern digital experience that aligns with user needs."
                img={img1}
                reverse
                showButton={true}
                buttonText="Contact Us"
            /> */}
            <Footer />

        </>

    )
}

export default AboutUs
