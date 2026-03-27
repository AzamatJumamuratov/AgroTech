import { Form, useActionData, useSubmit } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import { useEffect, useRef, useState } from "react";
import Notification from "../../../Components/Common/Notification";
import LanguageSwitcher, {
  languages as data_languages,
} from "../../../Components/Admin/LanguageSwitcher";
import ErrorMessage from "../../../Components/Auth/ErrorMessage";

const AdminAboutForm = () => {
  const actionData = useActionData();
  const submit = useSubmit();
  const formRef = useRef(null);

  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [translations, setTranslations] = useState({});
  const [formErrors, setFormErrors] = useState([]);
  const [isCreating, setIsCreating] = useState(false); // <-- Новое состояние

  useEffect(() => {
    if (actionData?.success) {
      formRef.current.reset();
      setTranslations({});
      setFormErrors([]);
      setIsCreating(false); // <-- Сбрасываем после отправки
    }
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

      if (!updated[lang].title?.trim() && !updated[lang].description?.trim()) {
        const { [lang]: _, ...rest } = updated;
        return rest;
      }

      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCreating(true); // <-- Устанавливаем при начале отправки

    const errors = [];
    const filteredTranslations = {};

    for (const lang of data_languages) {
      const title = translations[lang]?.title?.trim();
      const description = translations[lang]?.description?.trim();

      if (!title || !description) {
        errors.push(`Поля не заполнены для языка: ${lang.toUpperCase()}`);
      } else {
        filteredTranslations[lang] = { title, description };
      }
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      setIsCreating(false); // <-- Сбрасываем, если есть ошибки
      return;
    }

    const formData = new FormData();
    formData.set("translations", JSON.stringify(filteredTranslations));

    setFormErrors([]);
    submit(formData, {
      method: "post",
      encType: "multipart/form-data",
      action: "/admin/about/new",
    });
  };

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Создание Информации О Компании</AdminTitle>
      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-9 xl:p-6 lg:p-4 p-3 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10 mb-6"
        onSubmit={handleSubmit}
      >
        <LanguageSwitcher
          active={activeLanguage}
          setActive={setActiveLanguage}
          additionalClass="mb-4"
        />

        <label htmlFor={`title-${activeLanguage}`}>
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Заголовок : {activeLanguage.toUpperCase()}
          </span>
          <FormInput
            type="text"
            id={`title-${activeLanguage}`}
            name={`title-${activeLanguage}`}
            value={translations[activeLanguage]?.title || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "title", e.target.value)
            }
            additionalClass="mt-3"
          />
        </label>

        <label htmlFor={`description-${activeLanguage}`}>
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Содержание : {activeLanguage.toUpperCase()}
          </span>
          <CustomTextArea
            id={`description-${activeLanguage}`}
            name={`description-${activeLanguage}`}
            value={translations[activeLanguage]?.description || ""}
            onChange={(e) =>
              handleInputChange(activeLanguage, "description", e.target.value)
            }
            additionalClass="mt-3 lg:min-h-40 min-h-24"
          />
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
            className={`2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] ${
              isCreating ? "" : "active:bg-[#424b91]"
            } disabled:opacity-40`}
          >
            Опубликовать Информацию
          </button>
          <button
            type="reset"
            disabled={isCreating}
            onClick={() => {
              setTranslations({});
              setFormErrors([]);
            }}
            className={`2xl:py-6 xl:py-4 lg:py-3 py-2 2xl:px-9 xl:px-8 lg:px-4 px-3 2xl:text-almostN xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] ${
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

export default AdminAboutForm;
