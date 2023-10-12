import { space } from "postcss/lib/list";
import React from "react";

const SingleClasses = ({ course }) => {
	const { image, name, instructor, email, seats, price, students, status } =
		course;
	return (
		<tr className='text-sm text-center '>
			<td>
				<img src={image} alt='' />
			</td>
			<td>{name}</td>
			<td>{instructor}</td>
			<td>{email}</td>
			<td>{price}</td>
			<td>{seats}</td>
			<td>{students}</td>
			<td>
				{status === "Approved" ? (
					<span className='font-bold text-base text-green-700'>Approved</span>
				) : (
					""
				)}
				{status === "Pending" ? (
					<div className="flex gap-1 text-white font-semibold text-xs"><button className="bg-green-700 p-2 rounded-md">Approved</button><button className="bg-red-700 p-2 rounded-md">Denied</button><button className="bg-blue-700 p-2 rounded-md">Feedback</button></div>
				) : (
					""
				)}
				{status === "Denied" ? (
					<span className='font-bold text-base text-red-700'>Denied</span>
				) : (
					""
				)}
			</td>
		</tr>
	);
};

export default SingleClasses;
