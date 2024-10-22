import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../src/css/swiper.css';

import { Navigation } from 'swiper/modules';

export default function SwiperSection() {
    return (
        <>
            <div className="container mx-auto px-16 md:px-0 my-60 md:mt-80">
                <p className='mb-8'>選擇時段</p>
                <div className=" bg-neutral-0 shadow-md rounded-8">

                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper rounded-8"
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            667: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="flex flex-wrap w-full justify-center text-neutral-50">
                                <p className='text-20 font-semibold w-full text-neutral-800 px-16 pt-32'>早</p>
                                <div className="container flex flex-wrap p-40 md:px-16 gap-24 justify-center text-nowrap">
                                    <Link to='/TimeChosen'>
                                        <button type="button" className='btn-brand'>Target</button>
                                    </Link>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-wrap w-full justify-center text-neutral-50">
                                <p className='text-20 font-semibold w-full text-neutral-800 px-16 pt-32'>中</p>
                                <div className="container flex flex-wrap p-40 md:px-16 gap-24 justify-center text-nowrap">
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                    <button type="button" className='btn-brand'>09：30</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
