const AboutItem = ({ title, desc }) => {
  return (
    <>
      <h3 className="xl:text-3xl lg:text-2xl text-xl font-bold mb-6">
        {title || "Пусто"}
      </h3>
      <p className="xl:text-lg lg:text-sm text-xs mb-14">
        {desc || "описание пусто"}
      </p>
    </>
  );
};

export default AboutItem;
