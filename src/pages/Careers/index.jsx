import React from 'react'
import ExperienceWork from '../../components/experienceWork'
import ca1 from "../../assets/images/download19.jpg";
import BenefitsTabs from '../../components/benefitsTabs';
import img1 from "../../assets/images/download21.jpg";
import img2 from "../../assets/images/download22.jpg";
import DynamicSection from '../../common/DynamicSection';
import MailBox from '../../components/mailBox';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import CarrerBanner from '../../components/careerBanner';

const Careers = () => {
    return (
        <>
            <Navbar BG={true} />
            <CarrerBanner />
            <ExperienceWork
                head="Automyta"
                subHead="Careers at automyta"
                para="We’re always looking for passionate, talented individuals who want to make an impact. If you thrive in a collaborative, innovative environment and share our values, we’d love to hear from you."
                bgImage={ca1}
            />
            <BenefitsTabs />
            <DynamicSection
                subtitle="Job Opening"
                title="Sitecore Architect"
                desc="As a seasoned Sitecore Architect, you’ve led multiple large-scale technical implementations for mid-sized and enterprise clients. You excel at guiding technical teams, making strategic decisions, and mentoring developers to achieve their full potential. While coding comes naturally, your real impact is in shaping teams and delivering successful solutions."
                img={img1}
                reverse
                showButton={false}
                buttonText="Contact Us"
            />

            <DynamicSection
                subtitle="Job Opening"
                title="Senior Front-End Developer"
                desc="We’re seeking a Senior Front-End Developer proficient in React and Next.js, with a strong eye for translating design into functional user interfaces. Your responsibilities include:
- Converting Figma designs into responsive, accessible HTML and CSS (experience with Tailwind, Emotion, or CSS-in-JS frameworks is a plus).
- Building full-featured SPAs from design and API specifications.
- Initiating and deploying Next.js projects efficiently, with familiarity in Vercel or other deployment platforms."
                img={img2}
                showButton={false}
                buttonText="Contact Us"
            />
            <MailBox />
            <Footer />

        </>

    )
}

export default Careers
