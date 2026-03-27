import { useTranslation } from "react-i18next";

const EmptyMessage = () => {
  const { t } = useTranslation();
  return (
    <p className="xl:text-lg lg:text-sm text-xs col-span-full text-gray-500">
      {t("empty")}
    </p>
  );
};

export default EmptyMessage;
