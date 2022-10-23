import React, { useState } from "react";
import IndividualHome from "../IndividualHome/IndividualHome";
import "./Arctic.css";
import { arcticData } from "../data/ArcticData";
import SkeletonComp from "../SkeletonComp/SkeletonComp";

const Arctic = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
      setLoading(false)
  }, 2000)
  return (
    <div className="arctic">
      <div className="arctic__wrapper contain">
        {loading ? (
          <>
            <SkeletonComp cards={15} />
          </>
        ) : (
          <>
            {arcticData.map(
              (
                { title, starRating, distance, date, amount, images },
                index
              ) => (
                <div key={index}>
                  <IndividualHome
                    img={images}
                    title={title}
                    starRating={starRating}
                    distance={distance}
                    date={date}
                    amount={amount}
                  />
                </div>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Arctic;
