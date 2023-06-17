import React from 'react';

const Heading = ({heading}) => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl text-semibold tracking-wider uppercase p-3 border-b-2 border-slate-500 rounded-md inline-flex'>{heading}</h2>
            </div>
    );
};

export default Heading;