import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ErrorMessage from "../../Components/Auth/ErrorMessage";

const MAX_TOTAL_SIZE = 15 * 1024 * 1024; // 15 MB

const AdditionalImagesDropZone = ({ onAddFiles }) => {
  const [error, setError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setError("");

      if (fileRejections.length > 0) {
        setError("Разрешены только изображения (jpg, jpeg, png, webp)");
        return;
      }

      const totalSize = acceptedFiles.reduce((acc, file) => acc + file.size, 0);

      if (totalSize > MAX_TOTAL_SIZE) {
        setError("Общий размер файлов не должен превышать 15MB.");
        return;
      }

      onAddFiles(acceptedFiles);
    },
    [onAddFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
  });

  return (
    <div className="mt-4">
      <div
        {...getRootProps({
          className:
            "border-2 border-dashed border-blue-400 bg-blue-50 rounded-xl h-32 flex items-center justify-center p-2",
        })}
      >
        <input {...getInputProps()} />
        <p className="text-blue-600">
          {isDragActive
            ? "Отпустите здесь!"
            : "Перетащите дополнительные фотографии сюда"}
        </p>
      </div>

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default AdditionalImagesDropZone;
