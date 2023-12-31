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
			{users.map((user) => (
				<User key={user._id} user={user}></User>
			))}
		</div>
	);
};

export default ManageInstructors;
