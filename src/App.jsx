import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";




const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev)=> !prev);
  }
  return <>
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500">
    <nav role="navigation" className="md:max-w-screen-lg md:mx-auto flex justify-between items-center py-6 md:px-10 text-indigo-100 relative">
      <a href="#" className="pl-6 cursor-pointer hover:text-indigo-300 text-2xl font-bold">NAYAN</a>
      <div className="px-4 cursor-pointer md:hidden" id="bars">
      {showMenu ? <IoCloseSharp className="text-2xl" onClick={handleShowMenu}/> :
      <FaBars onClick={handleShowMenu}/>}

      </div>
      {/* <div className={`md:block ${!showMenu && "right-[-999px]"} ${showMenu && "w-2/4 h-screen"} absolute md:static right-0 top-[70px] py-5  md:py-0 bg-indigo-500 md:bg-transparent text-center`} id="m">

        <ul className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div> */}
      <div className={`md:block ${!showMenu && "transform translate-x-full md:translate-x-0 "} ${showMenu && "transform translate-x-0 "} w-2/4 h-screen md:h-full md:w-0 bg-gradient-to-b from-purple-500 to-indigo-500 absolute md:static right-0 top-[80px] py-5 md:py-0  md:bg-transparent text-center transition-transform duration-300`} id="m">
  
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <li className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white">Home</li>
          <li className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white">About</li>
          <li className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-white">Contact</li>
        </ul>
      </div>
    </nav>
    </div>
    <div className="bg-black">
      <div className="max-w-screen-lg mx-auto bg-cover bg-center h-screen flex justify-center items-center flex-col space-y-10" style={{ backgroundImage: 'url("./hero-bg.jpg")' }}>
          <h1 className="md:text-6xl text-4xl text-purple-700 font-bold hover:text-indigo-500 cursor-pointer transition-all duration-300">Select Your Color!</h1>
          <p className="text-white md:text-2xl text-xl font-bold cursor-pointer transition-all duration-300 hover:scale-110">Explore =></p>
      </div>

    </div>
  </>
}

export default App

