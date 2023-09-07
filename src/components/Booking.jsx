import React from "react";
import Image from "../assets/left image.png";

import Box from "../assets/box.svg";
import Payment from "../assets/payment.svg";
import Airport from "../assets/airpot.svg";
import { motion } from "framer-motion";
const Booking = () => {
  return (
    <>
      <div className="section flex flex-col md:flex-row h-screen justify-around items-center p-9 mt-[8em] md:mt-auto">
        <div className="md:w-[40%]">
          <p className=" font-text text-[14px] font-bold text-textBody">
            Easy and Fast
          </p>
          <h3 className=" font-heading text-[40px] capitalize font-extrabold text-textHeading ">
            {" "}
            Book your next trip in 3 easy steps
          </h3>
          <br />
          <div className="icon-list flex flex-col gap-[25px]">
            <div className="icon-wrapper items-center md:items-start justify-center flex gap-[20px] ">
              <div className="h-[40px] w-[40px] object-contain">
                <img src={Box} alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <h4 className=" text-textBody font-semibold">
                  Choose Destination
                </h4>
                <p className=" text-textBody">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="icon-wrapper items-center md:items-start justify-center flex gap-[20px]">
              <div className="h-[40px] w-[40px] object-contain">
                <img src={Payment} alt="" />
              </div>
              <div className="flex flex-col">
                <h4 className=" text-textBody font-semibold">Make Payment</h4>
                <p className=" text-textBody">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="icon-wrapper items-center md:items-start justify-center flex gap-[20px]">
              <div className="h-[40px] w-[40px] object-contain">
                <img src={Airport} alt="" />
              </div>
              <div className="flex flex-col">
                <h4 className=" text-textBody font-semibold">
                  Reach Airport on Selected Date
                </h4>
                <p className=" text-textBody">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[40%]  object-cover">
          <motion.img
            whileInView={{ scale: 1.2 }}
            transition={{
              duration: 2,
              type: "tween",
              repeat: "infinity",
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            src={Image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Booking;
