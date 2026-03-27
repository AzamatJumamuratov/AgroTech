import { useEffect, useState } from "react";
import AdditionalImagesDropZone from "../../Common/AdditionalImagesDropZone";

const ManageAdditionalImagesModal = ({
  existingImages = [],
  onClose,
  onSave,
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initial = existingImages.map((img) => ({
      type: "existing",
      ...img,
    }));
    setImages(initial);
  }, [existingImages]);

  const handleRemove = (target) => {
    if (target.type === "existing") {
      setImages((prev) =>
        prev.map((img) =>
          img === target ? { ...img, markedForDeletion: true } : img
        )
      );
    } else {
      setImages((prev) => prev.filter((img) => img !== target));
    }
  };

  const handleRestore = (target) => {
    setImages((prev) =>
      prev.map((img) =>
        img === target ? { ...img, markedForDeletion: false } : img
      )
    );
  };

  const handleAddNewFiles = (newFiles) => {
    const withPreview = newFiles.map((file) => ({
      file,
      image: URL.createObjectURL(file),
      type: "new",
    }));
    setImages((prev) => [...prev, ...withPreview]);
  };

  const handleSave = () => {
    onSave(images);
    console.log(images);
  };

  const activeImages = images.filter(
    (img) =>
      img.type === "new" || (img.type === "existing" && !img.markedForDeletion)
  );

  const deletedImages = images.filter(
    (img) => img.type === "existing" && img.markedForDeletion
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4">Дополнительные фотографии</h2>

        {/* Активные изображения */}
        {activeImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {activeImages.map((img, idx) => (
              <div key={idx} className="relative group">
                <img
                  src={img.image}
                  alt={img.caption || "image"}
                  className="rounded-lg object-cover w-full h-40"
                />
                {img.type === "new" && (
                  <span className="absolute top-1 left-1 bg-blue-600 text-white text-xs px-2 py-0.5 rounded">
                    Новый
                  </span>
                )}
                {img.caption && (
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {img.caption}
                  </p>
                )}
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded p-1"
                  onClick={() => handleRemove(img)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <AdditionalImagesDropZone onAddFiles={handleAddNewFiles} />

        {/* Удалённые изображения */}
        {deletedImages.length > 0 && (
          <>
            <h3 className="text-md font-semibold mt-6 mb-2 text-red-600">
              Помеченные на удаление
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {deletedImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group opacity-50 hover:opacity-100 transition"
                >
                  <img
                    src={img.image}
                    alt={img.caption || "deleted"}
                    className="rounded-lg object-cover w-full h-40"
                  />
                  <div className="absolute inset-0 bg-red-700/40 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    Удалено
                  </div>
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-green-600 text-white text-xs rounded p-1"
                    onClick={() => handleRestore(img)}
                  >
                    Восстановить
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="text-white bg-gray-500 px-4 py-2 rounded-xl"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="text-white bg-primaryGreen px-4 py-2 rounded-xl"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAdditionalImagesModal;
