import React from "react";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = () => {
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		fetch("https://craftopia-server-side.vercel.app/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);
	const customStyles = {
		itemShapes: RoundedStar,
		activeFillColor: "#CD9003",
		inactiveFillColor: "#A1A1A1",
	};
	return (
		<div className='md:m-16 mb-16'>
			<div className='text-2xl font-semibold text-center mt-5'>
				Our Clients Feedback
			</div>

			<Swiper navigation={true} modules={[Navigation]} className='mySwiper '>
				{reviews.map((review) => (
					<SwiperSlide key={review._id}>
						<div className='flex gap-5 justify-center translate-y-20'>
                        <div className='text-4xl translate-y-16 text-amber-600'>
								<FaQuoteLeft></FaQuoteLeft>
							</div>
							<div>
                                <img
								src={review.image}
								className='w-40 h-40 rounded-full  border-black border-4'
								alt=''
							/>
                            </div>
							<div className='text-4xl translate-y-16 text-amber-600'>
								<FaQuoteRight></FaQuoteRight>
							</div>
						</div>
						<div className='text-center p-20 bg-black rounded-xl'>
                        <h3 className='text-amber-500 font-semibold uppercase mt-2'>{review.name}</h3>
							<div className='flex justify-center text-3xl my-5'>
                           
								<Rating
									style={{ maxWidth: 180 }}
									value={review.rating}
									readOnly
									itemStyles={customStyles}
								/>
							</div>
							
							<p className='text-sm text-white'>{review.details}</p>
							
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Feedback;
