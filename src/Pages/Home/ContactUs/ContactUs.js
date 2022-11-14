import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section>
            <section className='mt-36 rounded-lg'
                style={{
                    background: `url(${appointment})`
                }}
            >

                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <p className='text-secondary text-xl font-bold text-center'>Contact Us</p>
                            <h1 className="text-4xl font-bold text-white mb-10 text-center">Stay connected with us</h1>
                            <form className='mx-auto'>
                                <input name='email' type="email" placeholder="Your email" className="input input-bordered input-success w-full mb-5" />
                                <input type="text" name='subject' placeholder="Subject" className="input input-bordered input-success w-full mb-5" /> <br />
                                <textarea className="textarea textarea-success w-full mb-5" placeholder="Your message"></textarea>
                                <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ContactUs;