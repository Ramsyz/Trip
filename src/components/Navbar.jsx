import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  {
    /* Scroll effect */
  }
  // if(!nav) {
  //     document.body.style.overflow = 'hidden'
  // } else {
  //     document.body.style.overflow = 'scroll'
  // }
  return (
    <div className="absolute w-full flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold text-white z-20">Trip</h1>
      {nav ? (
        <FaTimes
          onClick={handleNav}
          className="z-20 cursor-pointer"
          size={25}
          style={{ color: "#fff" }}
        />
      ) : (
        <FaBars
          onClick={handleNav}
          className="z-20 cursor-pointer"
          size={25}
          style={{ color: "#fff" }}
        />
      )}
      <div
        className={
          nav
            ? "fixed text-gray-300 left-0 top-0 w-full h-full bg-black/90 px-4 py-7 ease-linear duration-500 z-10"
            : "absolute top-0 left-[-100%] h-full ease-out duration-600 z-10"
        }
      >
        <ul className="flex flex-col justify-center items-center w-full h-full">
          <li className="text-3xl py-4 cursor-pointer">Home</li>
          <li className="text-3xl py-4 cursor-pointer">Destinations</li>
          <li className="text-3xl py-4 cursor-pointer"> Reservations</li>
          <li className="text-3xl py-4 cursor-pointer">Amenities</li>
          <li className="text-3xl py-4 cursor-pointer">Rooms</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
