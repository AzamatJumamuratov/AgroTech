const CustomTextArea = ({
  name,
  id,
  required,
  placeholder,
  minLength,
  additionalClass,
  ...props
}) => {
  return (
    <textarea
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      minLength={minLength}
      {...props}
      className={`w-full mb-4 border-2 border-[#F1F1F1] bg-white rounded-lg lg:rounded-2xl  xl:text-xl lg:text-sm text-xs xl:py-6 lg:py-4 py-2 xl:px-9 lg:px-6 px-2 ${
        additionalClass || ""
      }`}
    />
  );
};

export default CustomTextArea;
