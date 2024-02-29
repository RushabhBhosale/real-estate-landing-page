import React from 'react'
import AboutContainer from './AboutContainer'

const About = () => {
   return (
      <div className='xl:my-[120px] md:my-[80px] my-[40px]'>
         <div className='flex text-center mb-16 flex-col gap-6'>
            <h1 className='xl:text-[72px] md:text-[54px] text-[40px] text-primary leading-[80px] lato-700'>
               HOW IT WORKS?
               <p className='text-[20px]'>Step by Step Guide</p>
            </h1>
         </div>
         <AboutContainer
            img="1"
            text='Discover Your Perfect Home'
            desc='Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.'
         />
         <AboutContainer
            img="2"
            left="flex xl:flex-row-reverse flex-col ms-auto"
            textAlign="xl:text-right text-start"
            text='Showcase Your Property'
            desc='List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.'
         />
         <AboutContainer
            img="3"
            text='Connect and Communicate'
            desc='Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.'
         />
         <AboutContainer
            img="4"
            left="flex xl:flex-row-reverse flex-col ms-auto"
            textAlign="xl:text-right text-start"
            text='Seal the Deal Securely'
            desc='Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.'
         />
      </div>
   )
}

export default About