import React, { useEffect, useState } from 'react';
import SingleClasses from './SingleClasses';

const ManageClasses = () => {
    const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("/public/allCourses.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
    return (
        <div>
            <div className='text-left font-bold text-xl mb-10'>
            Manage Classes
            </div>
            {courses.map((course) => (
				<SingleClasses key={course._id} course={course}></SingleClasses>
			))}
        </div>
    );
};

export default ManageClasses;