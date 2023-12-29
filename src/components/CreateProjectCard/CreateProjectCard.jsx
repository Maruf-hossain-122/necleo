import React from "react";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";
const CreateProjectCard = () => {
  return (
    <div className="w-[404px] h-[265px]  md:ml-[52px] bg-[#fff] relative flex flex-col items-center justify-center rounded-[10px]">
      {/* img part */}
      <Link to={"/create-project"}>
        {" "}
        <div className=" w-[360px] xs:w-[320px]  h-[180px] bg-[#FA782F66] flex items-center justify-center  rounded-[10px]">
          <div>
            <img src={upload} alt="" />
          </div>
        </div>
      </Link>
      {/* text part */}
      <div className="mt-[10px]">
        <span className="font-semibold text-base ">Create a new project</span>
        <p className="text-xs mt-1 text-center">
          or try a <span className="text-primary">sample project</span>
        </p>
      </div>
    </div>
  );
};

export default CreateProjectCard;
