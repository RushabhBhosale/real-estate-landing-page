import React, { useState } from 'react'
import Logo from '../Logo'
import Menu from './Menu'
import Login from './Login'
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div className='flex items-center my-10 justify-between px-4 xl:px-32'>
      <Logo />
      <Menu menu={menu} />
      <Login />
      {menu ?  <RxCross2 className='text-[40px] text-white md:hidden z-40' onClick={() => setMenu(!menu)} /> : <IoIosMenu className='text-[40px] md:hidden' onClick={() => setMenu(!menu)} />}
    </div>
  )
}

export default Nav