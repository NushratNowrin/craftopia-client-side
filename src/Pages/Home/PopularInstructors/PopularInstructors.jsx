import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Heading/Heading';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);
    const sixInstructors = instructors.slice(0, 6);
    return (
        <div className='my-10'>
			<Heading heading={"Popular Instructos"}></Heading>

            <div className='grid grid-cols-3 justify-center items-center gap-10 md:p-16'>
				{sixInstructors.map((instructor) => (
					<div
						className='image-div relative flex items-center justify-center'
						key={instructor._id}>
						<img className=' rounded-3xl shadow-lg' src={instructor.image} />
						<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl flex flex-col justify-end pb-10 items-center opacity-0 z-20 hover:bg-opacity-60 hover:opacity-100 transition-opacity'>
							<h2 className='text-white text-2xl font-semibold'>
								{instructor.name}
							</h2>
							<p className='text-white text-lg font-semibold'>
								{instructor.email}
							</p>
						</div>
					</div>
				))}
			</div>
            
        </div>
    );
};

export default PopularInstructors;