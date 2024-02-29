import React from 'react'

const Choose = ({num, title, desc, position}) => {
   return (
      <div className={`flex xl:absolute ${position} text-primary w-[250px] gap-4`}>
         <div className='w-1 h-[300px] grad'></div>
         <div>
            <div className='flex flex-col'>
               <p className='text-[80px] leading-[90px]'>{num}</p>
               <p className='text-[20px] leading-[24px]'>{title}</p>
               <p className='mt-10 mb-16 bg-[#2C8FB5] w-4 h-4'></p>
            </div>
            <div>
               <p className='text-[#071A45B2]'>{desc}</p>
            </div>
         </div>
      </div>
   )
}

export default Choose