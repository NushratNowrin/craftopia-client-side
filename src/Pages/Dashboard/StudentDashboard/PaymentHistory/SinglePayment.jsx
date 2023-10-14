import React from "react";

const SinglePayment = ({ course }) => {
	const { id, name, price, transtancion } = course;
	return (
		<tr className='text-sm text-center '>
			<td>{id}</td>
			<td>{name}</td>
			<td>{price}</td>
			<td>{transtancion}</td>
		</tr>
	);
};

export default SinglePayment;
