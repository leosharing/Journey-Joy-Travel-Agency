import React from 'react'
import { Image } from '../components/img/Image'
import { FaRegCirclePlay } from "react-icons/fa6";

const Index = () => {
	return (
		<div className="bg-primary">
			<div className='' style={{ background: `url(${Image.Mainviual}) no-repeat center`, backgroundSize: "cover" }}>
				<div className="inner-wrap max-w-1240px my-0 mx-auto">
					<div className="mainvisual-content h-[100vh] flex flex-col justify-center items-center text-white font-Roboto-Slab">
						<p className="text-9xl font-bold">Time to travel</p>
						<p className="text-2xl mt-4">Your Passport to Adventure. Embark on Extraordinary Journeys with Us.</p>
					</div>
				</div>
			</div>
			<div className="inner-wrap max-w-1240px my-0 mx-auto">
				<div>
					<div className='text-white mb-12'>
						<h1 className="text-6xl mb-5 font-bold font-Roboto-Slab">Popular tour</h1>
						<p className="text-xl">Your Gateway to Unforgettable Journeys. Immerse yourself in our curated selection of top-rated adventures, where every destination tells a story and every experience is a chapter waiting to be written. At Popular Tours, we redefine travel by offering you the most sought-after destinations and captivating experiences. Let the allure of our popular tours be your guide, as we invite you to discover the world's wonders in style. Unearth extraordinary landscapes, delve into diverse cultures, and create lasting memories with Popular Tours – where popularity meets unparalleled exploration.</p>
					</div>
					<div className="flex gap-4 mb-24">
						<img className='block hover:scale-110 transition-all duration-300 ease-linear' src={Image.Img1} alt="City" />
						<img className='block hover:scale-110 transition-all duration-300 ease-linear' src={Image.Img2} alt="City" />
						<img className='block hover:scale-110 transition-all duration-300 ease-linear' src={Image.Img3} alt="City" />
						<img className='block hover:scale-110 transition-all duration-300 ease-linear' src={Image.Img4} alt="City" />
					</div>
					{/* <div className='text-white'>
						<p className='text-6xl font-Roboto-Slab w-2/3 mb-20'>DISCOVER THE WORLD IN NEW WAY</p>
						<div className="icon flex items-center mb-20">
							<FaRegCirclePlay className='size-20 mr-6' />
							<p className='text-3xl uppercase'>Watch The video</p>
						</div>
						<p className='w-[420px] text-justify'>At the crossroads of exploration and innovation, our mission is to redefine your travel experience. With a fresh perspective and a passion for discovery, we invite you to embark on a journey like never before. Uncover hidden gems, embrace unique cultures, and traverse breathtaking landscapes with us. Discover the world anew, where every moment is a revelation, and every destination is a canvas for your personal exploration. </p>
					</div> */}
					<div className='video-and-text-wrapper flex space-x-10'>
						<div className='text-white flex-1'>
							<p className='text-6xl font-Roboto-Slab w-2/3 mb-20'>DISCOVER THE WORLD IN NEW WAY</p>
							<div className="icon flex items-center mb-20">
								<FaRegCirclePlay className='size-20 mr-6' />
								<p className='text-3xl uppercase'>Watch The video</p>
							</div>
							<p className='w-[420px] text-justify'>At the crossroads of exploration and innovation, our mission is to redefine your travel experience. With a fresh perspective and a passion for discovery, we invite you to embark on a journey like never before. Uncover hidden gems, embrace unique cultures, and traverse breathtaking landscapes with us. Discover the world anew, where every moment is a revelation, and every destination is a canvas for your personal exploration. </p>
						</div>
						<div className='flex-2 grid grid-cols-3 grid-rows-3 gap-2'>
							<div className="video-box w-full h-full"></div>
							<div className="video-box w-full h-full"></div>
							<div className="video-box w-full h-full">
								<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/ztgovawwosY?si=BwMPZ4MnuECrFQHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<div className="video-box w-full h-full"></div>
							<div className="video-box w-full h-full">
								<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/uYFtWVv5F3E?si=fdySg0q7MENY-F1F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<div className="video-box w-full h-full">
								<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/WZrUfvj0HUE?si=FzY-cq35suSZvwYS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<div className="video-box w-full h-full">
								<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/wkVmSdzPLoQ?si=N7CvuhIje0oxuh8V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<div className="video-box w-full h-full">
								<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/r-iYbSqdcmI?si=E1gYP_7xQFecNeuy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
							<div className="video-box w-full h-full">
							<iframe className="video-box w-full h-full" src="https://www.youtube.com/embed/NlPbdl5ahwg?si=Y5g7kGBj-TyFi3Mv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
							</div>


						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Index


// pages/HomePage.jsx
// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="container mx-auto">
//       <header className="text-center py-10">
//         <h1 className="text-4xl font-bold">Welcome to our Traveling Website</h1>
//         <p className="text-lg mt-4">Explore the world with us!</p>
//       </header>
//       <main>
//         {/* Add your main content here */}
//         <p className="text-xl">Discover amazing destinations...</p>
//         <p className="text-xl">Book your next adventure...</p>
//       </main>
//       <footer className="text-center py-6">
//         <p>&copy; 2024 Traveling Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
