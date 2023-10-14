import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EnrolledClass from './EnrolledClass';

const MyEnrolledClass = () => {
    const [myEnrolledClasses, setMyEnrolledClasses] = useState([]);
    useEffect(()=>{
        fetch(
            "https://craftopia-server-side.vercel.app/enrolledClasses"
        )
        .then(res => res.json())
        .then(data => setMyEnrolledClasses(data))
    },[myEnrolledClasses])
    return (
        <div>
           <div className='text-left font-bold text-xl'>
           My Enrolled Classes: <span className='text-blue-900'>{myEnrolledClasses.length}</span>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 my-10'>
				{myEnrolledClasses.map((myEnrolledClass) => (
					<EnrolledClass key={myEnrolledClass._id} myEnrolledClass = {myEnrolledClass}></EnrolledClass>
				))}
			</div>
        </div>
    );
};

export default MyEnrolledClass;