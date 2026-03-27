import { Form, useActionData, useSubmit } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import DropZone from "../../../Components/Common/DropZone";
import { useEffect, useRef, useState } from "react";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher, {
  languages as data_languages,
} from "../../../Components/Admin/LanguageSwitcher";
import ErrorMessage from "../../../Components/Auth/ErrorMessage";

const AdminProjectsForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [translations, setTranslations] = useState({});
  const [formErrors, setFormErrors] = useState([]);
  const [isCreating, setIsCreating] = useState(false);

  const imageFileRef = useRef(null);
  const formRef = useRef(null);
  const submit = useSubmit();
  const actionData = useActionData();

  const handleFileSelect = (file) => {
    setPreviewImage(URL.createObjectURL(file));
    imageFileRef.current = file;
  };

  useEffect(() => {
    if (actionData?.success) {
      formRef.current.reset();
      imageFileRef.current = null;
      setPreviewImage(null);
      setTranslations({});
      setFormErrors([]);
      setIsCreating(false);
    }
  }, [actionData]);

  const handleInputChange = (lang, field, value) => {
    setTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsCreating(true);
    const formData = new FormData(formRef.current);
    formData.delete("title");
    formData.delete("description");

    if (imageFileRef.current) {
      formData.set("image", imageFileRef.current, imageFileRef.current.name);
    }

    const errors = [];

    const filteredTranslations = {};
    data_languages.forEach((lang) => {
      const title = translations[lang]?.title?.trim();
      const description = translations[lang]?.description?.trim();
      if (!title || !description) {
        errors.push(`Поля не заполнены для языка: ${lang.toUpperCase()}`);
      } else {
        filteredTranslations[lang] = { title, description };
      }
    });

    if (errors.length > 0) {
      setFormErrors(errors);
      setIsCreating(false);
      return;
    }

    formData.set("translations", JSON.stringify(filteredTranslations));
    setFormErrors([]);

    submit(formData, {
      method: "post",
      encType: "multipart/form-data",
      action: "/admin/projects/new",
    });
  }

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание проекта</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-6 xl:p-6 lg:p-4 p-3 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10 mb-6"
        onSubmit={handleSubmit}
      >
        <LanguageSwitcher
          active={activeLanguage}
          setActive={setActiveLanguage}
          multiple={false}
          additionalClass="mb-4"
        />

        <label htmlFor="title">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Заголовок проекта : {activeLanguage.toUpperCase()}
          </span>
          <FormInput
            type="text"
            name={`title_${activeLanguage}`}
            id="title"
            value={translations[activeLanguage]?.title || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "title", e.target.value)
            }
            additionalClass="mt-3"
          />
        </label>

        <label htmlFor="description">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Содержание : {activeLanguage.toUpperCase()}
          </span>
          <CustomTextArea
            type="text"
            name={`description_${activeLanguage}`}
            id="description"
            value={translations[activeLanguage]?.description || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "description", e.target.value)
            }
            additionalClass="mt-3 lg:min-h-40 min-h-24"
          />
        </label>

        <label htmlFor="image">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Фотографии
          </span>
          <DropZone onFileSelect={handleFileSelect} />
          <div className="mt-4">
            {previewImage && (
              <>
                <span>Предпросмотр</span>
                <div className="flex gap-6 items-center">
                  <img src={previewImage} className="w-1/2 rounded-lg mt-3" />
                  <button
                    type="button"
                    disabled={isCreating}
                    onClick={() => setPreviewImage(null)}
                    className={`xl:p-3 lg:p-2 p-2 2xl:text-3xl xl:text-xl lg:text-base text-xs rounded-xl bg-red-400 text-white ${
                      isCreating ? "" : "active:bg-red-800"
                    } disabled:opacity-40`}
                  >
                    Убрать
                  </button>
                </div>
              </>
            )}
          </div>
        </label>

        {formErrors.length > 0 && (
          <div className="mt-6 space-y-2">
            {formErrors.map((err, idx) => (
              <ErrorMessage key={idx} message={err} />
            ))}
          </div>
        )}

        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            disabled={isCreating}
            className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-6 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] ${
              isCreating ? "" : "active:bg-[#424b91]"
            } disabled:opacity-40`}
          >
            Опубликовать проект
          </button>
          <button
            type="reset"
            disabled={isCreating}
            onClick={() => {
              setPreviewImage(null);
              setTranslations({});
              setFormErrors([]);
            }}
            className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-6 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] ${
              isCreating ? "" : "active:bg-[#5a5a5a]"
            } disabled:opacity-40`}
          >
            Очистить
          </button>
        </div>
      </Form>
    </>
  );
};

export default AdminProjectsForm;
