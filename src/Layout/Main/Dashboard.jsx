import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";

const Dashboard = () => {
	return (
		<div className='drawer lg:drawer-open'>
			<input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col items-center justify-center'>
				
				<Outlet></Outlet>

				<label
					htmlFor='my-drawer-2'
					className='btn btn-primary drawer-button lg:hidden'>
					Open drawer
				</label>
			</div>
			<div className='drawer-side'>
				<label htmlFor='my-drawer-2' className='drawer-overlay'></label>
				<ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
					{/* Sidebar content here */}
					<li className='h-24 w-52'>
						<img src={logo} alt='' />
					</li>
					<li className='mx-5 font-semibold '>
						<Link to='my-selected-class'>My Selected Class</Link>
					</li>
					<li className='mx-5 font-semibold '>
						<Link to='my-enrolled-class'>My Enrolled Class</Link>
					</li>
					<li className='mx-5 font-semibold '>
						<Link to='my-enrolled-class'>Payment History</Link>
					</li>

					<div className='divider'></div>

					<li className='mx-5 font-semibold '>
						<Link to='/'>Home</Link>
					</li>
					<li className='mx-5 font-semibold'>
						<Link to='/instructor'>Instructors</Link>
					</li>
					<li className='mx-5 font-semibold'>
						<Link to='/classes'>Classes</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
