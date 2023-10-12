import React, { useState } from "react";

const MySingleClass = ({ course }) => {
    const [openComment, setOpenComment] = useState(false);
	const { name, image, seats, price, students, status } = course;
    const toggleOpenComment = () =>{
        setOpenComment(!openComment)
    }
	return (
		<div>
			<div
				className='bg-slate-300
		 relative rounded-3xl hover:text-white'>
				<div className='  flex-col items-center justify-center'>
					<img className='rounded-t-3xl shadow-lg h-48' src={image} />
					<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl z-20 hover:bg-opacity-60 opacity-100 transition-opacity'></div>
				</div>
				<div className='relative rounded-b-3xl hover:bg-black hover:bg-opacity-60 z-30 text-center py-2 font-semibold'>
					<h2 className='py-1 mx-5 border-b border-slate-400 text-xl text-blue-600'>
						{name}
					</h2>
					<p className='py-1 mx-5 text-sm border-b border-slate-400'>
						Available Seat: {seats}
					</p>
					<p className='py-1 mx-5 text-sm border-b border-slate-400'>
						Available Seat: {students}
					</p>
					<p className='py-1 mx-5 text-sm text-red-500 border-b border-slate-400'>
						BDT {price}
					</p>
					<div className='flex justify-center gap-5 py-2 mx-3 items-center h-16'>
						<button
							className={`text-sm font-semibold px-4 py-2 border ${
								status == "Approved" ? "bg-green-700" : ""
							}
                            ${
															status == "Declined"
																? "bg-red-700"
																: "bg-blue-700"
														} text-white  rounded-xl tracking-wider flex items-center gap-1`}>
							{status}
						</button>
						{course.comment ? (
							<button className='relative text-sm font-semibold px-4 py-2 border bg-blue-600 text-white  rounded-xl tracking-wider hover:-translate-y-1 hover:scale-100 hover:bg-blue-800 duration-300 flex items-center gap-1' onClick={toggleOpenComment}>
								Feedback
							</button>
						) : (
							""
						)}
                        <div className={`${openComment ? 'inline-block' : 'hidden'} absolute bottom-20 w-60 p-10 bg-gray-200 shadow-xl text-sm text-black`}>
                            {course?.comment}
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySingleClass;
