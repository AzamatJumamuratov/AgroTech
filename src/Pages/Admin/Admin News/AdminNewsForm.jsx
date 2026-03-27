import { Form, useActionData, useSubmit } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import DropZone from "../../../Components/Common/DropZone";
import { useEffect, useRef, useState } from "react";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import Notification from "../../../Components/Common/Notification";
import NewsTags from "../../../Components/Admin/NewsTags";
import LanguageSwitcher, {
  languages,
} from "../../../Components/Admin/LanguageSwitcher";
import ErrorMessage from "../../../Components/Auth/ErrorMessage";
import AdditionalImagesDropZone from "../../../Components/Common/AdditionalImagesDropZone";

const AdminNewsForm = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [translations, setTranslations] = useState({});
  const [formErrors, setFormErrors] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [additionalImages, setAdditionalImages] = useState([]);

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
      setTags([]);
      setTranslations({});
      setFormErrors([]);
      setAdditionalImages([]);
    }
    setIsCreating(false);
  }, [actionData]);

  const handleInputChange = (lang, field, value) => {
    setTranslations((prev) => {
      const updated = {
        ...prev,
        [lang]: {
          ...prev[lang],
          [field]: value,
        },
      };
      if (!value.trim()) {
        if (!updated[lang].title?.trim() || !updated[lang].content?.trim()) {
          delete updated[lang];
        }
      }
      return { ...updated };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsCreating(true);
    const formData = new FormData(formRef.current);
    formData.delete("title");
    formData.delete("content");

    if (imageFileRef.current) {
      formData.set("image", imageFileRef.current, imageFileRef.current.name);
    }

    formData.set("tags", JSON.stringify(tags));

    const requiredLangs = languages;
    const missing = [];

    for (let lang of requiredLangs) {
      const title = translations[lang]?.title?.trim();
      const content = translations[lang]?.content?.trim();
      if (!title || !content) {
        missing.push(`Поля не заполнены для языка: ${lang.toUpperCase()}`);
      }
    }

    if (missing.length > 0) {
      setFormErrors(missing);
      setIsCreating(false);
      return;
    }

    const filteredTranslations = {};
    requiredLangs.forEach((lang) => {
      filteredTranslations[lang] = {
        title: translations[lang].title.trim(),
        content: translations[lang].content.trim(),
      };
    });

    formData.set("translations", JSON.stringify(filteredTranslations));
    additionalImages.forEach((file, i) => {
      formData.append(`images[${i}][image]`, file);
      formData.append(`images[${i}][caption]`, "");
    });

    setFormErrors([]);

    submit(formData, {
      method: "post",
      encType: "multipart/form-data",
      action: "/admin/news/new",
    });
  }

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание новости</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-6 xl:p-6 lg:p-4 p-3 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10 mb-6"
        onSubmit={handleSubmit}
      >
        <LanguageSwitcher
          active={activeLanguage}
          setActive={setActiveLanguage}
          additionalClass="mb-4"
        />

        <label htmlFor="title">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Заголовок новости : {activeLanguage.toUpperCase()}
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
            name={`content_${activeLanguage}`}
            id="content"
            value={translations[activeLanguage]?.content || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "content", e.target.value)
            }
            additionalClass="mt-3 lg:min-h-40 min-h-24"
          />
        </label>

        <label htmlFor="image" className="block mt-6">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Главная фотография
          </span>
          <DropZone onFileSelect={handleFileSelect} />
          <div className="mt-4">
            {previewImage && (
              <>
                <span>Предпросмотр</span>
                <div className="flex gap-6 items-center">
                  <img src={previewImage} className="w-1/2 rounded-lg mt-3" />
                  <button
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

        <label htmlFor="youtube_url" className="block mt-6">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Ссылка на видео YouTube
          </span>
          <FormInput
            type="url"
            name="youtube_url"
            id="youtube_url"
            placeholder="https://youtube.com/..."
            additionalClass="mt-3"
          />
        </label>

        <label htmlFor="images" className="block mt-6">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Дополнительные фотографии
          </span>
          <AdditionalImagesDropZone
            onAddFiles={(acceptedFiles) => setAdditionalImages(acceptedFiles)}
          />
          {additionalImages.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {additionalImages.map((file, idx) => (
                <img
                  key={idx}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </label>

        <div className="mt-6">
          <NewsTags tags={tags} setTags={setTags} />
        </div>

        {formErrors.length > 0 && (
          <div className="mt-6 space-y-2">
            {formErrors.map((msg, idx) => (
              <ErrorMessage key={idx} message={msg} />
            ))}
          </div>
        )}

        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            disabled={isCreating}
            className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-7 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] ${
              isCreating ? "" : "active:bg-[#424b91]"
            } disabled:opacity-40`}
          >
            Опубликовать новость
          </button>
          <button
            type="reset"
            disabled={isCreating}
            onClick={() => {
              setPreviewImage(null);
              setTags([]);
              setAdditionalImages([]);
            }}
            className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-7 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] ${
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

export default AdminNewsForm;
