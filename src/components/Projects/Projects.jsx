import React, { useEffect, useState } from "react";
import { backend_url } from "../../utils";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const Projects = ({ project }) => {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    fetch(`${backend_url}/projects`)
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);
  console.log({ projectData });
  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 mt-[10rem]">
    //   {projectData?.map((project) => (
    //     <div className="w-[404px] h-[265px] md:ml-[52px] bg-[#fff]  rounded-[10px]">
    //       {/* img part */}
    //       <div className=" w-[360px] xs:w-[320px]  h-[180px]  flex items-center justify-center  rounded-[10px]">
    //         <div className="max-w-[360px] max-h-[160px]">
    //           <img src={project?.image} alt="" />
    //         </div>
    //       </div>
    //       {/* text part */}
    //       <div className="mt-[25px]">
    //         <span className="font-semibold text-base">Author : </span>
    //         <span className="font-normal text-base ">{project?.author}</span>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div>
      {" "}
      <div className="mb-10">
        <Link to={"/"}>
          <IoArrowBack className="text-3xl ml-4 mt-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 max-w-6xl mx-auto  lg:grid-cols-3   place-items-center">
        {projectData?.map((project) => (
          <Link to={`/projects/${project._id}`}>
            <div
              key={project._id}
              className="justify-self-center   rounded-[10px]"
            >
              {/* img part */}
              <div className="w-[360px]  h-[180px] flex items-center justify-center rounded-[10px] overflow-hidden">
                <div className="max-w-full max-h-full">
                  <img
                    src={project?.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* text part */}
              <div className="mt-[15px]">
                <span className="font-semibold text-base">Author : </span>
                <span className="font-normal text-base ">
                  {project?.author}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
