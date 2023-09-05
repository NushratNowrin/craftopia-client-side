import { useEffect, useState } from "react";
import React from "react";
import "./Instructor.css";
import useTitle from "../../hooks/useTitle";
import Spinner from "../Shared/Spinner/Spinner";
import { useNavigation } from "react-router-dom";
import SingleInstructor from "../Shared/SingleInstructor/SingleInstructor";

const Instructor = () => {
	const [instructors, setInstructors] = useState([]);
	const navigation = useNavigation();
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/instructors")
			.then((res) => res.json())
			.then((data) => setInstructors(data));
	}, []);
	useTitle("Instructor");
	// Spinner
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}
	return (
		<div className='bg-slate-200'>
			<h1 className='bg-slate-700 text-center text-3xl font-semibold font-serif  p-5 text-white tracking-wider'>
				Instructors
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-10 instructor md:p-16 p-10'>
				{instructors.map((instructor) => (
					<SingleInstructor key={instructor._id} {...instructor}></SingleInstructor>
				))}
			</div>
		</div>
	);
};

export default Instructor;
