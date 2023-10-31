import { navLinksdata } from "../../assets/navOptions";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
            <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-20 text-lg font-bold bg-[#111111] pe-6">
                <button className="h-12 px-4 text-base tracking-wide text-white uppercase bg-transparent border-transparent"><a className="text-2xl font-semibold text-[#f34e3a]">NITEX GYM</a></button>
                <div className="bg-red">
                    <ul className="items-center hidden gap-6 navItems lg:gap-10 md:inline-flex">
                        {
                            navLinksdata.map(data => <li className="font-bold tracking-wide text-white duration-500 cursor-pointer" key={data._id}>
                                <Link
                                    activeClass="active"
                                    to={data.link}
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={800}
                                >{data.title}</Link>
                            </li>)
                        }
                    </ul>
                    <span
                        onClick={() => setShowMenu(!showMenu)}
                        className="inline-flex items-center justify-center w-10 h-10 text-xl text-[#f34e3a] bg-transparent rounded-full cursor-pointer md:hidden"
                    ><FiMenu></FiMenu></span>
                    {showMenu && (
                        <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                            <div className="relative flex flex-col gap-8 py-2">

                                <ul className="flex flex-col gap-4">
                                    {navLinksdata.map((item) => (
                                        <li
                                            key={item._id}
                                            className="text-base font-normal text-white duration-300 cursor-pointer"
                                        >
                                            <Link
                                                onClick={() => setShowMenu(false)}
                                                activeClass="active"
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <span
                                    onClick={() => setShowMenu(false)}
                                    className="absolute text-2xl text-[#f34e3a] duration-300 cursor-pointer top-4 right-4 hover:text-designColor"
                                >
                                    <MdClose />
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
    );
};

export default Navbar;