import React, { useEffect, useState } from "react";
import instructor from "../../../assets/instructor.jpg";
import Heading from "../../../components/Heading/Heading";
import BeInstructorSingle from "./BeInstructorSingle";
const BecomeInstructor = () => {
	const [beinstructor, setBeinstructor] = useState([]);
	useEffect(() => {
		fetch("/becomeinstructor.json")
			.then((res) => res.json())
			.then((data) => setBeinstructor(data));
	}, []);
	return (
		<div className='mx-10 my-20'>
			<div>
				<h2 className='subheading'>We understand and appreciate the quality</h2>
				<Heading heading={"Become a Proud Instructor"}></Heading>
			</div>
			<div className='px-10 py-16'>
				<div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-between sm:gap-10 gap-2'>
					<div>
						<img src={instructor} alt='' />
					</div>
					{beinstructor.map((instructor) => (
						<BeInstructorSingle key={instructor.id} {...instructor} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BecomeInstructor;
