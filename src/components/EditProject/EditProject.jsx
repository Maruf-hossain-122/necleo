import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput/CustomInput";
import { backend_url } from "../../utils";
import toast from "react-hot-toast";
const EditProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [projectData, setProjectData] = useState("");
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    fetch(`${backend_url}/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  const onSubmit = (data) => {
    fetch(`${backend_url}/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Project updated successfully");
        reset();
      })
      .catch((error) => {
        // Handle errors during the fetch
        toast.error("Something went wrong");
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <Link to={`/projects/${id}`}>
          <IoArrowBack className="text-3xl ml-4 mt-1" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 justify-center items-center pt-16 lg:h-[80vh] bg-dashboardBg">
          <CustomInput
            label="Author"
            name="author"
            placeholder="Enter author name"
            register={register}
            errors={errors}
          />
          <CustomInput
            label="Width"
            name="width"
            placeholder="Enter width"
            register={register}
            errors={errors}
          />
          <CustomInput
            label="Height"
            name="height"
            placeholder="Enter height"
            register={register}
            errors={errors}
          />
          <CustomInput
            label="Image"
            name="image"
            placeholder="Paste an image link"
            register={register}
            errors={errors}
          />

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 bg-primary text-dashboardBg font-semibold py-2 px-4 border border-blue-700 rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
