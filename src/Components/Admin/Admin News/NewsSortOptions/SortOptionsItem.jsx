const SortOptionsItem = ({ active, children, onClick, ...props }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-[#74B22D] text-white" : "text-[#222222]"
      }  xl:py-2.5 py-1  xl:px-6  px-3 xl:text-base lg:text-sm text-xs cursor-pointer rounded-full border border-[#DDDDDD]`}
    >
      {children}
    </div>
  );
};

export default SortOptionsItem;
