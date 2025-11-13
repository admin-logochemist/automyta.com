import React from 'react'
import PaidSocialSEC from '../../../components/paidSocialSec'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import PaidSocialBanner from '../../../components/pSocialBanner'
import OurPaidSocialServicesFAQ from '../../../components/ourPaidSocialServices'

const PaidSocial = () => {
    return (
        <>
            <Navbar BG={true} />
            <PaidSocialBanner/>
            <PaidSocialSEC/>
            <OurPaidSocialServicesFAQ/>
            <Footer/>
        </>

    )
}

export default PaidSocial
