
import React, { useContext } from "react";
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
	
	return (
		<div className='drawer lg:drawer-open'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col m-12 '>
				<Outlet></Outlet>

				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'>
					Open drawer
				</label>
			</div>
			<div className='drawer-side'>
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

					<li className='mx-5 font-semibold mt-2'>
						<ActiveLink className='hover:text-yellow-500' to='dashboard-intro'>
							Dashboard
						</ActiveLink>
					</li>
					<li className='mx-5 font-semibold '>
						<ActiveLink
							className='hover:text-yellow-500'
							to='my-selected-class'>
							My Selected Class
						</ActiveLink>
					</li>
					<li className='mx-5 font-semibold '>
						<ActiveLink
							className='hover:text-yellow-500'
							to='my-enrolled-class'>
							My Enrolled Class
						</ActiveLink>
					</li>
					<li className='mx-5 font-semibold '>
						<ActiveLink className='hover:text-yellow-500' to='payment-history'>
							Payment History
						</ActiveLink>
					</li>

					<div className='border-b border-zinc-500 my-5'></div>

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
