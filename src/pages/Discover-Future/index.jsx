import React from 'react'
import CustomBannerComp from '../../common/CustomBannerComp'
import bgImg3 from '../../assets/images/download32.png';
import Navbar from '../../components/navbar';
import CustomTextSection from '../../common/CustomTextSection';
import Footer from '../../components/footer';

const DiscoverFuture = () => {
    return (
        <>
            <Navbar BG={true} />
            <CustomBannerComp
                heading1="Discover the Future"
                heading2="AI-Driven Innovation"
                paragraph="Unlock the possibilities of AI for your organization. Automyta empowers teams with insights, predictive intelligence, and scalable solutions to stay ahead of the curve."
                bgImage={bgImg3} // replace with your image for this section
                showButton={true}
                buttonText="Get Started"
                buttonOnClick={() => navigate('/our-services')}
            />
            <CustomTextSection
                title="Discover the Future"
                subheading="Unlock the possibilities of AI-driven innovation for your organization."

                sections={[
                    {
                        heading: "Anticipate Market Trends",
                        text: "With AI analytics, you can forecast trends, identify opportunities, and make proactive decisions that keep your business ahead of the competition."
                    },
                    {
                        heading: "Empower Teams with Insights",
                        text: "Automyta delivers actionable insights directly to your teams, enabling smarter decisions and better collaboration across departments."
                    },
                    {
                        heading: "Scale with Confidence",
                        text: "Our solutions are designed to grow with your organization, providing scalable AI tools that adapt as your business evolves."
                    }
                ]}

                highlightBox="Future-ready businesses are built on AI insights, agility, and innovation — and Automyta makes it happen."

                listItems={[
                    "Predictive analytics for smarter strategies",
                    "Data-driven decision making",
                    "Enhanced operational efficiency",
                    "Innovation at scale",
                    "Sustainable growth and agility"
                ]}

                conclusionHeading="Looking Ahead"
                conclusion="With Automyta, organizations are not just keeping up with the future — they’re shaping it, leveraging AI to innovate and scale with confidence."
            />

            {/* ffoter */}


            <Footer />

        </>

    )
}

export default DiscoverFuture
