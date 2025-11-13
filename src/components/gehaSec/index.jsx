import React from 'react'
import DynamicSection from '../../common/DynamicSection'
import img1 from "../../assets/images/download16.jpg";
import img2 from "../../assets/images/download17.jpg";
import img3 from "../../assets/images/download18.jpg";
import img4 from "../../assets/images/download14.jpg";
import { Link } from 'react-router';

const GEHASection = () => {
    return (
        <>
            <DynamicSection
                subtitle="EFFORT AND EFFECT"
                title="Getting to know GEHA"
                desc="GEHA is a name that millions of people know, as many Americans tuned in to watch the Chiefs take to GEHA field every Sunday..."
                img={img1}
                showButton={true}
                buttonText="Learn More"
            //  buttonText={
            //     <Link
            //         to="contactSection"
            //         smooth={true}
            //         duration={600}
            //         offset={-80}
            //         className="cursor-pointer text-white"
            //     >
            //         Learn More
            //     </Link>
            // }
            />

            <DynamicSection
                subtitle="CREATIVE STRATEGY"
                title="Transforming a digital identity"
                desc="Our team redesigned the entire brand structure and built a clean, modern digital experience that aligns with user needs."

                img={img2}
                reverse
                showButton={true}
                buttonText="View Project"
            />

            <DynamicSection
                subtitle="EFFORT AND EFFECT"
                title="Getting to know GEHA"
                desc="GEHA is a name that millions of people know, as many Americans tuned in to watch the Chiefs take to GEHA field every Sunday..."

                img={img3}
                showButton={false} // 🚫 hidden
            />

            <DynamicSection
                subtitle="CREATIVE STRATEGY"
                title="Transforming a digital identity"
                desc="Our team redesigned the entire brand structure and built a clean, modern digital experience that aligns with user needs."

                img={img4}
                reverse
                showButton={true}
                buttonText="Explore More"
            />
        </>
    )
}

export default GEHASection
