import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.theme.default.css';

const options = {
	items: 3,
	nav: true,
	loop: true,
	autoplay: true,
	stagePadding: 200 
};

export default function() {
	return (
		<div className="flex flex-wrap mb-12 py-40">
			<div className="container mx-auto pb-16">
				<div className="w-1/2">
					<h2 className="pb-6">
						 Check out some of our work 	
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="w-full pt-8">
					<button className="btn btn-primary">See more work</button>
				</div>
			</div>
			<div className="w-full">
				<OwlCarousel options={options} className="flex flex-wrap">
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
					<div className="w-full block bg-red-100"><img src="https://penji.co/wp-content/uploads/2019/09/wine-500x500.jpg" /></div>
				</OwlCarousel>
			</div>
			{/*
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/1545448/screenshots/4803348/pod.png" />	
				</div>
			</div>
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/6921/screenshots/7038279/media/8af0ee9d9948ee88e43039cf7eb7f1ba.png" />	
				</div>
			</div>
			<div className="w-1/3 px-6">
				<div className="shadow-lg border rounded-md">
					<img src="https://cdn.dribbble.com/users/1545448/screenshots/4035937/canvas_ad.png" />	
				</div>
			</div>
			*/}
		</div>
	);
};
