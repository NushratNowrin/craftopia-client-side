import React, { useEffect, useState } from 'react';
import Heading from '../../../components/Heading/Heading';
import SingleInstructor from '../../Shared/SingleInstructor/SingleInstructor';

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
			<h2 className="subheading">Our most popular instructors</h2>
			<Heading heading={"Popular Instructos"}></Heading>

            <div className='grid frid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-10 p-10 md:p-16'>
				{sixInstructors.map((instructor) => (
					<SingleInstructor key={instructor._id} {...instructor}></SingleInstructor>
				))}
			</div>
            
        </div>
    );
};

export default PopularInstructors;