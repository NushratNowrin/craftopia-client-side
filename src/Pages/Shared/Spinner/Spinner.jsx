import React from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-2'>
            <div><CgSpinnerAlt className='text-2xl text-red-400 animate-spin'/></div>
        </div>
    );
};

export default Spinner;