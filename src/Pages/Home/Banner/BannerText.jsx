import React from 'react';
import { Link } from 'react-router-dom';

const BannerText = ({heading, text}) => {
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center text-center text-white md:px-60 px-3">
                        <h1 className="lg:text-4xl sm:text-2xl text-xl font-semibold">{heading}</h1>
                        <p className="lg:text-lg sm:text-md text-sm md:my-8 my-3 text-center ">{text}</p>
                        <Link to='/classes' className="px-8 py-3 bg-red-700 hover:bg-red-900 uppercase rounded-lg text-sm font-semibold">Join Today</Link>
                    </div>
    );
};

export default BannerText;