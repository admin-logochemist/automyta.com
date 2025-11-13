import React from 'react'
import Navbar from '../../../components/navbar'
import PaidSearch from '../../../components/paidSearch'
import Footer from '../../../components/footer'
import PPCBanner from '../../../components/ppcBanner'

const PPC = () => {
    return (
        <>
            <Navbar BG={true} />
            <PPCBanner/>
            <PaidSearch/>
            <Footer/>

        </>

    )
}

export default PPC
