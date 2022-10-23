import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComp = ({ cards }) => {
  return Array(cards )
    .fill(0)
    .map((_, i) => (
      <div className="individualHome">
        <div className="individualHome__wrapper">
          <div className="image__wrapper">
            <Skeleton width={280} height={280} />
          </div>
          <div className="individualHome__content">
            <div className="individualHome__content-left">
              <Skeleton
                width={150}
                count={2}
                style={{ marginBottom: ".6rem" }}
              />
            </div>
            <div className="individualHome__content-right">
              <div className="individualHome__content-right-content">
                <Skeleton width={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default SkeletonComp;
