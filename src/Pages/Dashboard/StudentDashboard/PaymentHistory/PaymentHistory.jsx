import React, { useEffect, useState } from 'react';
import SinglePayment from './SinglePayment';

const PaymentHistory = () => {
    const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch("/public/payment.json")
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
    return (
        <div>
            <div className='text-left font-bold text-xl mb-10'>
            Payment History
           </div>
           
           {courses.map((course) => (
				<SinglePayment key={course._id} course={course}></SinglePayment>
			))}
           
        </div>
    );
};

export default PaymentHistory;