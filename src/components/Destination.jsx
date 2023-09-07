import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import Rome from "../assets/rome.jpg";
import London from "../assets/london.jpg";
import Europe from "../assets/europe.jpg";
import { motion } from "framer-motion";
import LeftImage from "../assets/Group 4.png";

const CardDetails = [
  {
    id: 1,
    price: "5.42",
    place: "Rome, Italty",
    image: Rome,
    time: "10 Days Trip",
  },
  {
    id: 2,
    price: "4.2",
    place: "London, UK ",
    image: London,
    time: "12 Days Trip",
  },
  {
    id: 3,
    price: "12",
    place: "Full Europe",
    image: Europe,
    time: "28 Days Trip",
  },
];

const Destination = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{  duration: 0.2, type: "tween", ease: 'easeInOut' }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 0 },
    }}
    className="relative">
      <img
        src={LeftImage}
        className="hidden md:block absolute right-[5em]  opacity-50 top-[-3em]"
        alt=""
      />
      <motion.div
       
        className=" bg-[#d2d2d2] md:bg-[white] p-4 h-[1500px] md:h-auto md:bg-white"
      >
        <div className=" text-center">
          <h3 className=" font-text text-[18px] capitalize  font-semibold text-textBody">
            Top Selling
          </h3>{" "}
          <br />
          <p className=" font-heading text-[28px] leading-6 capitalize font-bold text-textBlue ">
            Top Destination
          </p>
        </div>

        <motion.div className="mt-12 card-destination-wrapper flex flex-col justify-center items-center md:flex-row  gap-[3em]">
          {CardDetails.map((x) => (
            <motion.div
              initial={{ opacity: 0, y: "-100vw" }}
             
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 2.2,
                type: "spring",
                ease: "easeIn",
                delay: 0.02 * x.id,
                stiffness: 140,
                mass: 0.4,
              }}
              className="card-destination w-[250px] rounded-[10px] shadow-xl"
              key={x.id}
            >
              <div className="card-destination-image ">
                <img
                  src={x.image}
                  alt=""
                  className="h-[300px] w-[250px] object-cover rounded-t-xl"
                />
              </div>
              <div className="card-destination-details flex flex-col px-2 py-4 gap-[10px]">
                <div className="flex justify-between font-text px-2">
                  <p className=" font-semibold text-textHeading">{x.place}</p>
                  <p>${x.price}k</p>
                </div>
                <div className=" flex gap-[5px] items-center font-text text-[14px]">
                  <TiLocationArrow size={24} />
                  {x.time}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Destination;
