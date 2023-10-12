import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiFillHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BsBookHalf } from "react-icons/bs";
import "./Dashboard.css";
import { AuthContext } from "../../Providers/AuthProvider";
import ActiveLink from "../../Pages/Shared/Activelink/ActiveLink";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	// email
	const [instructors, setInstructors] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);

    const userEmail = user?.email;
	// console.log(userEmail)

	// conditional
    const findInstructor = instructors.find(instructor => instructor.email === userEmail);
	const instructorEmail = findInstructor?.email;
	// console.log(instructorEmail);
    const adminEmail = 'admin@gmail.com';
	// console.log(adminEmail)
	const studentEmail = (userEmail!= (instructorEmail || adminEmail))
	// console.log(studentEmail)

	const studentLinks = 
		<>
			<li className='mx-5 font-semibold '>
				<ActiveLink className='hover:text-yellow-500' to='my-selected-class'>
					My Selected Class
				</ActiveLink>
			</li>
			<li className='mx-5 font-semibold '>
				<ActiveLink className='hover:text-yellow-500' to='my-enrolled-class'>
					My Enrolled Class
				</ActiveLink>
			</li>
			<li className='mx-5 font-semibold '>
				<ActiveLink className='hover:text-yellow-500' to='payment-history'>
					Payment History
				</ActiveLink>
			</li>
		</>

	const instructorLinks = 
		<>
			<li className='mx-5 font-semibold mt-2'>
				<ActiveLink className='hover:text-yellow-500' to='my-classes'>
				My Classes
				</ActiveLink>
			</li>
			<li className='mx-5 font-semibold '>
				<ActiveLink className='hover:text-yellow-500' to='add-class'>
				Add Class
				</ActiveLink>
			</li>
		</>

		const adminLinks = 
		<>
		<li className='mx-5 font-semibold mt-2'>
				<ActiveLink className='hover:text-yellow-500' to='manage-classes'>
				Manage Classes
				</ActiveLink>
			</li>
			<li className='mx-5 font-semibold '>
				<ActiveLink className='hover:text-yellow-500' to='manage-instructors'>
				Manage Instructors
				</ActiveLink>
			</li>
		</>

	return (
		<div className='drawer lg:drawer-open'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col m-12 '>
				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'>
					Open drawer
				</label>
				<Outlet></Outlet>
			</div>
			<div className='drawer-side z-50'>
				<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
				<ul className='dashboard-menu menu p-4 py-10 w-72 h-full  text-white'>
					{/* Sidebar content here */}
					<li className='w-40 mx-auto'>
						<img src={logo} alt='' />
					</li>
					<div className='flex flex-col justify-center items-center py-5 border-b border-zinc-500'>
						{user?.photoURL != null ? (
							<img
								className='w-12 h-12 rounded-full border border-white p-0'
								src={user?.photoURL}
								alt=''
							/>
						) : (
							<img
								className='h-10 w-10 mr-3 rounded-full'
								src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
							/>
						)}
						<p className=' mt-2 text-yellow-500 font-semibold'>
							{user?.displayName}
						</p>
					</div>

					{/* Dashboard Links */}
					{studentEmail === true && studentLinks}
					{userEmail === instructorEmail && instructorLinks}
					{userEmail === adminEmail && adminLinks}

					<div className='border-b border-zinc-500 my-5'></div>

					{/* other links */}
					<li className='mx-5 font-semibold '>
						<Link className='hover:text-yellow-500' to='/'>
							<AiFillHome /> Home
						</Link>
					</li>
					<li className='mx-5 font-semibold'>
						<Link className='hover:text-yellow-500 ' to='/instructor'>
							<GiTeacher />
							Instructors
						</Link>
					</li>
					<li className='mx-5 font-semibold'>
						<Link className='hover:text-yellow-500' to='/classes'>
							<BsBookHalf />
							Classes
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
