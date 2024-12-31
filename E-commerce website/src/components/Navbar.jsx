import { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

export const Navbar = () => {

    const [click, Setclick] = useState(false);
    const handleClick = () => Setclick(!click);
    const content = (
        
        <div className="lg:hidden z-50 block absolute top-16px w-full left-0 right-0 bg-slate-400 backdrop-blur-lg bg-opacity-30 transition">
            <ul className='flex gap-8 mr-16 text-[18px]'>
                <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer transition-all duration-150 hover:bg-pink-200 hovet:rounded'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer transition-all duration-150 hover:bg-pink-200 hovet:rounded'>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer transition-all duration-150 hover:bg-pink-200 hovet:rounded'>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li className='hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer transition-all duration-150 hover:bg-pink-200 hovet:rounded'>
                    <Link to='/pages'>Pages</Link>
                </li>
                <div className= "me" style={{background: "red", color: "blue"}}> This should have a red background and padding. </div>
            </ul>
        </div>
    );

  return (
    <nav className='z-50'>
      <div className='h-10vh flex justify-between lg:py-5 px-20 border-b'>
        <div className='flex items-center flex-1'>
        <h2 className="text-3x1" style={{ color: "pink", fontWeight: "bold" }}> 
            Beauty 
        </h2>
        </div>
        <div>
            <div className="group">
            <button className="text" style={{ color: "pink", cursor: "pointer", border: "1px solid white", transition: "border-b-2" }} > Products </button>
                <div className="texts" style={{ display: "flex", flexDirection: "column", background: "white", color: "black", zIndex: 20, transitionDuration: "300ms", overflow: "hidden", top: "250px", position: "absolute", left: "0", padding: "10px", width: "100%", }} >
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
        <div>
            {click && content}
        </div>
        <button className="block sm:hidden transition-none" onClick={handleClick}>
            {click ? <FaTimes className="Text-black"/>: <CiMenuFries className="Text-black"/>}
        </button>
      </div>
    </nav>
  );
}; 