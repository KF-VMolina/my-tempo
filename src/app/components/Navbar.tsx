"use client";
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import Link from 'next/link'
import React from 'react'
import { ThemeOptions } from '../utils/ThemeOptions';

const Navbar = () => {
    const { changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">
            Home 
        </Link></li>

        <li><Link href="/test">
            About Us 
        </Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">My Tempo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="/">
            Home 
        </Link>
      </li>
      
      <li><Link href="/test">
            About Us 
        </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Theme</div>
        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 overflow-y-auto" style={{maxHeight: "300px"}}>
        {ThemeOptions.map((theme, index) => (
                <li key={index}><a onClick={() => changeTheme(theme)}>{theme}</a></li>
            ))}
        </ul>
      </div>
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
