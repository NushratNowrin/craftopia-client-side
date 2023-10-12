import React, { useEffect, useState } from "react";
import User from "./user";
import "./User.css"

const ManageInstructors = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("/public/users.json")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	return (
		<div>
			<div className='text-left font-bold text-xl mb-10'>Manage Users</div>
			{/* <th className='bg-gray-200'>
				<td>Sr.</td>
				<td>Name</td>
				<td>Email</td>
				<td>CTA</td>
			</th> */}
			{users.map((user) => (
				<User key={user._id} user={user}></User>
			))}
		</div>
	);
};

export default ManageInstructors;
