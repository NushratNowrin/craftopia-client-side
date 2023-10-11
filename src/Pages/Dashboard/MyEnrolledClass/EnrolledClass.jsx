import React from 'react';

const EnrolledClass = ( {myEnrolledClass} ) => {
    const {
		image,
		name,
		instructor,
	} = myEnrolledClass;
    return (
        <div>
           <div
				className='bg-slate-300
		 relative rounded-3xl hover:text-white'>
				<div className='  flex-col items-center justify-center'>
					<img className='rounded-t-3xl shadow-lg h-48' src={image} />

					<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl z-20 hover:bg-opacity-60 opacity-100 transition-opacity'></div>
				</div>
				<div className='relative rounded-b-3xl hover:bg-black hover:bg-opacity-60 z-30 text-center py-2 font-semibold'>
					<h2 className='py-1 mx-5 border-b border-slate-400 text-xl text-blue-600'>
						{name}
					</h2>
					<p className='py-1 mx-5 text-sm border-b border-slate-400'>
						{instructor}
					</p>
                    <button className='uppercase text-sm font-semibold mx-auto my-5 px-4 py-2 border bg-blue-600 text-white  rounded-xl tracking-wider hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:tracking-widest duration-300'>
							Content
						</button>
				</div>
			</div>
        </div>
    );
};

export default EnrolledClass;