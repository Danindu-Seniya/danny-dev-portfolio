"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "full-stack",
    title: "ShopMate(Mobile Application)",
    description:
      " Virtual assistance system for shopping malls to enhance shopping experience.",
    stack: [
      { name: "ReactNative/Expo" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Unity" },
      { name: "Nativewind" },
    ],
    image: "/assets/work/shopmate-m2.png",
    live: "https://shopmate.framer.website/",
    github: "https://github.com/Danindu-Seniya/ShopMate",
  },
  {
    num: "02",
    category: "full-stack",
    title: "Nexus Spices",
    description:
      " Interactive and responsive website for a spice exporting company to showcase the products.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Sanity" },
      { name: "Vercel" },
    ],
    image: "/assets/work/nexus1.png",
    live: "https://spices.nexusagro.lk/",
    github: "",
  },
  {
    num: "03",
    category: "full-stack",
    title: "Creativo Code Website",
    description:
      "Collaborated in developing a website for a creative frontend development agency.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer-motion" },
      { name: "Vercel" },
    ],
    image: "/assets/work/creativocode1.png",
    live: "https://www.creativo-code.com/",
    github: "",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: any) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outLine num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-3">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-l text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-fit relative group flex justify-center items-center ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full  z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          layout="intrinsic"
                          width={1900}
                          height={910}
                          className=""
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
