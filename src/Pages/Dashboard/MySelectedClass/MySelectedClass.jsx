import React, { useEffect, useState } from 'react';
import SelectedClass from './SelectedClass';

const MySelectedClass = () => {
    const [mySelectedClasses, setMySelectedClasses] = useState([]);
    useEffect(()=>{
        fetch(
            "https://craftopia-server-side.vercel.app/selectedClasses"
        )
        .then(res => res.json())
        .then(data => setMySelectedClasses(data))
    },[mySelectedClasses])
    return (
        <div>
           <div className='text-left font-bold text-xl'>
           My total selected Classes: <span className='text-blue-900'>{mySelectedClasses.length}</span>
           </div>
            <div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 my-10'>
				{mySelectedClasses.map((mySelectedClass) => (
					<SelectedClass key={mySelectedClass._id} mySelectedClass = {mySelectedClass}></SelectedClass>
				))}
			</div>
            </div>
        </div>
    );
};

export default MySelectedClass;