import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {

    const { name, slots } = option;

    return (
        <div className="card  shadow-xl ">
            <div className="card-body text-center ">
                <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'No available appointment'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                    disabled = {slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(option)}
                    >Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;