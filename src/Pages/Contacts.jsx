import { useActionData } from "react-router";
import { useRef } from "react";
import CustomForm from "../Components/Common/CustomForm";
import CustomTextArea from "../Components/Common/CustomTextArea";
import FormInput from "../Components/Common/FormInput";
import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const actionData = useActionData();
  const { t } = useTranslation();
  const formRef = useRef(null);
  if (actionData) {
    formRef.current.reset();
  }
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("contacts_title")} />
        <CustomForm
          ref={formRef}
          method={"post"}
          result={actionData}
          formTitle={t("contacts_form_title")}
          buttonText={t("contacts_form_button")}
        >
          <FormInput
            name={"name"}
            id={"name"}
            type={"text"}
            required={true}
            placeholder={t("contacts_form_name")}
          />
          <FormInput
            name={"email"}
            id={"email"}
            type={"email"}
            required={true}
            placeholder={t("contacts_form_email")}
          />
          <FormInput
            name={"phone"}
            id={"phone"}
            type={"number"}
            required={true}
            placeholder={t("contacts_form_phone")}
          />
          <CustomTextArea
            required={true}
            name={"message"}
            placeholder={t("contacts_form_message")}
            additionalClass={"xl:min-h-96 lg:min-h-72  md:min-h-64 min-h-48"}
          />
        </CustomForm>
      </div>
    </main>
  );
};

export default Contacts;
