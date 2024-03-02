import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Text from './Text'
const imgs = [

  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",
  "src/Components/HeroSection/tempImg.jpg",

  // Add more image paths as needed
];
const imageTexts = [
    "CSI is Recruiting",
    "CSI WebMinds 2.0",
    "CSI CodeThod 3.0",
    "Ready to Code by CSI",
    "Interview Prep by CSI",
    "CSI Management Course",
    
    "Q/A Course ",
  ];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ mode }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className={`relative overflow-hidden  py-8 ${mode ? 'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'}`}>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  const imageWidth = 950; // Desired width for each image
  const imageHeight = 415; // Desired height for each image

  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <div key={idx} className="relative">
            <motion.div
              style={{
                width: imageWidth,
                height: imageHeight,
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                scale: imgIndex === idx ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              className="aspect-video w-screen shrink-0 rounded-xl bg-white object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Text text={imageTexts[idx]} /> 
            </div>
          </div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-black" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
