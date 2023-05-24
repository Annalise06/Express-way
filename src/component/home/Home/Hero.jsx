import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "./image4.jpg",
    text: "Welcome",
    content: "Fly Courier Logistic Services",
  },
  {
    src: "./5.jpg",
    text: "Logistics Services",
    content: "We are reliable and efficient",
  },
  {
    src: "./6.jpg",
    text: "Logistics Services",
    content: "Faster is fatal, Slower is safe",
  },
];

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [dotPosition, setDotPosition] = useState("right");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  return (
    <Carousel autoplay dotPosition={dotPosition}>
      {images.map((image, index) => (
        <div className="relative" key={index}>
          <img
            className="w-full relative h-[50vh] lg:h-[90vh]"
            src={image.src}
            alt="ttt"
          />
          <div className="absolute lg:top-[7rem] top-[5rem] lg:px-28 px-5 font-cabin text-white">
            <p className="text-lg lg:text-left text-center">{image.text}</p>
            <h3 className="lg:pt-10 pt-3 lg:text-7xl text-3xl lg:w-[80%] lg:text-left text-center">
              {image.content}
            </h3>
            <div>
              <div className="bg-white flex justify-between lg:px-7 px-5 py-2 mt-5">
                <input
                  className="border-none lg:w-[30rem] pr-3 outline-none text-black"
                  type="text"
                  placeholder="Type your tracking number"
                />
                <button className="default-btn lg:py-5 py-3 lg:px-[2.5rem] px-5 leading-none bg-[#fa4612] transition-all duration-500 z-1 capitalize border border-white rounded-md relative cursor-pointer text-white lg:before:top-[8px] before:top-0">
                  Track Now
                </button>

                <style jsx>{`
                  .default-btn::before {
                    content: "";
                    position: absolute;
                    padding: 0;
                    border-right: 0;
                    border-top: 20px solid transparent;
                    border-left: 20px solid #fff;
                    border-bottom: 20px solid transparent;

                    left: 0;
                    transition: all 0.5s;
                  }
                  .default-btn::after {
                    position: absolute;
                    content: "";
                    background-color: #fa4612;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    transition: all 0.5s;
                    z-index: -1;
                  }

                  .default-btn:hover::after {
                    width: 100%;
                  }

                  .default-btn:hover::before {
                    border-left: 20px solid #fff;
                    color: #fff;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
