import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import SingleClass from "../Shared/SingleClass/SingleClass";

const Classes = () => {
	const [classes, setClasses] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/classes")
			.then((res) => res.json())
			.then((data) => setClasses(data));
	}, []);
	
	useTitle("Classes");
	return (
		<div className='bg-slate-100'>
			<h1 className='bg-slate-700 text-center text-3xl font-semibold font-serif  p-5 text-white tracking-wider'>
				Classes
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-10 p-5 md:p-16'>
				{classes.map((classs) => (
					<SingleClass key={classs._id} classs = {classs}></SingleClass>
				))}
			</div>
		</div>
	);
};

export default Classes;
