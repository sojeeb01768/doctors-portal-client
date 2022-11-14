import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            details: 'open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        },
        {
            id: 2,
            name: 'Visit Our Location',
            details: 'Moghbajar,Dhaka,Bangladesh',
            icon: marker,
            bgClass: "bg-accent",
        },
        {
            id: 3,
            name: 'Contact us Now',
            details: '0129034747',
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary",
        }
    ]

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;