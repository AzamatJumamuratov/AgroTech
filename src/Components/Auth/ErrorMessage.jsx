const ErrorMessage = ({ message, additionalClass }) => {
  return (
    <div
      className={`bg-red-50 border-l-4 border-red-400 p-4 ${
        additionalClass ?? ""
      }`}
    >
      <div className="flex">
        <div className="ml-3">
          <p className="text-sm text-red-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
