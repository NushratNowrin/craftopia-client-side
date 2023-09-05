import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const DashboardIntro = () => {
    const {user} =useContext(AuthContext);
    return (
        <div className='font-bold text-xl'>
            Welcome <span className='text-blue-900'>{user.displayName || ''}!</span>
        </div>
    );
};

export default DashboardIntro;