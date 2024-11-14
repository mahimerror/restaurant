import "./footer.css"
import { FaRegClock } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-center text-white footer-bg">
            <div className="w-11/12 mx-auto py-8 md:py-28">
                <h3 className="bebas font-bold text-[40px] md:text-6xl mb-12">We ready to have you the best dining experiences</h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-[60px] md:mb-28">
                    <div className="card flex flex-col items-center">
                        <FaRegClock className="text-ylw text-3xl" />
                        <p className="bebas mt-6 mb-3 text-2xl">Opening hours</p>
                        <p className="roboto">Monday - Sunday <br /> 9:00 AM to 11:30 PM</p>
                    </div>

                    <div className="card flex flex-col items-center">
                        <LuPhoneCall className="text-ylw text-3xl" />
                        <p className="bebas mt-6 mb-3 text-2xl">LET&apos;S TALK</p>
                        <p className="roboto">Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</p>
                    </div>

                    <div className="card flex flex-col items-center">
                        <GoMail className="text-ylw text-3xl" />
                        <p className="bebas mt-6 mb-3 text-2xl">BOOK A TABLE</p>
                        <p className="roboto">Email: demo@website.com <br /> Support: support@website.com</p>
                    </div>

                    <div className="card flex flex-col items-center">
                        <MdOutlineLocationOn className="text-ylw text-3xl" />
                        <p className="bebas mt-6 mb-3 text-2xl">Our Address</p>
                        <p className="roboto">23 Stree New York City , United <br /> States Of America.</p>
                    </div>
                </div>

                <div className="">
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center">
                            <Link to=""><FaFacebook className="text-2xl" /></Link>
                        </div>
                        <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center">
                            <Link to=""><RiTwitterXFill className="text-2xl text-black bg-white rounded-sm" /></Link>
                        </div>
                        <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center">
                            <Link to=""><FaInstagramSquare className="text-2xl" /></Link>
                        </div>
                        <div className="w-12 h-12 border-2 rounded-full flex justify-center items-center">
                            <Link to=""><FaLinkedin className="text-2xl" /></Link>
                        </div>
                    </div>
                    <p className="roboto font-medium mt-6">© 2023 All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;