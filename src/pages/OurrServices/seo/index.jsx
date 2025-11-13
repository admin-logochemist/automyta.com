import React from 'react'
import Navbar from '../../../components/navbar'
import SeoBanner from '../../../components/seoBanner'
import SEOSection from '../../../components/SEOSection'
import Footer from '../../../components/footer'

const SEO = () => {
  return (
    <>
    <Navbar BG={true}/>
    <SeoBanner/>
    <SEOSection/>
    <Footer/>
    </>

  )
}

export default SEO
