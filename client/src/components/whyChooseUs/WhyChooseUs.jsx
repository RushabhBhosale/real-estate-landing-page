import React from 'react'
import Choose from './Choose'

const WhyChooseUs = () => {
   return (
      <div className='xl:px-16 px-8 bg-secondary'>
         <h1 className='xl:text-[72px] md:text-[54px] text-[40px] xl:py-20 pt-10 text-primary text-center xl:leading-[80px] lato-700'>
            Why Choose XYZ
         </h1>
         <div className='relative'>
            <Choose
               num='01'
               position='top-0 left-0 py-12'
               title='Search and Filters'
               desc='Tailored Searches to meet your needs. Find what you’re looking for with precision.'
            />
            <Choose
               num='02'
               position='top-[140px] left-[350px] py-12'
               title='Detailed Listings'
               desc='Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.'
            />
            <Choose
               num='03'
               position='top-[280px] right-[470px] py-12'
               title='Direct Messaging'
               desc='Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.'
            />
            <Choose
               num='04'
               position='top-[140px] right-0 py-12'
               title='Secure Payments'
               desc='Trust in Every Transaction. Our secure payment system ensures your peace fo mind.'
            />
         </div>
         <div className='h-[730px] hidden xl:block'></div>
      </div>
   )
}

export default WhyChooseUs