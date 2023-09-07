import React from 'react';

const BeInstructorSingle = (instructor) => {
    const {id, img, title} = instructor;
    return (
        <div className='relative text-center py-8'>
            <div className='bg-blue-700 bg-opacity-50 rounded-br-3xl rounded-tl-3xl flex flex-col justify-center items-center h-60 become-instructor'>
            <p className='absolute top-0 text-2xl bg-[#8EA6EB] w-20 h-16 text-white font-bold rounded-full flex justify-center items-center'>{id}</p>
            <img src={img} alt="" className='w-20'/>
            <h2 className='pt-4 text-lg font-semibold '>{title}</h2>
            </div>
        </div>
    );
};

export default BeInstructorSingle;