import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
const SelectedClass = ({ mySelectedClass }) => {
	const [mySelectedClasses, setMySelectedClasses] = useState(mySelectedClass);
	const handleDelete = (_id) => {
		fetch(`https://craftopia-server-side.vercel.app/selectedClasses/${_id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => 
			{
				if (data.deletedCount > 0) {
					Swal.fire({
						title: "Are you sure?",
						text: "You won't be able to revert this!",
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes, delete it!",
					}).then((result) => {
						if(result.isDismissed){
                            setMySelectedClasses(mySelectedClasses)
                        }
						else if (result.isConfirmed) {
							Swal.fire("Deleted!", "Your file has been deleted.", "success");
							const remaining = mySelectedClass.filter(
								(SelectedClass) => SelectedClass._id !== _id
							);
							setMySelectedClasses(remaining);
						}
                        
					});
				}
			});
	};
	const {
		_id,
		selectedClassID,
		image,
		name,
		instructor,
		seats,
		price,
		students,
		email,
	} = mySelectedClass;
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
						{instructor}
					</p>
					<p className='py-1 mx-5 text-sm border-b border-slate-400'>
						Available Seat: {seats}
					</p>
					<p className='py-1 mx-5 text-sm text-red-500 border-b border-slate-400'>
						BDT {price}
					</p>
					<div className='flex justify-between py-2 mx-3 items-center h-16'>
						<button
							onClick={() => handleDelete(_id)}
							className='uppercase text-sm font-semibold px-4 py-2 border bg-red-500 text-white  rounded-xl tracking-wider hover:-translate-y-1 hover:scale-110 hover:bg-red-700 hover:tracking-widest duration-300 flex items-center gap-1'>
							<AiFillDelete />
							Delete
						</button>
						<button className='uppercase text-sm font-semibold px-4 py-2 border bg-blue-600 text-white  rounded-xl tracking-wider hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:tracking-widest duration-300 flex items-center gap-1'>
							<TbCurrencyTaka />
							Pay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SelectedClass;
