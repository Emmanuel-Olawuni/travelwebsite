import React from "react";
import Plane from "../assets/plane.svg";
import Mast from "../assets/mast.svg";
import Local from "../assets/local.svg";
import settings from "../assets/settings.svg";
import { motion } from "framer-motion";
import "../components/Header.css";
const Categories = [
  {
    id: 1,
    icon: Mast,
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: 2,
    icon: Plane,
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: 3,
    icon: Local,
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    id: 4,
    icon: settings,
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

const CategoryCard = ({ category }) => {
  const { id, icon, title, desc } = category;

  return (
    <>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      whileHover={{scale: 1.1}}
  
      transition={{duration: 1.5, type:'keyframes' }}
      className="card flex flex-col items-center justify-center h-auto w-[200px] text-center rounded-[5px]  p-3 gap-[10px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <img
          src={icon}
          alt=""
          className="w-[80px] h-[80px] md:w-[50px] md:h-[50px] object-contain"
        />
        <h4 className=" text-textHeading font-text text-[16px] font-bold ">
          {title}
        </h4>
        <p className=" text-[14px] font-text text-textBlue">{desc}</p>
      </motion.div>
    </>
  );
};
const Category = () => {
  return (
    <div className="relative md:mt-[10em]">
      <h4 className="text-center font-text text-[20px] uppercase font-semibold text-textBody">
        CATEGORY
      </h4>{" "}
      <br />
      <p className="text-center font-heading text-[28px] leading-6 capitalize font-bold text-textBlue">
        We Offer best services
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[4em] card-wrapper">
        {Categories.map((x) => (
          <CategoryCard key={x.id} category={x} />
        ))}
      </div>
    </div>
  );
};

export default Category;
