import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import SingleClass from "../../Shared/SingleClass/SingleClass";

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
			<h2 className="subheading">Student&apos;s most favourite courses are here</h2>
			<Heading heading={"Trending Courses"}></Heading>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-10 p-10 md:p-16'>
				{sixClasses.map((classs) => (
					<SingleClass key={classs._id} classs = {classs}></SingleClass>
				))}
			</div>
		</div>
	);
};

export default PopularClass;
