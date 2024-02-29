import React from 'react'
import LoginButton from '../Buttons/LoginButton'

const Login = () => {
  return (
    <div className='xl:gap-6 hidden xl:flex'>
      <LoginButton text="Sign Up" />
      <LoginButton text="Sign In" textColor="text-black" bg="bg-white" border="border-[1px] border-black"/>
    </div>
  )
}

export default Login