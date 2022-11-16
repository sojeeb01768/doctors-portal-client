import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    //treatment is just another name of appointmenOptions with name, slots,_id
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext);



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }

        // TODO: send data to the server 
        // and once data is saved then close the modal
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='mt-10'>
                        <input name='date' type="text" value={format(selectedDate, 'PP')} className="input input-bordered input-success w-full mt-5" disabled />
                        <select name='slot' className="select select-success w-full mt-5">

                            {
                                slots.map((slot, idx) => <option
                                    value={slot}
                                    key={idx}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered input-success w-full mt-5" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-success w-full mt-5" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-success w-full mt-5" />
                        <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-5' type="submit" value="SUBMIT" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;