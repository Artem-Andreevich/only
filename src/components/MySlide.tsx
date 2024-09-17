// some-inner-component.jsx
import { useSwiperSlide } from 'swiper/react';

export default function MySlide() {
  const swiperSlide = useSwiperSlide();

  return (
    // <button 
    //     style={{position: "absolute", top: 0, zIndex: 100}}
    //     onClick={() => swiper.slideToLoop(4)}
    // >
    {/* <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p> */}
  );
}