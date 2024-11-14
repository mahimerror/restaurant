import { Swiper, SwiperSlide } from 'swiper/react';
import { MdPlayCircle } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';

import { FaSquareFull } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef, useState } from 'react';

import reviewimg from "../../assets/review.png"
import { RiDoubleQuotesL } from "react-icons/ri";

import rev1 from "../../assets/rev/rev1.png"
import rev2 from "../../assets/rev/rev2.png"
import rev3 from "../../assets/rev/rev3.png"



const Testimonials = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const swiperRef = useRef(null);

    // Function to go to the previous slide
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
            setIsPlaying(false);
        }
    };

    // Function to go to the next slide
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
            setIsPlaying(false);
        }
    };


    return (
        <div className="">
            <div className="w-11/12 mx-auto py-8 md:py-28">
                <div className="flex items-center justify-between mb-7 md:mb-16  gap-12">
                    <div className="left">
                        <p className="flex items-center gap-2 text-xl roboto font-bold text-reed"><FaSquareFull className="text-xs" /> Crispy, Every Bite Taste</p>
                        <h3 className="bebas font-bold text-6xl mt-4">What Some of my Customers Say</h3>
                    </div>

                    <div className="right hidden sm:block">
                        <div className="sm:flex gap-8">
                            <button className="w-12 h-12 rounded-full flex justify-center items-center hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)", }} onClick={handlePrev}>
                                <FaAngleLeft className="text-xl" />
                            </button>
                            <button className="w-12 h-12 rounded-full flex justify-center items-center  text-reed hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)" }} onClick={handleNext}>
                                <FaAngleRight className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="slider-container">
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: ['-120%', 0, -500],
                                },
                                next: {
                                    shadow: false,
                                    translate: ['120%', 0, -500],
                                },
                            }}
                            modules={[EffectCreative]}
                            ref={swiperRef}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                {/* Slide1 */}
                                <div className="flex flex-col-reverse lg:flex-row">
                                    <div className="left bg-ylw px-10 py-16 flex aspect-square lg:w-1/3">
                                        <RiDoubleQuotesL className='w-16' />
                                        <div className="mt-2 flex flex-col justify-between">
                                            <p>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <div className="">
                                                        <h5 className='bebas font-bold text-lg'>Khalid Al Dawsry</h5>
                                                        <p className='roboto text-sm'>Jeddah, Saudi</p>
                                                    </div>
                                                    <div className="py-4 border-b-4 border-reed">
                                                        <img src={reviewimg} alt="" />
                                                    </div>
                                                </div>
                                                <hr className='border-[#0A1425]' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="right lg:w-2/3 aspect-video">
                                        <div className="relative w-full">
                                            {/* Conditional rendering: Show thumbnail and button if not playing, else show video */}
                                            {!isPlaying ? (
                                                <div className="relative">
                                                    {/* Thumbnail */}
                                                    <img
                                                        src={rev1}
                                                        alt="Video Thumbnail"
                                                        className="aspect-video"
                                                    />
                                                    {/* Play Button */}
                                                    <button
                                                        onClick={handlePlay}
                                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                                                    >
                                                        <MdPlayCircle className='text-ylw text-6xl'/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="">
                                                    {/* Embedded YouTube Video */}
                                                    <iframe
                                                        src={`${"https://www.youtube.com/embed/6ACOmXNUEY4?si=r5YmZjH2fdJpF1Lh"}?autoplay=1`}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        className="aspect-video w-full"
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* Slide2 */}
                                <div className="flex flex-col-reverse lg:flex-row">
                                    <div className="left bg-ylw px-10 py-16 flex aspect-square lg:w-1/3">
                                        <RiDoubleQuotesL className='w-16' />
                                        <div className="mt-2 flex flex-col justify-between">
                                            <p>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <div className="">
                                                        <h5 className='bebas font-bold text-lg'>Khalid Al Dawsry</h5>
                                                        <p className='roboto text-sm'>Jeddah, Saudi</p>
                                                    </div>
                                                    <div className="py-4 border-b-4 border-reed">
                                                        <img src={reviewimg} alt="" />
                                                    </div>
                                                </div>
                                                <hr className='border-[#0A1425]' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="right lg:w-2/3 aspect-video">
                                        <div className="relative w-full">
                                            {/* Conditional rendering: Show thumbnail and button if not playing, else show video */}
                                            {!isPlaying ? (
                                                <div className="relative">
                                                    {/* Thumbnail */}
                                                    <img
                                                        src={rev2}
                                                        alt="Video Thumbnail"
                                                        className="aspect-video"
                                                    />
                                                    {/* Play Button */}
                                                    <button
                                                        onClick={handlePlay}
                                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                                                    >
                                                        <MdPlayCircle className='text-ylw text-6xl'/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="">
                                                    {/* Embedded YouTube Video */}
                                                    <iframe
                                                        src={`${"https://www.youtube.com/embed/5lWCwZ8fzmA?si=NUFMtFqy83Kk3HvY"}?autoplay=1`}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        className="aspect-video w-full"
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                                {/* Slide3 */}
                                <div className="flex flex-col-reverse lg:flex-row">
                                    <div className="left bg-ylw px-10 py-16 flex aspect-square lg:w-1/3">
                                        <RiDoubleQuotesL className='w-16' />
                                        <div className="mt-2 flex flex-col justify-between">
                                            <p>You can&apos;t go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <div className="">
                                                        <h5 className='bebas font-bold text-lg'>Khalid Al Dawsry</h5>
                                                        <p className='roboto text-sm'>Jeddah, Saudi</p>
                                                    </div>
                                                    <div className="py-4 border-b-4 border-reed">
                                                        <img src={reviewimg} alt="" />
                                                    </div>
                                                </div>
                                                <hr className='border-[#0A1425]' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="right lg:w-2/3 aspect-video">
                                        <div className="relative w-full">
                                            {/* Conditional rendering: Show thumbnail and button if not playing, else show video */}
                                            {!isPlaying ? (
                                                <div className="relative">
                                                    {/* Thumbnail */}
                                                    <img
                                                        src={rev3}
                                                        alt="Video Thumbnail"
                                                        className="aspect-video"
                                                    />
                                                    {/* Play Button */}
                                                    <button
                                                        onClick={handlePlay}
                                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                                                    >
                                                        <MdPlayCircle className='text-ylw text-6xl'/>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="">
                                                    {/* Embedded YouTube Video */}
                                                    <iframe
                                                        src={`${"https://www.youtube.com/embed/GkOlAgW2K4Q?si=C_1-o9e0AHD5_Teg"}?autoplay=1`}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        className="aspect-video w-full"
                                                    ></iframe>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="flex justify-center sm:hidden">
                    <div className="flex gap-8 mt-4">
                        <button className="w-12 h-12 rounded-full flex justify-center items-center hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)", }} onClick={handlePrev}>
                            <FaAngleLeft className="text-xl" />
                        </button>
                        <button className="w-12 h-12 rounded-full flex justify-center items-center  text-reed hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)" }} onClick={handleNext}>
                            <FaAngleRight className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;





