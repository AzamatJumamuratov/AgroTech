import PageTitle from "../Components/Common/PageTitle";
import { useTranslation } from "react-i18next";

const AgroSchool = () => {
  const { t } = useTranslation();
  return (
    <main>
      <div className="wrapper">
        <PageTitle title={t("agroschool_title")} desc={t("agroschool_desc")} />
        <h3 className="xl:text-2xl lg:text-xl text-lg font-bold mb-8">
          {t("agroschool_directions")}
        </h3>
        <ul className="list-disc xl:text-lg lg:text-sm text-xs pl-8">
          <li>{t("agroschool_l1")}</li>
          <li>{t("agroschool_l2")}</li>
          <li>{t("agroschool_l3")}</li>
          <li>{t("agroschool_l4")}</li>
          <li>{t("agroschool_l5")}</li>
        </ul>
      </div>
    </main>
  );
};

export default AgroSchool;
