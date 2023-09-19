import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Heading from "../../../components/Heading/Heading";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_duzs3z4",
				"template_jak3zpi",
				form.current,
				"mxsl_yiq14hGUGo07"
			)
			.then(
				(result) => {
					console.log(result.text);
					toast("Email sent successfully!");
				},
				(error) => {
					console.log(error.text);
					toast("Email doesn's send");
				}
			);
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<section
			id='contact'
			className='relative contact mt-20 pb-32 pt-10 w-full mx-auto contact-bg'>
			<div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40'></div>
			<div
				className={`lg:px-32 md:px-16 px-0 relative top-[20px] text-center `}>
				<h2 className='italic tracking-wider text-gray-300'>
					Don&rsquo;t match your question with FAQ? Feel free to ask here
				</h2>
				<h2 className='text-2xl text-semibold tracking-wider uppercase p-3 border-b-2 border-gray-200 text-gray-200 rounded-md inline-flex'>
					Contact Us
				</h2>

				<div className='bg-black bg-opacity-50 sm:w-4/5 mx-auto mt-10 lg:px-20 sm:p-20 p-5'>
					<div>
						<form ref={form} onSubmit={sendEmail} className='md:text-left'>
							<div>
								<input
									type='text'
									name='user_name'
									placeholder='User Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='px-3 py-1 bg-white bg-opacity-50 placeholder-gray-700 border-2 border-gray-400 w-full text-white mb-3 focus:bg-opacity-0 focus:placeholder-gray-300'
								/>
							</div>

							<div>
								<input
									type='email'
									name='user_email'
									placeholder='User Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='px-3 py-1 bg-white bg-opacity-50 placeholder-gray-700 border-2 border-gray-400 w-full text-white mb-3 focus:bg-opacity-0 focus:placeholder-gray-300'
								/>
							</div>

							<div>
								<textarea
									name='message'
									placeholder='Write your message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									className='px-3 py-1 bg-white bg-opacity-50 placeholder-gray-700 border-2 border-gray-400 w-full text-white mb-3 focus:bg-opacity-0 focus:placeholder-gray-300'
								/>
							</div>
							<div>
								<input
									type='submit'
									value='Send'
									className='bg-blue-700 bg-opacity-70 w-full font-semibold p-1 hover:bg-opacity-90 cursor-pointer text-gray-300'
								/>
								<ToastContainer />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
