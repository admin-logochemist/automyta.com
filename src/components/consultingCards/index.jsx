import React from 'react'
import styles from './cards.module.css'
import card1 from '../../assets/images/download4.jpg'
import card2 from '../../assets/images/download2.jpg'
import card3 from '../../assets/images/download3.jpg'
import CustomArrowButton from '../../common/CustomArrowButton'
import { useNavigate } from 'react-router'

const ConsultingCards = () => {
    const navigate = useNavigate();

    const cardData = [
        {
            img: card1,
            tittle: "Accelerate Innovation with AI-Driven Strategy",
            descrip: "We help organizations transform complex ideas into executable, data-driven strategies. By combining human creativity with intelligent automation, your business can move faster, innovate smarter, and outperform the pace of change.",
            btnText: "Explore the Strategy",
            link: "/discover-strategy"
        },
        {
            img: card2,
            tittle: "Turning Insight into Intelligent Action",
            descrip: "Traditional workflows rely on guesswork — we rely on data. Our AI frameworks uncover unseen opportunities and turn them into measurable outcomes, ensuring every decision is powered by clarity, not uncertainty.",
            btnText: "See How It Works",
            link: "/discover-insight"
        },
        {
            img: card3,
            tittle: "Designing the Future of Digital Experiences",
            descrip: "We don’t just build platforms — we craft ecosystems that learn, adapt, and evolve. With a focus on user behavior, predictive design, and next-gen technologies, we shape digital experiences that grow smarter over time.",
            btnText: "Discover the Future",
            link: "/discover-future"
        },
    ]
    return (
        <>
            <div className={`${styles.main_sec} container-fluid`}>
                <div className={`${styles.contain} container`}>
                    <div className={`${styles.main_card_sec}`}>
                        {cardData.map((item, index) => (
                            <div key={index} className={`${styles.cards_sec}`}>
                                <div className={`${styles.cards_image}`}>
                                    <img src={item.img} alt="c1" />
                                </div>
                                <div className={`${styles.card_details}`}>
                                    <h1>{item.tittle}</h1>
                                    <p>{item.descrip}</p>
                                    <CustomArrowButton
                                        text={item.btnText}
                                        // onClick={() => console.log(`${item.btnText} clicked`)}
                                        onClick={() => navigate(item.link)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ConsultingCards
