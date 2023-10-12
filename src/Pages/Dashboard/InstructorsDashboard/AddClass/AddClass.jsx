import React, { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const AddClass = () => {
	const { user, loading } = useContext(AuthContext);
	const handleform = (event) => {
		event.preventDefault();
		const form = event.target;
        const name = form.name.value;
		const image = form.image.value;
		const instructorName = form.instructorName.value;
		const email = form.email.value;
		const seats = form.seats.value;
		const price = form.price.value;
		const course = {
			name,
            image,
			instructorName,
			email,
            seats,
			price,
		};
	};
	return (
		<div>
			<div>
				<div className='hero-content flex-col lg:flex-column'>
					<div className='text-left font-bold text-xl'>Add a Course</div>
					<div className='card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100'>
						<form className='card-body' onSubmit={handleform}>
                        <div className='form-control'>
								
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Name of the Course'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								
								<input
									type='text'
									name='image'
									id='image'
									placeholder='Course Image URL'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								
								<input
									type='text'
									name='instructorName'
									id='instructorName'
									placeholder='Name of the Instructor'
									className='input input-bordered'
									defaultValue={user?.displayName}
									readOnly
								/>
							</div>
							<div className='form-control'>
								
								<input
									type='text'
									name='email'
									id='email'
									placeholder='email'
									className='input input-bordered'
									defaultValue={user?.email}
									readOnly
								/>
							</div>
							<div className='form-control'>
								
								<input
									type='number'
									name='seats'
									id='seats'
									min='0'
									placeholder='Available Seats'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control'>
								
								<input
									type='number'
									name='price'
									id='price'
									min='0'
									placeholder='Price in BDT'
									className='input input-bordered'
									required
								/>
							</div>
							<div className='form-control mt-6'>
								<button className='btn btn-primary'>Add</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddClass;
