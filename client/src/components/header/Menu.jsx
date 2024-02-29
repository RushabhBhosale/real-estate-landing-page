import { Link } from "react-router-dom"

const Menu = ({ menu }) => {

   const navLinks = [
      {
         name: "Home",
         path: "/"
      },
      {
         name: "About Us",
         path: "/"
      },
      {
         name: "Property",
         path: "/"
      },
      {
         name: "Services",
         path: "/"
      },
      {
         name: "Contact",
         path: "/"
      },
   ]

   return (
      <div className={`md:flex absolute ${menu ? "block" : "hidden"} md:static top-0 right-0 md:h-auto h-[100vh] pt-24 md:pt-4 w-[200px] md:w-auto xl:gap-4 bg-primary flex-col md:flex-row py-4 xl:px-12 px-8 md:rounded-full`}>
         {navLinks.map((nav) => (
            <div key={nav.name} className="py-2 text-[24px] xl:text-[16px]">
               <Link
                  to={nav.path}
                  className="text-white px-2"
               >{nav.name}
               </Link>
            </div>
         ))}
         <div className="py-2"><Link to='/' className="xl:hidden text-white px-2 text-[24px] xl:text=[16px]">Sign Up</Link></div>
         <div className="py-2"><Link to='/' className="xl:hidden text-white px-2 text-[24px] xl:text=[16px]">Sign In</Link></div>
      </div>
   )
}

export default Menu