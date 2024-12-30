import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const content = <>
        
        <div className="lg:hidden z-50 block absolute top-16px w-full left-0 right-0 bg-slate-400 backdrop-blur-lg bg-opacity-30 transition">
        <ul className='flex gap-8 mr-16 text-[18px]'>
            <Link  to='/'>
            <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>Home</li>
            <Link/>
            <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>
              <Link to='/pages'>Pages</Link>
            </li>
            <div className="bg-red-500 p-4"> This should have a red background and padding. </div>
        <ul/>
        </div>
    </>

  return (
    <nav className='z-50'>
      <div className='h-10vh flex justify-between lg:py-5 px-20 border-b'>
        <div className='flex items-center flex-1'>
          <h2 className='text-3x1' style={{ color: "pink", fontSize: "bold"}}>
            Beauty
          </h2>
        </div>
        <div>
            <div className="group">
                <button className="text" style={{color: "pink", cursor: "pointer", border: "white", transition: "border-b-2", }}>Products</button>
                <div className="texts" style={{flex: "col", background: "white", color: "black z-20", duration: "-300",  overflow: "hidden", top: "16", position: "absolute", left: "0",  p: "10", w: "full"}}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div className="flex flex-col">
                            <h3 className="mb-4 text-2x1 text-pink-400">Beauty Products</h3>
                            <a href="" className="hover:underline hover:text-pink-400">Makeup Kit</a>
                            <a href="" className="hover:underline hover:text-pink-400">Lotion</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Wash</a>
                            <a href="" className="hover:underline hover:text-pink-400">Face Pack</a>
                            <a href="" className="hover:underline hover:text-pink-400">Body Cream</a>
                        </div>
                    </div>
                </div>
            </div>

            <li className='text hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer'>
              <Link to='/contact'>Contact</Link>
            </li>

        </div>
        {/* <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition-none" onClick={handleClick}>
            {click ? <FaTimes className="Text-black"/>: <CiMenuFries className="Text-black"/>}
        </button> */}
      </div>
    </nav>
  );
}; 