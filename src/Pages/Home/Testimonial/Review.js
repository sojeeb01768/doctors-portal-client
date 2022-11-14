import React from 'react';

const Review = ({ singleReview }) => {

    const { name, image, location, review } = singleReview;

    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p className='mb-6'>{review}</p>
                <div className="flex items-center justify-start">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            <img src={image} alt=''/>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">{name}</h5>
                        <p><small>{location}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;