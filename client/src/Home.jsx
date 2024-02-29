import React from 'react'
import Nav from './components/header/Nav'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs'
import Community from './components/community/Community'
import Footer from './components/footer/Footer'

const Home = () => {
   return (
      <div className=''>
         <Nav />
         <Hero />
         <About />
         <WhyChooseUs />
         <Community />
         <Footer /> 
      </div>
   )
}

export default Home