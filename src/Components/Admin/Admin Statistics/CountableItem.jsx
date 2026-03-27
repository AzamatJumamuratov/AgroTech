const CountableItem = ({ count, content }) => {
  return (
    <div className="flex flex-col 2xl:gap-6 xl:gap-4 gap-2 items-center justify-center 2xl:pb-6 xl:pb-4 lg:pb-3 pb-2 2xl:pt-14 xl:pt-10 lg:pt-6 pt-4 rounded-2xl shadow-[0px_2px_10px_0] shadow-black/10">
      <span className="2xl:text-7xl xl:text-5xl lg:text-4xl text-2xl text-primaryGreen font-bold">
        {count}
      </span>
      <span className="2xl:text-2xl xl:text-xl lg:text-sm text-xs text-[#222222]">
        {content}
      </span>
    </div>
  );
};

export default CountableItem;
