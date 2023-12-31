import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="w-[90%] mx-auto text-center">
      <div className="flex items-center gap-2 mb-2 mt-3">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            className="font-semibold my-1 text-xs bg-[#6469ff] py-1 px-2 rounded-[5px] text-white"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-grey-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
