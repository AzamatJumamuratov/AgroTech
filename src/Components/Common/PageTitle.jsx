const PageTitle = ({ title, desc }) => {
  return (
    <>
      <h2 className="xl:text-4xl lg:text-3xl text-2xl xl:mb-6 lg:mb-5 mb-4 font-bold text-primary-dark xl:mt-14 lg:mt-9 mt-6">
        {title}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-light/30 rounded-full xl:mb-9 lg:mb-6 mb-4" />
      {desc && (
        <p className="xl:text-lg lg:text-sm text-xs text-gray-500 leading-relaxed lg:mb-9 xl:mb-6 mb-4 max-w-2xl">
          {desc}
        </p>
      )}
    </>
  );
};

export default PageTitle;
