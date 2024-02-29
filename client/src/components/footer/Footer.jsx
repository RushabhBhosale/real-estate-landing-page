import React from 'react'
import Logo from '../Logo'
import Button from '../Buttons/Button'
import Input from './Input'
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <div className='xl:p-20 p-8 bg-primary mt-20'>
         <div className='xl:flex gap-48 mb-8'>
            <div className='xl:w-1/3'>
               <Logo color='text-white' />
               <p className='mt-6 text-[#C9C6C2] my-6'>
                  XYZ Industries: Where real estate dreams meet seamless transactions, transforming aspirations into achievements.
               </p>
               <Button
                  bg='bg-transparent'
                  text="Explore"
                  border='border border-white' />
            </div>
            <div className='xl:w-2/3 gap-20 xl:flex'>
               <div className='mt-8 xl:mt-0'>
                  <h4 className='text-[20px] lato-600 text-white mb-6'>Quick Links</h4>
                  <p className='text-[#C9C6C2] mb-2'>Blog</p>
                  <p className='text-[#C9C6C2] mb-2'>Testimonials</p>
                  <p className='text-[#C9C6C2] mb-2'>Terms and Conditions</p>
                  <p className='text-[#C9C6C2] mb-2'>Privacy Policy</p>
                  <p className='text-[#C9C6C2] mb-2'>Site Map</p>
               </div>
               <div>
                  <h4 className='text-[20px] lato-600 text-white mb-6'>Customer Support</h4>
                  <p className='text-[#C9C6C2] mb-2'>Feedback</p>
                  <p className='text-[#C9C6C2] mb-2'>Report a Problem</p>
                  <p className='text-[#C9C6C2] mb-2'>Request a Call Back</p>
               </div>
               <div>
                  <h4 className='text-[20px] lato-600 text-white mb-6'>Subscribe Us</h4>
                  <p className='text-[#C9C6C2] mb-2'>Subscribe to our weekly newsletter</p>
                  <Input />
               </div>
            </div>
         </div>
         <hr />
         <div className='flex justify-between py-8'>
            <div className='flex gap-4 text-white text-[20px]'>
               <FaYoutube />
               <FaTwitter />
               <FaInstagram />
               <FaFacebook />
            </div>
            <div className='text-white'>
               <span>Terms | Privacy</span>
               <span className='xl:ps-8'>&copy; 2024 XYZ</span>
            </div>
         </div>
      </div>
   )
}

export default Footer