"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageData {
  src: StaticImageData;
}

const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div
      className="overflow-hidden relative w-full mx-auto mt-4"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-56 sm:h-72 md:h-96 lg:h-[500px] xl:h-screen w-full  flex transition ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0  mx-[2px] "
            style={{ width: "calc(100% - 4px)" }}
          >
            <Image
              src={image.src}
              alt={`Slider Image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2  rounded-xl hover:bg-[#FEF9D9] mx-1 -mt-[10px] -translate-y-1/2 bg-[#DEE5D4] text-white p-2 group transition-all duration-300 ease-in-out"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-gray-600 transition-all duration-300 ease-in-out" />
      </button>
      <button
        className="absolute right-0 top-1/2 rounded-xl hover:bg-[#FEF9D9] mx-1 -mt-[10px] -translate-y-1/2 bg-[#DEE5D4] text-white p-2 group transition-all duration-300 ease-in-out"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-all duration-300 ease-in-out" />
      </button>
      <div className="flex justify-center my-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#beff46] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
