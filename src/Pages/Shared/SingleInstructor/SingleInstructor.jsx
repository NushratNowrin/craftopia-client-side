import React from "react";
import { Link } from "react-router-dom";

const SingleInstructor = (instructor) => {
	return (
		<div
			className='h-80 relative flex items-center justify-center'
			key={instructor._id}>
			<img
				className='h-full object-cover w-full rounded-3xl shadow-lg ease-in-out transition duration-500 '
				src={instructor.image}
			/>
			<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl flex flex-col justify-end pb-10 items-center opacity-0 z-20 hover:bg-opacity-60 hover:opacity-100 transition-opacity gap-2'>
				<h2 className='text-white text-2xl font-semibold'>{instructor.name}</h2>
				<p className='text-white text-lg font-semibold'>{instructor.email}</p>
                <button className="mt-3"><Link to='/' className=" px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-button">View Courses</Link></button>
			</div>
		</div>
	);
};

export default SingleInstructor;
