import { useState } from "react";
import logo from "../assets/logo-black.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <main>
      <div className="max-w-[100rem] mx-auto flex items-center justify-between p-8 text-white">
        <img src={logo} alt="logo" />
        <nav className="space-x-20 hidden md:block text-[#203239]">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Properties</a>
          <a href="/">Contact</a>
        </nav>
        <button onClick={handleNav} className="md:hidden">
          {nav ? (
            <img src={close} alt="" className="md:hidden w-8 h-8" />
          ) : (
            <img src={menu} alt="" className="md:hidden w-8 h-8" />
          )}
        </button>
        <nav
          className={
            nav
              ? `md:hidden bg-white rounded-md w-11/12 text-black flex flex-col items-center fixed left-6 h-96 top-24 z-10 uppercase justify-between transition-all ease-in-out duration-700 shadow-2xl`
              : `md:hidden bg-white rounded-md w-11/12 text-black flex flex-col items-center fixed left-6 h-96 -top-[100%] z-10 uppercase justify-between transition-all ease-in-out duration-700 shadow-2xl`
          }
        >
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Properties</a>
          <a href="/">Contact</a>
        </nav>
      </div>
    </main>
  );
}
