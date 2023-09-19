import React, { useState } from "react";
import Heading from "../../../components/Heading/Heading";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Faq = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	const [isOpen6, setIsOpen6] = useState(false);

	const toggleAccordion1 = () => {
	
		setIsOpen1(!isOpen1);
	};
	const toggleAccordion2 = () => {
		setIsOpen2(!isOpen2);
	};
	const toggleAccordion3 = () => {
		setIsOpen3(!isOpen3);
	};
	const toggleAccordion4 = () => {
		setIsOpen4(!isOpen4);
	};
	const toggleAccordion5 = () => {
		setIsOpen5(!isOpen5);
	};
	const toggleAccordion6 = () => {
		setIsOpen6(!isOpen6);
	};

	return (
		<div className='faq  p-5'>
			<div className='sm:px-20 px-10'>
				<div className="mb-16">
					<h2 className='subheading'>
						Have you Any Question? That can be related with our previous
						customers Question
					</h2>
					<Heading heading={"Frequently Asked Question"}></Heading>
				</div>
				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8 '
						onClick={toggleAccordion1}>
						<h3>What age groups do you cater to?</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen1 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 ease-in-out transition duration-150 text-slate-900'>
							<p>
							We provide classes for children, teenagers, and adults. Our programs are designed to accommodate different age groups and skill levels.
							</p>
						</div>
					)}
				</div>

				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8'
						onClick={toggleAccordion2}>
						<h3>What is the duration of your courses?</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen2 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 text-slate-900'>
							<p>
							Course durations vary depending on the program. Some are short-term, running for a few weeks, while others are long-term, spanning several months.
							</p>
						</div>
					)}
				</div>
				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8'
						onClick={toggleAccordion3}>
						<h3>What qualifications do your instructors have?</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen3 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 text-slate-900'>
							<p>
							Our instructors are experienced artists and educators with degrees in fine arts or related fields. They bring a wealth of knowledge and expertise to our classes.
							</p>
						</div>
					)}
				</div>
				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8'
						onClick={toggleAccordion4}>
						<h3>
						Are there any prerequisites for specific classes?
						</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen4 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 text-slate-900'>
							<p>
							Prerequisites vary depending on the class. Some advanced courses may require prior experience or completion of a prerequisite course. We outline these requirements in our course descriptions.
							</p>
						</div>
					)}
				</div>
				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8'
						onClick={toggleAccordion5}>
						<h3>
						Do you offer any discounts or scholarships?
						</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen5 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 text-slate-900'>
							<p>
							Yes, we offer discounts for early registration, sibling enrollment, and occasional scholarship opportunities for deserving students. Please inquire for current discount and scholarship availability.
							</p>
						</div>
					)}
				</div>
				<div className='accordion m-2 rounded-lg overflow-hidden font-semibold'>
					<div
						className='accordion-header flex justify-between items-center text-lg bg-blue-600 bg-opacity-70 text-white py-3 px-8'
						onClick={toggleAccordion6}>
						<h3>
						Are there opportunities for students to showcase their work in exhibitions or events?
						</h3>
						<span>{isOpen1 ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
					</div>
					{isOpen6 && (
						<div className='text-sm accordion-content bg-blue-200 py-3 px-8 text-slate-900'>
							<p>
							Yes, we regularly organize exhibitions and events to showcase our students&apos; work. It&apos;s a great way to celebrate their creativity and talent.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Faq;
