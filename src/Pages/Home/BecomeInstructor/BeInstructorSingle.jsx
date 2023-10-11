import React from 'react';
import "./BeInstructorSingle.css"

const BeInstructorSingle = (instructor) => {
    const {id, img, title} = instructor;
    return (
        <div className='relative text-center pt-16 become-instructor'>
            <div className='bg-blue-700 bg-opacity-50 rounded-br-3xl rounded-tl-3xl flex flex-col justify-center items-center h-60 '>
            <p className='absolute top-8 instructor-id text-2xl bg-[#8EA6EB] w-16 h-16 text-white font-bold rounded-full flex justify-center items-center z-20'>{id}</p>
            <p className='absolute top-8 text-2xl bg-white w-16 h-16 text-white font-bold rounded-full flex justify-center items-center z-10'>{id}</p>
            <img src={img} alt="" className='w-20'/>
            <h2 className='pt-4 text-slate-900 text-lg font-semibold '>{title}</h2>
            </div>
        </div>
    );
};

export default BeInstructorSingle;