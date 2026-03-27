import { useRef, useState } from "react";
import FormInput from "../../Common/FormInput";
import ErrorMessage from "../../Auth/ErrorMessage";

const AdminSocialLinksModal = ({
  telegram,
  instagram,
  // facebook,
  linkedin,
  closeFN,
  submitFN,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState();

  const telegramRef = useRef();
  const instagramRef = useRef();
  // const facebookRef = useRef();
  const linkedinRef = useRef();

  // Функция, которая подставляет заглушку, если поле пустое
  const getSocialValue = (ref, fallback) => {
    const value = ref.current?.value?.trim();
    return value ? value : fallback;
  };

  // Заглушки по умолчанию
  const defaultLinks = {
    telegram: "https://t.me/#",
    instagram: "https://instagram.com/#",
    // facebook: "https://facebook.com/#",
    linkedin: "https://linkedin.com/#",
  };

  const handleSubmit = () => {
    setSubmitting(true);
    const payload = {
      telegram: getSocialValue(telegramRef, defaultLinks.telegram),
      instagram: getSocialValue(instagramRef, defaultLinks.instagram),
      // facebook: getSocialValue(facebookRef, defaultLinks.facebook),
      linkedin: getSocialValue(linkedinRef, defaultLinks.linkedin),
    };

    submitFN(
      payload,
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
      <div className="p-4 bg-white rounded-xl shadow-[0px_4px_15px_0px] shadow-black/10">
        <div className="flex md:flex-row flex-col">
          <div className="p-3">
            {error &&
              parseErrorMessages(error).map((errorString) => (
                <ErrorMessage key={errorString} message={errorString} />
              ))}

            <FormInput
              ref={telegramRef}
              required={false}
              type="url"
              name="telegram"
              id="telegram"
              defaultValue={telegram}
              placeholder="telegram"
              additionalClass="mt-4"
            />
            <FormInput
              ref={instagramRef}
              required={false}
              type="url"
              name="instagram"
              id="instagram"
              defaultValue={instagram}
              placeholder="instagram"
            />
            {/* <FormInput
              ref={facebookRef}
              type="url"
              required={false}
              name="facebook"
              id="facebook"
              defaultValue={facebook}
              placeholder="facebook"
            /> */}
            <FormInput
              ref={linkedinRef}
              required={false}
              type="url"
              name="linkedin"
              id="linkedin"
              defaultValue={linkedin}
              placeholder="linkedin"
            />

            <div className="flex gap-4 mt-4">
              <button
                disabled={isSubmitting}
                onClick={closeFN}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-[#DC3545] ${
                  isSubmitting ? "" : "active:bg-[#83373f]"
                } disabled:opacity-40`}
              >
                Отменить
              </button>

              <button
                disabled={isSubmitting}
                onClick={handleSubmit}
                className={`2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-8 xl:px-6 lg:px-4 px-3 2xl:text-xl xl:text-base lg:text-sm text-xs rounded-xl text-white bg-primaryGreen ${
                  isSubmitting ? "" : "active:bg-[#59712d]"
                } disabled:opacity-40`}
              >
                {isSubmitting ? "Сохранение.." : "Сохранить"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function parseErrorMessages(errorJson) {
    const result = [];
    for (const key in errorJson) {
      if (Array.isArray(errorJson[key])) {
        errorJson[key].forEach((message) => {
          result.push(`${key}: ${message}`);
        });
      }
    }
    return result;
  }
};

export default AdminSocialLinksModal;
