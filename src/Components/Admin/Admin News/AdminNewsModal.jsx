import { useState, useRef, useEffect } from "react";
import DropZone from "../../../Components/Common/DropZone";
import AdditionalImagesDropzone from "../../Common/AdditionalImagesDropZone";
import ErrorMessage from "../../../Components/Auth/ErrorMessage";
import FormInput from "../../Common/FormInput";

const UpdateNewsModal = ({ initialValues, onClose, onSubmit }) => {
  const [translations, setTranslations] = useState(initialValues.translations);
  const [youtubeUrl, setYoutubeUrl] = useState(initialValues.youtube_url || "");
  const imageFileRef = useRef(null);
  const [imageError, setImageError] = useState("");
  const additionalImagesRef = useRef({
    keep: initialValues.images || [],
    upload: [],
  });
  const [additionalImagesError, setAdditionalImagesError] = useState("");

  const handleSave = () => {
    if (imageError || additionalImagesError) return;

    onSubmit({
      translations,
      youtube_url: youtubeUrl,
      image: imageFileRef.current,
      images: additionalImagesRef.current,
    });
  };

  return (
    <div className="p-4">
      <FormInput
        type="text"
        placeholder="YouTube ссылка"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />

      <label className="block mt-4 text-sm font-semibold">
        Главная фотография
      </label>
      <DropZone
        onFileSelect={(file) => {
          setImageError("");
          imageFileRef.current = file;
        }}
        setError={setImageError}
      />
      <ErrorMessage error={imageError} />

      <label className="block mt-4 text-sm font-semibold">
        Дополнительные фотографии
      </label>
      <AdditionalImagesDropzone
        onFilesChange={({ keep, upload }) => {
          setAdditionalImagesError("");
          additionalImagesRef.current = { keep, upload };
        }}
        setError={setAdditionalImagesError}
        existingImages={initialValues.images || []}
      />
      <ErrorMessage error={additionalImagesError} />

      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={onClose}
          className="bg-gray-400 text-white px-4 py-2 rounded-xl"
        >
          Отмена
        </button>
        <button
          onClick={handleSave}
          className="bg-green-600 text-white px-4 py-2 rounded-xl"
        >
          Обновить
        </button>
      </div>
    </div>
  );
};

export default UpdateNewsModal;
