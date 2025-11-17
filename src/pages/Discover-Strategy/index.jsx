import React from 'react'
import CustomBannerComp from '../../common/CustomBannerComp'
import bgImg1 from '../../assets/images/download31.png';
import Navbar from '../../components/navbar';
import CustomTextSection from '../../common/CustomTextSection';
import Footer from '../../components/footer';

const DiscoverStrategy = () => {
    return (
        <>
            <Navbar BG={true} />
            <CustomBannerComp
                heading1="Strategic AI"
                heading2="Built for Your Growth"
                paragraph="Empower your business with smarter systems, faster decisions, and clear AI-driven direction. We turn complex challenges into simple, scalable strategies built for real impact."
                bgImage={bgImg1}
                showButton={false}
                buttonText="Have a Question"
                buttonOnClick={() => navigate('/our-services')}
            />
            <CustomTextSection
                title="Building AI Solutions That Deliver Results"
                subheading="Automyta turns complex AI challenges into fast, business-ready execution."

                sections={[
                    {
                        heading: "The Problem: Slow and Outdated Processes",
                        text: "Traditional workflows delay progress — too many steps, too many dependencies, and too much waiting. Businesses need speed, clarity, and predictable execution."
                    },
                    {
                        heading: "Our Approach: Smart, Automated, AI-Driven",
                        text: "We leverage automation, workflow intelligence, and rapid iteration cycles to eliminate bottlenecks and deliver outcomes in days — not months."
                    },
                    {
                        heading: "The Outcome: Measurable Growth and Efficiency",
                        text: "By applying AI to critical business processes, we enable organizations to reduce delays, improve decision-making, and achieve predictable outcomes. Teams can focus on what truly matters while our systems handle complexity seamlessly."
                    }
                ]}

                highlightBox="This means fewer delays, faster delivery, and a direct route from strategy to execution."


                listItems={[
                    "Accelerated delivery cycles with measurable results",
                    "Minimized operational bottlenecks and inefficiencies",
                    "Improved collaboration and communication across teams",
                    "Predictable, high-quality outcomes every time",
                    "Enhanced clarity, reduced risk, and actionable insights"
                ]}

                conclusionHeading="Final Thoughts"
                conclusion="With Automyta, organizations move faster, reduce risks, and get AI-powered systems running with predictable precision."
            />
            <Footer />

        </>

    )
}

export default DiscoverStrategy
