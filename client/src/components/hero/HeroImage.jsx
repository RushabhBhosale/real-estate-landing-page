import React from 'react'

const HeroImage = () => {
   return (
      <div className='relative mb-[120px] xl:mt-[120px] mt-0  h-[965px] w-full'>
         <div className='absolute inset-8 rounded-t-[60px] bg-no-repeat bg-cover' style={{ backgroundImage: `url('/building.png')`,top:"200px" }}></div>
         <div className='absolute inset-8 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(/building-2.png)` }}></div>
      </div>
   )
}

export default HeroImage