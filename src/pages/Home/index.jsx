import React from 'react'
import BannerSection from '../../components/banner'
import ThinkingSection from '../../components/thinkingSection'
import GettingSection from '../../components/gettingSection'
import ConsultingCards from '../../components/consultingCards'
import OurClients from '../../components/ourClients'
import EngineSecton from '../../components/engineSection'
import JoinOurTeam from '../../components/joinTeam'
import ReadyNextSection from '../../components/readySection'
import Footer from '../../components/footer'

const Home = () => {
    return (
        <>
            <BannerSection />
            <ThinkingSection />
            <GettingSection />
            <ConsultingCards />
            <OurClients />
            <EngineSecton />
            <JoinOurTeam />
            <ReadyNextSection />
            <Footer />
        </>

    )
}

export default Home
