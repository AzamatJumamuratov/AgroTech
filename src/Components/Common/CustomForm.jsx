import { Form } from "react-router";
import Notification from "./Notification";

const CustomForm = ({
  ref,
  action,
  method,
  buttonText,
  result,
  formTitle,
  children,
  ...props
}) => {
  return (
    <>
      <Notification result={result} durationSeconds={3000} />

      <div className="bg-almostWhite rounded-2xl border-2 border-[#F1F1F1] px-4 py-4">
        <h2 className="xl:text-3xl lg:text-2xl text-xl font-bold xl:mb-6 lg:mb-4 mb-4">
          {formTitle}
        </h2>
        <Form
          ref={ref}
          action={action}
          method={method}
          className="flex flex-col items-start"
          {...props}
        >
          {children}
          <button
            type="submit"
            className="bg-primary xl:text-lg lg:text-sm text-xs text-white rounded-lg px-6 py-2"
          >
            {buttonText || "Submit"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default CustomForm;
