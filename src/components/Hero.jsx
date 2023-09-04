import React from "react";
import { motion } from "framer-motion";
import BgImage from "../assets/right top.png";
import Plane from "../assets/plane.png";
import HeroImage from "../assets/Traveller 1.png";
import { BsPlayCircleFill, BsPlayFill } from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <img
        src={BgImage}
        className="absolute right-0 top-0 z-0 w-full md:w-[auto]"
        alt=""
      />
      <div className="hidden md:block bg-[#D5AEE4] h-[300px] w-[300px] rounded-full absolute top-[-130px] left-[-120px] z-0 opacity-20"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
          ease: "easeInOut",
          when: "beforeChildren",
        }}
        className="relative flex flex-col md:flex-row  h-[80vh] justify-center gap-0 md:gap-[100px] p-4 mt-[0em] md:mt-10"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 1.7, stiffness: 100, mass: 2 }}
          className="flex  flex-col justify-center w-full md:w-[30%] text-left gap-[20px]"
        >
          <p className=" text-red-500 font-text text-[18px] uppercase font-bold">
            Best Destinations around the world
          </p>
          <h4 className=" font-heading text-[50px] font-extrabold text-[#181E4B]">
            Travel, enjoy and live a new and full life
          </h4>
          <p className=" font-text text-[16px]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex  items-center">
            <button className="rounded-[10px] bg-[#F1A501] text-white font-text p-3 text-center h-[40px]  shadow-md text-[14px]">
              Find Out More
            </button>
            <button className="rounded-[10px]  font-text text-[14px]  p-3  text-center  h-[40px]  flex items-center gap-2">
              <div className=" bg-red-500 text-white rounded-full h-[30px] w-[30px] flex items-center justify-center">
                <BsPlayFill className="" size={16} />
              </div>
              Play Demo
            </button>
          </div>
        </motion.div>
        <motion.div className="relative w-full md:w-[50%]">
          <motion.img
            src={Plane}
            initial={{ x: -130 }}
            animate={{ x: 0 }}
            transition={{ duration: 5, ease: "easeInOut" }}
            alt=""
            className="absolute  hidden md:block  md:top-[20px] md:left-[101px]"
          />
          <motion.img
            src={Plane}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 3 }}
            alt=""
            className="absolute  hidden md:block top-[1px] right-[-30px]"
          />
          <div className="">
            <img src={HeroImage} alt="" className="w-full relative hidden md:block" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
