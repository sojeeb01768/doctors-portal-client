import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('')
    const handlesignup = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Account created successfully')
                
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => console.error(err));
                    
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            });
    }

    return (
        <div className='h-[700px]  flex justify-center items-center '>
            <div className='w-96 p-8 shadow-xl'>
                <h2 className='text-2xl mb-10 text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handlesignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register('name',
                            {
                                required: "Name is required"
                            }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register('email',
                            {
                                required: "Email is required"
                            }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register('password',
                            {
                                required: "password is required",
                                minLength: { value: 6, message: 'password should be atleast 6 charecter' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'use atleat 1 Capital letter,symbol and digit' }
                            }
                        )} className="input input-bordered w-full max-w-xs mb-3" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full max-w-xs' value='signup' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                <div className="divider w-full max-w-xs">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;