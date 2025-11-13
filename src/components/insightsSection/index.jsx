// // const filteredInsights = insights.filter((item) => {
// //     return (
// //         (selectedTopic === "All" || item.topic === selectedTopic) &&
// //         (selectedIndustry === "All" || item.industry === selectedIndustry) &&
// //         (selectedPlatform === "All" || item.platform === selectedPlatform) &&
// //         item.title.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// // });
// import React, { useState } from "react";
// import styles from "./InsightsSection.module.css";
// import blackLogo from '../../assets/images/black_logo.svg';
// import Navbar from "../navbar";
// import CustomArrowButton from "../../common/CustomArrowButton";
// import t1 from '../../assets/images/t1.webp'
// import t2 from '../../assets/images/t2.webp'
// import t3 from '../../assets/images/c2.webp'
// import t4 from '../../assets/images/c3.webp'
// import t5 from '../../assets/images/ca1.webp'
// import { IoSearchSharp } from "react-icons/io5";

// const InsightsSection = () => {
//     const [selectedTopic, setSelectedTopic] = useState("All");
//     const [selectedIndustry, setSelectedIndustry] = useState("All");
//     const [selectedPlatform, setSelectedPlatform] = useState("All");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [visibleCount, setVisibleCount] = useState(4); // default visible insights

//     const insights = [
//         {
//             id: 1,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Strategy",
//             industry: "Technology",
//             platform: "Web",
//             img: t1,
//         },
//         {
//             id: 2,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Automation",
//             industry: "Finance",
//             platform: "Cloud",
//             img: t2,
//         },
//         {
//             id: 3,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Data",
//             industry: "Healthcare",
//             platform: "AI",
//             img: t3,
//         },
//         {
//             id: 4,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Transformation",
//             industry: "Retail",
//             platform: "Mobile",
//             img: t4,
//         },
//         {
//             id: 5,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Design",
//             industry: "Technology",
//             platform: "Web",
//             img: t5,
//         },
//         {
//             id: 6,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Cloud",
//             industry: "Finance",
//             platform: "Cloud",
//             img: t1,
//         },
//         {
//             id: 7,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "AI",
//             industry: "Technology",
//             platform: "AI",
//             img: t2,
//         },
//         {
//             id: 8,
//             title: "From Vision to Execution in Days, Not Months",
//             desc: "In the traditional digital development world, moving from concept to execution often takes months—sometimes even years. Planning, designing, coding, and testing are treated as separate phases that must be completed in sequence. While this approach has worked for decades, it can’t keep up with the sp ...",
//             topic: "Data",
//             industry: "Retail",
//             platform: "Mobile",
//             img: t3,
//         },
//     ];


//     const filteredInsights = insights.filter((item) => {
//         const searchLower = searchQuery.toLowerCase();
//         return (
//             (selectedTopic === "All" || item.topic === selectedTopic) &&
//             (selectedIndustry === "All" || item.industry === selectedIndustry) &&
//             (selectedPlatform === "All" || item.platform === selectedPlatform) &&
//             (
//                 item.title.toLowerCase().includes(searchLower) ||
//                 item.desc.toLowerCase().includes(searchLower) ||
//                 item.topic.toLowerCase().includes(searchLower) ||
//                 item.industry.toLowerCase().includes(searchLower) ||
//                 item.platform.toLowerCase().includes(searchLower)
//             )
//         );
//     });


//     const visibleInsights = filteredInsights.slice(0, visibleCount);

//     const uniqueTopics = ["All", ...new Set(insights.map((i) => i.topic))];
//     const uniqueIndustries = ["All", ...new Set(insights.map((i) => i.industry))];
//     const uniquePlatforms = ["All", ...new Set(insights.map((i) => i.platform))];

//     const handleLoadMore = () => {
//         setVisibleCount((prev) => prev + 4); // show +4 each click
//     };

//     const resetFilters = () => {
//         setSelectedTopic("All");
//         setSelectedIndustry("All");
//         setSelectedPlatform("All");
//         setSearchQuery("");
//         setVisibleCount(4);
//     };

//     return (
//         <>

//             <div className={`container-fluid ${styles.section}`}>
//                 <div className={`${styles.contain} container`}>
//                     <h2 className={styles.heading}>Industry-leading insights</h2>
//                     <p className={styles.subheading}>
//                         Being pioneers in the space, we love to share our thinking to further
//                         push the envelope on what can be achieved with the right digital strategy.
//                     </p>

//                     <div className={styles.filters}>

//                         <button
//                             className={`${styles.filterBtn} ${selectedTopic === "All" &&
//                                     selectedIndustry === "All" &&
//                                     selectedPlatform === "All"
//                                     ? styles.active
//                                     : ""
//                                 }`}
//                             onClick={resetFilters}
//                         >
//                             ALL
//                         </button>

