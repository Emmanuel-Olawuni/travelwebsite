import React from "react";
import LOGO from "../assets/Jadoo.svg";
import AppleLogo from "../assets/apple.png";
import GooglePlay from "../assets/Google Play.png";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[2em]  md:mt-[10em] border border-gray-100 border-opacity-50 p-4">
      <div className="flex flex-col md:flex-row gap-[50px] md:gap-[90px] justify-center">
        <div>
          <img src={LOGO} alt="" /> <br />
          <p className=" font-text text-[14px]">
            Book your trip in minute, get full <br /> Control for much longer.
          </p>
        </div>
        <div>
          <h4 className=" font-text font-bold text-[20px]"> Company</h4> <br />
          <ul className=" list-none flex flex-col gap-[10px] font-text text-textBody font-medium">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-text font-bold text-[20px]"> Contact</h4> <br />
          <ul className=" list-none flex flex-col gap-[10px] font-text text-textBody font-medium">
            <li>Help / FAQ</li>
            <li>Press</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-text font-bold text-[20px]"> More</h4> <br />
          <ul className=" list-none flex flex-col gap-[10px] font-text text-textBody font-medium">
            <li>Airline fees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-[10px]">
          <div className="socialLink flex ">
            <motion.img
              initial={{ scale: 1, rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              whileHover={{ scale: 1.1 }}
              src={Facebook}
              alt=""
            />
            <motion.img
              initial={{ scale: 1, rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              whileHover={{ scale: 1.1 }}
              src={Instagram}
              alt=""
            />
            <motion.img
              initial={{ scale: 1, rotate: -360 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              whileHover={{ scale: 1.1 }}
              src={Twitter}
              alt=""
            />
          </div>
          <div className=" text-textBody font-text text-[18px]">
            {" "}
            Discover our app
          </div>
          <div className="flex gap-[5px]">
            <img src={GooglePlay} alt="" />
            <img src={AppleLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="flex text-center flex-col items-center">
        <p className="font-text text-[16px]">All rights reserved@jadoo.co</p>
        <p className=" font-text  text-[12px] font-bold">
          Designed by Olawuni Emmanuel.{" "}
          <a href="mailto:emmanuelolawuni2001@gmail.com" className=" underline">
            Click to drop a mail
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
