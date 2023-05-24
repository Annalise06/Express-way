import React, { useState } from "react";
import { Carousel } from "antd";

const images = [
  {
    src: "./1.jpg",
    content:
      "Fly Courier Logistic Services is the fastest and most reliable shipping company for I have ever seen.",
    name: "Juhon Dew",
  },
  {
    src: "./2.jpg",
    content:
      "My Package came right on time.. Thanks to Fly Courier Logistic Services!",
    name: "Moris Norman",
  },
  {
    src: "./3.jpg",
    content:
      "There are many variations of shipping agencies... Fly Courier Logistic Services is the best I have ever worked with.",
    name: "Johanna Smith",
  },
];

const Testimonial = () => {
  const [dotPosition, setDotPosition] = useState("bottom");
  // const handlePositionChange = ({ target: { value } }) => {
  //   setDotPosition(value);
  // };

  return (
    <>
      <section className=" bg-[#24416b] border-none">
        <div className="py-20">
          <div className="flex flex-col text-center text-white">
            <p className="font-lighter uppercase">Testimonial</p>
            <h3 className="text-4xl font-semibold font-cabin tracking-wider py-3">
              What makes us different?
            </h3>
          </div>
          <div>
            <Carousel className="py-14" effect="fade" dotPosition={dotPosition}>
              {images.map((image, index) => (
                <div className="flex" key={index}>
                  <div className="lg:flex lg:gap-20 lg:mx-28">
                    <div className="flex justify-center">
                      <img className="w-56" src={image.src} alt="ttt" />
                    </div>
                    <div className="bg-white font-cabin lg:w-[80%] w-full lg:py-5 py-5 lg:pt-9 px-7">
                      <p className="text-lg text-gray-500">{image.content}</p>
                      <p className="lg:pt-5 pt-3 text-xl text-[#24416b] font-semibold">
                        {image.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
