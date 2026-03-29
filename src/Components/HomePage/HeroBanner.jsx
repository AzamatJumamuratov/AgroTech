import { Link } from "react-router";
import bg from "../../assets/images/bg.png";
import { useTranslation } from "react-i18next";

const HeroBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Фон с gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bg}
          alt="bg-main"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
      </div>

      <div className="wrapper py-20">
        <div className="text-white xl:max-w-[640px] lg:max-w-[540px] md:max-w-[520px] max-sm:w-full animate-fadeInUp">
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl mb-6 font-bold leading-tight drop-shadow-lg">
            {t("banner_title")}
          </h1>
          <p className="mb-10 2xl:text-xl xl:text-lg lg:text-base text-base leading-relaxed text-white/90 max-w-lg">
            {t("banner_desc")}
          </p>
          <Link
            to={"/contacts"}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover xl:px-8 lg:px-6 px-5 py-3.5 rounded-full xl:text-lg lg:text-sm text-sm font-semibold text-white shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:-translate-y-0.5"
          >
            {t("banner_btn")}
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
