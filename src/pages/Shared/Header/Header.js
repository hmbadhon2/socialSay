import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navItem = 
    <>
    <li to='/media'> Media </li>
    <li to='/message'> Message </li>
    <li to='/about'> About </li>
    </>

    
    return (<div className="navbar shadow-sm bg-primary">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
         {
            navItem
         }
        </ul>
      </div>
      <Link className="btn btn-ghost normal-case text-xl"> Social Say</Link>
    </div>
    <div className="navbar-center hidden  lg:flex">
    <input type="text" placeholder="Search…" className="input input-bordered max-w-screen-md rounded-full" />
    </div>
    <div className="navbar-end">

    
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" alt='' />
        </div>
      </label>
    </div>
  </div>
    );
};

export default Header;