import React from "react";
import Images1 from "../assets/brands/image 27.png";
import Images3 from "../assets/brands/image 28.png";
import Images4 from "../assets/brands/image 29.png";
import Images5 from "../assets/brands/image 30.png";
import Images6 from "../assets/brands/image 31.png";

const Brands = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-around brands md:mb-16  p-4 bg-[#d2d2d2]  md:bg-red-100">
      <img
        src={Images1}
        alt=""
        className="h-[100px] w-[100px] object-contain"
      />
      <img
        src={Images3}
        alt=""
        className="h-[100px] w-[100px] object-contain"
      />
      <img
        src={Images4}
        alt=""
        className="h-[100px] w-[100px] object-contain shadow-lg p-3 rounded-lg"
      />
      <img
        src={Images5}
        alt=""
        className="h-[100px] w-[100px] object-contain"
      />
      <img
        src={Images6}
        alt=""
        className="h-[100px] w-[100px] object-contain"
      />
    </div>
  );
};

export default Brands;
