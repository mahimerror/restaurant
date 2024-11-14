import { FaSquareFull } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item1 from "../../assets/items/item1.png"
import item2 from "../../assets/items/item2.png"
import item3 from "../../assets/items/item3.png"
import item4 from "../../assets/items/item4.png"

const Popular = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickPause();
        sliderRef.slickNext();

    };
    const previous = () => {
        sliderRef.slickPause();
        sliderRef.slickPrev();
    };
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return (
        <div className="bg-[#FBF7F2]">            
            <div className="w-11/12 mx-auto py-8 md:py-28">
                <div className="flex items-center justify-between mb-7 md:mb-16  gap-12">
                    <div className="left">
                        <p className="flex items-center gap-2 md:text-xl roboto font-bold text-reed"><FaSquareFull className="text-xs" /> Crispy, Every Bite Taste</p>
                        <h3 className="bebas font-bold text-[40px] text-6xl mt-4">POPULAR FOOD ITEMS</h3>
                    </div>

                    <div className="right hidden sm:block">
                        <div className="sm:flex gap-8">
                            <button className="w-12 h-12 rounded-full flex justify-center items-center hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)", }} onClick={previous}>
                                <FaAngleLeft className="text-xl" />
                            </button>
                            <button className="w-12 h-12 rounded-full flex justify-center items-center  text-reed hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)" }} onClick={next}>
                                <FaAngleRight className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="slider-container">
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                            className="text-center"
                        >
                            <div key={1}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item1} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">vegetables burger</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                            <div key={2}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item2} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">Spacial Pizza</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                            <div key={3}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item3} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">Spacial French fries</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                            <div key={4}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item4} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">Cuisine Chicken</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                            <div key={5}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item3} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">vegetables salad</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                            <div key={6}>
                                <div className="flex flex-col justify-center items-center bg-white h-72 sm:mx-4">
                                    <img src={item2} alt="" className="h-32" />
                                    <hr className="border-2 border-reed w-14 my-6" />
                                    <p className="bebas text-2xl line leading-[36px]">korma</p>
                                    <p className="roboto leading-[32px]">Barbecue Italian cuisine pizza</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="flex justify-center sm:hidden">
                    <div className="flex gap-8 mt-4">
                        <button className="w-12 h-12 rounded-full flex justify-center items-center hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)", }} onClick={previous}>
                            <FaAngleLeft className="text-xl" />
                        </button>
                        <button className="w-12 h-12 rounded-full flex justify-center items-center  text-reed hover:text-white hover:bg-ylw" style={{ "box-shadow": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)" }} onClick={next}>
                            <FaAngleRight className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;