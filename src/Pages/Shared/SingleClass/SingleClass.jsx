import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import './SingleClass.css'

const SingleClass = ({ classs }) => {
	const { image, name, instructor, seats, price, students, _id } = classs;
	const [selcted, setSelcted] = useState(false);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const handleSelectClass = (classs) => {
		// console.log(classs);
		if (user && user.email) {
			const classItem = {
				selectedClassID: _id,
				image,
				name,
				instructor,
				seats,
				price,
				students,
				email: user.email,
			};

			fetch("https://craftopia-server-side.vercel.app/selectedClasses", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(classItem),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.insertedId) {
						Swal.fire({
							title: "Course is selected successfully",
							icon: "success",
							confirmButtonText: false,
							timer: 1500,
						});
					}
				
				});
				setSelcted(true)
				
		} else {
			Swal.fire({
				title: "Please Login First!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now!",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/login", { state: { from: location } });
				}
			});
		}
		
	};
	return (
		<div
			className={` ${
				classs.seats == 0 ? "bg-red-300" : "bg-slate-300"
			}  relative rounded-3xl hover:text-white class-div`}>
			<div className=' h-60  flex-col items-center justify-center'>
				<img className='h-full object-cover w-full rounded-t-3xl shadow-lg' src={image} />
				<span className='absolute top-2 right-2 border border-white z-40 bg-red-600 text-white font-semibold text-sm px-3 py-1.5 rounded-3xl'>
					Student : {students}
				</span>
				<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-0 rounded-3xl z-20 hover:bg-opacity-60 opacity-100 transition-opacity'></div>
			</div>
			<div className='relative rounded-b-3xl hover:bg-black hover:bg-opacity-60 z-30 text-center py-5 font-semibold'>
				<h2 className='pt-2 pb-3 mx-5 border-b border-slate-400 text-2xl text-blue-600'>
					{name}
				</h2>
				<p className='py-2 mx-5 border-b border-slate-400'>{instructor}</p>
				<p className='py-2 mx-5 border-b border-slate-400'>
					Available Seat: {seats}
				</p>
				<div className='flex justify-between py-2 mx-5 items-center'>
					<p>BDT {price}</p>
					{(classs.seats == 0 || selcted)  ? (
						<div
							className='bg-slate-500 opacity-50 text-white uppercase text-sm px-5 py-2 border rounded-xl disabled'
							>
							Select course
						</div>
					) : (
						<button
							onClick={() => handleSelectClass(classs)}
							className='uppercase text-sm px-5 py-2 border border-blue-600 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl shadow-button'>
							Select course
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleClass;
