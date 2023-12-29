import React from "react";
import CreateNewProject from "../CreateNewProject/CreateNewProject";

const MyProjects = () => {
  return (
    <div>
      <div className="pl-[52px] pb-10 pt-10">
        <h2 className="text-5xl font-semibold  ">My Projects</h2>
      </div>
      <div>
        <CreateNewProject />
      </div>
    </div>
  );
};

export default MyProjects;
