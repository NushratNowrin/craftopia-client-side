import React, { useState } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import "../Login/Login.css";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup.object({
	name: yup.string().required(),
	email: yup.string().required().email("Please use a valid email"),
    password: yup.string().min(6).required().matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/, "need at least one uppercase and special character"),
    confirm_password: yup.string().oneOf([yup.ref("password")],"Password must be matched").required(),
	number: yup.string().matches(/^(?:\+88|88)?(01[3-9]\d{8})$/, "Please use a valid phone number"),
});

const Register = () => {
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");
	const [passwordInput, setPasswordInput] = useState("");
	const [passwordInputConfirm, setPasswordInputConfirm] = useState("");
    const { user, createUser } = useContext(AuthContext);
    useTitle("Register");
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const formSubmit = (data) => {
        setSuccess("");
		setShowError("");
		console.log(data);
        createUser(data.email, data.password)
        
        .then((result) => {
            const loggeduser = result.user;
            console.log(loggeduser);
            setShowError("");
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'User has been created Successfully',
                showConfirmButton: false,
                timer: 1500
              });
    
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setShowError(errorMessage);
        });
	};

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

	return (
		<div className='w-50 p-10 text-center'>
			<div className='bg-slate-200 md:w-8/12 m-auto py-16 md:px-20 rounded mb-10'>
				<h4 className='text-2xl font-bold mb-6 text-black'>Please Register</h4>
				<form onSubmit={handleSubmit(formSubmit)}>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Enter Name'
						className='py-1 px-3 rounded my-2'
						{...register("name")}
					/>
					<p className='text-red-600 text-sm'>{errors.name?.message}</p>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Enter Email Address'
						className='py-1 px-3 rounded my-2'
						{...register("email")}
					/>
					<p className='text-red-600 text-sm'>{errors.email?.message}</p>
					<div className='flex items-center justify-center'>
						<input
							type={passwordType}
							onChange={handlePasswordChange}
							name='password'
							id='password'
							placeholder='Enter Password'
							className='py-1 w-3/5 md:w-2/6 px-3 rounded-l my-2'
							{...register("password")}
						/>
						<span onClick={togglePassword}>
							{passwordType === "password" ? (
								<AiFillEye className='eyeIcon bg-white' />
							) : (
								<AiFillEyeInvisible className='eyeIcon bg-white' />
							)}
						</span>
					</div>
                    <p className='text-red-600 text-sm'>{errors.password?.message}</p>
					<div className='flex items-center justify-center'>
						<input
							type={passwordTypeConfirm}
							onChange={handlePasswordChangeConfirm}
							name='confirm_password'
							id='confirm_password'
							placeholder='Re-type Password'
							className='py-1 w-3/5 md:w-2/6 px-3 rounded-l my-2'
							{...register("confirm_password")}
						/>
						<span onClick={togglePasswordConfirm}>
							{passwordTypeConfirm === "password" ? (
								<AiFillEye className='eyeIcon bg-white' />
							) : (
								<AiFillEyeInvisible className='eyeIcon bg-white' />
							)}
						</span>
					</div>
                    <p className='text-red-600 text-sm'>{errors.confirm_password?.message}</p>

					<div className='my-3'>
						<input
							type='radio'
							name='gender'
							id='male'
							value='male'
							{...register("male")}
						/>
						<label htmlFor='male' className='mr-5'>
							Male
						</label>
						<input
							type='radio'
							name='gender'
							id='female'
							value='female'
							{...register("female")}
						/>
						<label htmlFor='female' className='mr-5'>
							Female
						</label>
						<input
							type='radio'
							name='gender'
							id='others'
							value='others'
							{...register("others")}
						/>
						<label htmlFor='others'>Others</label>
					</div>

					<input
						type='text'
						name='photoURL'
						id='photoURL'
						placeholder='Insert your Photo URL'
						className='py-1 px-3 rounded my-2'
						{...register("photoURL")}
					/>
					<br />
					<input
						type='text'
						name='number'
						id='number'
						placeholder='Phone Number'
						className='py-1 px-3 rounded my-2'
						{...register("number")}
					/>

					<p className='text-red-600 text-sm'>{errors.number?.message}</p>
					<input
						type='text'
						name='address'
						id='address'
						placeholder='Your address'
						className='py-1 px-3 rounded my-2'
						{...register("address")}
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

				<div>
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
