import { useState } from "react";
import { MyIcons } from "../assets/icons/icons";

export interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
  classname?: string;
}

const ProjectCard = ({
  title,
  link,
  description,
  image,
  classname,
}: Project) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`rounded p-4 w-full  h-full relative overflow-hidden ${classname}`}
    >
      <img
        onClick={() => setShow(!show)}
        src={image}
        alt="project-image"
        className="absolute top-0 left-0 w-full h-full object-contain object-center cursor-pointer"
      />

      <div
        className={`absolute transition-all duration-500 left-0 w-full
          h-full leading-7 tracking-wide bg-white opacity-100 text-sm text-justify overflow-y-scroll p-4 flex flex-col gap-8 ${
            show ? "top-0" : "top-full"
          }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            <a href={link}>
              <img src={MyIcons.link} alt="" className="size-6" />
            </a>
          </div>
          <button className="" onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=""
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