//                         <select
//                             value={selectedTopic}
//                             onChange={(e) => setSelectedTopic(e.target.value)}
//                         >
//                             {uniqueTopics.map((topic) => (
//                                 <option key={topic}>{topic}</option>
//                             ))}
//                         </select>

//                         <select
//                             value={selectedIndustry}
//                             onChange={(e) => setSelectedIndustry(e.target.value)}
//                         >
//                             {uniqueIndustries.map((industry) => (
//                                 <option key={industry}>{industry}</option>
//                             ))}
//                         </select>

//                         <select
//                             value={selectedPlatform}
//                             onChange={(e) => setSelectedPlatform(e.target.value)}
//                         >
//                             {uniquePlatforms.map((platform) => (
//                                 <option key={platform}>{platform}</option>
//                             ))}
//                         </select>

//                         <div className={styles.searchBox}>
//                             <input
//                                 type="text"
//                                 placeholder="Search"
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                             />
//                             <IoSearchSharp className={styles.fa_icon} />
//                         </div>

//                     </div>

//                     <div className={styles.cards}>
//                         {visibleInsights.map((item) => (
//                             <div key={item.id} className={styles.card}>
//                                 <div className={`${styles.img_secc}`}>
//                                     <img src={item.img} alt={item.title} />
//                                 </div>
//                                 <div className={`${styles.text_sec}`}>
//                                     <h3>{item.title}</h3>
//                                     <p>{item.desc}</p>
//                                 </div>
//                                 <div className={`${styles.btn}`}>
//                                     <CustomArrowButton text="Read The Write-Up" onClick={() => console.log("clicked")} textColor="#000000"
//                                         lineColor="#999"
//                                         hoverColor="#8A2BE4" />
//                                 </div>
//                             </div>
//                         ))}

//                         {visibleInsights.length === 0 && (
//                             <p className={styles.noResults}>No insights found.</p>
//                         )}
//                     </div>

//                     {visibleCount < filteredInsights.length && (
//                         <div className={styles.loadMoreWrapper}>
//                             <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
//                                 Load More
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default InsightsSection;



import React, { useState } from "react";
import styles from "./InsightsSection.module.css";
import t1 from "../../assets/images/t1.webp";
import t2 from "../../assets/images/t2.webp";
import t3 from "../../assets/images/c2.webp";
import t4 from "../../assets/images/c3.webp";
import t5 from "../../assets/images/ca1.webp";
import { IoSearchSharp } from "react-icons/io5";
import CustomArrowButton from "../../common/CustomArrowButton";
import CustomButton from "../../common/CustomButton";

