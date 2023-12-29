import React from "react";
import myProject from "../../assets/icons/database.svg";
import sampleProject from "../../assets/icons/sample-project.svg";
import application from "../../assets/icons/application.svg";
import intro from "../../assets/icons/player.svg";
import question from "../../assets/icons/question.svg";
import query from "../../assets/icons/query.svg";
import collapse from "../../assets/icons/logout.svg";
const Sidebar = ({ isSidebarVisible }) => {
  return (
    <div>
      {/* sidebar container */}
      <div
        className={` md:flex flex-col min-h-screen justify-between pr-[0.5rem]`}
      >
        {/* upper side */}
        <div>
          <div className="text-secondary   my-[28.5px] relative w-44 ms-auto">
            <hr className="" />
          </div>
          {/* my project */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={myProject}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-primary">
              My Projects
            </span>
          </div>
          {/* sample project */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={sampleProject}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-secondary">
              Sample Projects
            </span>
          </div>
          <div className="text-secondary  my-[28.5px] relative w-44 ms-auto">
            <hr className="" />
          </div>
          {/* Apps */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={application}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-secondary">Apps</span>
          </div>
          {/* intro */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={intro}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-secondary">
              Intro to Necleo
            </span>
          </div>
        </div>
        {/* bottom side */}
        <div>
          {/* help */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={question}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-secondary">
              Help & Support
            </span>
          </div>
          {/* query */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={query}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold text-secondary">
              Feedback
            </span>
          </div>
          {/* collapse */}
          <div className="flex items-center my-[28.5px]">
            <div className="mr-[6px]">
              <img
                className="w-[28px] h-[28px] ml-3 md:ml-[32px] mr-5 md:mr-[10px]"
                src={collapse}
                alt=""
              />
            </div>
            <span className="text-sm font-semibold">Collapse</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
