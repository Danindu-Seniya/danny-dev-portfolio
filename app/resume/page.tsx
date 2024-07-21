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
const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
