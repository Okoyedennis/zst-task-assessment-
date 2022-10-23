import React, { useState } from "react";
import { BsFillMapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTop = ({ iconHome, iconMap, path }) => {
  const [mobileText, setMobileText] = useState(false);

  const changeScreenWidth = () => {
    window.innerWidth <= 586 ? setMobileText(true) : setMobileText(false);
  };

  window.addEventListener("resize", changeScreenWidth);
  return (
    <div className="footer__top">
      {iconHome && (
        <Link to={path}>
          <div className="footer__top-wrapper">
            <button>
              <span> {mobileText ? "Map" : "Show Map"}</span>
              <BsFillMapFill />
            </button>
          </div>
        </Link>
      )}

      {iconMap && (
        <Link to={path}>
          <div className="footer__top-wrapper">
            <button>
              <span> {mobileText ? "List" : "Show List"}</span>
              <FaListUl />
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default FooterTop;
