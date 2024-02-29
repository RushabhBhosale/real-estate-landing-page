import { IoIosArrowRoundForward } from "react-icons/io";

const Button = ({ text, border, bg, full }) => {
  return (
    <button className={`p-4 pe-8 hover-button ${bg ? bg : "bg-tertiary"} min-h-11 ${full ? "w-full" : "max-w-[350px]"} rounded-full text-[20px] justify-center xl:justify-start flex items-center gap-3 leading-[26px] text-white ${border ? border : ""}`}>
      {text} <IoIosArrowRoundForward className="text-white icon" />
    </button>
  )
}

export default Button