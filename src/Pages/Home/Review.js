import React from 'react';

const Review = ({review}) => {
    const{name, img, location, react } = review;
    
    return (
        <div className='bg-base-100 shadow-2xl'>
            <div className="avatar online">
  <div className="w-24 mask mask-hexagon">
    <img src={img} />

  </div>
</div>
     <div>
        <h5>{name}</h5>
     <p>{location}</p>
     <small>{react}</small>
    </div>        
        </div>
    );
};

export default Review;