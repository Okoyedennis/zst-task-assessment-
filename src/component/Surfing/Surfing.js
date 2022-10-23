import React, { useState } from 'react'
import { surfingData } from '../data/SurfingData';
import IndividualHome from '../IndividualHome/IndividualHome';
import SkeletonComp from '../SkeletonComp/SkeletonComp';

const Surfing = () => {
          const [loading, setLoading] = useState(true);

          setTimeout(() => {
            setLoading(false);
          }, 1500);
  return (
    <div className="arctic">
      <div className="arctic__wrapper contain">
        {loading ? (
          <>
            <SkeletonComp cards={15} />
          </>
        ) : (
          <>
            {surfingData.map(
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
}

export default Surfing