import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
const CreateNewProject = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <IoArrowBack className="text-3xl ml-4 mt-1" />
        </Link>
      </div>
      <form>
        <div className="flex flex-col gap-5 justify-center items-center pt-16 lg:h-[80vh] bg-dashboardBg">
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Author</span>
            <div className=" ">
              <input
                type="text"
                value=""
                placeholder="Enter author name"
                class="mt-1 block w-[20rem]  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </div>
          </label>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Width</span>
            <div className=" ">
              <input
                type="text"
                value=""
                placeholder="Enter width"
                class="mt-1 block w-[20rem]  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </div>
          </label>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Height</span>
            <div className=" ">
              <input
                type="text"
                value=""
                placeholder="Enter height"
                class="mt-1 block w-[20rem]  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </div>
          </label>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Image</span>
            <div className=" ">
              <input
                type="text"
                value=""
                placeholder="Paste an image link"
                class="mt-1 block w-[20rem]  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </div>
          </label>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProject;
