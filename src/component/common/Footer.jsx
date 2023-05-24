import React from 'react';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relatvive botvtom-0 bg-[#24416b] py-8 text-white lg:px-28">
      <div className="lg:flex px-5 text-center justify-between">
        <div className="flex text-sm justify-center">
          <p className="pt-1.5 px-1">Terms & condition</p>
          <span className="lg:font-bold font-extrabold text-base text-[#fa4612]">
            .
          </span>
          <p className="pt-1.5 px-1">Privacy & Policy</p>
          <span className="lg:font-bold font-extrabold text-base text-[#fa4612]">
            .
          </span>
          <p className="pt-1.5 px-1">Login</p>
        </div>
        <div className='pt-3'>
          <p>
            copyright @ 2020{" "}
            <span className="text-[#fa4612] text-sm">
              Expressway Courier Services
            </span>
          </p>
        </div>
        <div className='flex gap-3 lg:justify-normal justify-center pt-5'>
          <FaFacebookF className="bg-[#1b5bb4] p-1" size={25} />
          <AiOutlineTwitter className="bg-[#1b5bb4] p-1" size={25} />
          <AiOutlineInstagram className="bg-[#1b5bb4] p-1" size={25} />
          <FaLinkedinIn className="bg-[#1b5bb4] p-1" size={25} />
          <AiFillYoutube className="bg-[#1b5bb4] p-1" size={25} />
        </div>
      </div>
    </div>
  );
}

export default Footer;