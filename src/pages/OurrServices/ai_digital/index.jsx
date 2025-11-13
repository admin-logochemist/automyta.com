import React from 'react'
import Navbar from '../../../components/navbar'
import AiDigitalBanner from '../../../components/aiDigitalBanner'
import AIMarketing from '../../../components/aIMarketing'
import Footer from '../../../components/footer'

const AiDigital = () => {
    return (
        <>
            <Navbar BG={true} />
            <AiDigitalBanner/>
            <AIMarketing/>
            <Footer/>
            
        </>

    )
}

export default AiDigital
