import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');


    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-ruby-mu.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-ruby-mu.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <section data-aos="flip-left" className='m-10'>
            <p className='text-center text-secondary font-semibold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;

