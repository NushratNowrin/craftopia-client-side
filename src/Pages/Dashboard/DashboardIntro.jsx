import React from "react";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardIntro = () => {
	const { user } = useContext(AuthContext);
	return (
		<div className='font-bold text-xl'>
			<div className='flex flex-col justify-center items-center md:pt-40 pt-20'>
				{user?.photoURL != null ? (
					<img
						className='w-40 h-40 bg-blue-200 rounded-full outline outline-offset-4 outline-blue-800'
						src={user?.photoURL}
						alt=''
					/>
				) : (
					<img
						className='w-40 h-40 rounded-full'
						src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
					/>
				)}
				<p className=' mt-5 tracking-wider text-black font-semibold'>
					Welcome <span className="text-blue-700">{user?.displayName}</span>
				</p>
			</div>
		</div>
	);
};

export default DashboardIntro;
