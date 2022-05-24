import React from 'react';
import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import Review from './Review';
const Reviews = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            react: 'This has been a great card.',
            location: 'california',
            img: people1
        },
        {
            _id:2,
            name: 'Jennyfar',
            react: 'Just price, other thing is more than good',
            location: 'Saans Fransico',
            img: people2
        },
        {
            _id:3,
            name: 'Gorana Lukač',
            react: 'Picture quantity is really good considering the price. I generally use this for graphic design work.',
            location: 'Los Angeles',
            img: people3
        },
    
    ];
    return (
        <div>
            <h3 className='text-primary text-3xl font-bold mt-8 mb-8'>Client Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;