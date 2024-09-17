
import { useSwiper } from 'swiper/react';

export default function SlideNextButton({ index, children }: any) {
  const swiper = useSwiper();
	
  return (
    <button 
		// style={{position: "absolute", top: 0, zIndex: 100}}
		// onClick={() => swiper.activeIndex = index  +1}
		// onClick={() => console.log(index)}
		onClick={() => swiper.slideTo(4)}
	>
		{children}
    </button>
  );
}