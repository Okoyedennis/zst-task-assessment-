import React from "react";
import "./IndividualHome.css";
import { IoMdStar } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

const IndividualHome = ({ img, title, starRating, distance, date, amount }) => {
  const [hover, setHover] = useState(false);
  const [mouseLeaver, setMouseLeave] = useState(true);
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };
    
  const toggleHover = () => {
    setHover(true);
    setMouseLeave(false);
  };

  const mouseLeave = () => {
    setMouseLeave(false);
    setHover(false);
  };

  const next = () => {
    setCount(count === img.length - 1 ? 0 : count + 1);
    console.log("next");
  };

  const prev = () => {
    setCount(count === 0 ? img.length - 1 : count - 1);
    console.log("prev");
  };
  return (
    <div className="individualHome">
      <div className="individualHome__wrapper">
        <div
          className="image__wrapper"
          onMouseOver={toggleHover}
          onMouseLeave={mouseLeave}
        >
          {img.map(({ img }, index) => {
            return <>{index === count && <img src={img} alt="img" />}</>;
          })}

          <div onMouseOver={toggleHover} className="image__top-layer">
            <div className="heart__icon-wrapper">
              <div className="heartSpace" />
              <FiHeart
                onClick={toggleLike}
                className={like ? "active" : null}
              />
            </div>
            {hover && (
              <div className={"image_left-right_arrow-show "}>
                <div onClick={prev}>
                  <BiChevronLeft />
                </div>
                <div className="navSpace" onClick={prev} />
                <div onClick={next}>
                  <BiChevronRight />
                </div>
              </div>
            )}
            {mouseLeaver && (
              <div className={"image_left-right_arrow "}>
                <BiChevronLeft onClick={prev} />
                <div className="navSpace" />
                <BiChevronRight onClick={next} />
              </div>
            )}
            <div className="dot_wrapper">
              {img.map(() => (
                <span />
              ))}
            </div>
          </div>
        </div>
        <div className="individualHome__content">
          <div className="individualHome__content-left">
            <span>{title}</span>
            <span>{distance}</span>
            <span>{date}</span>
            <div>
              <span>{amount}</span> <span>night</span>
            </div>
          </div>
          <div className="individualHome__content-right">
            <div className="individualHome__content-right-content">
              <IoMdStar />
              <span>{starRating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualHome;
