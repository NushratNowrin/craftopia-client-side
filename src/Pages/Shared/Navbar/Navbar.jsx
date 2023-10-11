import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiDotsVertical, HiX } from 'react-icons/hi';
import ActiveLink from "../Activelink/ActiveLink";
import logo from "../../../assets/logo.png"
import { AuthContext } from "../../../Providers/AuthProvider";
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);
	const { user, logout } = useContext(AuthContext);
    // console.log(user.displayName)

	const handleLogOut = () => {
		logout()
			.then((result) => {
				// Sign-out successful
			})
			.catch((error) => {
			});
	};
    return (
		<div className='flex Navbar-bg items-center md:px-20 py-6 px-5 text-white justify-between fixed w-full z-50'>
			<h3 className='text-sm'>
				<Link to='/'><img src={logo} className="w-32" alt="" /></Link>
			</h3>
			{/* hambarger */}
			<div onClick={() => setOpen(!open)} className='md:hidden'>
				<span>
					{open === true ? (
						<HiX className='text-right absolute right-3 top-6 h-6 w-6 text-white' />
					) : (
						<HiDotsVertical className='h-6 w-6 text-white' />
					)}
				</span>
			</div>

			{/* desktop icon */}
			<div
				className={`md:flex justify-between items-center ${
					open ? "" : "hidden"
				}`}>
				<ul className='md:flex text-base'>
					<li className='mx-5 font-semibold '>
						<ActiveLink to='/'>Home</ActiveLink>
					</li>
					<li className='mx-5 font-semibold'>
						<ActiveLink to='/instructor'>Instructors</ActiveLink>
					</li>
					<li className='mx-5 font-semibold'>
						<ActiveLink to='/classes'>Courses</ActiveLink>
					</li>
					
                    {
                        user? (
                            <li className='mx-5 font-semibold'>
						<ActiveLink to='/dashboard'>Dashboard</ActiveLink>
					</li>
                        ): ("")
                    }
				</ul>
				<div className='h-10 w-28'>
					{user ? (
						<div className='flex justify-between items-center'>
							{(user.photoURL != null)? (
								<img
									className='h-10 w-10 mr-3 rounded-full border'
									src={user.photoURL}
									title={user.displayName}
									alt=''
								/>
							) : (
								<img
									className='h-10 w-10 mr-3 rounded-full'
									src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
									title={user.email}
								/>
							)}

							<div className=' h-10 '>
								<button
									onClick={handleLogOut}
									className=' bg-red-500 text-white px-5 py-2 font-bold rounded-md hover:bg-red-700'>
									Logout
								</button>
							</div>
						</div>
					) : (
						<button className=' bg-red-500 text-white px-5 py-2 font-bold rounded-md hover:bg-red-700'>
							<ActiveLink to='/login'>Login</ActiveLink>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;