import React from 'react'

const Logo = ({ color }) => {
   return (
      <div className={`${color ? color : 'text-primary'} lato-800 text-[30px] xl:text-[40px]`
}>
   XYZ < span className ={`${color ? color : 'text-primary'} lato-300 lato-italic uppercase`} > Industries</span >
    </div >
  )
}

export default Logo