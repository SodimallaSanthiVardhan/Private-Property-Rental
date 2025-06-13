import React, { useState, useRef, useEffect } from 'react';
import "./Nav.css";
import logo from "../../assets/p.jpg";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot, MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { LuTentTree } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  const [visible, setVisible] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div id='Nav'>
      {visible && (
        <div className="hamburger" ref={menuRef}>
          <Link to={"/Login"}><div className="ham1">Login</div></Link>
          <Link to={"/Signup"}><div className="ham1">Sign Up</div></Link>
          <Link to={"/Listing"}><div className="ham1">List Your Home</div></Link>
          <Link to={"/Contact"}><div className="ham1">Help Center</div></Link>
        </div>
      )}

      <div className="nav1">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="logo" width="50px" />
            <h1>Private Property Rental</h1>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder='Search Destination' />
          <button><span>Search</span> <IoSearch /></button>
        </div>

        <div className="ham">
          <Link to={"/Listing"}>
            <button id='btn1'>List Your Home</button>
          </Link>
          <button id="btn2" onClick={() => setVisible(prev => !prev)}>
            <GiHamburgerMenu id='svg1' />
            <CgProfile id='svg2' />
          </button>
        </div>
      </div>

      <div className="nav2">
        <NavLink to={"/"}><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
        <NavLink to={"/Houses"}><div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
        <NavLink to={"/rooms"}><div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div></NavLink>
        <NavLink to={"/farmhouses"}><div className="svg11"><PiFarm /><h3>Farm Houses</h3></div></NavLink>
        <NavLink to={"/poolhouses"}><div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div></NavLink>
        <NavLink to={"/tenthouses"}><div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div></NavLink>
        <NavLink to={"/cabins"}><div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div></NavLink>
        <NavLink to={"/shops"}><div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div></NavLink>
        <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>
      </div>
    </div>
  );
}

export default Nav;
