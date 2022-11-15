import React, { useContext, useState } from 'react';
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            })
    }
    return (
        <div className='h-[700px]  flex justify-center items-center '>
            <div className='w-96 p-8 shadow-xl'>
                <h2 className='text-2xl mb-10 text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>



                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: 'Email is required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'password should be atleast 6 charecter' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <div>
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>

                        <label className="label"><span className="label-text-alt">forget Password</span></label>
                    </div>
                    <input className='btn btn-accent w-full max-w-xs' value='login' type="submit" />
                </form>
                <p className='mt-2'>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create an account</Link></p>
                <div className="divider w-full max-w-xs">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;