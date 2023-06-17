import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";

const PopularClass = () => {
	const [classes, setClasses] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);
	const sixClasses = classes.slice(0, 6);

	return (
		<div className='my-10'>
			<Heading heading={"Popular Classes"}></Heading>

			<div className='grid grid-cols-3 justify-center items-center gap-10 md:p-16'>
				{sixClasses.map((classs) => (
					<div
						key={classs._id}
						className={` ${
							classs.seats == 0 ? "bg-red-300" : "bg-slate-300"
						}  relative rounded-3xl hover:text-white`}>
						<div className=' h-60  flex-col items-center justify-center'>
							<img className=' rounded-t-3xl shadow-lg' src={classs.image} />
							<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl z-20 hover:bg-opacity-60 opacity-100 transition-opacity'></div>
						</div>
						<div className='relative rounded-b-3xl hover:bg-black hover:bg-opacity-60 z-30 text-center py-5 font-semibold'>
							<h2 className='py-2 mx-5 border-b border-slate-400 text-2xl text-blue-600'>
								{classs.name}
							</h2>
							<p className='py-2 mx-5 border-b border-slate-400'>
								{classs.instructor}
							</p>
							<p className='py-2 mx-5 border-b border-slate-400 bg-red-600 text-white'>
								Applied Students: {classs.students}
							</p>
							<p className='py-2 mx-5 border-b border-slate-400'>
								Available Seat: {classs.seats}
							</p>
							<div className='flex justify-between py-2 mx-5 items-center'>
								<p>BDT {classs.price}</p>
								<button className='uppercase text-sm px-5 py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl'>
									Select class
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularClass;
