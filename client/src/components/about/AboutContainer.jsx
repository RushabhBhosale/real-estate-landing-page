import React from 'react'

const AboutContainer = ({textAlign, left, img, text, desc }) => {
  return (
    <div className={`xl:px-16 px-14 ${left ? left : "flex xl:flex-row flex-col"} my-20 xl:w-[1200px] w-auto items-center xl:gap-20 gap-10`}>
      <div>
        <img src={`about/${img}.png`} className='rounded-2xl max-w-[320px] h-[320px] object-cover border-2 border-gray-400' alt="" />
      </div>
      <div className={`${textAlign ? textAlign : ""}`}>
        <h3 className='text-[48px] text-primary leading-[57.6px] lato-600'>{text}</h3>
        <p className='my-2 text-[20px] text-[#071A45B2]'>
          {desc}
        </p>
        <p><a href="/" className='underline underline-offset-2 text-[#071A45B2]'>Learn more</a></p>
      </div>
    </div>
  )
}

export default AboutContainer