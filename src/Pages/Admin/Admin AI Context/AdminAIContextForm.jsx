import { Form, useActionData } from "react-router";
import FormInput from "../../../Components/Common/FormInput";
import CustomTextArea from "../../../Components/Common/CustomTextArea";
import AdminTitle from "../../../Components/Admin/AdminTitle";
import Notification from "../../../Components/Common/Notification";
import { useEffect, useRef, useState } from "react";

const AdminAIContextForm = () => {
  const actionData = useActionData();
  const formRef = useRef(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    if (actionData?.success) {
      formRef.current?.reset();
    }
    setIsCreating(false);
  }, [actionData]);

  return (
    <>
      <Notification result={actionData} />
      <AdminTitle type="h1">Добавить контекст для ИИ</AdminTitle>

      <p className="text-sm text-gray-500 mb-6">
        Контекст — это инструкция или информация, которую ИИ будет учитывать при ответах.
        Например: описание компании, правила общения, специальные данные.
      </p>

      <Form
        ref={formRef}
        method="POST"
        className="2xl:p-6 xl:p-6 lg:p-4 p-3 rounded-3xl shadow-[0px_0px_10px_0] shadow-black/10 mb-6 space-y-5"
        onSubmit={() => setIsCreating(true)}
      >
        <label htmlFor="key">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Ключ (уникальный идентификатор)
          </span>
          <FormInput
            type="text"
            name="key"
            id="key"
            required
            placeholder="company_description, agronomist_rules, greeting..."
            additionalClass="mt-2"
          />
        </label>

        <label htmlFor="title">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Название
          </span>
          <FormInput
            type="text"
            name="title"
            id="title"
            required
            placeholder="Описание компании"
            additionalClass="mt-2"
          />
        </label>

        <label htmlFor="content">
          <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
            Содержание контекста
          </span>
          <CustomTextArea
            name="content"
            id="content"
            required
            placeholder="Текст инструкции или информации для ИИ..."
            additionalClass="mt-2 min-h-40"
          />
        </label>

        <div className="flex gap-6 items-center">
          <label htmlFor="priority" className="flex-1">
            <span className="2xl:text-2xl xl:text-xl lg:text-base text-sm text-[#666666]">
              Приоритет (чем больше — тем выше)
            </span>
            <FormInput
              type="number"
              name="priority"
              id="priority"
              defaultValue="0"
              additionalClass="mt-2"
            />
          </label>

          <label className="flex items-center gap-3 mt-6">
            <input type="hidden" name="is_active" value="true" />
            <span className="2xl:text-xl xl:text-lg lg:text-base text-sm text-[#666666]">
              Активен
            </span>
          </label>
        </div>

        <div className="flex gap-6 mt-9 text-white">
          <button
            type="submit"
            disabled={isCreating}
            className="2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-7 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#6877E0] active:bg-[#5563c7] disabled:opacity-40"
          >
            Сохранить контекст
          </button>
          <button
            type="reset"
            disabled={isCreating}
            className="2xl:py-4 xl:py-4 lg:py-3 py-2 2xl:px-7 xl:px-8 lg:px-4 px-3 2xl:text-2xl xl:text-xl lg:text-sm text-xs rounded-xl bg-[#999999] active:bg-[#5a5a5a] disabled:opacity-40"
          >
            Очистить
          </button>
        </div>
      </Form>
    </>
  );
};

export default AdminAIContextForm;
