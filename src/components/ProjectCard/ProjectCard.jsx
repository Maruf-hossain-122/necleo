import React from "react";
const ProjectCard = ({ project }) => {
  return (
    <div className="w-[404px] h-[265px] md:ml-[52px] bg-[#fff] relative flex flex-col items-center justify-center rounded-[10px]">
      {/* img part */}
      <div className=" w-[360px] xs:w-[320px]  h-[180px]  flex items-center justify-center  rounded-[10px]">
        <div>
          <img src={project?.download_url} alt="" />
        </div>
      </div>
      {/* text part */}
      <div className="mt-[25px]">
        <span className="font-semibold text-base">Author : </span>
        <span className="font-normal text-base ">{project?.author}</span>
        {/* <p className="text-xs mt-1 text-center">
          or try a <span className="text-primary">sample project</span>
        </p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
