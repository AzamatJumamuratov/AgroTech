const FormInput = ({
  name,
  id,
  type,
  autoComplete,
  placeholder,
  required,
  minLength,
  additionalClass,
  ...props
}) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      minLength={minLength}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required={required}
      {...props}
      className={`xl:mb-6 lg:mb-4 mb-2 w-full border-2 border-[#F1F1F1] bg-white rounded-lg lg:rounded-2xl  xl:text-xl lg:text-sm text-xs xl:py-4 lg:py-3 py-2 xl:px-9 lg:px-6 px-2 ${
        additionalClass || ""
      }`}
    />
  );
};

export default FormInput;
