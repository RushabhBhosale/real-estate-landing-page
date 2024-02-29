import Button from "../Buttons/Button"
import HeroImage from "./HeroImage"

const Hero = () => {
   return (
      <div className="">
         <div className='flex flex-col items-center text-center my-20'>
            <div className='px-8'>
               <h1 className='xl:text-[72px] text-[40px] md:text-[54px] text-primary leading-[80px] lato-700'>
                  CONNECTING DREAMS TO REALITY
                  <p className='lato-italic text-secondary'>YOUR PREMIER</p>
                  REAL ESTATE MARKETPLACE
               </h1>
               <p className='mt-6 mb-10 text-[20px]'>Where every search ends with a home</p>
            </div>
            <div className='flex flex-col xl:flex-row xl:w-[600px] md:px-32 px-10 gap-4 xl:gap-8 xl:px-0 w-full justify-between'>
               <Button full text='Find Your Home' />
               <Button full text='List Your Property' />
            </div>
         </div>
         <HeroImage />
      </div>
   )
}

export default Hero