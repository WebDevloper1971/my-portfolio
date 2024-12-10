import { useState } from "react";
import { ProjectData } from "../assets/project-data/ProjectData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [current, setCurrent] = useState<number>(0);
  const handleProject = (value: string) => {
    if (value === "prev" && current > 0 && current < ProjectData.length) {
      setCurrent((prev) => prev - 1);
    } else if (value === "next" && current < ProjectData.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      setCurrent(0);
    }
  };
  return (
    <div className="w-full h-full bg-[#FFF2AB] relative">
      <div className="info-section">
        <h1 className="text-3xl font-semibold absolute top-[195px] left-[215px]">
          Projects
        </h1>
        <p className="absolute top-[270px] left-[215px] max-w-[500px] tracking-wide leading-7">
          These are some of my good projects. Feel free to check them out on
          github and give a star if you like it
        </p>
      </div>

      <div className="project-section flex justify-evenly max-w-3xl absolute top-[265px] right-[170px] w-full">
        <button onClick={() => handleProject("prev")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="size-9"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <div className="h-[400px] w-[550px] relative rounded-lg bg-gray-100 flex justify-center items-center overflow-hidden">
          {ProjectData.map((project, index) => {
            return (
              <div
                className={`${
                  current === index ? "w-[90%] h-[90%]" : "w-0"
                } transition-all duration-300 h-full relative`}
              >
                <ProjectCard
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  title={project.title}
                  key={index}
                />
              </div>
            );
          })}
        </div>
        <button onClick={() => handleProject("next")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="size-9"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Projects;
