import React from 'react'
import Navbar from '../../components/navbar'
import DiscoverBanner from '../../components/discoverBaner'
import DiscoverContact from '../../components/discoverContact'
import Footer from '../../components/footer'

const DiscoverHow = () => {
    return (
        <>
            <Navbar BG={true} />
            <DiscoverBanner/>
            <DiscoverContact/>
            <Footer/>
        </>

    )
}

export default DiscoverHow
