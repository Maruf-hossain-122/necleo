import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
const ViewProjectCard = () => {
  return (
    <div className="w-[404px] h-[265px]  md:ml-[52px] bg-[#fff] relative flex flex-col items-center justify-center rounded-[10px]">
      {/* img part */}
      <Link to={"/projects"}>
        {" "}
        <div className=" w-[360px] xs:w-[320px]  h-[180px] bg-[#FA782F66] flex items-center justify-center  rounded-[10px]">
          <div>
            <MdOutlineRemoveRedEye className="text-7xl text-dashboardBg" />
          </div>
        </div>
      </Link>
      {/* text part */}
      <div className="mt-[10px]">
        <span className="font-semibold text-base ">View created project</span>
        <p className="text-xs mt-1 text-center">
          or try a <span className="text-primary">sample project</span>
        </p>
      </div>
    </div>
  );
};

export default ViewProjectCard;
