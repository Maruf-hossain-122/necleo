import React from "react";

const CustomInput = ({ label, name, placeholder, register, errors }) => (
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">{label}</span>
    <div className=" ">
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 block w-[20rem]  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        {...register(name, { required: `Please enter ${label.toLowerCase()}` })}
      />
      {errors[name] && <span className="text-red">{errors[name].message}</span>}
    </div>
  </label>
);
export default CustomInput;
