import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomInput/CustomInput";
const CreateNewProject = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div>
        <Link to={"/"}>
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
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewProject;
