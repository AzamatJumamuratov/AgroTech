import { useRef, useState } from "react";
import FormInput from "../../Common/FormInput";
import { Form } from "react-router";
import ErrorMessage from "../../Auth/ErrorMessage";
import LanguageSwitcher, {
  languages as data_languages,
} from "../../Admin/LanguageSwitcher";

const AdminContactsModal = ({
  email,
  phone,
  translations,
  closeFN,
  submitFN,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const emailRef = useRef();
  const phoneRef = useRef();
  const [error, setError] = useState();
  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [localTranslations, setLocalTranslations] = useState(
    translations || {}
  );
  const [formErrors, setFormErrors] = useState([]);

  const handleInputChange = (lang, value) => {
    setLocalTranslations((prev) => ({
      ...prev,
      [lang]: {
        ...(prev[lang] || {}),
        address: value,
      },
    }));
  };

  const parseErrorMessages = (errorJson) => {
    const result = [];
    for (const key in errorJson) {
      if (Array.isArray(errorJson[key])) {
        errorJson[key].forEach((message) => {
          result.push(`${message}`);
        });
      }
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormErrors([]);

    const missingLanguages = data_languages.filter(
      (lang) => !localTranslations[lang]?.address?.trim()
    );

    if (missingLanguages.length > 0) {
      setSubmitting(false);
      setFormErrors(
        missingLanguages.map(
          (lang) => `Поле "Адрес" не заполнено для языка: ${lang.toUpperCase()}`
        )
      );
      return;
    }

    submitFN(
      {
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        translations: localTranslations,
      },
      () => {
        closeFN();
        setSubmitting(false);
      },
      (error) => {
        setSubmitting(false);
        setError(error);
      }
    );
  };

  return (
    <div className="z-50 fixed flex justify-center items-center left-0 top-0 w-full h-full bg-black/30">
      <div className="p-2 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
        <div className="flex md:flex-row flex-col">
          <div className="p-3 w-full">
            {error &&
              parseErrorMessages(error).map((errorString, i) => (
                <ErrorMessage key={i} message={errorString} />
              ))}
            {formErrors.length > 0 &&
              formErrors.map((err, i) => (
                <ErrorMessage key={`fe-${i}`} message={err} />
              ))}

            <Form onSubmit={handleSubmit}>
              <FormInput
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                defaultValue={email}
                placeholder="Email"
                additionalClass="mt-4"
              />
              <FormInput
                ref={phoneRef}
                type="text"
                name="phone"
                id="phone"
                defaultValue={phone}
                placeholder="Номер Телефона"
              />

              <div className="mt-4">
                <LanguageSwitcher
                  active={activeLanguage}
                  setActive={setActiveLanguage}
                  additionalClass="mb-2"
                />

                <FormInput
                  type="text"
                  name={`address-${activeLanguage}`}
                  id={`address-${activeLanguage}`}
                  value={localTranslations[activeLanguage]?.address || ""}
                  onChange={(e) =>
                    handleInputChange(activeLanguage, e.target.value)
                  }
                  placeholder={`Адрес (${activeLanguage.toUpperCase()})`}
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={closeFN}
                  className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
                    isSubmitting ? "" : "active:bg-[#83373f]"
                  } disabled:opacity-40`}
                >
                  Отменить
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen ${
                    isSubmitting ? "" : "active:bg-[#59712d]"
                  } disabled:opacity-40`}
                >
                  {isSubmitting ? "Сохранение.." : "Сохранить"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContactsModal;
