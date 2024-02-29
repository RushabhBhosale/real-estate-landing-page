import React from 'react'

const LoginButton = ({ bg, textColor, text, border }) => {
   return (
      <div className={`p-4 ${bg ? bg : "bg-tertiary"} text-[20px] leading-[26px] ${border ? border : ""} rounded-full ${textColor ? textColor : "text-white"} px-6`}>
         {text}
      </div>
   )
}

export default LoginButton