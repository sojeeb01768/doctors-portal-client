import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error= useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-red-600 text-3xl text-center'>Somthing went wrong !!</p>
            <p className='text-red-400 text-center'>{error.statusText || error.message}</p>
            <h4 className='text-3xl text-center'>Please <button className='btn btn-secondary text-white rounded' onClick={handleLogOut}>Sign Out</button>and Login again</h4>
        </div>
    );
};

export default DisplayError;