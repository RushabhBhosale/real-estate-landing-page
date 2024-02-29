import React from 'react'
import Button from '../Buttons/Button'

const Community = () => {
   return (
      <div className='relative'>
         <div className='grad-2 w-full h-[200px]'></div>
         <div className='bg-no-repeat h-[800px] bg-cover bg-community'>
            <div className='py-32 text-center flex flex-col justify-center items-center mx-auto'>
               <h2 className='absolute xl:w-2/3 w-full top-20 xl:left-[240px] lato-800 text-primary xl:text-[72px] md:text-[54px] text-[40px] leading-[80px]'>
                  YOUR <span className='lato-italic lato-600'>TRUSTED</span> PARTNER IN
                  THE FUTURE <span className='lato-italic lato-600'>OF HOUSING </span>
               </h2>
               <p className='text-[20px] mb-10 -mt-8'>Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.</p>
               <Button text="Join Our Community Today" />
            </div>
         </div>
      </div>
   )
}

export default Community