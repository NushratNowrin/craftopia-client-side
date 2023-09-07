import React, { useEffect, useRef, useState } from "react";
import counterBg from "../../../assets/countdownbg_3.png";
import giphy from "../../../assets/giphy.gif";
import Offer from "../../../assets/offer.png";
import fifty from "../../../assets/fifty.gif";
import "./CountDown.css";

const CountDown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const StartTimer = () =>{
        const countDownDate = new Date('December 30, 2024 00:00:00').getTime();
        interval = setInterval(() =>{
            const now = new Date().getTime();
            const difference = countDownDate - now;
            const monthRemain = (difference % (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor( monthRemain / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60))/(1000*60));
            const seconds = Math.floor((difference % (1000 * 60 ))/1000);

            if (difference<0){
                // stop timer
                clearInterval(interval.current)
            }
            else{
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds)
            }
        }, 1000)
    }

    // Component Did Mount
    useEffect(()=>{
        StartTimer();
        const clean = interval.current
        return() => {
            clearInterval(clean)
        }
    });

	return (
		<section className='my-20'>
			<div className='flex  items-center justify-center mb-10'>
				<img src={Offer} alt='' className='sm:w-52 w-40'/>

				<img src={fifty} alt='' className='sm:w-28 w-20' />
			</div>

			<div className=''>
				<div className=''>
					<img src={giphy} alt='' className='w-20 mx-auto' />
				</div>

				<div className='relative countdown-container flex justify-center items-center'>
					<div className='absolute top-20 sm:text-xl text-base font-semibold flex sm:flex-row flex-col sm:gap-2 justify-center items-center'>
						<p className=''>CountDown Started!!! </p>
						<p>Hurry Up!!</p>
					</div>
					<img
						src={counterBg}
						alt=''
						className='md:w-3/5 sm:w-4/5 w-full h-96'
					/>
                    {/* Countdown */}
				<section className='flex justify-center sm:w-3/6 mx-auto bg-black bg-opacity-50 text-gray-200 sm:px-10 px-5 py-5 lg:gap-10 sm:gap-5 gap-2 absolute bottom-16 '>
					<section className='count-section'>
						<p className='counter'>{timerDays}</p>
						<p  className="counter-tag">
							<small>Days</small>
						</p>
					</section>
					<span className='counter'>:</span>
					<section className='count-section'>
						<p className='counter'>{timerHours}</p>
						<p  className="counter-tag">
							<small>Hours</small>
						</p>
					</section>
					<span className='counter'>:</span>
					<section className='count-section'>
						<p className='counter'>{timerMinutes}</p>
						<p className="counter-tag">
							<small >Minutes</small>
						</p>
					</section>
					<span className='counter'>:</span>
					<section className='count-section'>
						<p className='counter'>{timerSeconds}</p>
						<p  className="counter-tag">
							<small>Second</small>
						</p>
					</section>
				</section>
				</div>
				
			</div>
		</section>
	);
};

export default CountDown;
