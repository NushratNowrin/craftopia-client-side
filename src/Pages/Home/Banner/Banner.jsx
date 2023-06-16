import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import banner1 from "../../../assets/Home/Banner/banner-1.jpg"
import banner2 from "../../../assets/Home/Banner/banner-2.jpg"
import banner3 from "../../../assets/Home/Banner/banner-3.jpg"
import banner4 from "../../../assets/Home/Banner/banner-4.jpg"
import banner5 from "../../../assets/Home/Banner/banner-5.jpg"
import './Banner.css'
import BannerText from "./BannerText";

const Banner = () => {
	return (
		<div className="slider-div">
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={6000}>
				<div data-src={banner1}>
                    <BannerText heading='Join a Community of Craftopia' text='“Arts and Crafts” is a catchall phrase for creative practices that fall into the category of either art or craft.'></BannerText>
                </div>
				<div data-src={banner2}>
                <BannerText heading='Experience the power of your Skills' text='Anything that can be considered decorative design or handicraft falls under the umbrella of art and craft.'></BannerText>
                </div>
				<div data-src={banner3}>
                <BannerText heading='Discover the magic of art' text='Art and craft activities give kids a sense of achievement and allow them to take pride in their work which builds confidence.'></BannerText>
                </div>
				<div data-src={banner4}>
                <BannerText heading='Explore your hidden beauty' text="Making art is a great, safe way to discover that it's okay to make mistakes and that getting things 'wrong' can lead you to a whole new idea."></BannerText>
                </div>
				<div data-src={banner5}>
                <BannerText heading='Be Proud to be a Craftopian' text='The biggest Art and Craft trainning center with experienced instructor, that can make you proud'></BannerText>
                </div>
			</AutoplaySlider>
		</div>
	);
};

export default Banner;
