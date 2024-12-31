import React, { useEffect, useRef, useState } from 'react';
import logo from "../assets/images/logo.png";
import {menuLists} from "../assets/data/data";
import style from "../styles/header.module.css";
import { Badges, CustomLink, CustomNavLink } from './CustomComponent';
import {IoSearchOutline, IoHeartOutline, IoCartOutline} from 'react-icons/io5';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    };
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = window.location.pathname === "/";

  return (
    <>
      <header 
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 relative z-20 ${
              isScrolled ? "scrolled" : ""
              }`
             : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div 
            className={`${
              isScrolled ? "lg:hidden" : "lg:black"
            } lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg: z-10`}> 
          </div>
        )}

        <nav className={style.menu }>
          <div className={style.navbarList}>
            <div> 
              <img src={logo} alt="Logo" className={style.image}/>
            </div>

            <div className={style.menuList} style={{color: "red"}}>
              {menuLists.map((list) => (
                <li key={list.id} className='uppercase list-none'>
                  <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                </li>
              ))} 
            </div>
          </div>

          <div className="flex items-center gap-8 icons"> 
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              
              <CustomLink 
                className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}>
                Login
              </CustomLink>
              
              <span 
                 className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}>
                /
              </span>
            
              <CustomLink
                className={`${
                  isScrolled || isHomePage ? "text-white" : "text-primary"
                }`}>
                Register
              </CustomLink>
            </div>

            <div 
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || isHomePage ? "text-white" : "text-primary"
              }`}>
            
              <IoSearchOutline size={23} />

              <div className="relative z-20">

                <IoHeartOutline size={23} />
                
                <div className="absolute -top-2 -right-1.5">
                  <Badges className="bg-primary-green">10</Badges>
                </div>

                <div className="relative z-20">
                
                  <IoCartOutline size={23} />
                
                  <div className="absolute -top-2 -right-1.5">
                
                    <Badges className="bg-primary-green">0</Badges>
                
                  </div>
                </div>
              </div>
              
              <button onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none">
                  {isOpen ? (
                    <AiOutlineClose size={24}/>
                  ) : (
                  <AiOutlineMenu size={24}/>
                )}
              </button>
            </div>
          </div>
        
          <div className='flex items-center gap-8 icons'>
          </div>
        
          <div ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}>
            {menuLists.map((list) => (
              <li key={list.id} className='uppercase list-none'>
                <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};