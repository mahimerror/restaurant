import "./banner.css"
import bannerimg from "../../assets/banner.png"
import des7 from "../../assets/design/des7.png"
import des8 from "../../assets/design/des8.png"

const Banner = () => {
    return (
        <div className="text-white pb-8 md:pb-28 pt-24 md:pt-44">
            <div className="container w-11/12 mx-auto relative">
                <div className="flex flex-col md:flex-row gap-12">

                    <div className="left md:w-1/2">
                        <div className="md:absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2">
                            <h2 className="bebas font-bold text-5xl md:text-8xl lg:text-9xl md:bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)] pl-0 p-7">Taste the authentic <br className="hidden md:block" /> Saudi cuisine</h2>

                            <p className="roboto text-xl md:text-2xl mb-8 md:mb-9">Among the best Saudi chefs in the world, serving <br className="hidden md:block" /> you something beyond flavor.</p>

                            <button className="font-bold px-6 py-3 transition duration-500 ease-in-out bg-ylw text-black hover:text-ylw hover:bg-transparent hover:outline hover:outline-4 hover:outline-ylw hover:outline-offset-[-4px] roboto uppercase">
                                Explore Menu
                            </button>
                        </div>

                    </div>

                    <div className="right md:w-1/2 flex justify-end">
                        <img src={bannerimg} alt="" className="min-w-full"/>
                            <div className="absolute top-80 md:top-[-36px] md:right-[-28px] z-[-1]"><img src={des7} alt="" /></div>
                            <div className="absolute bottom-1 md:bottom-[-20px] right-1 md:right-[-60px]"><img src={des8} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px]"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;