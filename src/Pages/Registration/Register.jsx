import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form"

const Register = () => {
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordInputConfirm, setPasswordInputConfirm] = useState("");

    const {handleSubmit} = useForm();
    const formSubmit = data => {
        console.log(data)
    }

	const { user, createUser } = useContext(AuthContext);
	useTitle("Register");

	const togglePassword = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			return;
		}
		setPasswordType("password");
	};
	const togglePasswordConfirm = () => {
		if (passwordTypeConfirm === "password") {
			setPasswordTypeConfirm("text");
			return;
		}
		setPasswordTypeConfirm("password");
	};
	const handlePasswordChange = (evnt) => {
		setPasswordInput(evnt.target.value);
	};
	const handlePasswordChangeConfirm = (evnt) => {
		setPasswordInputConfirm(evnt.target.value);
	};
	const getFormData = (event) => {
		setSuccess("");
		setShowError("");
		event.preventDefault();
		const name = event.target.name.value;
		const email = event.target.email.value;
		const password = event.target.password.value;
		const photoURL = event.target.photoURL.value;
		const number = event.target.number.value;
		const address = event.target.address.value;

		console.log(
			`email: ${email}
			password: ${password}
			name: ${name}
			photoURL: ${photoURL}
            number: ${number}
            address: ${address}`
		);

		//create fireBase Auth
		createUser(email, password)
			.then((result) => {
				// Signed in
				const loggeduser = result.user;
				console.log(loggeduser);
				setShowError("");
				setSuccess("User Has been created successfully");
				event.target.reset();
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				setShowError(errorMessage);
			});

		// Password validation

		if (!/.{6}/.test(password)) {
			setShowError("Password need at least 6 character");
			return;
		}
	};

	return (
		<div className='w-50 p-10 bg-slate-200 text-center'>
			<div className='bg-slate-400 md:w-8/12 m-auto py-16 md:px-20 rounded mb-10'>
				<h4 className='text-2xl font-bold mb-6 text-black'>Please Register</h4>
				<form onSubmit={handleSubmit(formSubmit)}>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter Name'
						required
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter Email Address'
						required
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<div className='flex items-center justify-center'>
						<input
							type={passwordType}
							onChange={handlePasswordChange}
							value={passwordInput}
							name='password'
							id='password'
							placeholder='Enter Password'
							required
							className='py-1 w-3/5 md:w-2/6 px-3 rounded-l my-2'
						/>
						<span onClick={togglePassword}>
							{passwordType === "password" ? (
								<AiFillEye className='eyeIcon bg-white' />
							) : (
								<AiFillEyeInvisible className='eyeIcon bg-white' />
							)}
						</span>
					</div>
					<div className='flex items-center justify-center'>
						<input
							type={passwordTypeConfirm}
							onChange={handlePasswordChangeConfirm}
				
							name='confirm-password'
							id='confirm-password'
							placeholder='Re-type Password'
							required
							className='py-1 w-3/5 md:w-2/6 px-3 rounded-l my-2'
						/>
						<span onClick={togglePasswordConfirm}>
							{passwordTypeConfirm === "password" ? (
								<AiFillEye className='eyeIcon bg-white' />
							) : (
								<AiFillEyeInvisible className='eyeIcon bg-white' />
							)}
						</span>
					</div>

					<div className='my-3'>
						<input type='radio' name='gender' id='male' value='male' />
						<label htmlFor='male' className='mr-5'>
							Male
						</label>
						<input type='radio' name='gender' id='female' value='female' />
						<label htmlFor='female' className='mr-5'>
							Female
						</label>
						<input type='radio' name='gender' id='others' value='others' />
						<label htmlFor='others'>Others</label>
					</div>

					<input
						type='text'
						name='photoURL'
						id='photoURL'
						placeholder='Insert your Photo URL'
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<input
						type='number'
						name='number'
						id='number'
						placeholder='Phone No. (11 digit)'
						className='py-1 px-3 rounded my-2'
					/>
					<br />
					<input
						type='text'
						name='address'
						id='address'
						placeholder='Your address'
						className='py-1 px-3 rounded my-2'
					/>
					<div className='text-amber-700 font-bold'>{showError}</div>
					<div className='text-green-600 font-semibold'>{success}</div>
					<br></br>
					<div className=' h-10 mx-auto'>
						<input
							type='submit'
							value='Register'
							className=' bg-black px-5 py-2 font-bold text-white rounded-lg  hover:text-lg ease-in-out duration-300'
						/>
					</div>
				</form>
				<br></br>

				<div className='text-white'>
					Already have an account? Please{" "}
					<Link
						to='../login'
						className='font-semibold text-red-600 hover:text-green-700'>
						Login
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};

export default Register;
