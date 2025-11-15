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

            {/* <CustomBannerComp
                heading1="See How It Works"
                heading2="From Idea to Execution"
                paragraph="Explore how Automyta transforms complex AI challenges into actionable, measurable solutions. Our structured approach ensures speed, clarity, and real business impact."
                bgImage={bgImg2} // replace with your image for this section
                showButton={true}
                buttonText="Learn More"
                buttonOnClick={() => navigate('/how-it-works')}
            />

            <CustomBannerComp
                heading1="Discover the Future"
                heading2="AI-Driven Innovation"
                paragraph="Unlock the possibilities of AI for your organization. Automyta empowers teams with insights, predictive intelligence, and scalable solutions to stay ahead of the curve."
                bgImage={bgImg3} // replace with your image for this section
                showButton={true}
                buttonText="Get Started"
                buttonOnClick={() => navigate('/future-of-ai')}
            /> */}
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

            {/* <CustomTextSection
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
/> */}


            <Footer />

        </>

    )
}

export default DiscoverStrategy
