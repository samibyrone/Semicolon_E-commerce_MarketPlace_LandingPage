import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="z-50">
        <div className="h-10vh flex justify-between lg:py-5 px-20 border-b">
            <div className="flex item-center flex-1">
                <h2 className="text-3x1 font-bold text-pink-500">Beauty</h2>
            </div>
            <div>
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/'><li>Shop</li></Link>
                    <Link to='/'><li>Blogs</li></Link>
                    <Link to='/'><li>Pages</li></Link>
                    <Link to='/'><li>Products</li></Link>
                    <Link to='/'><li>Contact</li></Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;