"use client";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi tempora necessitatibus est quod deserunt ea similique.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Danindu Nawarathna",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 123 1234 12",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "danindunawa@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi tempora necessitatibus est quod deserunt ea similique.",
  items: [
    {
      company: "ACICTS",
      position: "President",
      duration: "2019 - 2020",
    },
    {
      company: "ACPAS",
      position: "Main Event Co-ordinator",
      duration: "2019 - 2020",
    },
    {
      company: "Creativo Code",
      position: "Full-stack Developer",
      duration: "2023 - 2024",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi tempora necessitatibus est quod deserunt ea similique.",
  items: [
    {
      institution: "Ananda College, Colombo 10.",
      degree: "President",
      duration: "2019 - 2020",
    },
    {
      institution: "University of Westminster, UK.",
      degree: "President",
      duration: "2019 - 2020",
    },
    {
      institution: "ACICTS",
      degree: "President",
      duration: "2019 - 2020",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi tempora necessitatibus est quod deserunt ea similique.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