const InsightsSection = () => {
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [selectedPlatform, setSelectedPlatform] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(4);

    const insights = [
        {
            id: 1,
            title: "Strategic Intelligence: Turning Vision into Measurable Results",
            desc: "Discover how strategic clarity empowers teams to move faster — aligning business goals with real-world impact through data, creativity, and execution excellence.",
            topic: "Strategy",
            industry: "Technology",
            platform: "Web",
            img: t1,
        },
        {
            id: 2,
            title: "Automation at Scale: Redefining the Future of Work",
            desc: "From financial operations to healthcare systems, automation is unlocking efficiency. Learn how digital ecosystems are evolving through AI-driven precision and speed.",
            topic: "Automation",
            industry: "Finance",
            platform: "Cloud",
            img: t2,
        },
        {
            id: 3,
            title: "Healthcare Reinvented: Data That Saves Lives",
            desc: "Predictive analytics and real-time insights are reshaping healthcare. We explore how data-driven decisions are revolutionizing patient outcomes and operational excellence.",
            topic: "Data",
            industry: "Healthcare",
            platform: "AI",
            img: t3,
        },
        {
            id: 4,
            title: "Design Thinking: Innovation Rooted in Empathy",
            desc: "Great design starts with understanding people. Explore how empathy-led innovation helps brands craft products that delight, engage, and inspire long-term loyalty.",
            topic: "Design",
            industry: "Retail",
            platform: "Mobile",
            img: t4,
        },
        {
            id: 5,
            title: "Scaling Cloud for a Connected World",
            desc: "Modern cloud infrastructure goes beyond storage — it’s about agility, security, and growth. Learn how organizations are building resilient, future-ready environments.",
            topic: "Cloud",
            industry: "Technology",
            platform: "Web",
            img: t5,
        },
        {
            id: 6,
            title: "AI in Action: Intelligence that Drives Impact",
            desc: "Artificial Intelligence isn’t the future — it’s the present. Discover how enterprises leverage AI to streamline operations, personalize experiences, and innovate at scale.",
            topic: "AI",
            industry: "Enterprise",
            platform: "AI",
            img: t1,
        },
        {
            id: 7,
            title: "Experience that Converts: Redefining Digital CX",
            desc: "Customer experience now defines success. From performance to personalization, we explore how brands are creating seamless, human-centered digital journeys.",
            topic: "Experience",
            industry: "E-Commerce",
            platform: "Mobile",
            img: t2,
        },
        {
            id: 8,
            title: "The Future of Work: Collaboration Without Borders",
            desc: "Hybrid work is here to stay. Explore how companies are building connected, secure, and empowering systems for teams that span continents.",
            topic: "Transformation",
            industry: "Corporate",
            platform: "Cloud",
            img: t3,
        },
        {
            id: 9,
            title: "Built-In Security: Protecting What Matters Most",
            desc: "Security can’t be an afterthought. Learn how integrating cybersecurity into every development phase ensures resilience, trust, and regulatory confidence.",
            topic: "Security",
            industry: "Finance",
            platform: "Web",
            img: t4,
        },
        {
            id: 10,
            title: "Digital Branding: Consistency That Builds Trust",
            desc: "In today’s attention economy, consistency is power. See how strong digital identity helps brands maintain recognition across every platform and audience.",
            topic: "Branding",
            industry: "Marketing",
            platform: "Web",
            img: t5,
        },
        {
            id: 11,
            title: "Smart Innovation for a Sustainable Future",
            desc: "Sustainability meets technology. From AI-powered energy grids to eco-friendly data centers, innovation is driving a greener, smarter planet.",
            topic: "Innovation",
            industry: "Energy",
            platform: "AI",
            img: t1,
        },
        {
            id: 12,
            title: "From Data to Decisions: Turning Insights into Impact",
            desc: "Collecting data is easy — extracting value is an art. Discover how intelligent analytics help transform information into growth, clarity, and confidence.",
            topic: "Analytics",
            industry: "Technology",
            platform: "Web",
            img: t3,
        },

    ];

    const filteredInsights = insights.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
            (selectedTopic === "All" || item.topic === selectedTopic) &&
            (selectedIndustry === "All" || item.industry === selectedIndustry) &&
            (selectedPlatform === "All" || item.platform === selectedPlatform) &&
            (item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q))
        );
    });

    const visibleInsights = filteredInsights.slice(0, visibleCount);
    const uniqueTopics = ["All", ...new Set(insights.map((i) => i.topic))];
    const uniqueIndustries = ["All", ...new Set(insights.map((i) => i.industry))];
    const uniquePlatforms = ["All", ...new Set(insights.map((i) => i.platform))];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Industry-leading insights</h2>
                <p className={styles.subheading}>
                    Explore articles, ideas, and thought leadership from our digital experts — uncover trends, insights, and inspiration driving innovation today.
                </p>

                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${selectedTopic === "All" &&
                            selectedIndustry === "All" &&
                            selectedPlatform === "All"
                            ? styles.active
                            : ""
                            }`}
                        onClick={() => {
                            setSelectedTopic("All");
                            setSelectedIndustry("All");
                            setSelectedPlatform("All");
                            setSearchQuery("");
                        }}
                    >
                        All Articles
                    </button>

                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                    >
                        {uniqueTopics.map((t) => (
                            <option key={t}>{t}</option>
                        ))}
                    </select>

                    <select
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                    >
                        {uniqueIndustries.map((ind) => (
                            <option key={ind}>{ind}</option>
                        ))}
                    </select>

                    <select
                        value={selectedPlatform}
                        onChange={(e) => setSelectedPlatform(e.target.value)}
                    >
                        {uniquePlatforms.map((p) => (
                            <option key={p}>{p}</option>
                        ))}
                    </select>

                    <div className={styles.searchBox}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IoSearchSharp className={styles.icon} />
                    </div>
                </div>

                <div className={styles.articles}>
                    {visibleInsights.map((item) => (
                        <article key={item.id} className={styles.articleCard}>
                            <div className={styles.imageWrap}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.meta}>
                                    {item.topic} • {item.industry} • {item.platform}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className={styles.readMore}>
                                    <CustomArrowButton
                                        text="Explore Insights"
                                        textColor="#fff"
                                        lineColor="#fff"
                                        hoverColor="#7B61FF"
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {visibleInsights.length < filteredInsights.length && (
                    <div className={styles.loadMoreWrapper}>
                        {/* <button
                            onClick={() => setVisibleCount((prev) => prev + 3)}
                            className={styles.loadMoreBtn}
                        >
                            Load More
                        </button> */}
                        <CustomButton
                            onClick={() => setVisibleCount((prev) => prev + 2)}
                            text="Load More"
                            bgColor="linear-gradient(90deg, #6a7bff 0%, #a958ff 40%, #ff5f9e 80%)"
                            textColor="#fff"
                            padding="5px 20px"
                        />
                    </div>

                )}
            </div>
        </section>
    );
};

export default InsightsSection;
