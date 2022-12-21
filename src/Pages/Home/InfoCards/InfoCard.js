import React from 'react';

const InfoCard = ({ card }) => {
    const { name, details, icon, bgClass } = card;
    return (
        <div  className={`card md:card-side p-6 ${bgClass} shadow-xl text-white mt-10`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p><small>{details}</small></p>
            </div>
        </div>
    );
};

export default InfoCard;