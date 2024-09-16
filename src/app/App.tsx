import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../scss/styles.scss';
import swiper from 'swiper';

// const listItems = ['first el', 'first el', 'first el']
const listItems = ['first el', 'first el', 'first el', 'first el', 'first el', 'first el']


export const App = () => { 
	const swiper = useSwiper();
		const startPos = 150
		const offsetAngle = 360 / listItems.length;
		// const rotateAngle = offsetAngle * i;
	return (
		<div className="app">
			<button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
			<Swiper
				slidesPerView='auto'
				navigation
				allowTouchMove={false} 
				loop={true}	
				// onSlideChangeTransitionStart={

				// }
			>
				{listItems.map( (el, i) => {
					// const startPos = 150
					// const offsetAngle = 360 / listItems.length;
					const rotateAngle = offsetAngle * i;
					return (
						<SwiperSlide
							key={i}
							style={{transform: `rotate(${rotateAngle - startPos}deg) translate(0, calc( (var(--circle-size) - (var(--circle-item-size) / 10) ) / 2)) rotate(${-rotateAngle + startPos}deg)`}}
						>
							<li className='list-item' >
								<span>{el}</span>
							</li>
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


