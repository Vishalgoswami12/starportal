import React from 'react'
import { Helmet } from 'react-helmet'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'
import Navbar8 from '../componenets/navbar8'
import Hero17 from '../componenets/hero17'
import Features24 from '../componenets/features24'
import Pricing14 from '../componenets/pricing14'
import Features25 from '../componenets/features25'
import CTA26 from '../componenets/cta26'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Beneficial Bumpy Narwhal</title>
        <meta property="og:title" content="Beneficial Bumpy Narwhal" />
      </Helmet>
      <Navbar8></Navbar8>
      <Hero17></Hero17>
      <Features24></Features24>
      <CTA26></CTA26>
      <Features25></Features25>
      <Pricing14></Pricing14>
      <Steps2></Steps2>
      <Testimonial17></Testimonial17>
      <Contact10></Contact10>
      <Footer4></Footer4>
    </div>
  )
}

export default Home
