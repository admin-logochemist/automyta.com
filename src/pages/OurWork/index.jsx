import React from 'react'
import ExperienceWork from '../../components/experienceWork'
import GEHASection from '../../components/gehaSec'
import BuiltSection from '../../components/built'
import Footer from '../../components/footer'
import bg1 from "../../assets/images/download14.jpg";
import WorkBanner from '../../components/workBanner'

const OurWork = () => {
    return (
        <>
            <WorkBanner />
            <ExperienceWork
                head="Our Process"
                subHead="Designing with Intelligence"
                para="We merge creativity with strategic thinking to deliver designs that speak to both the mind and the heart."
                bgImage={bg1} 
            />
            <GEHASection />
            <BuiltSection />
            <Footer />
        </>

    )
}

export default OurWork
