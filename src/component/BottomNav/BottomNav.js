import React from "react";
import "./BottomNav.css";
import icon1 from "../../images/icons/icon1.jpeg";
import icon2 from "../../images/icons/icon2.jpeg";
import icon3 from "../../images/icons/icon3.jpeg";
import icon4 from "../../images/icons/icon4.jpeg";
import icon5 from "../../images/icons/icon5.jpeg";
import icon6 from "../../images/icons/icon6.jpeg";
import icon7 from "../../images/icons/icon7.jpeg";
import icon8 from "../../images/icons/icon8.jpeg";
import icon9 from "../../images/icons/icon9.jpeg";
import icon10 from "../../images/icons/icon10.jpeg";
import icon11 from "../../images/icons/icon11.jpeg";
import icon12 from "../../images/icons/icon12.jpeg";
import icon13 from "../../images/icons/icon13.jpeg";
import icon14 from "../../images/icons/icon14.jpeg";
import icon15 from "../../images/icons/icon15.jpeg";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const data = [
    {
      icon: icon15,
      text: "Arctic",
      path: "/",
    },
    {
      icon: icon1,
      text: "Design",
      path: "/design",
    },
    {
      icon: icon2,
      text: "Surfing",
      path: "/surfing",
    },
    {
      icon: icon3,
      text: "Tropical",
      path: "/tropical",
    },
    {
      icon: icon4,
      text: "Beachfront",
      path: "/beachfront",
    },
    {
      icon: icon5,
      text: "OMG!",
      path: "/omg",
    },
    {
      icon: icon6,
      text: "Beach",
      path: "/beach",
    },
    {
      icon: icon7,
      text: "Amazing pools",
      path: "/amazing_pools",
    },
    {
      icon: icon8,
      text: "Islands",
      path: "/islands",
    },
    {
      icon: icon9,
      text: "Amazing views",
      path: "/amazing_views",
    },
    {
      icon: icon10,
      text: "Bed & breakfasts",
      path: "/bed_breakfasts",
    },
    {
      icon: icon11,
      text: "Caves",
      path: "/caves",
    },
    {
      icon: icon12,
      text: "National parks",
      path: "/national_parks",
    },
    {
      icon: icon13,
      text: "Shared homes",
      path: "/shared_homes",
    },
    {
      icon: icon14,
      text: "Earth homes",
      path: "/earth_homes",
    },
  ];
  return (
    <div className="bottomNav">
      <div className="bottomNav__wrapper contain">
        {data.map(({ icon, text, path }, index) => (
          <NavLink to={path} className="bottomNav__individual" key={index}>
            <img src={icon} alt="icon" />
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
