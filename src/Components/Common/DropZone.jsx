import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ErrorMessage from "../../Components/Auth/ErrorMessage";
const DropZone = ({ onFileSelect }) => {
  const [error, setError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setError("");

      if (fileRejections.length > 0) {
        setError("Только изображения (jpg, png, jpeg, webp) разрешены!");
        return;
      }

      const file = acceptedFiles[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
    maxFiles: 1,
  });

  return (
    <>
      <div
        {...getRootProps({
          className:
            "border-2 border-dashed border-primaryGreen bg-primaryGreen/10 rounded-xl 2xl:h-40 xl:h-30 lg:h-20 h-20 flex items-center justify-center mt-3 p-2",
        })}
      >
        <input {...getInputProps()} />
        <p className="z-40 2xl:text-largerN xl:text-almostN text-[#759933]">
          {isDragActive ? "Поместите здесь!" : "Загрузить фотографию"}
        </p>
      </div>

      {error && <ErrorMessage message={error} additionalClass={"mt-4"} />}
    </>
  );
};

export default DropZone;
