import React from "react";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { TbArrowsLeftRight, TbWorld } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper contain">
        <Link to="/" className="navbar__img-wrapper">
          <img src="https://links.papareact.com/qd3" alt="logo" />
        </Link>
        <div className="navbar__center">
          <span>Anywhere</span>
          <span>Any week</span>
          <span>Add guests</span>
          <div className="search__wrapper">
            <FiSearch />
          </div>
        </div>
        <div className="navbar__right-wrapper">
          <div className="navbar__right">
            <div className="navbar__right-innerLeft">
              <p>Become a Host</p>
              <div className="navbar__svg-wrapper">
                <TbWorld />
              </div>
            </div>

            <div className="navbar__right-inner-border">
              <GoThreeBars />
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__mobileScreen contain">
        <div className="navbar__mobileScreen-content">
          <FiSearch className="icon" />
          <div className="navbar__mobileScreen__center">
            <span className="span">Where to?</span>
            <div className="content-span">
              <span>Anywhere</span>.<span>Any week</span>.
              <span>Add guests</span>
            </div>
          </div>

          <div className="navbar__mobilScreen-icon">
            <TbArrowsLeftRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
