import { Link } from "react-router";
import bg from "../../assets/images/bg.png";
import { useTranslation } from "react-i18next";

const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative xl:h-[720px] lg:h-[512px] sm:h-[384px] min-[350px]:h-340px h-[420px]">
      <div className="absolute -z-10 w-full h-full bg-linear-to-r from-bg-start to-bg-end">
        <img
          src={bg}
          alt="bg-main"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-[64%]"
        />
      </div>
      <div className="wrapper">
        <div className="text-white   xl:max-w-[608px] lg:max-w-[512px] md:max-w-[512px] max-sm:w-full xl:pt-32 lg:pt-20 pt-10">
          <h1 className="2xl:text-[56px] xl:text-5xl lg:text-4xl text-3xl mb-6 font-bold">
            {t("banner_title")}
          </h1>
          <p className="mb-9 xl:mr-32 lg:mr-[84px] 2xl:text-2xl xl:text-xl lg:text-lg text-base mr-10">
            {t("banner_desc")}
          </p>
          <Link
            to={"/contacts"}
            className="bg-[#F39C12] xl:px-6 lg:px-4 px-3 py-3 rounded-full xl:text-lg lg:text-xs text-[10px]"
          >
            {t("banner_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
