import { useRef } from "react";
import { useActionData } from "react-router";
import CustomForm from "../Common/CustomForm";
import FormInput from "../Common/FormInput";
import CustomTextArea from "../Common/CustomTextArea";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const actionData = useActionData();
  const formRef = useRef(null);
  if (actionData) {
    console.log(actionData);
    formRef.current.reset();
  }
  return (
    <>
      <CustomForm
        ref={formRef}
        method="POST"
        result={actionData}
        buttonText={t("projects_form_button")}
        formTitle={t("projects_form_title")}
      >
        <FormInput
          name="name_project"
          id="name_project"
          type="text"
          autoComplete="name_project"
          placeholder={t("projects_form_input_name")}
          required
        />
        <CustomTextArea
          name="comment"
          id="comment"
          required
          minLength={10}
          placeholder={t("projects_form_message")}
          additionalClass={"xl:min-h-96 lg:min-h-72  md:min-h-64 min-h-48"}
        />
      </CustomForm>
    </>
  );
};

export default ContactForm;
