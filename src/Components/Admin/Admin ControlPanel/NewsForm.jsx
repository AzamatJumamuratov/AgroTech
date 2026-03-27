import { Form } from "react-router";
import FormInput from "../../Common/FormInput";
import DropZone from "../../Common/DropZone";
import { useRef, useState } from "react";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../Common/CustomTextArea";

const NewsForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const handleFileSelect = (file) => {
    // обновляем скрытый file input (если нужно)
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInputRef.current.files = dataTransfer.files;
  };
  return (
    <>
      <AdminTitle type="h1">Создание новости</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-9 xl:p-6 lg:p-4 p-3 rounded-3xl  shadow-[0px_0px_10px_0] shadow-black/10"
      >
        <label htmlFor="title" className="">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Заголовок новости
          </span>
          <FormInput
            type={"text"}
            name={"title"}
            id={"title"}
            autoComplete={"title"}
            additionalClass={"mt-3"}
          />
        </label>
        <label htmlFor="description" className="">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Содержание
          </span>
          <CustomTextArea
            type={"text"}
            name={"description"}
            id={"description"}
            autoComplete={"title"}
            additionalClass={"mt-3 lg:min-h-40 min-h-24"}
          />
        </label>
        <label htmlFor="image" className="">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Фотографии
          </span>
          <DropZone
            preview={previewImage}
            setPreview={setPreviewImage}
            onFileSelect={handleFileSelect}
          />
          {/* Скрытый input для файла (чтобы FormData работал) */}
          <input
            type="file"
            name="image"
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </label>
        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] active:bg-[#424b91]"
          >
            Опубликовать новость
          </button>
          <button
            type="reset"
            onClick={() => setPreviewImage(null)}
            className="2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] active:bg-[#5a5a5a]"
          >
            Очистить
          </button>
        </div>
      </Form>
    </>
  );
};

export default NewsForm;
