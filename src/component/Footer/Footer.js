import React from "react";
import "./Footer.css";
import { BsSearch, BsHeart } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { SiAirbnb } from "react-icons/si";
import { BiMessageAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <>
      <FooterTop iconHome={true} iconMap={false} path="/map" />
      <div className="footer__bottom">
        <div className="footer__bottom-wrapper contain">
          <div className="footer__bottom-left">
            <span>©</span>
            <span>.</span>
            <span>Privacy</span>
            <span>.</span>
            <span>Terms</span>
            <span>.</span>
            <span>Sitemap</span>
          </div>
          <div className="footer__bottom-right">
            <div className="footer__bottom-right__left">
              <span>
                <TbWorld />
              </span>
              <span>English (US)</span>
              <span>$</span>
              <span>USD</span>
            </div>
            <div className="footer__bottom-right__right">
              <span>Support & resources</span>
              <span>
                <IoIosArrowUp />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__mobileScreen">
        <div className="footer__mobileScreen-wrapper contain">
          <div className="footer__mobileScreen_individual-content">
            <BsSearch className="footer__mobileScreen-activeIcon" />
            <div>Explore</div>
          </div>
          <div className="footer__mobileScreen_individual-content">
            <BsHeart />
            <div>Wishlists</div>
          </div>
          <div className="footer__mobileScreen_individual-content">
            <SiAirbnb />
            <div>Trips</div>
          </div>
          <div className="footer__mobileScreen_individual-content">
            <BiMessageAlt />
            <div>Inbox</div>
          </div>
          <div className="footer__mobileScreen_individual-content">
            <CgProfile />
            <div>Profile</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
