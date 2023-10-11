import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

import { FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';
import ActiveLink from "../Activelink/ActiveLink";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
        <div className='text-white footer p-20 footer-bg md:flex justify-between'>
            <div>
                <Link to='/'>
                    <img src={logo} className='w-44' alt='' />
                </Link>
            </div>
            <div>
                <div>
                    <p className='font-semibold text-lg text-red-500 my-5'>Craftopia.</p>
                    <br />
                    The great Art & Crafts <br /> trainning center, <br /> which broadend your <br/> creativity.
                </div>
            </div> 
            <div>
                <div className='font-semibold text-lg text-red-500 my-5 uppercase'>Contact info</div>
                <p><span className="text-yellow-300">Email:</span> princesspalette@gmail.com</p>
                <p><span className="text-yellow-300">Phone:</span> +088 01756 091365</p>
                <p><span className="text-yellow-300">Tel:</span> 02-9893333</p>
                
            </div>
            <div>
            <div className='font-semibold text-lg text-red-500 my-5 uppercase'>Address</div>
            <p> Navana Yusuf Infinity,<br /> Bir Uttam AK Khandakar Rd,<br /> Dhaka 1212</p>
            </div>
        </div>

        {/* Copyright */}
        <div className='text-white footer items-center py-4 md:px-20 px-10  bg-gray-900 md:flex justify-between'>
            <div className='items-center grid-flow-col'>
                
                <p className="mb-5">Copyright © 2023 - All right reserved</p>
            </div>
            <div className='flex gap-10 justify-center md:place-self-center md:justify-self-end'>
                <Link to ="/">
                    <FaTwitter />
                </Link>
                <Link to ="/">
                    <FaYoutube />
                </Link>
                <Link to ="/">
                    <FaFacebookF />
                </Link>
            </div>
        </div>
    </footer>
    );
};

export default Footer;