import React, { useState, useEffect } from "react";
import { Drawer} from "antd";

import { FiSearch } from "react-icons/fi";
import { CgMenuGridO, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.jpeg";
import flag from "../assets/images/1-united-states.png";
import flag2 from "../assets/images/2-united-kingdom.png";
import flag3 from "../assets/images/3-germany.png";
import flag4 from "../assets/images/4-argentina.png";
import flag5 from "../assets/images/5-australia.png";
import flag6 from "../assets/images/6-new-zealand.png";
import flag7 from "../assets/images/7-canada.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "antd";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    key: "1",
    label: "United Kingdom",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag} alt="" />
      </>
    ),
  },
  {
    key: "2",
    label: "Germany",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag2} alt="" />
      </>
    ),
  },
  {
    key: "3",
    label: "Argentina",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag3} alt="" />
      </>
    ),
  },
  {
    key: "4",
    label: "Australia",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag4} alt="" />
      </>
    ),
  },
  {
    key: "5",
    label: "Canada",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag5} alt="" />
      </>
    ),
  },
  {
    key: "6",
    label: "New Zealand",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag6} alt="" />
      </>
    ),
  },
  {
    key: "6",
    label: "Canada",
    icon: (
      <>
        <img className="w-6 mr-3" src={flag7} alt="" />
      </>
    ),
  },
];

const Header = () => {

    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("top");
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const onChange = (e) => {
      setPlacement(e.target.value);
    };

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // Function to handle scrolling and toggle the navbar visibility
  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = top > 0 && 0 > lastScrollTop;
    setIsNavbarVisible(!isScrollingDown);
    setLastScrollTop(0);
  };

  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Add event listener to handle scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header>
        <nav className="">
          <div className="relative flex gap-[25rem] bg-red-x300 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-16 lg:pt-4 lg:pb-6">
            <div className="flex  items-center justify-between h-20">
              <div className="flex-shrink-0 pt-2">
                <Link to="/home" className="flex items-center">
                  <img
                    className="block lg:hidden absolute w-32 top-8 bg-white z-10"
                    src={logo}
                    alt="Express Courier Way"
                  />

                  <img
                    className="hidden lg:block w-44"
                    src={logo}
                    alt="Express Courier Way"
                  />
                </Link>
              </div>
              <div className="flex mx-5 gap-5 lg:hidden absolute top-6 right-0">
                <FiSearch className="mt-1 text-[#161b5cfc]" size={25} />
                <CgMenu
                  onClick={showDrawer}
                  className="text-[#fa4612]"
                  size={35}
                />
              </div>
            </div>
            <div className="hidden lg:flex lg:gap-10">
              <div className="flex gap-4">
                <div className="border border-gray-300 rounded-full w-9 h-9 pt-1 pl-2 text-red-400 mt-1.5">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text-sm">
                  <h3 className="text-gray-500 font-[500]">Contact support</h3>
                  <p className="text-gray-800 font-semibold hover:text-red-500 ease-out duration-700 hover:transition hover:ease-in-out hover:duration-700">
                    +1(360)7123824
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="border border-gray-300 rounded-full w-9 h-9 pt-1 pl-2 text-red-400 mt-1.5">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text-sm ">
                  <h3 className="text-gray-500 font-[500]">Contact support</h3>
                  <p
                    className="text-gray-800 font-semibold hover:text-red-500 ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700"
                  >
                    info@expresscourierway.com
                  </p>
                </div>
              </div>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div className="flex gap-2" onClick={(e) => e.preventDefault()}>
                  <div className="w-10">
                    <img src={flag} alt="flag" />
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-600 font-semibold hover:text-red-500 ease-out duration-700 hover:transition hover:ease-in-out hover:duration-700">
                      USA
                    </p>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
          <div className="border-b border-1 border-gray-300 w-full"></div>{" "}
          
          <Drawer
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
          >
            <div className="md:hidden bgg-white w-full absoludte z-d50">
              <nav className="">
                <div className="flex flex-col ">
                  <Link
                    to="/"
                    className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-4 text-lg border-b-[0.2px] border-gray-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-4 rounded-md text-lg  border-b-[0.2px] border-gray-200"
                  >
                    About
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-4 rounded-md text-lg  border-b-[0.2px] border-gray-200"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 pt-4 pb-10 rounded-md text-lg  border-b-[0.2px] border-gray-200"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          </Drawer>
          <div
            className={`hidden pr-32 top-auto md:flex md:justify-between py-3 
           bg-white filxed w-full transition-all z-[70] ${
             isNavbarVisible ? "translate-y-0" : "-translate-y-full"
           }`}
          >
            <div className="ml-28 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-2 rounded-md text-lg"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-2 rounded-md text-lg"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-2 rounded-md text-lg"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-gray-600 font-medium hover:text-[#fa4612] ease-out duration-700 hover:transition hover:ease-in-out
                    hover:duration-700 focus:text-[#fa4612] px-3 py-2 rounded-md text-lg"
              >
                Contact
              </Link>
            </div>
            <div className="pt-2">
              <div className="flex gap-6 text-[#151c6d]">
                <FiSearch
                  className="mt-1.5 hover:text-red-400 ease-out duration-700 hover:transition hover:ease-in-out hover:duration-700"
                  size={22}
                />
                <CgMenuGridO
                  className="hover:text-red-400 ease-out duration-700 hover:transition hover:ease-in-out hover:duration-700"
                  size={33}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

// BiTimeFive;
// FiMenu;
// MdCancel;
// BiLocationPlus;
// BiPhoneCall;
// const NavigationBar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link to="/" className="flex items-center">
//               <img
//                 className="block lg:hidden h-8 w-auto"
//                 src="https://expresscourierway.com/assets/images/logo.png"
//                 alt="Express Courier Way"
//               />
//               <img
//                 className="hidden lg:block h-8 w-auto"
//                 src="https://expresscourierway.com/assets/images/logo.png"
//                 alt="Express Courier Way"
//               />
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 to="/"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/about"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 About
//               </Link>

//               <Link
//                 to="/services"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Services
//               </Link>

//               <Link
//                 to="/contact"
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               type="button"
//               className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isMobileMenuOpen
