import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = [
  {
    id: 0,
    testimonial:
      "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 1,
    testimonial:
      "Booking my dream vacation was a breeze with this travel website. The variety of destinations and user-friendly interface made planning a joy. Thanks to them, I had the trip of a lifetime!",
    name: "Christ Thomas",
    location: "Abuja, Nigeria",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    testimonial:
      "I've been using this travel website for years, and it never disappoints. From affordable accommodations to personalized recommendations, it's my go-to for stress-free travel.",
    name: "Dean Wood",
    location: "Maryland, USA",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 3,
    testimonial:
      "When it comes to travel, I demand reliability, and this website delivers. Their customer support is top-notch, and their attention to detail ensures every trip is smooth sailing. Highly recommended!",
    name: "Arjun Krishna",
    location: "Mumbai, India",
    image: "https://i.pravatar.cc/150?img=5",
  },
];
const Testimonial = () => {
  const [selected, setSelected] = useState(0);
  const GoUp = () => {
    if (selected === 3) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };
  const GoDown = () => {
    if (selected === 0) {
      setSelected(3);
      console.log(selected);
    } else {
      setSelected(selected - 1);
      console.log(selected);
    }
  };
  return (
    <div className="flex flex-col md:flex-row mb-[5em] mt-[4em] p-4 justify-around relative">
      <div className="flex flex-col justify-between h-[auto] g">
        <div className=" flex flex-col gap-[10px]">
          <p className="  font-text text-textBody uppercase text-[16px] font-semibold">
            Testimonials
          </p>
          <h4 className=" font-heading capitalize text-[28px] text-textHeading font-extrabold">
            What People Says about us
          </h4>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="hidden md:flex gap-[6px]"
        >
          <AnimatePresence>
            {Testimonials.map((x) => (
              <div
                className="dot rounded-full  h-[10px] w-[10px]"
                style={{
                  backgroundColor: selected === x.id ? "#000" : "#d2d2d2",
                }}
                onClick={() => setSelected(x.id)}
              ></div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* CARD  */}
      </div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="testimonialCard relative flex flex-col mt-9 md:mt-auto  md:w-[500px] p-[3em] shadow-xl rounded-[10px] z-20 "
        >
          <div className="testimonialImage absolute top-0 left-[-1em]">
            <img
              src={Testimonials[selected].image}
              alt=""
              className="rounded-full h-[60px] w-[60px] object-cover"
            />
          </div>
          <div className="testimonialText flex flex-col gap-[15px]">
            <h4 className="text-[16px] text-textHeading font-normal h-[140px] md:h-[100px]">
              {Testimonials[selected].testimonial}
            </h4>
            <div className="flex flex-col gap-[5px]">
              <h3 className=" font-text font-bold text-[16px] text-textHeading">
                {Testimonials[selected].name}
              </h3>
              <p className="font-text font-medium text-textHeading text-[14px]">
                {Testimonials[selected].location}
              </p>
            </div>
          </div>
        </motion.div>
        <div className="hidden md:flex alternateTestimonial  flex-col justify-end absolute  h-[300px] rounded-[5px] w-[500px] right-[-2em] top-[2em] z-[-1] p-[1em] border-opacity-30">
          <h3 className=" font-text font-bold text-[16px] text-textHeading">
            {console.log(Testimonials[selected > 3 ? 0 : selected + 1])}
            {Testimonials[selected === 3 ? 0 : selected + 1].name}
          </h3>
          <p className="font-text font-medium text-textHeading text-[14px]">
            {Testimonials[selected === 3 ? 0 : selected + 1].location}
          </p>
        </div>
      </div>
      <div className="testimonialControl absolute translate-x-[50%] translate-y-[50%] md:right-10  md:top-[3em] top-[15em] right-14 flex  flex-col gap-[20px] z-40">
        <RiArrowUpSLine size={30} onClick={GoUp} />
        <RiArrowDownSLine size={30} onClick={GoDown} />
      </div>
    </div>
  );
};

export default Testimonial;
