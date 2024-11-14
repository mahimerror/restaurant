import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { IoMdMenu } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navToogle, setNavToogle] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 10); // Change background after scrolling 50px
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="!fixed !top-0 !z-20 !w-full">
            <div className={`text-white transition-colors duration-300 z-20 ${isScrolled ? "bg-reed" : "bg-transparent"}`}>
                <nav className="container w-11/12 mx-auto py-6">
                    <div className="flex gap-5 justify-between items-center">

                        <div className="start-nav flex items-center gap-12">
                            <div className="logo flex items-center gap-2">
                                <Link to="/"><button>
                                    <img src={logo} className="w-9 h-9" alt="Oribo" />
                                </button></Link>

                                <h1 className="poppins text-2xl">Restaurant</h1>
                            </div>

                            <div className="mid-nav hidden md:block raleway font-medium">
                                <ul className="flex gap-8">
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Home</button></NavLink>
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>About</button></NavLink>
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Portfolio</button></NavLink>
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Clients</button></NavLink>
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Blog</button></NavLink>
                                    <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Contact</button></NavLink>
                                </ul>
                            </div>
                        </div>

                        <div className="end-nav">
                            <div className="hidden md:block">
                                <button className="font-bold px-6 py-3 transition duration-500 ease-in-out bg-ylw text-black hover:text-ylw hover:bg-transparent hover:outline hover:outline-4 hover:outline-ylw hover:outline-offset-[-4px] roboto uppercase">
                                    Book a table
                                </button>
                            </div>

                            {/* Hidden item on large screen */}
                            <div className="md:hidden text-3xl">
                                <div className="flex items-center justify-center w-10 h-10">
                                    <button onClick={() => setNavToogle(!navToogle)}>
                                        {
                                            navToogle ? <RiCloseLargeLine /> : <IoMdMenu />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>


                {
                    /* Toogle menu for small screen */

                    navToogle && <div className="monNav md:hidden w-11/12 mx-auto py-5 bg-reed p-8">
                        <div className="font-semibold">
                            <ul className="">
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Home</button></NavLink>
                                <hr className="my-3" />
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>About</button></NavLink>
                                <hr className="my-3" />
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Portfolio</button></NavLink>
                                <hr className="my-3" />
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Clients</button></NavLink>
                                <hr className="my-3" />
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Blog</button></NavLink>
                                <hr className="my-3" />
                                <NavLink className="transition duration-500 ease-in-out hover:text-ylw"><button>Contact</button></NavLink>
                            </ul>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;