import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { WheelEvent } from "react";

import Header from "./Header";
import redFlavour1 from "../assets/redflavour1.png";
import redFlavour2 from "../assets/redflavour2.png";
import redFlavour3 from "../assets/redflavour3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [flavourInView, setFlavourInView] = useState(1);
  const [variantInView, setVariantInView] = useState(2);
  const flavours = [
    {
      name: "The Original",
      link: "/buy/the-original",
      price: [5.36, 10.21, 20.48],
      bgcolor: "#1c2a6f",
    },
    {
      name: "Sugarfree",
      link: "/buy/sugarfree",
      price: [5.36, 10.21, 20.48],
      bgcolor: "#2599d1",
    },
    {
      name: "White Peach",
      link: "/buy/white-peach",
      price: [5.36, 10.21, 20.48],
      bgcolor: "#d7367b",
    },
  ];
  const variants = [100, 250, 500];
  const flavoursCount = flavours.length;
  const [isScrolling, setIsScrolling] = useState(false);

  //swipe detection
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (isScrolling) return;

    const threshold = 50;

    if (event.deltaY > threshold) {
      setFlavourInView((prev) => (prev >= flavoursCount ? 1 : prev + 1));
    }

    if (event.deltaY < -threshold) {
      setFlavourInView((prev) => (prev <= 1 ? flavoursCount : prev - 1));
    }

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 700);
  };

  return (
    <>
      <div
        onWheel={handleWheel}
        className="min-h-dvh sticky top-0 hidden xl:flex flex-col"
      >
        <div
          className="absolute top-0 left-0 size-full -z-10 transition-colors duration-300"
          style={{
            backgroundColor: flavours[flavourInView - 1].bgcolor,
            backgroundImage:
              "radial-gradient(circle,rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>

        <div className="max-w-325 mx-auto w-full flex-1 flex flex-col">
          <Header />

          {/* 3 cols */}
          <div className="flex flex-1">
            {/* col 1 */}
            <div className="w-1/4">
              <div className="mt-50">
                <h1 className="text-white text-2xl">Red Buffalo</h1>
                <p className="text-white text-xl">gives you wiiings</p>
              </div>
              <div className="mt-20">
                <p className="text-white/50 font-medium">
                  {variants[variantInView - 1]} ml
                </p>
              </div>
              <div className="mt-50">
                <p className="text-white/50 font-medium">
                  Red Bull is appreciated worldwide by top athletes, busy
                  professionals, university students and travellers on long
                  journeys.
                </p>
              </div>
            </div>

            {/* col 2 */}
            <div className="flex-1 flex flex-col relative items-center justify-end">
              <AnimatePresence>
                {flavourInView === 1 && (
                  <motion.img
                    key="red1"
                    src={redFlavour1}
                    className="h-10/12 absolute"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {flavourInView === 2 && (
                  <motion.img
                    key="red2"
                    src={redFlavour2}
                    className="h-10/12 absolute"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                {flavourInView === 3 && (
                  <motion.img
                    key="red3"
                    src={redFlavour3}
                    className="h-10/12 absolute"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* col 3 */}
            <div className="w-1/4 flex flex-col justify-between items-end">
              <div className="mt-60">
                <p className="text-white text-center">
                  {flavours[flavourInView - 1].name}
                </p>
                <div className="flex gap-2 mt-5 font-semibold">
                  <div
                    onClick={() => setVariantInView(1)}
                    className={`cursor-pointer aspect-square w-10 text-sm flex flex-col justify-center items-center rounded-full ${variantInView === 1 ? "bg-white text-black" : "bg-white/10 text-white"}`}
                  >
                    <p className="text-xs">100</p>
                    <p className="text-xs -mt-1">ml</p>
                  </div>
                  <div
                    onClick={() => setVariantInView(2)}
                    className={`cursor-pointer aspect-square w-10 text-sm flex flex-col justify-center items-center rounded-full ${variantInView === 2 ? "bg-white text-black" : "bg-white/10 text-white"}`}
                  >
                    <p className="text-xs">250</p>
                    <p className="text-xs -mt-1">ml</p>
                  </div>
                  <div
                    onClick={() => setVariantInView(3)}
                    className={`cursor-pointer aspect-square w-10 text-sm flex flex-col justify-center items-center rounded-full ${variantInView === 3 ? "bg-white text-black" : "bg-white/10 text-white"}`}
                  >
                    <p className="text-xs">500</p>
                    <p className="text-xs -mt-1">ml</p>
                  </div>
                </div>
              </div>
              <div>
                <Link to={flavours[flavourInView - 1].link}>
                  <button className="bg-white rounded-full px-7 py-2 cursor-pointer">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-15 pb-20 text-white text-3xl font-bold">
            $ {flavours[flavourInView - 1].price[variantInView - 1]}
          </div>
        </div>
      </div>
      <div className="flex flex-col h-dvh justify-center items-center xl:hidden">
        <span>Sorry! Not Responsive</span>
        <span>Please view on larger screen</span>
      </div>
    </>
  );
};

export default Hero;
