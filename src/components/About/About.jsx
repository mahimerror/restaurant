import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import icon1 from "../../assets/icons/icon1.png"
import icon2 from "../../assets/icons/icon2.png"
import icon3 from "../../assets/icons/icon3.png"
import des5 from "../../assets/design/des5.png"
import des6 from "../../assets/design/des6.png"

import './about.css'

const About = () => {
    const [activeButton, setActiveButton] = useState("About");
    const [content, setContent] = useState({
        title: "Exceptional Culinary Experience and Delicious Food",
        description: "Indulge in a dining experience where every dish is crafted with care, using the finest ingredients to deliver bold, unforgettable flavors. From appetizers to desserts, each course is a celebration of culinary artistry designed to delight your palate."
    });

    const contents = [
        {
            title: "Exceptional Culinary Experience and Delicious Food",
            description: "Indulge in a dining experience where every dish is crafted with care, using the finest ingredients to deliver bold, unforgettable flavors. From appetizers to desserts, each course is a celebration of culinary artistry designed to delight your palate."
        },
        {
            title: "Unforgettable Culinary Experience",
            description: "Delight in a unique blend of flavors and textures crafted from the finest ingredients, all within a warm and inviting ambiance that makes every meal memorable."
        },
        {
            title: "Get in Touch",
            description: "We'd love to hear from you! Whether you have a question, feedback, or want to make a reservation, feel free to reach out to us via phone, email, or by visiting us in person."
        }
    ]


    return (
        <div className="relative">
            <div className="hidden md:block">
                <div className="absolute bottom-24 right-0 z-[-1]"><img src={des5} alt="" /></div>
            </div>


            <div className="w-11/12 mx-auto py-8 md:py-28">
                <div className="flex flex-col lg:flex-row gap-y-8 gap-x-20 mb-12 md:mb-16">
                    <div className="left lg:w-1/2 about-bg min-h-[246px] relative">
                        <div className="absolute w-2/5 top-7 left-7"><img src={des6} alt="" /></div>
                    </div>

                    <div className="right lg:w-1/2 lg:min-h-[450px]">
                        <div className="">
                            <div className="roboto font-medium border-b-2 border-reed flex gap-4">
                                <button
                                    className={`px-4 py-2 ${activeButton === "About" && "bg-reed text-white"}`}
                                    onClick={() => { setActiveButton("About"); setContent(contents[0]) }}
                                >
                                    About
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeButton === "Experience" && "bg-reed text-white"}`}
                                    onClick={() => { setActiveButton("Experience"); setContent(contents[1]) }}
                                >
                                    Experience
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeButton === "Contact" && "bg-reed text-white"}`}
                                    onClick={() => { setActiveButton("Contact"); setContent(contents[2]) }}
                                >
                                    Contact
                                </button>
                            </div>

                            <div className="mt-6 mb-8 md:my-8">
                                <h3 className="bebas font-bold text-5xl md:text-6xl">{content.title}</h3>
                                <p className="roboto mt-3 md:mt-4">{content.description}</p>
                            </div>

                            <div className="flex items-center gap-8">
                                <button className="font-bold px-6 py-3 transition duration-500 ease-in-out bg-ylw text-black hover:text-reed hover:bg-transparent hover:outline hover:outline-4 hover:outline-ylw hover:outline-offset-[-4px] roboto uppercase">
                                    About More
                                </button>
                                <a href="tel:+883426739485">
                                    <button className="font-bold roboto flex items-center gap-2">
                                        <FiPhoneCall className="text-xl text-reed" /> +88 3426 739 485
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8">
                    <div className="card flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ boxShadow: '0px 7px 16px 0px rgba(0, 0, 0, 0.1)', }}>
                            <img src={icon1} alt="" className="" />
                        </div>

                        <div className="">
                            <h4 className="bebas font-semibold text-2xl">fast delivery</h4>
                            <p className="roboto">Within 30 minutes</p>
                        </div>
                    </div>

                    <div className="card flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ boxShadow: '0px 7px 16px 0px rgba(0, 0, 0, 0.1)', }}>
                            <img src={icon2} alt="" className="" />
                        </div>

                        <div className="">
                            <h4 className="bebas font-semibold text-2xl">absolute dining</h4>
                            <p className="roboto">Best buffet restaurant</p>
                        </div>
                    </div>

                    <div className="card flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full flex justify-center items-center" style={{ boxShadow: '0px 7px 16px 0px rgba(0, 0, 0, 0.1)', }}>
                            <img src={icon3} alt="" className="" />
                        </div>

                        <div className="">
                            <h4 className="bebas font-semibold text-2xl">pickup delivery</h4>
                            <p className="roboto">Grab your food order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
