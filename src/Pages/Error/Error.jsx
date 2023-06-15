import React from "react";
import error from "../../assets/404.jpg";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";



const Error = () => {
    useTitle('Error')
	return (
		<div className='relative'>
			<div className='flex-row justify-center items-center'>
				<img className="w-screen" src={error} alt='' />
			</div>
			<div className='text-center absolute top-32 left-80'>
				<Link to="/" className='px-5 py-3 bg-black text-white rounded-lg font-semibold text-lg'>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;


