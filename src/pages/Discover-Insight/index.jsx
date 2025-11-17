import React from 'react'
import Navbar from '../../components/navbar'
import CustomBannerComp from '../../common/CustomBannerComp'
import CustomTextSection from '../../common/CustomTextSection'
import bgImg2 from '../../assets/images/download33.png';
import Footer from '../../components/footer'

const DicoverInsight = () => {
    return (
        <>
            <Navbar BG={true} />
            <CustomBannerComp
                heading1="See How It Works"
                heading2="From Idea to Execution"
                paragraph="Explore how Automyta transforms complex AI challenges into actionable, measurable solutions. Our structured approach ensures speed, clarity, and real business impact."
                bgImage={bgImg2} // replace with your image for this section
                showButton={true}
                buttonText="Learn More"
                buttonOnClick={() => navigate('/our-services')}
            />
            <CustomTextSection
                title="See How It Works"
                subheading="A closer look at how Automyta transforms complex AI challenges into actionable solutions."

                sections={[
                    {
                        heading: "Step 1: Understanding Your Needs",
                        text: "We start by analyzing your business processes, identifying bottlenecks, and understanding key objectives. This ensures every solution we create is tailored to deliver maximum impact."
                    },
                    {
                        heading: "Step 2: Designing Intelligent Workflows",
                        text: "Our team builds AI-driven workflows that automate repetitive tasks, streamline communication, and provide real-time insights, turning strategy into action effortlessly."
                    },
                    {
                        heading: "Step 3: Rapid Implementation & Iteration",
                        text: "We deploy solutions quickly and continuously iterate based on feedback and results, ensuring you gain measurable benefits from day one."
                    }
                ]}

                highlightBox="From planning to execution, our AI solutions are designed for speed, efficiency, and tangible results."

                listItems={[
                    "Customized AI workflows for your business",
                    "Faster implementation cycles",
                    "Clear visibility into operations",
                    "Seamless integration with existing systems",
                    "Continuous improvement through iteration"
                ]}

                conclusionHeading="Summary"
                conclusion="By following this structured approach, Automyta ensures that your business leverages AI effectively, achieving operational excellence and measurable growth."
            />

            <Footer />
        </>

    )
}

export default DicoverInsight
