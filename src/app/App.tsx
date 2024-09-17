import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import SlideNextButton from '../components/SlideNextButton';

import 'swiper/css';
import 'swiper/css/navigation';
import '../scss/styles.scss';



const listItems = ['first 1', 'first 2', 'first 3', 'first 4', 'first 5', 'first 6']

export const App = () => { 

	const [start, setStart ] = useState(150)

	const offsetAngle = 360 / listItems.length;


	return (
		<div className="app">

			
			<Swiper
				slidesPerView={1}
				// slidesPerView={"auto"}
				loop={true}
				cssMode={true}
			>

				{listItems.map( (el, i) => {
					// let startPos = 150
					// const offsetAngle = 360 / listItems.length;
					const rotateAngle = offsetAngle * i;
					const sum = rotateAngle - start
					return (
						<SwiperSlide 
							// onClick={() => {
							// 	sum < 0 ?
							// 		console.log(sum + (-offsetAngle * (i + 1))) :
							// 		console.log(sum - (offsetAngle * (i + 1))) 
							// 	// console.log(sum)

							// 	start < 0 ? 
							// 		setStart(prev => prev = sum + (-offsetAngle * (i + 1))) :
							// 		setStart(prev => prev = sum - (offsetAngle * (i + 1))) 

							// }}
							key={i}
							style={{transform: `rotate(${rotateAngle - start}deg) translate(0, calc( (var(--circle-size) - (var(--circle-item-size) / 10) ) / 2)) rotate(${-rotateAngle + start}deg)`}}
							>
							<SlideNextButton index={i}>	
								<li className='list-item'>
									<span>{el}</span>
								</li>
							</SlideNextButton>
						</SwiperSlide>
				
					)
				})}
			</Swiper>
			
			{/* <ul className='circle'>
				{listItems.map( (el, i) => {
					const startPos = 150
					const offsetAngle = 360 / listItems.length;
					const rotateAngle = offsetAngle * i;
					return (
						<li 
							className='list-item' 
							style={{transform: `rotate(${rotateAngle - startPos}deg) translate(0, calc( (var(--circle-size) - (var(--circle-item-size) / 10) ) / 2)) rotate(${-rotateAngle + startPos}deg)`}}
						>
							<span>{el}</span>
						</li>
					)
				})}
			</ul> */}
		</div>
	);
}


