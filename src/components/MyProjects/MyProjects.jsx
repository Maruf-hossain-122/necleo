import React, { useEffect, useState } from "react";
import CreateNewProject from "../CreateNewProject/CreateNewProject";
import ProjectCard from "../ProjectCard/ProjectCard";

const MyProjects = () => {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=6")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  console.log({ projectData });
  return (
    <div>
      <div className="pl-[52px] pb-10 pt-10">
        <h2 className="text-5xl font-semibold  ">My Projects</h2>
      </div>
      <div>
        <CreateNewProject />
        <div className="grid grid-cols-1  lg:grid-cols-2  max-w-5xl ">
          {/* <ProjectCard /> */}
          {projectData?.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
