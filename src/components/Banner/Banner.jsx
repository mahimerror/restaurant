import "./banner.css"
import bannerimg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className="text-white py-8">
            <div className="w-11/12 mx-auto md:relative">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="left md:w-1/2">
                        <div className="md:absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2">
                            <h2 className="bebas font-bold text-5xl md:text-8xl lg:text-9xl md:bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)]">Taste the authentic <br className="hidden md:block"/> Saudi cuisine</h2>

                            <p className="roboto text- xl md:text-2xl mt-4 mb-9">Among the best Saudi chefs in the world, serving <br className="hidden md:block"/> you something beyond flavor.</p>

                            <button className="font-bold px-6 py-3 transition duration-500 ease-in-out bg-ylw text-black hover:text-ylw hover:bg-transparent hover:outline hover:outline-4 hover:outline-ylw hover:outline-offset-[-4px] roboto uppercase">
                                Explore Menu
                            </button>
                        </div>

                    </div>

                    <div className="right md:w-1/2">
                        <img src={bannerimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;