import React from 'react'
import InsightsSection from '../../components/insightsSection'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import ArticlesBanner from '../../components/articlesBanner'

const Articles = () => {
  return (
    <>
      <Navbar BG={true}/>
      <ArticlesBanner/>
      <InsightsSection />
      <Footer />
    </>

  )
}

export default Articles
