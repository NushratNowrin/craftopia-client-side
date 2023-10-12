import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MySingleClass from './MySingleClass';

const MyClasses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("/public/instructorCourses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);
    console.log(courses)
    return (
        <div>
            <div className='text-left font-bold text-xl'>
           My total Courses: <span className='text-blue-900'>{courses.length}</span>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 my-10'>
				{courses.map((course) => (
					<MySingleClass key={course._id} course = {course}></MySingleClass>
				))}
			</div>
        </div>
    );
};

export default MyClasses;